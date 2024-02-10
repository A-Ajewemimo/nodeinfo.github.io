import type { Rating } from '@smartsupp/websocket-client-visitor'
import { get } from 'svelte/store'

import { DrawerId, openDrawer } from '@/modules/drawers'
import { errorMessage } from '@/modules/flashMessages'
import { messages } from '@/modules/messages'
import { widgetOptions } from '@/modules/options'
import { t } from '@/modules/translations'
import { visitorClientProvider } from '@/modules/websocketClient'
import { printError } from '@/utils/console'

import { ratingMessageId } from './store'
import type { ChatRatingInfo } from './types'

interface RateChatParams {
	messageId: string
	rating: Rating
	onSuccess?: () => void
}

export const isChatRatingEnabled = (): boolean => !!widgetOptions.getOptions().ratingEnabled

export const openChatRatingDrawer = (messageId: string) => {
	ratingMessageId.set(messageId)
	openDrawer(DrawerId.ChatRating)
}

export const initChatRating = async () => {
	try {
		return await visitorClientProvider.getClient().chatRateInit()
	} catch (error) {
		printError('Init chat rating failed.', String(error))
		errorMessage(get(t)('form.submit.error'))
	}
}

export const rateChat = async ({ messageId, rating: { text, value }, onSuccess }: RateChatParams) => {
	const originalMessage = get(messages)[messageId]

	try {
		messages.updateMessageRating(messageId, { value, text })
		await visitorClientProvider.getClient().chatRate({ messageId, value, text: text ?? undefined })
		onSuccess && onSuccess()
	} catch (error) {
		originalMessage && (await messages.replaceMessage(originalMessage))
		printError('Chat rating failed.', String(error))
		errorMessage(get(t)('form.submit.error'))
	}
}

export const getChatRatingImageUrl = (name: ChatRatingInfo['name']): string => {
	const { widgetV3Url } = widgetOptions.getOptions()
	return `${widgetV3Url}/assets/images/rating/${name}.svg`
}
