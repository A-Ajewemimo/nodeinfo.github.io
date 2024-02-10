import { writable } from 'svelte/store'

import type { ApiProps } from './types'

export const apiProps = writable<Partial<ApiProps>>({})

export const updateApiProps = <TName extends keyof ApiProps>(name: TName, value: ApiProps[TName]) => {
	apiProps.update((props) => ({ ...props, [name]: value }))
}
