import { widgetOptions } from '@/modules/options'

import { getFromCrossDomainStorage, setToCrossDomainStorage } from './crossDomainStorage'
import { getFromStorage, setToStorage } from './storage'
import { StorageItem } from './types'

const isCrossDomainEnabled = (): boolean => {
	return !!widgetOptions.getOptions().crossDomainEnabled
}

export const getVisitorIdFromStorage = async (): Promise<string | null> => {
	if (isCrossDomainEnabled()) {
		return getFromCrossDomainStorage(StorageItem.VisitorId)
	}
	return getFromStorage(StorageItem.VisitorId) || null
}

export const setVisitorIdToStorage = async (visitorId: string): Promise<void> => {
	if (isCrossDomainEnabled()) {
		return setToCrossDomainStorage(StorageItem.VisitorId, String(visitorId))
	}
	return setToStorage({ name: StorageItem.VisitorId, value: String(visitorId) })
}
