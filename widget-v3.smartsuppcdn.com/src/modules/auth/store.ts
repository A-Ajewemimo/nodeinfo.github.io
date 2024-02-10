import { AccountStatus } from '@smartsupp/websocket-client-visitor'
import { get } from 'svelte/store'

import { accountStatus, isAuthenticationDisabled } from '@/modules/chat'
import { closeDrawer } from '@/modules/drawers'
import { widgetOptions } from '@/modules/options'
import { sendMessage } from '@/modules/textarea'
import { visitor } from '@/modules/visitor'
import { visitorClientProvider } from '@/modules/websocketClient'

import { authFormFilledGA } from '../googleAnalytics'
import type { AuthFormValues } from './types'
import { shouldCreateAuthFormControls } from './utils'

const isVisitorAuthenticated = (): boolean => {
	const visitorData = get(visitor)
	return !!visitorData?.variables?.authenticated
}

export const isGdprApproved = (): boolean => {
	return get(visitor)?.gdprApproved || false
}

export const shouldShowAuthForm = (): boolean => {
	if (get(isAuthenticationDisabled)) return false
	if (isVisitorAuthenticated()) return false

	const visitorData = get(visitor)
	if (!shouldCreateAuthFormControls(visitorData)) return false

	const { requireLogin } = widgetOptions.getOptions()
	const isAccountOffline = get(accountStatus) === AccountStatus.Offline
	return !!requireLogin || isAccountOffline
}

export const submitAuthForm = async (values: AuthFormValues) => {
	const { privacyNoticeCheckRequired } = widgetOptions.getOptions()
	const visitorData = get(visitor)
	const name = visitorData?.name ?? (values.name as string | undefined)
	const email = visitorData?.email ?? (values.email as string | undefined)
	const phone = visitorData?.phone ?? (values.phone as string | undefined)
	const group = (values.group as string | undefined) ?? visitorData?.group
	const personalDataProcessingConsent = values.personalDataProcessingConsent as string | undefined

	const authenticateValues = {
		...(name && { name }),
		...(email && { email }),
		...(phone && { phone }),
		...(group && { group }),
		...(personalDataProcessingConsent && privacyNoticeCheckRequired && { personalDataProcessingConsent }),
	}

	await visitorClientProvider.getClient().authenticate(authenticateValues)
	authFormFilledGA()
	await sendMessage()
	closeDrawer()
}
