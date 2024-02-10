import { derived, get, writable } from 'svelte/store'

import { isMessengerFrameOpen, openMessengerFrame } from '@/modules/app'
import { shouldShowAuthForm } from '@/modules/auth'
import { readChat } from '@/modules/chat'
import { DrawerId, openDrawer } from '@/modules/drawers'
import { lastContactMessage, lastMessageInProcess, messages, sortedMessages } from '@/modules/messages'
import { getFromStorage, StorageItem } from '@/modules/storage'
import { visitorClientProvider } from '@/modules/websocketClient'
import { printError } from '@/utils/console'
import { debounce } from '@/utils/debounce'

import { files } from '../fileUpload/'
import { fileUploadInProgress, uploadFiles } from '../fileUpload/store'
import { warningMessage } from '../flashMessages'
import { cardsInProgress } from '../linkPreview'
import { t } from '../translations'
import { isMessageSpamming, replaceEmoticonsByEmojis } from './utils'

const inputValue = writable<string | undefined>()
export const isVisitorTyping = writable<boolean>(false)
export const textareaHeight = writable<number | undefined>()

const SPAMMING_DEBOUNCE_TIME = 200

export const showSendSuccess = writable<boolean>(false)

export const messengerInputValue = derived([inputValue], ([$inputValue]): string => {
	if (typeof $inputValue === 'undefined') {
		return getFromStorage(StorageItem.Message) ?? ''
	}
	return $inputValue
})

export const isMessengerInputEmpty = derived([messengerInputValue], ([$messengerInputValue]): boolean => {
	return $messengerInputValue.trim().length === 0
})

export const setMessengerInputValue = (value: string) => {
	inputValue.set(replaceEmoticonsByEmojis(value))
}

export const insertTextIntoMessengerInput = (text: string, cursorPosition: number) => {
	const currentInputValue = get(messengerInputValue) ?? ''
	const part1 = currentInputValue.slice(0, cursorPosition)
	const part2 = currentInputValue.slice(cursorPosition)
	const newInputValue = `${part1}${text}${part2}`
	inputValue.set(newInputValue)
}

export const startVisitorTyping = () => {
	if (get(isVisitorTyping)) return
	const client = visitorClientProvider.getClient()
	client.chatTyping(true)
	isVisitorTyping.set(true)
}

export const stopVisitorTyping = () => {
	if (!get(isVisitorTyping)) return
	const client = visitorClientProvider.getClient()
	client.chatTyping(false)
	isVisitorTyping.set(false)
}

export const sendMessage = async (attachmentTokens: string[] = []) => {
	if (get(isMessengerInputEmpty) && attachmentTokens.length === 0) return
	const text = replaceEmoticonsByEmojis(get(messengerInputValue), true).trim()

	await messages.sendMessage(text, attachmentTokens)
	setMessengerInputValue('')
	stopVisitorTyping()
	if (attachmentTokens.length > 0) {
		files.clear()
		fileUploadInProgress.set(false)
	}
	showSendSuccess.set(true)
	readChat()
}

export const sendMessageWithAuthCheck = debounce(async () => {
	const hasAttachments = files.count() > 0
	if (get(isMessengerInputEmpty) && !hasAttachments) return
	if (!get(isMessengerFrameOpen) && shouldShowAuthForm()) {
		openMessengerFrame()
	}
	if (isMessageDuplicate() && !hasAttachments) {
		warningMessage(get(t)('warningBar.sameMessageTwice'))
		return
	}
	if (shouldShowAuthForm()) {
		openDrawer(DrawerId.AuthForm)
		return
	}
	if (isMessageSpamming(get(sortedMessages))) {
		// TODO need to add correct warning message
		warningMessage(get(t)('warningBar.spamProtection'))
		return
	}
	if (get(fileUploadInProgress)) {
		printError(get(t)('chat.fileUpload.error.stillUploading'))
		return
	}
	if (get(cardsInProgress)) {
		printError(get(t)('card.sendingInProgress'))
		return
	}

	let attachmentTokens: string[] = []
	if (hasAttachments) {
		fileUploadInProgress.set(true)
		attachmentTokens = await uploadFiles()
	}
	await sendMessage(attachmentTokens)
}, SPAMMING_DEBOUNCE_TIME)

export const isMessageDuplicate = () => {
	const lastMessage = get(lastContactMessage)
	const lastPocessingMessage = get(lastMessageInProcess)
	const typedMessage = get(messengerInputValue)
	return (
		(lastMessage && typedMessage === lastMessage.content.text) ||
		(lastPocessingMessage && typedMessage === lastPocessingMessage)
	)
}
