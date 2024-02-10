<script lang="ts">
import { scale } from 'svelte/transition'

import { testIds } from '@/constants'
import { unreadMessagesCount } from '@/modules/messages'

let hasUnreadMessages: boolean
$: hasUnreadMessages = $unreadMessagesCount > 0
</script>

{#if hasUnreadMessages}
	<div
		transition:scale
		id="widget-unread-messages-badge"
		class="absolute right-0 top-0 min-w-5 h-5 flex-center px-1 text-white bg-red-500 text-xs rounded-full shadow"
		data-testid={testIds.widgetUnreadMessagesBadge}
	>
		{$unreadMessagesCount > 99 ? '99+' : $unreadMessagesCount}
	</div>
{/if}
