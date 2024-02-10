import { derived } from 'svelte/store'

import { isMessengerFrameOpen } from './messengerFrame'
import { isWidgetInitialized } from './store'
import { shouldShowWidget } from './widgetVisibility'

export const shouldRenderButtonFrame = derived(
	[isWidgetInitialized, shouldShowWidget, isMessengerFrameOpen],
	([$isWidgetInitialized, $shouldShowWidget, $isMessengerFrameOpen]) => {
		return $isWidgetInitialized && $shouldShowWidget && !$isMessengerFrameOpen
	},
)
