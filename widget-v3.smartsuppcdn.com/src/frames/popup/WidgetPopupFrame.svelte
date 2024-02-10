<script lang="ts">
import { fly } from 'svelte/transition'

import Frame from '@/components/Frame.svelte'
import { testIds } from '@/constants'
import { shouldRenderPopupFrame } from '@/modules/app'
import { getIframeDefaultStyles, hasPopupFrameHover, popupFrameHeight, popupFrameStyle } from '@/modules/frames'

import WidgetPopupLazy from './WidgetPopupLazy.svelte'

let containerRef: HTMLDivElement

const resizeContainer = (height: number) => {
	containerRef.style.maxHeight = `${height}px`
}

$: containerRef && resizeContainer($popupFrameHeight)

let boxShadowAlpha: number
$: boxShadowAlpha = $hasPopupFrameHover ? 0.28 : 0.16
</script>

{#if $shouldRenderPopupFrame}
	<div
		bind:this={containerRef}
		use:popupFrameStyle
		style="height: calc(100% - 40px); border-radius: 12px; transition: box-shadow 0.2s ease-in-out; transition: max-height 250ms ease-in-out"
		style:width={300}
		style:box-shadow={`rgba(0, 0, 0, ${boxShadowAlpha}) 0px 3px 16px`}
		in:fly={{ y: 20, delay: 300, duration: 400 }}
		out:fly={{ y: 10, duration: 400 }}
		data-testid={testIds.widgetPopupFrame}
	>
		<Frame
			component={WidgetPopupLazy}
			id={testIds.widgetPopupFrame}
			title="Smartsupp widget popup"
			frameStyle={getIframeDefaultStyles()}
		/>
	</div>
{/if}
