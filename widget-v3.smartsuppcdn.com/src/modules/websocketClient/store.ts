import { writable } from 'svelte/store'

import { createPersistedStore } from '@/utils/persistedStore'

import { StorageItem } from '../storage'

export const isClientConnected = writable(false)

export const sessionId = createPersistedStore(StorageItem.SessionId, '')
