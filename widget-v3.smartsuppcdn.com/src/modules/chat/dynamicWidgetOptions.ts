import type { WidgetOptions } from '@smartsupp/websocket-client-visitor'
import { derived, writable } from 'svelte/store'

const createDynamicWidgetOptions = () => {
	const generalOptions = writable<WidgetOptions>({
		disableAttachments: false,
		disableAuthentication: false,
		disableInput: false,
	})
	const messageOptions = writable<Partial<WidgetOptions>>({})

	const updateGeneralOptions = (options: Partial<WidgetOptions>) => {
		generalOptions.update((prevOptions) => ({
			...prevOptions,
			...options,
		}))
	}

	const setMessageOptions = (options: Partial<WidgetOptions>) => {
		messageOptions.set(options)
	}

	const dynamicWidgetOptions = derived([generalOptions, messageOptions], ([$generalOptions, $messageOptions]) => ({
		...$generalOptions,
		...$messageOptions,
	}))

	return {
		subscribe: dynamicWidgetOptions.subscribe,
		updateGeneralOptions,
		setMessageOptions,
	}
}

export const dynamicWidgetOptions = createDynamicWidgetOptions()
