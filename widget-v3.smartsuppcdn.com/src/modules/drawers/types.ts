import type { SvelteComponent } from 'svelte'

export enum DrawerId {
	Options,
	GdprAndPrivacy,
	AuthForm,
	CloseChat,
	ChatRating,
}

export type DrawerComponent = typeof SvelteComponent<Record<string, unknown>>

export type Drawers = Record<DrawerId, DrawerComponent>
