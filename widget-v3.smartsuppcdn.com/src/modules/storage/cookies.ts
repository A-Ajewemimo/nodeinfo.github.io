import Cookies from 'js-cookie'

import { getHostWindow } from '@/utils/window'

import { widgetOptions } from '../options'
import { DEFAULT_STORAGE_EXPIRATION_IN_DAYS, STORAGE_PREFIX } from './constants'

const generateDefaultSetting = (expirationInDays = DEFAULT_STORAGE_EXPIRATION_IN_DAYS) => ({
	expires: expirationInDays,
	domain: widgetOptions.getOptions().cookieDomain,
	path: widgetOptions.getOptions().cookiePath || '/',
	sameSite: 'strict' as const,
	secure: getHostWindow().location.protocol === 'https:',
})

const cookieNameHelper = (name: string) => `${widgetOptions.getOptions().cookiePrefix || ''}${STORAGE_PREFIX}.${name}`

type SetToStorageParams = {
	name: string
	value: string
	expirationInDays?: number
	options?: Cookies.CookieAttributes | undefined
}

export const setCookie = ({
	name,
	value,
	expirationInDays = DEFAULT_STORAGE_EXPIRATION_IN_DAYS,
	options,
}: SetToStorageParams) => {
	Cookies.set(cookieNameHelper(name), value, { ...generateDefaultSetting(expirationInDays), ...options })
}

export const getCookie = (name: string): string => {
	return Cookies.get(cookieNameHelper(name)) as string
}

export const removeFromStorage = (name: string) => {
	// Remove cookie => need to use exact same path + domain
	const cookieName = cookieNameHelper(name)
	const cookie = Cookies.get(cookieName)
	if (cookie) {
		const { path, domain } = generateDefaultSetting()
		Cookies.remove(cookieName, { path, domain })
	}
}
