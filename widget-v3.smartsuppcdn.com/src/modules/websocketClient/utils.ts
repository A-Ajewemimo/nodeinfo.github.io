import type VisitorClient from '@smartsupp/websocket-client-visitor'
import { get } from 'svelte/store'

import { WIDGET_VERSION } from '@/constants'
import { apiProps } from '@/modules/api'
import { isMessengerFrameOpen, shouldShowWidget } from '@/modules/app'
import { widgetOptions } from '@/modules/options'
import {
	closeCrossDomainStorage,
	getVisitorIdFromStorage,
	getVisitsFromStorage,
	setVisitorIdToStorage,
} from '@/modules/storage'
import { printWarning } from '@/utils/console'
import { getTopOrHostWindow } from '@/utils/window'

import { sessionId } from './store'

export const getServerUrl = () => {
	const { protocol, host } = widgetOptions.getOptions()
	const widgetProtocol = protocol === 'http' ? 'http' : 'https'
	return `${widgetProtocol}://${host}`
}

const getVisitorId = async (): Promise<string | null> => {
	try {
		return await getVisitorIdFromStorage()
	} catch (e) {
		printWarning(String(e))
		return null
	}
}

export const setVisitorId = async (id: string) => {
	try {
		await setVisitorIdToStorage(id)
		closeCrossDomainStorage()
	} catch (e) {
		printWarning(String(e))
	}
}

export const getVisitorClientData = async (): Promise<VisitorClient.ConnectData> => {
	const { key, lang, isPreviewMode, sitePlatform, triggerable, _chatMaxReopenTime } = widgetOptions.getOptions()
	const id = await getVisitorId()
	const apiProperties = get(apiProps)

	return {
		key,
		id,
		isPreviewMode,
		sitePlatform,
		triggerable,
		_chatMaxReopenTime,
		name: apiProperties.name,
		email: apiProperties.email,
		phone: apiProperties.phone,
		group: apiProperties.group,
		lang: apiProperties.language ?? lang,
		variables: apiProperties.variables,
		widgetVersion: WIDGET_VERSION,
		visits: getVisitsFromStorage(),
		isWidgetVisible: get(shouldShowWidget),
		isWidgetOpen: get(isMessengerFrameOpen),
		pageUrl: getTopOrHostWindow().location.href,
		pageTitle: getTopOrHostWindow().document.title,
		domain: getTopOrHostWindow().location.hostname || 'unknown',
		referer: getTopOrHostWindow().document.referrer,
		bundleVersion: import.meta.env.VITE_COMMIT_HASH || 'dev',
	}
}

export const handleMessengerOpenOnInit = (chat: VisitorClient.ChatInfo | undefined, session: string) => {
	if (get(isMessengerFrameOpen) && !chat && session !== get(sessionId)) {
		isMessengerFrameOpen.set(false)
	}
	sessionId.set(session)
}
