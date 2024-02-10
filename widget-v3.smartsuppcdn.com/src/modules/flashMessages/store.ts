import { derived, get, writable } from 'svelte/store'

import type { FlashMessage, FlashMessageDictionary } from './types'

const createFlashMessagesStore = () => {
	const flashMessages = writable<FlashMessageDictionary>({})
	const { subscribe, update } = flashMessages

	const add = (flashMessage: FlashMessage) => {
		update((state) => ({ ...state, [flashMessage.id]: flashMessage }))
	}

	const remove = (id: FlashMessage['id']) => {
		update((state) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { [id]: _, ...rest } = state
			return rest
		})
	}

	const find = (id: string): FlashMessage | null => {
		return get(flashMessages)[id] || null
	}

	return {
		subscribe,
		add,
		remove,
		find,
	}
}

const flashMessages = createFlashMessagesStore()

export const flashMessagesList = derived([flashMessages], ([$flashMessages]): FlashMessage[] => {
	return Object.values($flashMessages)
})

const createFlashMessageFn =
	(type: FlashMessage['type']) =>
	(text: FlashMessage['text'], duration = 3000) => {
		const id = `fm-${type}-${text}`
		const exists = flashMessages.find(id)
		let recurrence = 1
		if (exists) {
			clearTimeout(exists.timeout)
			recurrence = exists.recurrence + 1
		}

		let timeout: number | undefined = undefined
		if (duration > 0) {
			timeout = window.setTimeout(() => {
				hideFlashMessage(id)
			}, duration)
		}

		flashMessages.add({ id, type, text, timeout, recurrence })
		return () => hideFlashMessage(id)
	}

const hideFlashMessage = (id: FlashMessage['id']) => {
	flashMessages.remove(id)
}

export const successMessage = createFlashMessageFn('success')
export const errorMessage = createFlashMessageFn('error')
export const warningMessage = createFlashMessageFn('warning')
export const infoMessage = createFlashMessageFn('info')
