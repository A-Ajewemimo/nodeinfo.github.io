import { derived, writable } from 'svelte/store'

import { isMobileDevice } from '@/modules/device'
import { widgetOptions } from '@/modules/options'

import { getFromStorage, setToStorage } from '../storage'
import { StorageItem } from '../storage/types'
import { BUTTON_FRAME_BUBBLE_SIZE, BUTTON_FRAME_DEFAULT_WIDTH, POPUP_FRAME_DEFAULT_HEIGHT } from './frameStyles'

export const buttonFrameGreetingWidth = writable(BUTTON_FRAME_DEFAULT_WIDTH)

export const popupFrameHeight = writable(POPUP_FRAME_DEFAULT_HEIGHT)
export const hasPopupFrameHover = writable(false)

export const buttonStyleOverriden = writable<'bubble' | 'greeting' | undefined>(undefined)

export const isWidgetButtonBubble = derived(
	[isMobileDevice, buttonStyleOverriden],
	([$isMobileDevice, $buttonStyleOverriden]) => {
		const { buttonStyle } = widgetOptions.getOptions()
		if ($buttonStyleOverriden) return $buttonStyleOverriden === 'bubble'
		// On mobile devices button frame is always a bubble
		return $isMobileDevice || buttonStyle === 'bubble'
	},
)

export const buttonFrameWidth = derived(
	[isWidgetButtonBubble, buttonFrameGreetingWidth],
	([$isWidgetButtonBubble, $buttonFrameGreetingWidth]) => {
		return $isWidgetButtonBubble ? BUTTON_FRAME_BUBBLE_SIZE : $buttonFrameGreetingWidth
	},
)

const messengerFrameExpanded = writable<boolean>()

export const isMessengerFrameExpanded = derived([messengerFrameExpanded], ([$messengerFrameExpanded]) => {
	if (typeof $messengerFrameExpanded === 'undefined') {
		const stored = getFromStorage(StorageItem.IsMessengerFrameExpanded)
		return stored === true.toString() ? true : false
	}
	return $messengerFrameExpanded
})

export const setMessengerFrameExpanded = (isExpanded: boolean): void => {
	setToStorage({
		name: StorageItem.IsMessengerFrameExpanded,
		value: isExpanded.toString(),
	})
	messengerFrameExpanded.set(isExpanded)
}
