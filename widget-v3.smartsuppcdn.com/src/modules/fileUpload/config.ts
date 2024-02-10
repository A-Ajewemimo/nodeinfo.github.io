import type WebsocketVisitorClient from '@smartsupp/websocket-client-visitor'
import { writable } from 'svelte/store'

const createConfig = () => {
	const config = writable<WebsocketVisitorClient.FileUploadConfig>()
	const { subscribe, set } = config

	const initialize = (config: WebsocketVisitorClient.FileUploadConfig) => set(config)

	return {
		subscribe,
		initialize,
	}
}

export const fileUploadConfig = createConfig()
