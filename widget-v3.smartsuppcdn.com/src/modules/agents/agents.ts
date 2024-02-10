import { type Agent, AgentStatus, type VirtualAgent } from '@smartsupp/websocket-client-visitor'
import { derived, writable } from 'svelte/store'

import { DEFAULT_GROUP } from '@/modules/groups'
import { visitor } from '@/modules/visitor'
import { normalize } from '@/utils/normalize'

import type { AgentDictionary } from './types'

const createAgentsStore = () => {
	const agents = writable<AgentDictionary>({})
	const { update, subscribe, set } = agents

	const setAgents = (agents: Agent[]) => {
		set(normalize('id', agents))
	}

	const addAgent = (agent: Agent) => {
		update((state) => ({ ...state, [agent.id]: agent }))
	}

	const updateAgent = (id: Agent['id'], changes: Partial<Omit<Agent, 'id'>>) => {
		update((state) => {
			if (!state[id]) return state
			return { ...state, [id]: { ...state[id], ...changes } }
		})
	}

	const setVirtualAgent = (virtualAgent: VirtualAgent) => {
		const { description, avatar, name: fullname } = virtualAgent
		const agent: Partial<Agent> = {}
		if (description) agent.description = description
		if (avatar) agent.avatar = avatar
		if (fullname) agent.fullname = fullname
		update((state) => {
			Object.keys(state).forEach((id) => {
				state[id] = { ...state[id], ...agent }
			})
			return state
		})
	}

	return {
		subscribe,
		setAgents,
		addAgent,
		updateAgent,
		setVirtualAgent,
	}
}

export const agents = createAgentsStore()

export const getAgentById = (agentId: string) =>
	derived([agents], ([$agents]): Agent | null => {
		return $agents[agentId] ?? null
	})

export const activeAgents = derived([agents], ([$agents]): Agent[] => {
	return Object.values($agents).filter((a) => !a.disabled)
})

export const activeAgentsByGroup = derived([activeAgents, visitor], ([$activeAgents, $visitor]): Agent[] => {
	const group = $visitor?.group
	if (!group || group === DEFAULT_GROUP) return $activeAgents

	return $activeAgents.filter((a) => a.groups.length === 0 || a.groups.includes(group))
})

export const activeOnlineAgentsByGroup = derived([activeAgentsByGroup], ([$activeAgentsByGroup]): Agent[] => {
	return $activeAgentsByGroup.filter((a) => a.status === AgentStatus.Online)
})
