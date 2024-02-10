import type { Attachment, CardAction } from '@smartsupp/smartsupp-message'
import { get } from 'svelte/store'

import { fileUploadConfig } from '../fileUpload'
import { widgetOptions } from '../options'
import { getLocalStorageData, setToLocalStorage } from '../storage'

export type StoredCards = { [key: string]: { expiration: number; card: Attachment.Card } }

export const getCardsFromStorage = (): StoredCards => {
	const data = getLocalStorageData('cards')
	return data as StoredCards
}

export const setCardsToStorage = (Cards: StoredCards) => {
	setToLocalStorage({ ...Cards }, 'cards')
}

export const processLinks = async (links: string[]): Promise<Attachment.Card[] | null> => {
	const headers = new Headers()
	const { widgetApiUrl } = widgetOptions.getOptions()
	headers.append('Content-Type', 'application/json')

	const body: string = JSON.stringify({
		links: links,
	})
	try {
		const response = await fetch(`${widgetApiUrl}/links/preview`, {
			method: 'POST',
			headers,
			body,
		})
		if (response.ok && response.json) {
			const attachments = (await response.json()) as Attachment.Card[]
			return attachments
		} else {
			return null
		}
	} catch {
		return null
	}
}

export const getCardUrl = (actions: CardAction[]): string => {
	const openUrlAction = actions.find((action) => action.type === 'open_url')
	return openUrlAction?.value || ''
}

export const processFileAndEmptyCards = (cards: Attachment.Card[]): Attachment.Card[] => {
	const filteredCards = cards.filter((card) => card.title && card.image && !hasFileExtension(getCardUrl(card.actions)))
	if (filteredCards.length && cards.length > 1) {
		return cards
	} else {
		return filteredCards.length === 1 ? filteredCards : []
	}
}

export const filterOldLinks = (cards: StoredCards) => {
	const time = new Date().getTime()
	const keys = Object.keys(cards)
	keys.forEach((key) => {
		if (!cards[key].expiration || (cards[key].expiration && cards[key].expiration < time)) {
			delete cards[key]
		}
	})
	return cards
}

export const hasFileExtension = (link: string) => {
	const { acceptedFileExtensions } = get(fileUploadConfig)
	const extension = link.match(/(\.)([^.]{3,4})$/m)
	return extension && extension[2] && acceptedFileExtensions.includes(extension[2])
}
