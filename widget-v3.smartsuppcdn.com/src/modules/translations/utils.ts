import { FetchAdapter } from '@openapi-client/adapter-fetch'
import { ProjectName, TranslationsClient } from '@smartsupp/translations-client-api'
import { get } from 'svelte/store'

import { apiProps } from '@/modules/api'
import { widgetOptions } from '@/modules/options'

import { availableLocales, DEFAULT_LOCALE } from './constants'
import type { AppLocale, TranslationData } from './types'

export const isAppLocale = (locale: string): locale is AppLocale => availableLocales.includes(locale as AppLocale)

export const resolveLocale = (locale: string): AppLocale => {
	return isAppLocale(locale) ? locale : DEFAULT_LOCALE
}

export const getLocale = (): AppLocale => {
	const { lang } = widgetOptions.getOptions()
	const { language } = get(apiProps)
	return resolveLocale(language ?? lang)
}

function getTranslationsClient(): TranslationsClient<unknown> {
	return new TranslationsClient(
		new FetchAdapter({
			baseURL: `${widgetOptions.getOptions().translationsBaseUrl}/api/v1`,
		}),
	)
}

export const fetchTranslationFile = async (locale: AppLocale): Promise<TranslationData> => {
	return getTranslationsClient().getDefaults(ProjectName.Widget, locale)
}

export const mergeTranslationData = (data: TranslationData, locale: AppLocale): TranslationData => {
	const { translates: customTranslations } = widgetOptions.getOptions()
	return { ...data, ...(customTranslations[locale] && customTranslations[locale]) }
}
