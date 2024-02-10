import { derived, get, writable } from 'svelte/store'

import { getHostWindow } from '@/utils/window'

import { warningMessage } from '../flashMessages'
import { t } from '../translations'
import { isClientConnected } from '../websocketClient/store'
import { ConnectionStatus } from './types'

const isBrowserOffline = writable<boolean>(false)
export const disableConnectionStatus = writable<boolean>(false)
// listen to browser internet connection
getHostWindow().addEventListener('offline', () => isBrowserOffline.set(true))
getHostWindow().addEventListener('online', () => isBrowserOffline.set(false))

export const connectionStatus = derived(
	[isClientConnected, isBrowserOffline, disableConnectionStatus],
	([$isClientConnected, $isBrowserOffline, $disableConnectionStatus]) => {
		if ($disableConnectionStatus) return ConnectionStatus.Connected
		return !$isClientConnected || $isBrowserOffline ? ConnectionStatus.Disconnected : ConnectionStatus.Connected
	},
	ConnectionStatus.Connecting,
)

let hideOfflineMessage: undefined | (() => void)
connectionStatus.subscribe((status) => {
	if (status === ConnectionStatus.Disconnected && !hideOfflineMessage) {
		hideOfflineMessage = warningMessage(get(t)('error.noInternet'), 0)
	}
	if (status === ConnectionStatus.Connected && hideOfflineMessage) {
		hideOfflineMessage()
		hideOfflineMessage = undefined
	}
})
