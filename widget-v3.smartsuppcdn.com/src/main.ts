import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/global.css'

import { widgetApi } from '@/modules/api'
import { provideVersionInfo } from '@/modules/app'
import { initializeGA } from '@/modules/googleAnalytics'
import { getSmartsuppWidget, widgetOptions } from '@/modules/options'
import { initSmartlook } from '@/modules/smartlook'
import { themeColor } from '@/modules/theme'

import App from './App.svelte'

const widget = getSmartsuppWidget(window)
window.widget = widget // register widget - this reference is required by Vite (renderBuiltUrl)

widgetOptions.init(widget.options)
widget.installApi(widgetApi)
themeColor.setThemeColor(widget.options)
initSmartlook()
provideVersionInfo()
initializeGA()

const app = new App({
	target: document.getElementById('app') as HTMLElement,
})

export default app
