import { debugWidget } from '@/utils/debug'

import { SMARTSUPP_CHAT_ID } from './constants'
import type { OptionsInitCallback, SmartsuppWidget, SmartsuppWidgetOptions } from './types'

const createWidgetOptionsProvider = () => {
	let widgetOptions: SmartsuppWidgetOptions | null = null
	const initCallbacks: OptionsInitCallback[] = []

	const init = (options: SmartsuppWidgetOptions): void => {
		widgetOptions = options
		debugWidget('widget options', options)
		initCallbacks.forEach((cb) => cb(options))
	}

	const getOptions = (): SmartsuppWidgetOptions => {
		if (!widgetOptions) throw new Error('Widget options not initialized')
		return widgetOptions
	}

	const awaitOptions = async (): Promise<SmartsuppWidgetOptions> => {
		if (widgetOptions) {
			return widgetOptions
		}
		return new Promise((resolve) => {
			initCallbacks.push(resolve)
		})
	}

	return Object.freeze({ init, getOptions, awaitOptions })
}

export const widgetOptions = createWidgetOptionsProvider()

export const getSmartsuppWidget = (win: Window): SmartsuppWidget => {
	// Getting chatId from body of iFrame to fetch getWidget function from loader which requires chatId
	const bodyElement = win.document.getElementsByTagName('body')[0]
	const chatId = bodyElement.getAttribute(SMARTSUPP_CHAT_ID)

	if (!chatId) {
		throw new Error('Missing chat ID attribute on body element.')
	}

	// Loader initialized $smartsupp in window object
	if (!win.parent.$smartsupp) {
		throw new Error('Something went wrong. Seems like loader.js did not initialize widget.')
	}

	if (!win.parent.$smartsupp.getWidget) {
		throw new Error('Get widget function was not supplied by loader.js.')
	}

	return win.parent.$smartsupp.getWidget(chatId)
}
