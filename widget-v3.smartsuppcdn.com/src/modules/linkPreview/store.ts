import type { Attachment } from '@smartsupp/smartsupp-message'
import { get, writable } from 'svelte/store'

import { DAY_IN_MS } from '@/utils/date'
import { isLinkBlocked, linkifierCards } from '@/utils/linkify'

import {
	filterOldLinks,
	getCardsFromStorage,
	processFileAndEmptyCards,
	processLinks,
	setCardsToStorage,
	type StoredCards,
} from './utils'

let storedCardsInitialized = false

const storedAttachmentsCards = writable<StoredCards>()
export const cardsInProgress = writable(false)
export const processingPopupCards = writable(false)

const updateStoredCards = (links: string[], cards: Attachment.Card[], storedCards: StoredCards) => {
	const data: StoredCards = {}
	const expiration = new Date().getTime() + DAY_IN_MS
	links.forEach((link, index) => (data[link] = { expiration, card: cards[index] }))
	const updatedData = { ...storedCards, ...data }
	storedAttachmentsCards.set(updatedData)
	setCardsToStorage(updatedData)
}

export const getAttachments = async (text: string, processPopupCards = false): Promise<Attachment.Cards | null> => {
	let cardsToAdd: Attachment.Card[] = []
	const cards: Attachment.Cards = {
		type: 'cards',
		layout: 'carousel',
		items: [],
	}
	if (!storedCardsInitialized) {
		storedAttachmentsCards.set(getCardsFromStorage())
		storedCardsInitialized = true
	}
	const links = linkifierCards.match(text)
	if (!links) return null
	const storedCards = filterOldLinks(get(storedAttachmentsCards))
	const linksUrl: string[] = []
	links.forEach((link) => {
		if (isLinkBlocked(text, link)) {
			return
		} else if (storedCards[link.url]) {
			cardsToAdd.push(storedCards[link.url].card)
		} else {
			linksUrl.push(link.url)
		}
	})
	if (linksUrl.length > 0) {
		cardsInProgress.set(true)
		processPopupCards && processingPopupCards.set(true)
		const attachmentCards = await processLinks(linksUrl)
		if (attachmentCards) {
			updateStoredCards(linksUrl, attachmentCards, storedCards)
			cardsToAdd = [...cardsToAdd, ...attachmentCards]
		}
	}
	cards.items = processFileAndEmptyCards(cardsToAdd)
	cardsInProgress.set(false)
	processingPopupCards.set(false)
	return cards.items.length > 0 ? cards : null
}
