import type { Variables } from '@smartsupp/websocket-client-visitor'
import type VisitorClient from '@smartsupp/websocket-client-visitor'
import { get, writable } from 'svelte/store'

import { updateApiProps } from '@/modules/api'
import { isWidgetInitialized } from '@/modules/app'
import { visitorClientProvider } from '@/modules/websocketClient'
import { printError } from '@/utils/console'

import type { VisitorUpdateProps } from './types'

export const createVisitorStore = () => {
	const visitor = writable<VisitorClient.Identity | null>(null)
	const { subscribe, set, update } = visitor

	const setVisitorData = (data: VisitorClient.Identity) => {
		set(data)
	}

	const updateVisitorData = (data: Partial<VisitorClient.Identity>) => {
		update((state) => {
			if (!state) return null
			return { ...state, ...data }
		})
	}

	const updateVisitorProperty = <TName extends keyof VisitorUpdateProps>(
		name: TName,
		value: VisitorUpdateProps[TName],
	) => {
		if (!get(isWidgetInitialized)) {
			updateApiProps(name, value)
			return
		}

		updateVisitorData({ [name]: value })

		try {
			visitorClientProvider.getClient().update({ [name]: value })
		} catch (e) {
			printError(`Update of visitor property '${name}' failed.`, String(e))
		}
	}

	const updateVisitorVariables = (updatedVariables: Variables) => {
		if (!get(isWidgetInitialized)) {
			updateApiProps('variables', updatedVariables)
			return
		}

		const visitorData = get(visitor)
		if (!visitorData) return

		const currentVariables = visitorData.variables
		updateVisitorData({ variables: { ...currentVariables, ...updatedVariables } })

		// Update only changed variables on server
		let changedVariables: Variables = {}
		Object.keys(updatedVariables).forEach((key) => {
			if (updatedVariables[key] !== currentVariables[key]) {
				changedVariables = { ...changedVariables, [key]: updatedVariables[key] }
			}
		})

		if (Object.keys(changedVariables).length === 0) return

		try {
			visitorClientProvider.getClient().update({ variables: changedVariables })
		} catch (e) {
			printError(`Update of visitor variables failed.`, String(e))
		}
	}

	return {
		subscribe,
		setVisitorData,
		updateVisitorData,
		updateVisitorProperty,
		updateVisitorVariables,
	}
}

export const visitor = createVisitorStore()
