import { derived, writable } from 'svelte/store'

import { isMobileDevice } from '@/modules/device'
import { processingPopupCards } from '@/modules/linkPreview'
import { popupMessage } from '@/modules/messages'
import { widgetOptions } from '@/modules/options'

import { isMessengerFrameOpen } from './messengerFrame'
import { isWidgetInitialized } from './store'
import { shouldShowWidget } from './widgetVisibility'

const isTypingFrameOpen = writable<boolean>(false)
const isPopupFrameOpen = writable<boolean>(false)

export const openTypingFrame = () => {
	isTypingFrameOpen.set(true)
	isPopupFrameOpen.set(false)
}

export const openPopupFrame = () => {
	isPopupFrameOpen.set(true)
	isTypingFrameOpen.set(false)
}

export const closePopupFrame = () => {
	isPopupFrameOpen.set(false)
}

const shouldRenderPopupIfMobile = derived([isMobileDevice], ([$isMobileDevice]): boolean => {
	const { mobilePopupsEnabled } = widgetOptions.getOptions()
	return $isMobileDevice ? !!mobilePopupsEnabled : true
})

export const shouldRenderTypingFrame = derived(
	[isWidgetInitialized, shouldShowWidget, isTypingFrameOpen, isMessengerFrameOpen, shouldRenderPopupIfMobile],
	([
		$isWidgetInitialized,
		$shouldShowWidget,
		$isTypingFrameOpen,
		$isMessengerFrameOpen,
		$shouldRenderPopupIfMobile,
	]) => {
		return (
			$isWidgetInitialized &&
			$shouldShowWidget &&
			$isTypingFrameOpen &&
			!$isMessengerFrameOpen &&
			$shouldRenderPopupIfMobile
		)
	},
)

export const shouldRenderPopupFrame = derived(
	[
		isWidgetInitialized,
		shouldShowWidget,
		isPopupFrameOpen,
		isMessengerFrameOpen,
		popupMessage,
		shouldRenderPopupIfMobile,
		processingPopupCards,
	],
	([
		$isWidgetInitialized,
		$shouldShowWidget,
		$isPopupFrameOpen,
		$isMessengerFrameOpen,
		$popupMessage,
		$shouldRenderPopupIfMobile,
		$processingPopupCards,
	]) => {
		return (
			$isWidgetInitialized &&
			$shouldShowWidget &&
			$isPopupFrameOpen &&
			$popupMessage &&
			!$isMessengerFrameOpen &&
			$shouldRenderPopupIfMobile &&
			!$processingPopupCards
		)
	},
)
