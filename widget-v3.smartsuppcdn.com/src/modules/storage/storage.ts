import { widgetOptions } from '../options'
import { getCookie, setCookie } from './cookies'
import { getLocalStorageData, removeFromLocalStorage, updateLocalStorageValue } from './localStorage'
import { type SetToStorageParams, StorageItem } from './types'

export const getFromStorage = (name: StorageItem): string | undefined => {
	let data = ''
	if (name === StorageItem.VisitorId && widgetOptions.getOptions().cookieDomain) {
		data = getCookie(name)
	}
	return data || (getLocalStorageData()[name] as string | undefined)
}

export const setToStorage = ({ name, value }: SetToStorageParams) => {
	if (name === StorageItem.VisitorId && widgetOptions.getOptions().cookieDomain) {
		setCookie({ name, value })
	}
	updateLocalStorageValue(name, value)
}

export const removeFromStorage = (name: StorageItem) => {
	removeFromLocalStorage(name)
}
