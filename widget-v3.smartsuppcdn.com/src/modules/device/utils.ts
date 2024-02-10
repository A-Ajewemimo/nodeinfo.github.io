export const isTouchDevice = () => {
	return 'ontouchstart' in window || (navigator as unknown as { msMaxTouchPoints: number }).msMaxTouchPoints > 0
}

// Source: https://stackoverflow.com/a/9039885/1125577
export const isIOsDevice = () => {
	return (
		['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
		// iPad on iOS 13 detection
		(navigator.userAgent.includes('Mac') && 'ontouchend' in document)
	)
}
