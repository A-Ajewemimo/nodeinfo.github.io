import { derived, get, writable } from 'svelte/store'

import { printError } from '@/utils/console'

import { DEFAULT_LOCALE } from './constants'
import type { AppLocale, Translations, TranslationVariables } from './types'
import { fetchTranslationFile, getLocale, mergeTranslationData } from './utils'

export const locale = writable<AppLocale>(DEFAULT_LOCALE)
const translations = writable<Translations>({})

const fetchAndUpdateTranslationsForLocale = async (locale: AppLocale): Promise<void> => {
	try {
		const translationData = await fetchTranslationFile(locale)
		const mergedTranslations = mergeTranslationData(translationData, locale)
		translations.update((t) => ({ ...t, [locale]: mergedTranslations }))
	} catch (e) {
		printError(`Fetch translations of '${locale}' language failed.`)
	}
}

export const fetchTranslation = async (newLocale: AppLocale) => {
	const translationData = get(translations)
	if (!translationData[newLocale]) {
		await fetchAndUpdateTranslationsForLocale(newLocale)
	}
	locale.set(newLocale)
}

export const initTranslations = async () => {
	const currentLocale = getLocale()
	locale.set(currentLocale)
	await fetchAndUpdateTranslationsForLocale(currentLocale)
}

export const updateCustomTranslations = (data: { [key: string]: string }) => {
	const currentLocale = get(locale)
	const translationData = get(translations)
	const mergedTranslations = { ...translationData[currentLocale], ...data }
	translations.update((t) => ({ ...t, [currentLocale]: mergedTranslations }))
}

const translate = (locale: AppLocale, key: string, vars: TranslationVariables): string => {
	const translationData = get(translations)
	const undefinedTranslation = `|${key}|`

	// Check for empty translation data, allows to run tests without them
	if (Object.keys(translationData).length === 0) return undefinedTranslation

	let text = translationData[locale]?.[key] || undefinedTranslation

	// Replace any passed in variables in the translation string
	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{${k}}`, 'g')
		text = text.replace(regex, vars[k])
	})

	return text
}

export const t = derived([locale, translations], ([$locale]) => (key: string, vars: TranslationVariables = {}) => {
	return translate($locale, key, vars)
})
