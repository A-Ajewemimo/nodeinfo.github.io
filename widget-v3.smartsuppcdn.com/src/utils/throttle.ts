export const throttle = <F extends (...args: Parameters<F>) => ReturnType<F>>(fn: F, waitFor = 300): Throttled<F> => {
	let timeout: ReturnType<typeof setTimeout> | null

	const throttled = (...args: Parameters<F>) => {
		if (timeout) return
		fn(...args)
		timeout = setTimeout(() => (timeout = null), waitFor)
	}

	return throttled
}

export type Throttled<F extends (...args: Parameters<F>) => ReturnType<F>> = (...args: Parameters<F>) => void
