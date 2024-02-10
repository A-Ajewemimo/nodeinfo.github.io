<script lang="ts">
import { fly } from 'svelte/transition'

import Frame from '@/components/Frame.svelte'
import { testIds } from '@/constants'
import { shouldRenderMessengerFrame } from '@/modules/app'
import { isMobileDevice } from '@/modules/device'
import {
	getIframeDefaultStyles,
	getMessengerFrameDimensions,
	isMessengerFrameExpanded,
	messengerFrameStyle,
	px,
} from '@/modules/frames'
import { isString } from '@/utils/isString'
import { getHostDocument } from '@/utils/window'

import WidgetMessengerLazy from './WidgetMessengerLazy.svelte'

let containerRef: HTMLDivElement | undefined
const MOBILE_STYLE_ID = 'MobileWidgetMessengerOpen'

const resizeContainer = (isMobileDevice: boolean, isMessengerFrameExpanded: boolean) => {
	if (!containerRef) return
	const { width, height } = getMessengerFrameDimensions(isMobileDevice, isMessengerFrameExpanded)
	containerRef.style.maxHeight = isString(height) ? height : px(height)
	containerRef.style.width = isString(width) ? width : px(width)
	containerRef.style.height = isMobileDevice ? '100%' : 'calc(100% - 40px)'
}

$: containerRef && resizeContainer($isMobileDevice, $isMessengerFrameExpanded)

// Prevent scrolling of the page in the background on mobile devices
// Previous solution overflow: hidden on body was not enough for all web pages so thats why this hack
let isHostBodyLocked = false
$: if ($isMobileDevice) {
	if ($shouldRenderMessengerFrame && !isHostBodyLocked) {
		const style = getHostDocument().createElement('style')
		style.textContent = '* {overflow: hidden}'
		style.className = MOBILE_STYLE_ID
		getHostDocument().head.appendChild(style)
		isHostBodyLocked = true
	}

	if (!$shouldRenderMessengerFrame && isHostBodyLocked) {
		const node = getHostDocument().head.getElementsByClassName(MOBILE_STYLE_ID)
		for (let i = 0; i < node.length; i++) {
			getHostDocument().head.removeChild(node[i])
		}
		isHostBodyLocked = false
	}
}
</script>

{#if $shouldRenderMessengerFrame}
	<div
		use:messengerFrameStyle={$isMobileDevice}
		bind:this={containerRef}
		style:transition="max-height 250ms ease-in-out, width 250ms ease-in-out"
		in:fly={{ y: 20, duration: 200 }}
		out:fly={{ y: 10, duration: 150 }}
		data-testid={testIds.widgetMessengerFrame}
	>
		<Frame
			component={WidgetMessengerLazy}
			id={testIds.widgetMessengerFrame}
			title="Smartsupp widget messenger"
			frameStyle={getIframeDefaultStyles()}
		/>
	</div>
{/if}
