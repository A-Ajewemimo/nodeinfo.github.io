import { isString } from '@/utils/isString'

import type { Validator } from './types'
import { isEmailValid } from './utils'

export const required = (): Validator => (value: unknown) => {
	let isValid = true
	if (value === undefined || value === null) {
		isValid = false
	}

	if (isString(value)) {
		isValid = value.trim().length > 0
	}

	return { type: 'required', isValid }
}

export const checked = (): Validator => (value: unknown) => {
	const isValid = isString(value) ? value === 'true' : value === true
	return { type: 'checked', isValid }
}

export const email = (): Validator => (value: unknown) => {
	return { type: 'email', isValid: isEmailValid(String(value)) }
}

export const phone = (): Validator => (value: unknown) => {
	const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/
	return { type: 'phone', isValid: phoneRegex.test(String(value)) }
}
