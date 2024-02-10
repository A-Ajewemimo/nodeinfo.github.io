import type { CrossDomainStorage } from 'cross-domain-storage/guest'
import createGuest from 'cross-domain-storage/guest'

import { widgetOptions } from '@/modules/options'
import { debugWidget } from '@/utils/debug'

const getStorageUrl = (): string => {
	const { storageUrl, key } = widgetOptions.getOptions()
	if (!storageUrl) throw new Error('Storage url is missing')

	return `${storageUrl.replace(/{key}/g, key)}/index.html`
}

const createCrossDomainStorageProvider = () => {
	let storage: CrossDomainStorage | null = null

	const getStorage = (): CrossDomainStorage => {
		if (storage) return storage

		try {
			const storageUrl = getStorageUrl()
			storage = createGuest(storageUrl)
			debugWidget('cross domain storage created', storageUrl)
			return storage
		} catch {
			throw new Error('Cross domain storage create failed')
		}
	}

	const closeStorage = () => {
		if (storage) {
			storage.close()
			debugWidget('cross domain storage closed')
		}
	}

	return Object.freeze({ getStorage, closeStorage })
}

const crossDomainStorageProvider = createCrossDomainStorageProvider()

export const getFromCrossDomainStorage = (key: string): Promise<string> => {
	const storage = crossDomainStorageProvider.getStorage()
	return new Promise((resolve, reject) => {
		storage.get(key, (err, value) => {
			if (err) return reject(err)

			debugWidget('get from cross domain storage', key, value)
			return resolve(value)
		})
	})
}

export const setToCrossDomainStorage = (key: string, value: string): Promise<void> => {
	const storage = crossDomainStorageProvider.getStorage()
	return new Promise((resolve, reject) => {
		storage.set(key, value, (err) => {
			if (err) return reject(err)

			debugWidget('set to cross domain storage', key, value)
			return resolve()
		})
	})
}

export const closeCrossDomainStorage = () => {
	crossDomainStorageProvider.closeStorage()
}
