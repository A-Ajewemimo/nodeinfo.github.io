<script lang="ts">
import { onMount } from 'svelte'

import Portal from '@/components/Portal.svelte'
import ButtonFrame from '@/frames/button/WidgetButtonFrame.svelte'
import MessengerFrame from '@/frames/messenger/WidgetMessengerFrame.svelte'
import PopupFrame from '@/frames/popup/WidgetPopupFrame.svelte'
import TypingFrame from '@/frames/typing/WidgetTypingFrame.svelte'
import { isMessengerFrameOpen, openPopupFrame, useWatchDocumentVisibility } from '@/modules/app'
import { lastUnreadMessage } from '@/modules/messages'
import { initTranslations } from '@/modules/translations'
import { visitorClientProvider } from '@/modules/websocketClient'
import { getHostWindow } from '@/utils/window'

import MediaPreviewFrame from './frames/mediaPreview/WidgetMediaPreviewFrame.svelte'

onMount(() => {
	const initWidget = async () => {
		await initTranslations()
		await visitorClientProvider.initClient()
	}

	void initWidget()
})

// Handles opening popup frame in case there is an unread message after reload
$: if ($lastUnreadMessage && !$isMessengerFrameOpen) openPopupFrame()

useWatchDocumentVisibility(getHostWindow())
</script>

<Portal>
	<TypingFrame />
	<PopupFrame />
	<ButtonFrame />
	<MessengerFrame />
	<MediaPreviewFrame />
</Portal>
