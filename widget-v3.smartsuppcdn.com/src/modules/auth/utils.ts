import type VisitorClient from '@smartsupp/websocket-client-visitor'
import { get, writable } from 'svelte/store'

import {
	checked,
	email,
	type FormControl,
	FormControlType,
	INPUT_MAXLENGTH,
	INPUT_PHONE_MAXLENGTH,
	phone,
	required,
} from '@/modules/form'
import { groupList } from '@/modules/groups'
import { type SmartsuppWidgetOptions, widgetOptions } from '@/modules/options'
import { getFromStorage, removeFromLocalStorage, setToStorage, StorageItem } from '@/modules/storage'

import { isGdprApproved } from './store'
import type { AuthFormName, AuthFormValues } from './types'

export const formFieldOverriden = writable<SmartsuppWidgetOptions>(undefined)

type VisitorData = VisitorClient.Identity | null

const shouldShowEmailFormControl = (visitor: VisitorData): boolean => {
	const { emailControl } = widgetOptions.getOptions()
	const isEmailFilled = Boolean(visitor?.email)
	return emailControl && !isEmailFilled
}

const shouldShowNameFormControl = (visitor: VisitorData): boolean => {
	const { nameControl } = widgetOptions.getOptions()
	const isNameFilled = Boolean(visitor?.name)
	return nameControl && !isNameFilled
}

const shouldShowPhoneFormControl = (visitor: VisitorData): boolean => {
	const { numberControl } = widgetOptions.getOptions()
	const isPhoneFilled = Boolean(visitor?.phone)
	return !!numberControl && !isPhoneFilled
}

const shouldShowGroupFormControl = (): boolean => {
	const { groupSelectEnabled } = widgetOptions.getOptions()
	const groups = get(groupList)
	return !!groupSelectEnabled && groups.length > 0
}

const shouldShowConsentFormControl = (): boolean => {
	const { privacyNoticeEnabled, privacyNoticeCheckRequired } = widgetOptions.getOptions()
	const isConsentFilled = isGdprApproved()
	return !!privacyNoticeEnabled && privacyNoticeCheckRequired && !isConsentFilled
}

const shouldShowConsentNotice = (visitor: VisitorData): boolean => {
	const { privacyNoticeEnabled } = widgetOptions.getOptions()
	const isConsentFilled = Boolean(visitor?.variables?.personalDataProcessingConsent)
	return !!privacyNoticeEnabled && !isConsentFilled
}

const createEmailFormControl = (): FormControl<AuthFormName> => {
	return {
		type: FormControlType.Text,
		subType: 'email',
		name: 'email',
		label: 'authForm.label.email',
		placeholder: 'authForm.yourEmail',
		value: '',
		validators: [required(), email()],
		maxLength: INPUT_MAXLENGTH,
	}
}

const createNameFormControl = (): FormControl<AuthFormName> => {
	return {
		type: FormControlType.Text,
		subType: 'text',
		name: 'name',
		label: 'authForm.label.name',
		placeholder: 'authForm.yourName',
		value: '',
		validators: [required()],
		maxLength: INPUT_MAXLENGTH,
	}
}

const createPhoneFormControl = (): FormControl<AuthFormName> => {
	return {
		type: FormControlType.Text,
		subType: 'tel',
		name: 'phone',
		label: 'authForm.label.phone',
		placeholder: 'authForm.yourPhone',
		value: '',
		validators: [required(), phone()],
		maxLength: INPUT_PHONE_MAXLENGTH,
	}
}

const createGroupsFormControl = (visitor: VisitorData): FormControl<AuthFormName> => {
	const groups = get(groupList)
	return {
		type: FormControlType.Select,
		name: 'group',
		label: 'authForm.label.group',
		placeholder: 'authForm.group',
		value: visitor?.group ?? '',
		validators: [required()],
		options: groups.map((g) => ({ text: g.name, value: g.key })),
	}
}

const createConsentFormControl = (): FormControl<AuthFormName> => {
	return {
		type: FormControlType.Checkbox,
		name: 'personalDataProcessingConsent',
		label: 'authForm.acceptTerms',
		value: false,
		validators: [checked()],
	}
}

const createHiddenConsentFormControl = (): FormControl<AuthFormName> => {
	return {
		type: FormControlType.Checkbox,
		name: 'personalDataProcessingConsent',
		label: 'topBar.gdprTitle',
		value: false,
		validators: [],
		isHidden: true,
	}
}

const getAuthFormConditions = (visitor: VisitorData) => {
	return {
		showEmail: shouldShowEmailFormControl(visitor),
		showName: shouldShowNameFormControl(visitor),
		showPhone: shouldShowPhoneFormControl(visitor),
		showGroups: shouldShowGroupFormControl(),
		showConsent: shouldShowConsentFormControl(),
	}
}

const getCustomAuthFormConditions = (formFieldOverriden: Partial<SmartsuppWidgetOptions>) => {
	return {
		showEmail: !!formFieldOverriden.emailControl,
		showName: !!formFieldOverriden.nameControl,
		showPhone: !!formFieldOverriden.numberControl,
		showGroups: !!formFieldOverriden.groupSelectEnabled,
		showConsent: !!formFieldOverriden.privacyNoticeEnabled && formFieldOverriden.privacyNoticeCheckRequired,
	}
}

export const shouldCreateAuthFormControls = (visitor: VisitorData): boolean => {
	return Object.values(getAuthFormConditions(visitor)).some((c) => c)
}

export const createAuthFormControls = (
	visitor: VisitorData,
	formFieldOverriden: Partial<SmartsuppWidgetOptions>,
): FormControl<AuthFormName>[] => {
	const authFormInputs: FormControl<AuthFormName>[] = []

	const { showEmail, showName, showPhone, showGroups, showConsent } = formFieldOverriden
		? getCustomAuthFormConditions(formFieldOverriden)
		: getAuthFormConditions(visitor)
	if (showName) authFormInputs.push(createNameFormControl())
	if (showEmail) authFormInputs.push(createEmailFormControl())
	if (showPhone) authFormInputs.push(createPhoneFormControl())
	if (showGroups) authFormInputs.push(createGroupsFormControl(visitor))

	if (showConsent) {
		authFormInputs.push(createConsentFormControl())
	} else if (
		authFormInputs.length > 0 &&
		(formFieldOverriden ? !!formFieldOverriden?.privacyNoticeEnabled : shouldShowConsentNotice(visitor))
	) {
		authFormInputs.push(createHiddenConsentFormControl())
	}

	return authFormInputs
}

export const loadAuthFormFromStorage = (): AuthFormValues | null => {
	const authFormData = getFromStorage(StorageItem.AuthForm)
	if (!authFormData) return null

	try {
		return JSON.parse(authFormData) as AuthFormValues
	} catch {
		return null
	}
}

export const saveAuthFormFieldToStorage = (field: AuthFormName, value: string) => {
	const storedValues = loadAuthFormFromStorage()
	const updatedField = { [field]: value }
	const updatedValues = storedValues ? { ...storedValues, ...updatedField } : updatedField
	setToStorage({ name: StorageItem.AuthForm, value: JSON.stringify(updatedValues) })
}

export const removeAuthFormFromStorage = () => {
	removeFromLocalStorage(StorageItem.AuthForm)
}
