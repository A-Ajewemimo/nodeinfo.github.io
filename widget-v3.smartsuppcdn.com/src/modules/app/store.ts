import { writable } from 'svelte/store'

import { playMessageSound } from '@/modules/messages'
import { widgetOptions } from '@/modules/options'
import { getFromStorage, setToStorage, StorageItem } from '@/modules/storage'
import { debounce } from '@/utils/debounce'
import { getHostWindow } from '@/utils/window'

import { DOCUMENT_VISIBILITY_DELAY } from './constants'
import { isDocumentVisible } from './utils'

// Widget is connected to server and initialized
export const isWidgetInitialized = writable<boolean>(false)

export const isWidgetOpenFromAPI = writable<boolean>(false)

export const optionsOpened = writable(false)
export const openOptions = () => optionsOpened.set(true)
export const closeOptions = () => optionsOpened.set(false)

export const soundsEnabled = writable(true)
void widgetOptions.awaitOptions().then((options) => {
	const storageValue = getFromStorage(StorageItem.SoundsEnabled)
	if (storageValue) {
		soundsEnabled.set(storageValue === 'true')
	} else if (typeof options.enableSounds === 'boolean') {
		soundsEnabled.set(options.enableSounds)
	}
})
export const updateSoundsEnabled = (enabled: boolean) => {
	soundsEnabled.set(enabled)
	setToStorage({
		name: StorageItem.SoundsEnabled,
		value: enabled.toString(),
	})
	if (enabled) void playMessageSound()
}

export const isWidgetVisible = writable(isDocumentVisible())
const updateVisibilityDebounced = debounce(() => isWidgetVisible.set(isDocumentVisible()), DOCUMENT_VISIBILITY_DELAY)
getHostWindow().addEventListener('visibilitychange', () => {
	// Debounce also fixes the Firefox issue where first comes the event and second comes a change of the state in the document
	updateVisibilityDebounced()
})

// Use when you have to manually scroll to bottom in content list
export const scrollContentListCounter = writable(0)
export const forceContentListScroll = () => scrollContentListCounter.update((value) => value + 1)
