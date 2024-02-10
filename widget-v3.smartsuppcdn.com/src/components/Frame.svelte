<script lang="ts">
import { onDestroy, onMount, SvelteComponent, tick } from 'svelte'

import { setThemeCssVariables } from '@/modules/theme'
import { type Theme, themeColor } from '@/modules/theme/store'

export let component: typeof SvelteComponent<Record<string, unknown>>
export let frameStyle: string | undefined
export let title: string
export let id: string

const viteDevIdDataAttr = 'data-vite-dev-id'
const isDevelopmentMode = import.meta.env.MODE === 'development'

let frame: HTMLIFrameElement
let frameDocument: Document
let framedComponent: SvelteComponent
let styleObserver: MutationObserver | undefined

$: mountComponent(frameDocument)

// Update frame CSS variables when color is changed
$: frameDocument && setThemeVariables($themeColor)

const mountComponent = (doc: Document) => {
	if (framedComponent) framedComponent.$destroy()
	if (doc && component) {
		framedComponent = new component({ target: doc.body })
	}
}

const setThemeVariables = (theme: Theme) => {
	if (!frameDocument) return
	setThemeCssVariables(frameDocument, theme)
}

const createStyleElement = (content: string) => {
	const styleEl = frameDocument.createElement('style')
	styleEl.textContent = content
	frameDocument.head.appendChild(styleEl)
	return styleEl
}

const adoptMainFrameStyles = () => {
	for (const sheet of window.document.styleSheets) {
		const styleText = [...sheet.cssRules].map((rule) => rule.cssText).join('')
		const styleEl = createStyleElement(styleText)

		// Dev mode: Copy vite dev data attribute of owner style element
		if (isDevelopmentMode) {
			const ownerNode = sheet.ownerNode as HTMLElement | null
			if (ownerNode) {
				const viteDataAttrValue = ownerNode.getAttribute(viteDevIdDataAttr)
				if (viteDataAttrValue) {
					styleEl.setAttribute(viteDevIdDataAttr, viteDataAttrValue)
				}
			}
		}
	}
}

const getNodeViteDevId = (node: Node): string => {
	return (node as HTMLElement).getAttribute(viteDevIdDataAttr) ?? ''
}

const getMatchingStyleElement = (node: Node): HTMLStyleElement | null => {
	const styleElements = frameDocument.head.querySelectorAll('style')
	for (const el of styleElements) {
		if (el.getAttribute(viteDevIdDataAttr) === getNodeViteDevId(node)) return el
	}
	return null
}

const observeStyleChanges = () => {
	const trackStyleMutations: MutationCallback = (mutations) => {
		for (const mutation of mutations) {
			if (mutation.type === 'childList') {
				for (const node of mutation.removedNodes) {
					switch (node.nodeType) {
						case Node.TEXT_NODE: {
							const styleEl = getMatchingStyleElement(mutation.target)
							if (styleEl) styleEl.textContent = ''
							break
						}
					}
				}

				for (const node of mutation.addedNodes) {
					switch (node.nodeType) {
						case Node.ELEMENT_NODE:
							frameDocument.head.appendChild(node.cloneNode(true))
							break
						case Node.TEXT_NODE: {
							const styleEl = getMatchingStyleElement(mutation.target)
							if (styleEl) styleEl.textContent = node.textContent
							break
						}
					}
				}
			}
		}
	}

	styleObserver = new MutationObserver(trackStyleMutations)
	styleObserver.observe(window.document.head, { childList: true, subtree: true })
}

const handleFrameLoad = () => {
	if (!frame.contentDocument) return
	frameDocument = frame.contentDocument
	adoptMainFrameStyles()
	isDevelopmentMode && observeStyleChanges()
}

onMount(async () => {
	await tick()
	if (frame.contentDocument?.readyState === 'complete' && frame.contentDocument.defaultView) {
		handleFrameLoad()
	} else {
		frame.addEventListener('load', handleFrameLoad)
	}
})

onDestroy(() => {
	if (frame) frame.removeEventListener('load', handleFrameLoad)
	if (framedComponent) framedComponent.$destroy()
	if (styleObserver) styleObserver.disconnect()
})
</script>

<iframe bind:this={frame} {id} {title} style={frameStyle} allowfullscreen scrolling="no" />
