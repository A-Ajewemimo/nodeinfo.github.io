<script lang="ts">
import { testIds } from '@/constants'
import { openMessengerFrame } from '@/modules/app'
import { isWidgetButtonBubble } from '@/modules/frames'

import WidgetButtonBubble from './WidgetButtonBubble.svelte'
import WidgetButtonGreeting from './WidgetButtonGreeting.svelte'
import WidgetButtonOnlineBadge from './WidgetButtonOnlineBadge.svelte'
import WidgetButtonUnreadMessagesBadge from './WidgetButtonUnreadMessagesBadge.svelte'
</script>

<div id="smartsupp-widget-button" class="h-full w-full relative flex justify-end">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		role="button"
		tabindex={0}
		on:click={openMessengerFrame}
		class="group flex-center w-full bg-primary-gradient bg-primary-gradient-hover text-primary-content rounded-full overflow-hidden cursor-pointer"
		data-testid={testIds.widgetButton}
	>
		{#if $isWidgetButtonBubble}
			<WidgetButtonBubble />
		{:else}
			<WidgetButtonGreeting />
		{/if}
		<WidgetButtonOnlineBadge />
	</div>
	<WidgetButtonUnreadMessagesBadge />
</div>
