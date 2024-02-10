import { writable } from 'svelte/store'

const createHiddenRepliesStore = () => {
	const { subscribe, update } = writable(new Set<string>())

	const hideRepliesByMessageId = (messageId: string) => {
		update((s) => s.add(messageId))
	}

	return {
		subscribe,
		hideRepliesByMessageId,
	}
}

export const hiddenReplies = createHiddenRepliesStore()
