import { eventEmitter } from '@/modules/events'
import { widgetOptions } from '@/modules/options'
import { getAnalyticsConsent } from '@/modules/storage'
import { visitor } from '@/modules/visitor'
import { printError } from '@/utils/console'
import { debugWidget } from '@/utils/debug'
import { getHostWindow } from '@/utils/window'

const hostWindow = getHostWindow()

const recordingsResult = (result: boolean, reason?: string) => {
	debugWidget(`recordings ${result ? '✅' : '⛔️'}${reason ? ` => reason: ${reason}` : ''}`)
}

export const initSmartlook = () => {
	const { smartlook, recordingOff } = widgetOptions.getOptions()
	if (!smartlook || !smartlook.enabled) {
		return recordingsResult(false, 'recordings are not enabled')
	}

	// Don't initialize Smartlook if it's already in parent window
	if (hostWindow.smartlook) {
		return recordingsResult(false, 'smartlook is already in parent window')
	}

	if (!getAnalyticsConsent()) {
		return recordingsResult(false, 'analytics consent not given')
	}

	if (recordingOff) {
		return recordingsResult(false, `recording is disabled by 'recordingOff' option`)
	}

	init()
}

const createScriptElement = (win: Window, src: string) => {
	const head = win.document.getElementsByTagName('head')[0]
	const script = win.document.createElement('script')
	script.async = true
	script.type = 'text/javascript'
	script.charset = 'utf-8'
	script.crossOrigin = 'anonymous'
	script.src = src
	head.appendChild(script)
}

const init = () => {
	const { smartlook: smartlookOptions, recordingDisable } = widgetOptions.getOptions()

	const smartlook = (hostWindow.smartlook = function (...args: unknown[]) {
		hostWindow.smartlook?.api?.push(args)
	})
	hostWindow.smartlook.api = []

	createScriptElement(hostWindow, smartlookOptions.scriptUrl)

	smartlook('init', smartlookOptions.key, {
		host: smartlookOptions.serverHost,
	})

	smartlook('record', {
		forms: true,
		numbers: true,
		emails: true,
		ips: false,
	})

	if (recordingDisable) {
		smartlook('pause')
		recordingsResult(false, `recording is disabled by 'recordingDisable' option`)
	} else {
		smartlook(() => {
			const visitorId = hostWindow.smartlook?.visitorId
			if (!visitorId) {
				printError('Smartlook visitorId is undefined')
				return
			}

			visitor.updateVisitorVariables({ smartlook_vid: visitorId })
			recordingsResult(true)
		})
		debugWidget('recordings: initializing ⏳')
	}
}

eventEmitter.on('analyticsConsentChanged', (hasConsent) => {
	if (hostWindow.smartlook) {
		hostWindow.smartlook(hasConsent ? 'resume' : 'pause')
		debugWidget(`recordings ${hasConsent ? 'resumed ▶️' : 'paused ⏸'}`)
		return
	}

	initSmartlook()
})
