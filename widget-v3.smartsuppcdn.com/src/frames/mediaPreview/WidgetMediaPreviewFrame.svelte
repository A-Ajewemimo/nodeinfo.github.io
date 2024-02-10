<script lang="ts">
import { fly } from 'svelte/transition'

import Frame from '@/components/Frame.svelte'
import { testIds } from '@/constants'
import { shouldRenderMediaPreview } from '@/modules/app/mediaPreview'
import { getIframeDefaultStyles, overlayFrameStyle } from '@/modules/frames'

import WidgetImagePreview from './WidgetMediaPreview.svelte'
</script>

{#if $shouldRenderMediaPreview}
	<div
		use:overlayFrameStyle
		style:transition="max-height 250ms ease-in-out, width 250ms ease-in-out"
		in:fly={{ y: 20, delay: 100, duration: 250 }}
		out:fly={{ y: 10, duration: 250 }}
		data-testid={testIds.widgetImagePreview}
	>
		<Frame
			component={WidgetImagePreview}
			id={testIds.widgetImagePreview}
			title="Smartsupp widget image preview"
			frameStyle={getIframeDefaultStyles((el) => {
				el.style.position = 'fixed'
			})}
		/>
	</div>
{/if}
