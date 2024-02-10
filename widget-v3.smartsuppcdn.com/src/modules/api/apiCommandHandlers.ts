import { AccountStatus } from '@smartsupp/websocket-client-visitor'
import { get } from 'svelte/store'

import {
	closeMessengerFrame,
	hideWidgetByAPI,
	isWidgetInitialized,
	openMessengerFrame,
	showWidgetByAPI,
} from '@/modules/app'
import { eventEmitter } from '@/modules/events'
import { groups } from '@/modules/groups'
import { setMessengerInputValue } from '@/modules/textarea'
import { isColorValid, themeColor } from '@/modules/theme'
import { fetchTranslation, isAppLocale } from '@/modules/translations'
import { formatVisitorVariables, visitor } from '@/modules/visitor'
import { printWarning } from '@/utils/console'
import { initQueue } from '@/utils/initQueue'

import { disableConnectionStatus } from '../app/connectionStatus'
import { formFieldOverriden } from '../auth'
import { accountStatus } from '../chat'
import { openChatRatingDrawer } from '../chatRating'
import { DrawerId, openDrawer } from '../drawers'
import { buttonStyleOverriden } from '../frames'
import { lastMessageId, messages, sortedMessages } from '../messages'
import { widgetOptions } from '../options'
import { locale, t, updateCustomTranslations } from '../translations/store'
import { handleApiEvent } from './apiEventHandlers'
import { DOCS_LANGUAGES_LINK } from './constants'
import { updateApiProps } from './store'
import { ApiCommand, type ApiCommandHandler } from './types'
import {
	checkApiFeatureEnabled,
	checkConsentModeEnabled,
	checkGroupFeatureEnabled,
	validateApiEventName,
	validateBooleanParam,
	validateFunctionParam,
	validateStringParam,
	validateVariablesParam,
} from './utils'

/**
 * Chat commands
 */
export const executeChatOpenCommand: ApiCommandHandler = () => {
	if (!checkApiFeatureEnabled()) return
	const openAndShowWidget = () => {
		openMessengerFrame()
		showWidgetByAPI()
	}

	if (!get(isWidgetInitialized)) {
		initQueue.push(openAndShowWidget)
		return
	}

	openAndShowWidget()
}

export const executeChatCloseCommand: ApiCommandHandler = () => {
	if (!checkApiFeatureEnabled()) return
	if (!get(isWidgetInitialized)) {
		initQueue.push(closeMessengerFrame)
		return
	}

	closeMessengerFrame()
}

export const executeChatShowCommand: ApiCommandHandler = () => {
	if (!checkApiFeatureEnabled()) return
	showWidgetByAPI()
}

export const executeChatHideCommand: ApiCommandHandler = () => {
	if (!checkApiFeatureEnabled()) return
	hideWidgetByAPI()
}

export const executeLanguageCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (!checkApiFeatureEnabled()) return
	if (name !== ApiCommand.Language) return
	if (!validateStringParam(name, param)) return
	if (!isAppLocale(param)) {
		printWarning(
			`Provided language '${param}' is not supported. See ${DOCS_LANGUAGES_LINK} to check supported languages.`,
		)
		return
	}

	if (!get(isWidgetInitialized)) {
		updateApiProps(name, param)
		return
	}

	void fetchTranslation(param)
}

export const executeThemeColorCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	let color: string,
		color2: string | null = null,
		colorGradient = true
	if (!checkApiFeatureEnabled()) return
	if (typeof param === 'string' && validateStringParam(name, param)) {
		color = param
	} else if (validateVariablesParam(name, param)) {
		color = param.color as string
		color2 = param.color2 as string
		colorGradient = param.colorGradient as boolean
		if (!validateBooleanParam(name, colorGradient)) return
	} else {
		return
	}
	if (!isColorValid(color)) {
		printWarning(`Provided color '${color}' is not valid. Please use hex color code.`)
		return
	} else if (colorGradient && color2 && !isColorValid(color2)) {
		printWarning(`Provided color '${color2}' is not valid. Default color will be used instead.`)
		return
	}

	themeColor.setThemeColor({ color, color2, colorGradient })
}

export const executeChatMessageCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (!checkApiFeatureEnabled()) return
	if (!validateStringParam(name, param)) return
	setMessengerInputValue(param)
}

export const executeOnCommand: ApiCommandHandler = (name, param, callback) => {
	if (!validateStringParam(name, param)) return
	if (!validateApiEventName(name, param)) return
	if (!validateFunctionParam(name, callback)) return
	handleApiEvent(param, callback)
}

/**
 * Visitor Commands
 */
export const executeVariablesCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (!validateVariablesParam(name, param)) return
	visitor.updateVisitorVariables(formatVisitorVariables(param))
}

export const executeChangeVisitorPropertyCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (name !== ApiCommand.Name && name !== ApiCommand.Email && name !== ApiCommand.Phone && name !== ApiCommand.Group)
		return
	if (!validateStringParam(name, param)) return
	visitor.updateVisitorProperty(name, param)
}

// Custom handler because you can only change group to an existing group key
export const executeChangeGroupCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (!checkGroupFeatureEnabled()) return
	if (!validateStringParam(name, param)) return

	// Validate group key only when widget is initialized, otherwise we don't have group data
	const group = get(groups)[param]
	if (get(isWidgetInitialized) && !group) {
		printWarning(`Group with key '${param}' does not exist. Please provide correct group key from your group settings.`)
		return
	}

	executeChangeVisitorPropertyCommand(name, param)
}

/**
 * Consent commands
 */
export const executeAnalyticsConsentCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (!validateBooleanParam(name, param)) return
	checkConsentModeEnabled()
	eventEmitter.emit('analyticsConsentChanged', Boolean(param))
}

export const executeMarketingConsentCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (!validateBooleanParam(name, param)) return
	checkConsentModeEnabled()
	eventEmitter.emit('marketingConsentChanged', Boolean(param))
}

export const executeOpenRateFormCommand: ApiCommandHandler = () => {
	openChatRatingDrawer(get(lastMessageId) || '')
}

export const executeOpenAuthFormCommand: ApiCommandHandler = () => {
	openDrawer(DrawerId.AuthForm)
}

export const executeWidgetStatusCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (!validateStringParam(name, param)) return
	if (param !== AccountStatus.Online && param !== AccountStatus.Offline) return
	accountStatus.set(param)
}

export const executeTranslationsCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (!validateVariablesParam(name, param)) return
	updateCustomTranslations(param as { [key: string]: string })
}

export const executeAuthFormFieldsCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (!validateVariablesParam(name, param)) return
	if (!get(formFieldOverriden)) formFieldOverriden.set(widgetOptions.getOptions())
	formFieldOverriden.update((options) => {
		return { ...options, ...param }
	})
}

export const executeButtonStyleCommand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (!validateStringParam(name, param)) return
	buttonStyleOverriden.set(param as 'greeting' | 'bubble')
}

export const executePreviewTranslateCommand: ApiCommandHandler = () => {
	let unsubscribe = () => {
		return
	}
	unsubscribe = locale.subscribe(() => {
		get(sortedMessages).forEach((message) => {
			const messageTranslateKey = (message.content?.data as string) || ''
			if (typeof messageTranslateKey === 'string' && messageTranslateKey.match(/widgetPreview\..*/)) {
				message.content.text = get(t)(messageTranslateKey)
				void messages.replaceMessage(message)
			}
		})
		unsubscribe()
	})
}

export const executeDisableConnectionStatusComand: ApiCommandHandler = (name: ApiCommand, param: unknown) => {
	if (!validateBooleanParam(name, param)) return
	disableConnectionStatus.set(param)
}
