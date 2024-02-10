import { eventEmitter } from '@/modules/events'
import { widgetOptions } from '@/modules/options'

import { getFromStorage, setToStorage } from './storage'
import { StorageItem } from './types'

eventEmitter.on('analyticsConsentChanged', (hasConsent) => {
	setToStorage({ name: StorageItem.AnalyticsConsent, value: String(hasConsent) })
})

eventEmitter.on('marketingConsentChanged', (hasConsent) => {
	setToStorage({ name: StorageItem.MarketingConsent, value: String(hasConsent) })
})

export const isConsentModeEnabled = (): boolean => {
	return !!widgetOptions.getOptions().consentModeEnabled
}

export const getAnalyticsConsent = (): boolean => {
	const analyticsConsent = getFromStorage(StorageItem.AnalyticsConsent) === 'true'
	return !(isConsentModeEnabled() && !analyticsConsent)
}

export const getMarketingConsent = (): boolean => {
	const marketingConsent = getFromStorage(StorageItem.MarketingConsent) === 'true'
	return !(isConsentModeEnabled() && !marketingConsent)
}
