import { type Agent, AgentStatus } from '@smartsupp/websocket-client-visitor'
import { derived, writable } from 'svelte/store'

import { agents } from '@/modules/agents'

const createAssignedAgentsStore = () => {
	const assignedAgentIds = writable<string[]>([])
	const { subscribe, set, update } = assignedAgentIds

	const setAssignedAgentIds = (agentIds: string[]) => {
		set(agentIds)
	}

	const addAssignedAgentId = (agentId: string) => {
		update((state) => [...new Set([...state, agentId])])
	}

	const removeAssignedAgentId = (agentId: string) => {
		update((state) => state.filter((id) => id !== agentId))
	}

	return {
		subscribe,
		setAssignedAgentIds,
		addAssignedAgentId,
		removeAssignedAgentId,
	}
}

export const assignedAgentIds = createAssignedAgentsStore()

export const assignedAgents = derived([assignedAgentIds, agents], ([$assignedAgentIds, $agents]): Agent[] => {
	return $assignedAgentIds.map((id) => $agents[id]).filter(Boolean)
})

export const isChatAssigned = derived([assignedAgents], ([$assignedAgents]) => {
	return $assignedAgents.length > 0
})

export const assignedActiveAgents = derived([assignedAgents], ([$assignedAgents]): Agent[] => {
	return $assignedAgents.filter((a) => !a.disabled)
})

export const isAnyAssignedAgentOnline = derived([assignedAgents], ([$assignedAgents]): boolean => {
	return $assignedAgents.some((a) => a.status === AgentStatus.Online)
})
