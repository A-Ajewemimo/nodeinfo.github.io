import { get, writable } from 'svelte/store'

import type { DrawerId } from './types'

export const openedDrawerId = writable<DrawerId | null>(null)
export const wasDrawerOpened = writable(false)
const drawerStack = writable<DrawerId[]>([])

const pushToDrawerStack = (id: DrawerId) => {
	drawerStack.update((state) => [...state, id])
}

const popDrawerStack = (): DrawerId | null => {
	let poppedId: DrawerId | undefined
	drawerStack.update((state) => {
		poppedId = state.pop()
		return state
	})
	return poppedId ?? null
}

const isDrawerStackEmpty = () => get(drawerStack).length === 0

export const openDrawer = (id: DrawerId, { useStack = false } = {}) => {
	openedDrawerId.update((prevId) => {
		if (useStack && prevId) pushToDrawerStack(prevId)
		wasDrawerOpened.set(prevId !== null)
		return id
	})
}

export const closeDrawer = () => {
	let nextDrawerId: DrawerId | null = null
	if (!isDrawerStackEmpty()) {
		nextDrawerId = popDrawerStack()
	}
	openedDrawerId.set(nextDrawerId)
}
