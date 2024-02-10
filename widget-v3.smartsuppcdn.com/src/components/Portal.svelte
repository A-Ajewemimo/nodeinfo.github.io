<script lang="ts">
import { onDestroy, onMount } from 'svelte'

import { getSmartsuppWidget } from '@/modules/options'
import { getHostDocument, getHostWindow } from '@/utils/window'

let ref: HTMLDivElement

const chatId = `${
	getHostWindow().SMARTSUPP_AUTOCREATE !== false ? 'smartsupp' : getSmartsuppWidget(window).id
}-widget-container`

function getHostDocumentBody(): HTMLElement {
	return getHostDocument().body
}

onMount(() => {
	getHostDocumentBody().appendChild(ref)
})

onDestroy(() => {
	getHostDocument().getElementById(chatId)?.remove()
})
</script>

<!-- Portal has to be wrapped in extra element: https://github.com/sveltejs/svelte/issues/3088#issuecomment-641749316  -->
<div>
	<div id={chatId} bind:this={ref}>
		<slot />
	</div>
</div>
