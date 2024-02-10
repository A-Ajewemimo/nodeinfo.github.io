<script lang="ts">
import { onMount } from 'svelte'

import { testIds } from '@/constants'
import { buttonFrameGreetingWidth } from '@/modules/frames'
import { t } from '@/modules/translations'

import WidgetButtonGreetingBubble from './WidgetButtonGreetingBubble.svelte'

let buttonRef: HTMLDivElement

onMount(() => {
	// Set correct width of widget button frame => depends on text of button
	const buttonWidth = Math.ceil(buttonRef.getBoundingClientRect().width)
	buttonFrameGreetingWidth.set(buttonWidth)
})
</script>

<div bind:this={buttonRef} class="flex">
	<div class="flex-center whitespace-nowrap pl-4 pr-1" data-testid={testIds.widgetButtonText}>
		{$t('button.greeting')}
	</div>
	<WidgetButtonGreetingBubble />
</div>
