import { eventEmitter } from '@/modules/events'

import { getMarketingConsent } from './consents'
import { getFromStorage, removeFromStorage, setToStorage } from './storage'
import { StorageItem } from './types'

export const getVisitsFromStorage = (): number | undefined => {
	const hasMarketingConsent = getMarketingConsent()
	if (!hasMarketingConsent) return undefined
	return getFromStorage(StorageItem.Visits) ? Number(getFromStorage(StorageItem.Visits)) : 0
}

export const setVisitsToStorage = (visits: number): void => {
	const hasMarketingConsent = getMarketingConsent()
	if (hasMarketingConsent) {
		setToStorage({ name: StorageItem.Visits, value: String(visits) })
	}
}

eventEmitter.on('marketingConsentChanged', (hasConsent) => {
	if (!hasConsent) {
		removeFromStorage(StorageItem.Visits)
	}
})
