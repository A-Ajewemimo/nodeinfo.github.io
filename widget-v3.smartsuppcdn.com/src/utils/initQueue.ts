type InitQueueFn = () => void

const createInitQueue = () => {
	const queue: InitQueueFn[] = []

	const push = (fn: InitQueueFn) => {
		queue.push(fn)
	}

	const executeAll = () => {
		while (queue.length > 0) {
			const fn = queue.shift()
			fn && fn()
		}
	}

	return Object.freeze({ push, executeAll })
}

export const initQueue = createInitQueue()
