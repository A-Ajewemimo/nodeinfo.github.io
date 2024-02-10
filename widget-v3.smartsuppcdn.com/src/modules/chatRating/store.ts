import { writable } from 'svelte/store'

export const ratingMessageId = writable<string | null>(null)
