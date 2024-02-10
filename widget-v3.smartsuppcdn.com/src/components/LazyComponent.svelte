<script context="module" lang="ts">
export type ComponentLoader = () => Promise<SvelteComponentModule>

export const loadedMap = new Map()

const loadComponent = async (loader: ComponentLoader) => {
	const component = (await loader()).default
	loadedMap.set(loader, component)
	return component
}
</script>

<script lang="ts">
import type { ComponentType } from 'svelte'
import { onMount } from 'svelte'

import type { SvelteComponentModule } from '@/types'

enum State {
	Initialized,
	Loading,
	Success,
	Error,
}

export let delay = 200
export let loader: ComponentLoader

let state = State.Initialized
let component: ComponentType | null = null
let error: Error | null = null
let loadTimer: number | undefined

const clearTimer = () => {
	window.clearTimeout(loadTimer)
}

const load = async () => {
	clearTimer()

	error = null
	component = null

	if (delay > 0) {
		state = State.Initialized
		loadTimer = window.setTimeout(() => {
			state = State.Loading
		}, delay)
	} else {
		state = State.Loading
	}

	try {
		component = await loadComponent(loader)
		state = State.Success
	} catch (e) {
		state = State.Error
		if (e instanceof Error) {
			error = e
		}
		if (!$$slots.error) {
			throw e
		}
	}

	clearTimer()
}

if (loadedMap.has(loader)) {
	state = State.Success
	component = loadedMap.get(loader)
} else {
	onMount(() => {
		void load()
	})
}
</script>

{#if state === State.Error}
	<slot name="error" {error} />
{:else if state === State.Loading}
	<slot name="loading" />
{:else if state === State.Success}
	<svelte:component this={component} />
{/if}
