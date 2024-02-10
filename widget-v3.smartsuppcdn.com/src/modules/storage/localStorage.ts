import { getSmartsuppWidget, widgetOptions } from '@/modules/options'
import { printWarning } from '@/utils/console'
import { getHostWindow } from '@/utils/window'

import { STORAGE_PREFIX } from './constants'

type LocalStorageData = Record<string, string | object>

const getBaseLocalStorageName = (): string => {
	const { key } = widgetOptions.getOptions()
	const prefix =
		getHostWindow().SMARTSUPP_AUTOCREATE !== false
			? STORAGE_PREFIX
			: `${getSmartsuppWidget(window).id}_${STORAGE_PREFIX}`
	return `${prefix}_${key}`
}

const getLocalStorageName = (storageName?: string): string => {
	return `${getBaseLocalStorageName()}${storageName ? `_${storageName}` : ''}`
}

export const getLocalStorageData = (storageName?: string): LocalStorageData => {
	try {
		const item = window.localStorage.getItem(getLocalStorageName(storageName)) ?? '{}'
		return JSON.parse(item) as LocalStorageData
	} catch {
		return {}
	}
}

export const setToLocalStorage = (data: unknown, storageName?: string) => {
	try {
		window.localStorage.setItem(getLocalStorageName(storageName), JSON.stringify(data))
	} catch (error) {
		printWarning('Set to local storage failed', error)
	}
}

export const updateLocalStorageValue = (name: string, value: unknown) => {
	const originalData = getLocalStorageData()
	const updatedData = { ...originalData, [name]: String(value) }
	setToLocalStorage(updatedData)
}

export const removeFromLocalStorage = (name: string) => {
	const data = getLocalStorageData()
	if (!data[name]) return
	delete data[name]
	setToLocalStorage(data)
}
