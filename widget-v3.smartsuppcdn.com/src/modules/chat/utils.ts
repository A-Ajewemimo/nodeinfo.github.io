import { ChatStatus } from '@smartsupp/websocket-client-visitor'
import { get } from 'svelte/store'

import { closeMessengerFrame, isMessengerFrameOpen } from '@/modules/app'
import { initChatRating, isChatRatingEnabled, openChatRatingDrawer } from '@/modules/chatRating'
import { closeDrawer } from '@/modules/drawers'
import { hasUnreadMessages, messages } from '@/modules/messages'
import { visitorClientProvider } from '@/modules/websocketClient'
import { getHostDocument } from '@/utils/window'

import { ChatCloseStatus, chatCloseStatus, chatStatus, lastReadAt, setChatClosed } from './store'

export const readChat = () => {
	lastReadAt.set(new Date().toISOString())
	visitorClientProvider.getClient().chatRead()
}

export const readChatIfPossible = () => {
	const isDocumentVisible = getHostDocument().visibilityState === 'visible'
	if (!get(hasUnreadMessages) || !get(isMessengerFrameOpen) || !isDocumentVisible) return

	readChat()
}

export const closeChatByVisitor = async () => {
	setChatClosed(true, { byVisitor: true })
	visitorClientProvider.getClient().chatClose()

	if (isChatRatingEnabled()) {
		const result = await initChatRating()
		if (!result) return
		await messages.addMessage(result.message)
		openChatRatingDrawer(result.message.id)
	} else {
		closeMessengerFrame()
		closeDrawer()
	}
}

export const closeChatByAgent = async () => {
	const isChatServed = get(chatStatus) === ChatStatus.Served
	const isChatClosed = get(chatCloseStatus) !== ChatCloseStatus.Open
	if (!isChatRatingEnabled() || !isChatServed || isChatClosed) return

	const result = await initChatRating()
	if (!result) return
	await messages.addMessage(result.message)
}
