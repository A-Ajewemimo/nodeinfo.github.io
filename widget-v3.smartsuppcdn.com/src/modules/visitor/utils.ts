import type { Variables } from '@smartsupp/websocket-client-visitor'

import { hasOwnProperty } from '@/utils/hasOwnProperty'
import { isBoolean } from '@/utils/isBoolean'
import { isNumber } from '@/utils/isNumber'
import { isObject } from '@/utils/isObject'
import { isString } from '@/utils/isString'

type VariableValue = string | number | boolean

const isVariableValue = (value: unknown): value is VariableValue =>
	isString(value) || isNumber(value) || isBoolean(value)

export const formatVisitorVariables = (param: Record<string, unknown>): Variables => {
	const variables: Variables = {}

	Object.keys(param).forEach((key) => {
		const value = param[key]
		if (isVariableValue(value)) {
			variables[key] = value
		} else if (isObject(value) && hasOwnProperty(value, 'value') && isVariableValue(value.value)) {
			variables[key] = value.value
		}
	})

	return variables
}
