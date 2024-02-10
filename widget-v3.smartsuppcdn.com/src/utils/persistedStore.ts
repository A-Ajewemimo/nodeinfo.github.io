import { writable } from 'svelte/store'

import { getFromStorage, setToStorage, StorageItem } from '@/modules/storage'

export const createPersistedStore = <TValue>(
	name: StorageItem,
	initialValue: TValue,
	setter?: (value: string) => TValue,
) => {
	const { set, subscribe } = writable(initialValue, (set) => {
		const storedValue = getFromStorage(name)
		if (storedValue) {
			set(setter ? setter(storedValue) : (storedValue as TValue))
		}
	})

	const updateStorage = (value: TValue) => {
		setToStorage({ name, value: String(value) })
	}

	return {
		set: (value: TValue) => {
			updateStorage(value)
			set(value)
		},
		subscribe,
	}
}
