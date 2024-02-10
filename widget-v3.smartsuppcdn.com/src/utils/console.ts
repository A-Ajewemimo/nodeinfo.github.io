const printMessage =
	(printFn: (message: string, ...args: unknown[]) => void) =>
	(message: string, ...args: unknown[]) => {
		printFn(`[Smartsupp] ${message}`, ...args)
	}

// eslint-disable-next-line no-console
export const printWarning = printMessage(console.warn)

// eslint-disable-next-line no-console
export const printError = printMessage(console.error)
