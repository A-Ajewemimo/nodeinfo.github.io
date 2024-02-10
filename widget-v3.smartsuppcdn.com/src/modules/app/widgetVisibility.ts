import { AccountStatus } from '@smartsupp/websocket-client-visitor'
import { derived, get, writable } from 'svelte/store'

import { accountStatus, chatStatus, isChatPending } from '@/modules/chat'
import { isMobileDevice } from '@/modules/device'
import { filterUserAgentMessages, sortedMessages } from '@/modules/messages'
import { widgetOptions } from '@/modules/options'
import { isMessengerInputEmpty } from '@/modules/textarea'
import { visitor } from '@/modules/visitor'
import { debugWidget } from '@/utils/debug'

import { notifyWidgetShowed } from './utils'

const visibilityResult = (reason: string, result: boolean) => {
	debugWidget(`widget visible: ${String(result)} => reason: ${reason}`)
	if (result && result !== get(shouldShowWidget)) notifyWidgetShowed()
	return result
}

// Boolean if visibility was set by API command
const shouldShowWidgetByAPI = writable<boolean | undefined>()

export const showWidgetByAPI = () => shouldShowWidgetByAPI.set(true)

export const hideWidgetByAPI = () => shouldShowWidgetByAPI.set(false)

const shouldHideOfflineChat = derived(
	[accountStatus, sortedMessages, isMessengerInputEmpty, isChatPending],
	([$accountStatus, $sortedMessages, $isMessengerInputEmpty, $isChatPending]): boolean => {
		const { hideOfflineChat, isPreviewMode } = widgetOptions.getOptions()
		return (
			$accountStatus === AccountStatus.Offline &&
			!!hideOfflineChat &&
			filterUserAgentMessages($sortedMessages).length === 0 &&
			$isMessengerInputEmpty &&
			!$isChatPending &&
			!isPreviewMode
		)
	},
)

export const shouldShowWidget = derived(
	[visitor, isMobileDevice, shouldShowWidgetByAPI, chatStatus, isChatPending, shouldHideOfflineChat],
	([
		$visitor,
		$isMobileDevice,
		$shouldShowWidgetByAPI,
		$chatStatus,
		$isChatPending,
		$shouldHideOfflineChat,
	]): boolean => {
		const { hideMobileWidget, hideWidget } = widgetOptions.getOptions()
		if ($visitor?.bannedAt) return visibilityResult('visitor is banned', false)
		if ($isMobileDevice && hideMobileWidget) return visibilityResult(`option 'hideMobileWidget' is true`, false)
		if (typeof $shouldShowWidgetByAPI === 'boolean')
			return visibilityResult('set by API command', $shouldShowWidgetByAPI)
		if ($chatStatus && !$isChatPending) return visibilityResult('chat status is not pending', true)
		if ($shouldHideOfflineChat) return visibilityResult(`option 'hideOfflineChat' is true`, false)
		return visibilityResult(`option 'hideWidget' is ${String(hideWidget)}`, !hideWidget ?? false)
	},
)

export const shouldOpenWidgetOnTrigger = derived([isMobileDevice], ([$isMobileDevice]): boolean => {
	const { openOnTrigger } = widgetOptions.getOptions()
	return openOnTrigger && !$isMobileDevice
})
