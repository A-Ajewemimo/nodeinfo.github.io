type EventHandler<TPayload = unknown> = (payload: TPayload) => void

export const createEventEmitter = <TEvents extends Record<string, unknown>>() => {
	type THandler<TKey extends keyof TEvents> = EventHandler<TEvents[TKey]>

	const events = new Map<keyof TEvents, THandler<keyof TEvents>[]>()

	const on = <TKey extends keyof TEvents>(key: TKey, handler: THandler<TKey>) => {
		const handlers = events.get(key)
		if (handlers) {
			handlers.push(handler as THandler<keyof TEvents>)
		} else {
			events.set(key, [handler as THandler<keyof TEvents>])
		}
	}

	const off = <TKey extends keyof TEvents>(key: TKey, handler: THandler<TKey>) => {
		const handlers = events.get(key)
		if (!handlers) return
		events.set(
			key,
			handlers.filter((h) => h !== handler),
		)
	}

	const emit = <TKey extends keyof TEvents>(key: TKey, payload: TEvents[TKey]) => {
		const handlers = events.get(key)
		if (!handlers) return
		handlers.forEach((handler) => handler(payload))
	}

	return Object.freeze({ on, off, emit })
}
