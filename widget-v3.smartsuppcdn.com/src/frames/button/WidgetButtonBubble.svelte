<script lang="ts">
import { scale } from 'svelte/transition'

import MessageIcon from '@/components/icons/MessageIcon.svelte'
import OnMount from '@/components/OnMount.svelte'
</script>

<OnMount>
	<div
		transition:scale={{ delay: 200, duration: 300, start: 0.6, opacity: 0.8 }}
		class="transform transition-transform duration-300 group-hover:scale-115"
	>
		<MessageIcon size={24} />
	</div>
</OnMount>
