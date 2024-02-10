import type { Writable } from 'svelte/store'

import { emailRegex } from '@/utils/regExps'

import type { FieldValues, FormControl, FormValidators } from './types'

export const getFormControlValues = <TFieldValues extends FieldValues, C extends FormControl<string>[]>(
	controls: C,
): TFieldValues => {
	const values: Record<string, unknown> = {}
	return controls
		.filter((c) => !c.isHidden)
		.reduce((result, control) => {
			result[control.name] = control.value
			return result
		}, values) as TFieldValues
}

export const getFormControlValidators = <C extends FormControl<string>[]>(controls: C): FormValidators => {
	const validators: FormValidators = {}
	return controls.reduce((result, control) => {
		result[control.name] = control.validators
		return result
	}, validators)
}

export const updateStoreValue = <T>(store: Writable<T>, field: string, value: string | null) => {
	store.update((state) => ({ ...state, [field]: value }))
}

export const initObjectValues = <TObject, TValue>(object: TObject, value: TValue) => {
	const newObject: Record<string, TValue> = {}
	for (const key in object) {
		newObject[key] = value
	}
	return newObject
}

export const createElementId = () => Math.random().toString(36)

export const isEmailValid = (email: string): boolean => {
	if (!email) return false

	const emailParts = email.split('@')
	if (emailParts.length !== 2) return false

	const account = emailParts[0]
	const address = emailParts[1]

	if (account.length > 64) return false
	else if (address.length > 255) return false

	const domainParts = address.split('.')
	if (domainParts.some((part) => part.length > 63)) {
		return false
	}

	return emailRegex.test(email)
}
