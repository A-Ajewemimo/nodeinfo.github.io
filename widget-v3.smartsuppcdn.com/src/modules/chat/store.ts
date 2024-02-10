import { AccountStatus, AgentStatus, ChatStatus } from '@smartsupp/websocket-client-visitor'
import { derived, writable } from 'svelte/store'

import { assignedActiveAgents } from './assignedAgents'
import { dynamicWidgetOptions } from './dynamicWidgetOptions'

export enum ChatCloseStatus {
	Open,
	Closed,
	ClosedByVisitor,
}

export const accountStatus = writable<AccountStatus>(AccountStatus.Offline)
export const chatStatus = writable<ChatStatus | null>(null)
export const chatCloseStatus = writable<ChatCloseStatus>(ChatCloseStatus.Open)
export const isAgentTyping = writable<boolean>(false)
export const lastReadAt = writable<string | null>(null)

export const isChatPending = derived([chatStatus], ([$chatStatus]): boolean => {
	return $chatStatus === ChatStatus.Pending
})

export const isChat = derived([chatStatus], ([$chatStatus]): boolean => {
	return $chatStatus !== null
})

export const isChatServed = derived([chatStatus], ([$chatStatus]): boolean => {
	return $chatStatus === ChatStatus.Served
})

export const isChatOpened = derived([chatStatus], ([$chatStatus]): boolean => {
	return $chatStatus === ChatStatus.Open
})

export const isChatClosed = derived([chatStatus], ([$chatStatus]): boolean => {
	return $chatStatus === ChatStatus.Closed
})

export const canCloseChat = derived([isChatServed, chatCloseStatus], ([$isChatServed, $chatCloseStatus]): boolean => {
	return $isChatServed && $chatCloseStatus === ChatCloseStatus.Open
})

export const setChatClosed = (value: boolean, { byVisitor = false } = {}) => {
	if (value) {
		chatCloseStatus.set(byVisitor ? ChatCloseStatus.ClosedByVisitor : ChatCloseStatus.Closed)
	} else {
		chatCloseStatus.set(ChatCloseStatus.Open)
	}
}

export const isWidgetOnline = derived(
	[accountStatus, assignedActiveAgents],
	([$accountStatus, $assignedActiveAgents]): boolean => {
		if ($assignedActiveAgents.length === 0) {
			return $accountStatus === AccountStatus.Online
		}

		return $assignedActiveAgents.some((a) => a.status === AgentStatus.Online)
	},
)

export const isAuthenticationDisabled = derived([dynamicWidgetOptions], ([$dynamicWidgetOptions]): boolean => {
	return $dynamicWidgetOptions.disableAuthentication
})
