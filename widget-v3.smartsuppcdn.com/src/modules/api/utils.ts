import type { Variables } from '@smartsupp/websocket-client-visitor'

import { widgetOptions } from '@/modules/options'
import { isConsentModeEnabled } from '@/modules/storage'
import { printWarning } from '@/utils/console'
import { isBoolean } from '@/utils/isBoolean'
import { isObject } from '@/utils/isObject'
import { isString } from '@/utils/isString'

import {
	DOCS_CUSTOM_VISITOR_DATA_LINK,
	DOCS_EVENTS_LINK,
	DOCS_LINK,
	HELP_COOKIE_CONSENT_LINK,
	PRICING_LINK,
} from './constants'
import { ApiCommand, ApiEvent } from './types'

export const isApiCommandValid = (name: unknown): name is ApiCommand => {
	return Object.values(ApiCommand).some((command) => command === name)
}

export const validateStringParam = (name: ApiCommand, param: unknown): param is string => {
	if (!isString(param)) {
		printWarning(`Parameter of '${name}' API command must be type string. See ${DOCS_LINK} for more information.`)
		return false
	}

	return true
}

export const validateBooleanParam = (name: ApiCommand, param: unknown): param is boolean => {
	if (!isBoolean(param)) {
		printWarning(`Parameter of '${name}' API command must be type boolean. See ${DOCS_LINK} for more information.`)
		return false
	}

	return true
}

export const validateFunctionParam = (name: ApiCommand, param: unknown): param is () => void => {
	if (typeof param !== 'function') {
		printWarning(`Parameter of '${name}' API command must be type function. See ${DOCS_LINK} for more information.`)
		return false
	}

	return true
}

export const validateVariablesParam = (name: ApiCommand, param: unknown): param is Variables => {
	if (!isObject(param)) {
		printWarning(
			`Parameter of '${name}' API command must be type object. See ${DOCS_CUSTOM_VISITOR_DATA_LINK} for more information.`,
		)
		return false
	}

	return true
}

export const validateApiEventName = (name: ApiCommand, eventName: string): eventName is ApiEvent => {
	const apiEventsList = Object.values(ApiEvent)
	if (!apiEventsList.includes(eventName as ApiEvent)) {
		printWarning(
			`Unknown event: '${eventName}'. Available event names are: ${apiEventsList.join(
				', ',
			)}. See ${DOCS_EVENTS_LINK} for more information.`,
		)
		return false
	}
	return true
}

export const printUnknownCommandWarning = (name: string) => {
	printWarning(`Unknown API command: '${name}'. See ${DOCS_LINK} to check available API commands.`)
}

const isApiFeatureEnabled = (): boolean => !!widgetOptions.getOptions().features?.api
const isGroupFeatureEnabled = (): boolean => !!widgetOptions.getOptions().features?.groups

export const checkApiFeatureEnabled = (): boolean => {
	if (!isApiFeatureEnabled()) {
		printWarning(`Chat box API feature is not enabled. See ${PRICING_LINK} to upgrade your package.`)
		return false
	}

	return true
}

export const checkGroupFeatureEnabled = (): boolean => {
	if (!isApiFeatureEnabled() || !isGroupFeatureEnabled()) {
		printWarning(`Chat box Groups feature is not enabled. See ${PRICING_LINK} to upgrade your package.`)
		return false
	}

	return true
}

export const checkConsentModeEnabled = () => {
	if (!isConsentModeEnabled()) {
		printWarning(
			`Enable managing cookie consent in widget settings to allow this command. See ${HELP_COOKIE_CONSENT_LINK} for more information.`,
		)
	}
}
