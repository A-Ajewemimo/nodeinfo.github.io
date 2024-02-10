import { type Message, MessageSubType } from '@smartsupp/smartsupp-message'
import type { Rating } from '@smartsupp/websocket-client-visitor'
import { derived, get, writable } from 'svelte/store'

import {
	isMessageNotifiable,
	isMessengerFrameOpen,
	isWidgetVisible,
	openPopupFrame,
	openTypingFrame,
	shouldShowWidget,
	showWidgetByAPI,
	soundsEnabled,
} from '@/modules/app'
import { accountStatus, lastReadAt } from '@/modules/chat'
import { type ChatRating, ratingMessageId } from '@/modules/chatRating'
import { eventEmitter } from '@/modules/events'
import { chatbotButtonInteractionGA, offlineMessageSentGaLogger } from '@/modules/googleAnalytics'
import { lastItemOfArray } from '@/utils/arrays'
import { normalize } from '@/utils/normalize'

import { uploadFile } from '../fileUpload/utils'
import { hiddenReplies } from './botRepliesStore'
import type { MessageDictionary, MessageGroup, QuickReply } from './types'
import {
	compareMessagesByDate,
	groupMessages,
	isMessageReadable,
	playMessageSoundThrottled,
	processMessage,
	processMessages,
	sendWebSocketMessage,
} from './utils'

const createMessageStore = () => {
	const messages = writable<MessageDictionary>({})
	const { subscribe, update, set } = messages

	const setMessages = async (messages: Message[]) => {
		set(normalize('id', await processMessages(messages)))
	}

	const addMessage = async (message: Message) => {
		const processedMessage = await processMessage(message)
		update((state) => ({ ...state, [message.id]: processedMessage }))
		void handleMessageNotification(processedMessage)
	}

	const replaceMessage = async (message: Message) => {
		const processedMessage = await processMessage(message, true)
		update((state) => ({ ...state, [message.id]: processedMessage }))
	}

	const updateMessageRating = (messageId: Message['id'], rating: Rating) => {
		update((state) => {
			const message = state[messageId]
			if (!message || message.content.type !== 'rate_form') return { ...state }

			const updatedMessage = {
				...message,
				content: {
					...message.content,
					data: { value: rating.value, text: rating.text ?? undefined },
				},
			} as Message

			return { ...state, [messageId]: updatedMessage }
		})
	}

	const sendMessage = async (text: string, attachmentTokens: string[]) => {
		lastMessageInProcess.set(text)
		const message = await sendWebSocketMessage({ text })
		if (message) {
			lastMessageInProcess.set(null)
			await replaceMessage(message)
			eventEmitter.emit('messageSent', message)
			offlineMessageSentGaLogger(get(accountStatus))
		}
		await Promise.all(attachmentTokens.map((token) => uploadFile(token)))
	}

	const sendBotReply = async (replyTo: string, text: string, payload: QuickReply['payload']) => {
		const message = await sendWebSocketMessage({ text, quickReply: { replyTo, payload } })
		if (!payload.isGoBackButton) chatbotButtonInteractionGA(text)
		message && (await replaceMessage(message))
	}

	return {
		subscribe,
		setMessages,
		addMessage,
		replaceMessage,
		updateMessageRating,
		sendMessage,
		sendBotReply,
	}
}

export const messages = createMessageStore()

export const showMessageInPopupFrame = (message: Message) => {
	if (!get(shouldShowWidget)) showWidgetByAPI()
	openTypingFrame()
	setTimeout(() => {
		void messages.addMessage(message)
		openPopupFrame()
	}, 1600)
}

export const handleMessageNotification = (incomingMessage: Message) => {
	if (
		!!incomingMessage &&
		get(soundsEnabled) &&
		get(shouldShowWidget) &&
		!(get(isWidgetVisible) && get(isMessengerFrameOpen)) &&
		isMessageNotifiable(incomingMessage)
	) {
		playMessageSoundThrottled()
	}
}

export const popupMessage = derived([messages], ([$messages]): Message | null => {
	const allowedMessages = Object.values($messages).filter(isMessageReadable)
	if (!allowedMessages) return null

	const sortedMessages = allowedMessages.sort(
		(a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
	)
	return lastItemOfArray(sortedMessages)
})

export const unreadMessages = derived([messages, lastReadAt], ([$messages, $lastReadAt]): Message[] => {
	const readableMessages = Object.values($messages).filter(isMessageReadable)
	if (!$lastReadAt) return readableMessages

	return readableMessages.filter((m) => new Date(m.createdAt) > new Date($lastReadAt))
})

export const lastUnreadMessage = derived([unreadMessages], ([$unreadMessages]): Message | null => {
	return lastItemOfArray($unreadMessages)
})

export const unreadMessagesCount = derived([unreadMessages], ([$unreadMessages]): number => $unreadMessages.length)

export const hasUnreadMessages = derived(
	[unreadMessagesCount],
	([$unreadMessagesCount]): boolean => $unreadMessagesCount > 0,
)

export const sortedMessages = derived([messages], ([$messages]): Message[] => {
	return Object.values($messages).sort(compareMessagesByDate)
})

export const messageGroups = derived([sortedMessages, hiddenReplies], ([$messages, $hiddenReplies]): MessageGroup[] => {
	return groupMessages($messages, $hiddenReplies)
})

export const lastMessageId = derived([sortedMessages], ([$sortedMessages]): string | null => {
	const lastMessage = lastItemOfArray($sortedMessages)
	return lastMessage?.id ?? null
})

export const isMessengerInputDisabled = derived([messages], ([$messages]): boolean => {
	const messagesWithDisableInput = Object.values($messages).filter(
		(m) => typeof m.widgetOptions?.disableInput === 'boolean',
	)
	const lastMessage = lastItemOfArray(messagesWithDisableInput)
	return lastMessage?.widgetOptions?.disableInput ?? false
})

export const hasContactOrAgentMessage = derived([messages], ([$messages]): boolean => {
	return Object.values($messages).filter((m) => m.subType === 'contact' || m.subType === 'agent').length > 0
})

export const hasContactMessage = derived([messages], ([$messages]): boolean => {
	return Object.values($messages).filter((m) => m.subType === MessageSubType.Contact).length > 0
})

export const chatRating = derived([messages, ratingMessageId], ([$messages, $messageId]): ChatRating | null => {
	if (!$messageId) return null

	const message = $messages[$messageId] ?? null
	if (!message) return null

	if (message.content.type !== 'rate_form') return null

	return {
		messageId: message.id,
		value: message.content.data?.value,
		text: message.content.data?.text,
	}
})

export const lastContactMessage = derived([sortedMessages], ([$sortedMessages]): Message | null => {
	const lastMessage = $sortedMessages
		.slice()
		.reverse()
		.find((message) => message.subType === MessageSubType.Contact)
	return lastMessage || null
})

export const lastMessageInProcess = writable<string | null>(null)
