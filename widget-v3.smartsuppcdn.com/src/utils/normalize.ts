import type { Dictionary } from '@/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const normalize = <T extends Record<string, any>>(key: string, list: T[]): Dictionary<T> => {
	const data: Dictionary<T> = {}
	for (const element of list) {
		const index = String(element[key])
		data[index] = element
	}
	return data
}
