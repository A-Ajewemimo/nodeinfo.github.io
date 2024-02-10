import { getHostWindow } from './window'

const DEBUG_STORAGE_KEY = 'debug'

const isDebugEnabled = (name: string): boolean => {
	try {
		const debugValue = getHostWindow().localStorage.getItem(DEBUG_STORAGE_KEY)
		if (!debugValue) return false

		if (debugValue === name || debugValue === '*') return true

		const prefixMask = name.match(/^\w+:/g)
		if (prefixMask) return debugValue === `${prefixMask[0]}*`

		return false
	} catch {
		return false
	}
}

const createDebug =
	(name: string, color: string) =>
	(event: string, ...args: unknown[]) => {
		if (!isDebugEnabled(name)) return

		// eslint-disable-next-line no-console
		console.debug(`%c${name}`, `color: ${color};`, event, ...args)
	}

export const debugWidget = createDebug('smartsupp:widget', '#1233df')
