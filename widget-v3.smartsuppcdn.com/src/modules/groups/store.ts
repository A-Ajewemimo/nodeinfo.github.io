import type { Group } from '@smartsupp/websocket-client-visitor'
import { derived, writable } from 'svelte/store'

import { normalize } from '@/utils/normalize'

import type { GroupDictionary } from './types'

export const createGroupsStore = () => {
	const groups = writable<GroupDictionary>({})
	const { subscribe, set } = groups

	const setGroups = (groups: Group[]) => {
		set(normalize('key', groups))
	}

	return {
		subscribe,
		setGroups,
	}
}

export const groups = createGroupsStore()

export const groupList = derived([groups], ([$groups]): Group[] => {
	return Object.values($groups)
})
