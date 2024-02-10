<script lang="ts">
import { scale } from 'svelte/transition'

import { testIds } from '@/constants'
import { isWidgetOnline } from '@/modules/chat'
</script>

{#if $isWidgetOnline}
	<div
		transition:scale
		id="widget-online-badge"
		class="absolute left-0 bottom-0 w-2 h-2 p-1.5 bg-green-400 rounded-full border-2 border-white"
		data-testid={testIds.widgetOnlineBadge}
	/>
{/if}
