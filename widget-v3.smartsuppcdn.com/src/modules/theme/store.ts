import type { SmartsuppWidgetOptions } from '@smartsupp/widget-loader-types'
import { writable } from 'svelte/store'

import { printWarning } from '@/utils/console'

import { colors } from './constants'
import { isColorValid } from './utils'

export type Theme = {
	color: string
	color2: string | null
	colorGradient: boolean
}

const createThemeColorStore = () => {
	const themeColorStore = writable<Theme>({ color: colors.smartsuppBlue, color2: null, colorGradient: true })
	const { subscribe, set } = themeColorStore

	const setThemeColor = (options: SmartsuppWidgetOptions | Theme) => {
		const { color, color2, colorGradient } = options
		if (!isColorValid(color)) {
			printWarning(`Provided color '${color}' is not valid. Default color will be used instead.`)
			return
		} else if (colorGradient && color2 && !isColorValid(color2)) {
			printWarning(`Provided color '${color2}' is not valid. Default color will be used instead.`)
			return
		}

		set({ color, color2, colorGradient })
	}

	return { subscribe, setThemeColor }
}

export const themeColor = createThemeColorStore()
