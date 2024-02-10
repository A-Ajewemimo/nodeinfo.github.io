import { get } from 'svelte/store'

import { isWidgetInitialized } from '@/modules/app'
import { debugWidget } from '@/utils/debug'
import { initQueue } from '@/utils/initQueue'

import {
	executeAnalyticsConsentCommand,
	executeAuthFormFieldsCommand,
	executeButtonStyleCommand,
	executeChangeGroupCommand,
	executeChangeVisitorPropertyCommand,
	executeChatCloseCommand,
	executeChatHideCommand,
	executeChatMessageCommand,
	executeChatOpenCommand,
	executeChatShowCommand,
	executeDisableConnectionStatusComand,
	executeLanguageCommand,
	executeMarketingConsentCommand,
	executeOnCommand,
	executeOpenAuthFormCommand,
	executeOpenRateFormCommand,
	executePreviewTranslateCommand,
	executeThemeColorCommand,
	executeTranslationsCommand,
	executeVariablesCommand,
	executeWidgetStatusCommand,
} from './apiCommandHandlers'
import { ApiCommand, type ApiCommandHandler, type SmartsuppWidgetApi } from './types'
import { isApiCommandValid, printUnknownCommandWarning } from './utils'

type ApiCallbackFn = (...args: unknown[]) => unknown

export const widgetApi: SmartsuppWidgetApi = {
	version: import.meta.env.VITE_COMMIT_HASH || '',
	execute: (params: unknown[]) => {
		const commandName = params[0]

		if (typeof commandName === 'function') {
			handleApiCallback(commandName as ApiCallbackFn)
			return
		}

		if (!isApiCommandValid(commandName)) {
			printUnknownCommandWarning(String(commandName))
			return
		}
		executeApiCommand(commandName, params[1], ...params.slice(2))
	},
	exec: function (...params) {
		this.execute(params)
	},
}

const apiCommandMap: Record<ApiCommand, ApiCommandHandler | null> = {
	// Chat commands
	[ApiCommand.ChatOpen]: executeChatOpenCommand,
	[ApiCommand.ChatClose]: executeChatCloseCommand,
	[ApiCommand.ChatShow]: executeChatShowCommand,
	[ApiCommand.ChatHide]: executeChatHideCommand,
	[ApiCommand.ChatMessage]: executeChatMessageCommand,
	[ApiCommand.Language]: executeLanguageCommand,
	[ApiCommand.ThemeColor]: executeThemeColorCommand,
	[ApiCommand.On]: executeOnCommand,

	// Visitor commands
	[ApiCommand.Variables]: executeVariablesCommand,
	[ApiCommand.Name]: executeChangeVisitorPropertyCommand,
	[ApiCommand.Group]: executeChangeGroupCommand,
	[ApiCommand.Email]: executeChangeVisitorPropertyCommand,
	[ApiCommand.Phone]: executeChangeVisitorPropertyCommand,

	// Consent commands
	[ApiCommand.AnalyticsConsent]: executeAnalyticsConsentCommand,
	[ApiCommand.MarketingConsent]: executeMarketingConsentCommand,

	// Empty commands: Do nothing, but shouldn't fail, are handled in loader
	[ApiCommand.HtmlApply]: null,
	[ApiCommand.RecordingDisable]: null,
	[ApiCommand.RecordingOff]: null,

	// Internal commands: used for testing or widget preview
	[ApiCommand.OpenRateForm]: executeOpenRateFormCommand,
	[ApiCommand.OpenAuthForm]: executeOpenAuthFormCommand,
	[ApiCommand.WidgetStatus]: executeWidgetStatusCommand,
	[ApiCommand.Translations]: executeTranslationsCommand,
	[ApiCommand.AuthFormFields]: executeAuthFormFieldsCommand,
	[ApiCommand.ButtonStyle]: executeButtonStyleCommand,
	[ApiCommand.PreviewTranslate]: executePreviewTranslateCommand,
	[ApiCommand.DisableConnectionStatus]: executeDisableConnectionStatusComand,
}

const executeApiCommand = (name: ApiCommand, param: unknown, ...args: unknown[]) => {
	const apiCommand = apiCommandMap[name]
	if (apiCommand === undefined) {
		printUnknownCommandWarning(name)
		return
	}

	if (apiCommand === null) return

	apiCommand(name, param, ...args)
	debugWidget(`🧙‍♂️[API] ${name}${param ? ':' : ''}`, param ?? '')
}

const handleApiCallback = (callbackFn: ApiCallbackFn) => {
	get(isWidgetInitialized) ? callbackFn() : initQueue.push(callbackFn)
}
