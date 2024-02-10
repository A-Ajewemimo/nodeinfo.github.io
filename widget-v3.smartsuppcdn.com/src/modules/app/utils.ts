import { type Message, MessageContentType, MessageSubType } from '@smartsupp/smartsupp-message'
import VisitorClient from '@smartsupp/websocket-client-visitor'
import { onMount } from 'svelte'

import { readChatIfPossible } from '@/modules/chat'
import { widgetOptions } from '@/modules/options'
import { visitorClientProvider } from '@/modules/websocketClient'
import { getHostWindow } from '@/utils/window'

import { NotificationSound } from './types'

export const useWatchDocumentVisibility = (win: Window) => {
	const handleVisibilityChange = () => {
		readChatIfPossible()
	}

	onMount(() => {
		win.addEventListener('visibilitychange', handleVisibilityChange)
		return () => win.removeEventListener('visibilitychange', handleVisibilityChange)
	})
}

export const provideVersionInfo = () => {
	const _smartsupp = (getHostWindow()._smartsupp as Record<string, string>) || {}
	_smartsupp.appVersion = __APP_VERSION__ || ''
	_smartsupp.commitHash = import.meta.env.VITE_COMMIT_HASH || ''
	_smartsupp.commitInfo = import.meta.env.VITE_COMMIT_INFO || ''
	getHostWindow()._smartsupp = _smartsupp
}

export const getNotificationSound = (type: NotificationSound = NotificationSound.Default): HTMLAudioElement => {
	const { widgetV3Url } = widgetOptions.getOptions()
	const audio = new Audio(`${widgetV3Url}/assets/sounds/${type}`)
	audio.crossOrigin = 'anonymous'
	audio.load()
	return audio
}

export const isMessageNotifiable = (message: Message) =>
	message.subType !== MessageSubType.Contact &&
	!(
		[
			MessageContentType.RateForm,
			MessageContentType.AgentJoin,
			MessageContentType.AgentLeave,
			MessageContentType.AgentAssign,
			MessageContentType.AgentUnassign,
		] as MessageContentType[]
	).includes(message.content.type)

const sendEventNotification = (name: VisitorClient.EventName) => {
	if (!visitorClientProvider.isInitialized()) return
	void visitorClientProvider.getClient().notify(name)
}

export const notifyWidgetOpened = () => {
	if (widgetOptions.getOptions().isPreviewMode) return
	sendEventNotification(VisitorClient.EventName.WidgetOpen)
}
export const notifyWidgetShowed = () => sendEventNotification(VisitorClient.EventName.WidgetShow)

export const isDocumentVisible = () => document.visibilityState === 'visible'
