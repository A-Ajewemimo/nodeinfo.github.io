import { derived, get, writable } from 'svelte/store'

import { closePopupFrame } from '@/modules/app'
import { readChat } from '@/modules/chat/utils'
import { StorageItem } from '@/modules/storage'
import { createPersistedStore } from '@/utils/persistedStore'

import { isMobileDevice } from '../device'
import { eventEmitter } from '../events'
import { warningMessage } from '../flashMessages'
import { messageOpenedGaLogger } from '../googleAnalytics'
import { isWidgetInitialized } from './store'
import { notifyWidgetOpened } from './utils'
import { shouldShowWidget } from './widgetVisibility'

export const isMessengerFrameOpen = createPersistedStore(
	StorageItem.IsMessengerFrameOpened,
	false,
	(storedValue) => !get(isMobileDevice) && storedValue === 'true',
)

export const openMessengerFrame = () => {
	isMessengerFrameOpen.set(true)
	closePopupFrame()
	messageOpenedGaLogger()
	notifyWidgetOpened()
}

export const closeMessengerFrame = () => {
	eventEmitter.emit('messengerClose', true)
	isMessengerFrameOpen.set(false)
	readChat()
}

export const shouldRenderMessengerFrame = derived(
	[isWidgetInitialized, shouldShowWidget, isMessengerFrameOpen],
	([$isWidgetInitialized, $shouldShowWidget, $isMessengerFrameOpen]) => {
		return $isWidgetInitialized && $shouldShowWidget && $isMessengerFrameOpen
	},
)

function createDragAndDrop() {
	const dragging = writable(false)
	const { subscribe } = dragging

	let timeout: number | null = null
	const handleDragOver = (e: DragEvent, prevent = true) => {
		if (prevent) e.preventDefault()
		if (!get(dragging)) dragging.set(true)
		if (timeout) clearTimeout(timeout)

		timeout = window.setTimeout(() => {
			dragging.set(false)
		}, 200)
	}

	const handleDrop = (e: DragEvent) => {
		e.preventDefault()
		if (timeout) clearTimeout(timeout)
		dragging.set(false)

		const droppedFiles: File[] = e.dataTransfer?.files ? [...e.dataTransfer.files] : []

		if (droppedFiles.length === 0) {
			warningMessage('Dropped item(s) are not processable files')
		}

		return { droppedFiles }
	}

	return { subscribe, handleDragOver, handleDrop }
}

export const dragAndDrop = createDragAndDrop()
