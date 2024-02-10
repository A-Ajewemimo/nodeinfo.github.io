<script lang="ts">
import { fade, fly } from 'svelte/transition'

import Frame from '@/components/Frame.svelte'
import { testIds } from '@/constants'
import { shouldRenderButtonFrame } from '@/modules/app'
import {
	BUTTON_FRAME_HEIGHT,
	buttonFrameStyle,
	buttonFrameWidth,
	getIframeDefaultStyles,
	isWidgetButtonBubble,
} from '@/modules/frames'
import { t } from '@/modules/translations'

import WidgetButton from './WidgetButton.svelte'

let containerRef: HTMLDivElement

const resizeContainer = (width: number) => {
	containerRef.style.width = `${width}px`
}

$: containerRef && resizeContainer($buttonFrameWidth)
</script>

{#if $shouldRenderButtonFrame}
	<div
		bind:this={containerRef}
		use:buttonFrameStyle
		style="border-radius: 9999px; box-shadow: rgb(0 0 0 / 6%) 0px 1px 6px 0px, rgb(0 0 0 / 12%) 0px 2px 32px 0px;"
		style:height={BUTTON_FRAME_HEIGHT}
		in:fly={{ y: 20, delay: 150, duration: 300 }}
		out:fade={{ duration: 250 }}
		data-testid={testIds.widgetButtonFrame}
	>
		{#key $isWidgetButtonBubble || $t}
			<Frame
				component={WidgetButton}
				id={testIds.widgetButtonFrame}
				title="Smartsupp widget button"
				frameStyle={getIframeDefaultStyles()}
			/>
		{/key}
	</div>
{/if}
