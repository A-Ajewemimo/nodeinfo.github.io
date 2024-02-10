import { eventEmitter } from '@/modules/events'
import { widgetOptions } from '@/modules/options'
import { getAnalyticsConsent } from '@/modules/storage'
import { debugWidget } from '@/utils/debug'

interface GoogleAnalyticsAccount {
	key: string
	options?: {
		cookieDomain: string
		name?: string
	}
}

export type GAEventParams = Gtag.EventParams & Gtag.ControlParams & Gtag.CustomParams

const accounts: GoogleAnalyticsAccount[] = []

let isGAInitialized = false
let windowTop: Window
let isGtagOnParent = false
let gtag: Gtag.Gtag

export const initializeGA = () => {
	const { googleAnalyticsEnabled } = widgetOptions.getOptions()
	windowTop = (window.top as Window) || window
	if (googleAnalyticsEnabled) {
		if (windowTop.gtag) {
			gtag = windowTop.gtag
			isGtagOnParent = true
		}
		eventEmitter.on('analyticsConsentChanged', onConsentUpdate)
		if (!isGAInitialized && getAnalyticsConsent()) {
			configureGA()
		}
	}
}

const onConsentUpdate = (consent: boolean) => {
	if (!isGAInitialized && consent) {
		configureGA()
	}
}

const configureGA = () => {
	const { gaKey, gaOptions, googleAnalyticsManual, googleAnalyticsMeasurementIds } = widgetOptions.getOptions()
	const options = gaOptions || { cookieDomain: 'auto' }

	if (gaKey) {
		accounts.push({
			key: gaKey,
			options,
		})
	} else if (googleAnalyticsManual && googleAnalyticsMeasurementIds) {
		googleAnalyticsMeasurementIds.forEach((id) => {
			accounts.push({
				key: id,
				options,
			})
		})
	} else {
		try {
			accounts.push(...getParentGaAccounts())
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : (err as string)
			debugWidget('Error during getting GA top trackers', errorMessage)
		}
	}

	if (accounts.length > 0 && !isGtagOnParent) {
		initializeGtag()
	}

	if (accounts.length !== 0) {
		setupAccounts()

		isGAInitialized = true
		debugWidget('GA initialized')
	} else {
		debugWidget('No GA to setup')
	}
}

const getParentGaAccounts = (): GoogleAnalyticsAccount[] => {
	const gaAccounts: GoogleAnalyticsAccount[] = []
	if (!windowTop.ga && !windowTop.google_tag_manager) throw new Error('Parent GA object is not available')
	gaAccounts.push(...getGtmGaAccounts())
	const ga3GaAccounts = getGa3GaAccounts()
	ga3GaAccounts.forEach((account) => {
		const foundIndex = gaAccounts.findIndex((item) => item.key === account.key)
		if (foundIndex === -1) gaAccounts.push(account)
	})
	return gaAccounts
}

const getGa3GaAccounts = () => {
	const { gaName } = widgetOptions.getOptions()
	const ga3Accounts: GoogleAnalyticsAccount[] = []
	if (windowTop.ga) {
		const { ga } = windowTop
		ga(() => {
			// If there are trackers on users webiste
			const topTrackers = ga.getAll()
			debugWidget('topTrackers', topTrackers)
			if (topTrackers) {
				topTrackers.every((tracker) => {
					const nonAccountTopGAOptions: GoogleAnalyticsAccount = {
						key: tracker.get('trackingId'),
						options: {
							cookieDomain: tracker.get('cookieDomain') || 'auto',
							name: tracker.get('name') || '',
						},
					}
					// If there is gaName specified and the user only wants to link the account
					// to a specific account, then search the topTrackers and if there is one
					// that has this name, then set it and break
					if (gaName && nonAccountTopGAOptions.options && nonAccountTopGAOptions.options.name === gaName) {
						ga3Accounts.push(nonAccountTopGAOptions)
						return false
					}
					ga3Accounts.push(nonAccountTopGAOptions)
					return true
				})
			}
		})
	}
	return ga3Accounts
}

const getGtmGaAccounts = (): GoogleAnalyticsAccount[] => {
	const gtmGaAccounts: GoogleAnalyticsAccount[] = []
	if (windowTop.google_tag_manager) {
		const gtmKeys = Object.keys(windowTop.google_tag_manager)
		gtmKeys.forEach((key) => {
			if (key.match(/(UA-\d*-\d*)|(G-([A-Z,0-9]*))/g)) {
				gtmGaAccounts.push({
					key,
					options: { cookieDomain: 'auto' },
				})
			}
		})
	}
	return gtmGaAccounts
}

const initializeGtag = () => {
	const documentTop = windowTop.document
	const { head } = documentTop
	const script = documentTop.createElement('script')

	script.id = 'gtag'
	script.type = 'text/javascript'
	script.async = true
	script.src = `https://www.googletagmanager.com/gtag/js`

	head.insertBefore(script, head.firstChild)

	windowTop.dataLayer = windowTop.dataLayer || []
	windowTop.gtag = function gtag() {
		// eslint-disable-next-line
		windowTop.dataLayer.push(arguments)
	}
	gtag = windowTop.gtag
	gtag('js', new Date())
}

const filterParentAccounts = () => {
	let filteredAccounts: GoogleAnalyticsAccount[] = []
	if (isGtagOnParent) {
		const parentAccounts = getGtmGaAccounts()
		accounts.forEach((account) => {
			if (!parentAccounts.find(({ key }) => key === account.key)) filteredAccounts.push(account)
		})
	} else {
		filteredAccounts = [...accounts]
	}
	return filteredAccounts
}

const setupAccounts = () => {
	filterParentAccounts().forEach((account) => {
		const { key, options } = account
		let gaOptions: Gtag.CustomParams = {}
		// setup cookieDomain
		if (options) {
			gaOptions = {
				cookie_domain: options.cookieDomain,
			}
			if (options.name) gaOptions.name = options.name
		} else {
			gaOptions = {
				cookie_domain: windowTop?.document.domain || '',
			}
		}
		gtag('config', key, gaOptions)
	})
}

export const sendEvent = (action: string, eventParams: GAEventParams) => {
	const { googleAnalyticsEnabled } = widgetOptions.getOptions()

	if (!googleAnalyticsEnabled || !windowTop.gtag || !getAnalyticsConsent() || windowTop.document.hidden) return

	try {
		accounts.forEach((account) => {
			eventParams.send_to = account.key
			gtag('event', action, eventParams)
			debugWidget(`Smartsupp: GA event ${action} - ${JSON.stringify(eventParams)}`)
		})
	} catch (err) {
		const errorMessage = err instanceof Error ? err.message : (err as string)
		debugWidget('Smartsupp: GA error:', errorMessage)
	}
}
