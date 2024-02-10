import type { Variables } from '@smartsupp/websocket-client-visitor'

export type { SmartsuppWidgetApi } from '@smartsupp/widget-loader-types'

export enum ApiCommand {
	Name = 'name',
	Group = 'group',
	Email = 'email',
	Phone = 'phone',
	Variables = 'variables',
	Language = 'language',
	ChatClose = 'chat:close',
	ChatOpen = 'chat:open',
	ChatShow = 'chat:show',
	ChatHide = 'chat:hide',
	ThemeColor = 'theme:color',
	ChatMessage = 'chat:message',
	RecordingDisable = 'recording:disable',
	RecordingOff = 'recording:off',
	HtmlApply = 'html:apply',
	On = 'on',
	AnalyticsConsent = 'analyticsConsent',
	MarketingConsent = 'marketingConsent',
	OpenRateForm = 'openRateForm',
	OpenAuthForm = 'openAuthForm',
	WidgetStatus = 'widgetStatus',
	Translations = 'translations',
	AuthFormFields = 'authFormFields',
	ButtonStyle = 'buttonStyle',
	PreviewTranslate = 'previewTranslate',
	DisableConnectionStatus = 'disableConnectionStatus',
}

export type ApiCommandHandler = (name: ApiCommand, param: unknown, ...args: unknown[]) => void

export interface ApiProps {
	name: string
	group: string
	email: string
	variables: Variables
	language: string
	phone: string
}

export enum ApiEvent {
	MessageSent = 'message_sent',
	MessageReceived = 'message_received',
	MessengerClose = 'messenger_close',
}

export type ApiEventCallback = (...args: unknown[]) => void
export type ApiEventHandler = (callback: ApiEventCallback) => void
