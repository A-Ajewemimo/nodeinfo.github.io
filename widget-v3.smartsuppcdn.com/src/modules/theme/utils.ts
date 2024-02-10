import { TinyColor } from '@ctrl/tinycolor'

import { colors } from './constants'
import type { Theme } from './store'

interface GradientColors {
	from: string
	to: string
}

const RED_MULTIPLIER = 0.299
const GREEN_MULTIPLIER = 0.587
const BLUE_MULTIPLIER = 0.114
const HALF_DEGREES = 180

const LIGHT_SPIN = -20
const LIGHT_DESATURATE_RATIO = -0.25
const LIGHT_LIGHTEN_RATIO = 0.2

const DARK_SPIN = -5
const DARK_SATURATE_RATIO = 0.03
const DARK_DARKEN_RATIO = 0.5

const GRADIENT_DARKEN_AMOUNT = 5

const darken = (color: string, amount: number): string => {
	return new TinyColor(color).darken(amount).toHexString()
}

const getRgbString = (color: string): string => {
	const rbg = new TinyColor(color).toRgb()
	return `${rbg.r}, ${rbg.g}, ${rbg.b}`
}

export const isColorValid = (color: string): boolean => {
	return /^#[0-9A-F]{6}$/i.test(color)
}

export const isColorLight = (color: string): boolean => {
	const { r, g, b } = new TinyColor(color).toRgb()
	return Math.sqrt(RED_MULTIPLIER * (r * r) + GREEN_MULTIPLIER * (g * g) + BLUE_MULTIPLIER * (b * b)) > HALF_DEGREES
}

export const getLightenColor = (color: string): string => {
	const tinycolor = new TinyColor(color)
	const { s, l } = tinycolor.toHsl()
	return tinycolor
		.spin(LIGHT_SPIN)
		.desaturate(s * LIGHT_DESATURATE_RATIO)
		.lighten(l * LIGHT_LIGHTEN_RATIO)
		.toHexString()
}

export const getDarkenColor = (color: string, darkenRatio = DARK_DARKEN_RATIO): string => {
	const tinycolor = new TinyColor(color)
	const { s, l } = tinycolor.toHsl()
	return tinycolor
		.spin(DARK_SPIN)
		.saturate(s * DARK_SATURATE_RATIO)
		.darken(l * darkenRatio)
		.toHexString()
}

export const getThemeGradientColors = (theme: Theme): GradientColors => {
	const { color, color2, colorGradient } = theme
	if (colorGradient) {
		if (!color2) {
			if (isColorLight(color)) {
				return { from: color, to: getDarkenColor(color) }
			}
			return { from: color, to: getLightenColor(color) }
		}
		return { from: color, to: color2 }
	}
	return { from: color, to: color }
}

export const getPrimaryContentColor = (color: string): string => {
	return isColorLight(color) ? colors.slate900 : colors.white
}

export const getPrimaryContentOpacity = (color: string): number => {
	return isColorLight(color) ? 0.1 : 0.2
}

export const getPrimaryButtonColor = (color: string): string => {
	if (isColorLight(color)) {
		const luminance = new TinyColor(color).getLuminance()
		return luminance > 0.8 ? darken(color, Math.pow(10 * luminance, luminance)) : color
	}
	return color
}

const setCssVariable = (doc: Document, name: string, value: string) => {
	doc.documentElement.style.setProperty(name, value)
}

export const setThemeCssVariables = (doc: Document, theme: Theme) => {
	const { color } = theme

	const gradient = getThemeGradientColors(theme)
	const buttonGradient =
		gradient.from === '#ffffff' && gradient.from === gradient.to
			? { from: colors.slate300, to: colors.slate300 }
			: gradient
	const primaryContentColor = getPrimaryContentColor(color)
	setCssVariable(doc, '--color-primary', color)
	setCssVariable(doc, '--color-primary-content', primaryContentColor)
	setCssVariable(doc, '--color-primary-content-rgb', getRgbString(primaryContentColor))
	setCssVariable(doc, '--color-primary-gradient-from', gradient.from)
	setCssVariable(doc, '--color-primary-gradient-to', gradient.to)
	setCssVariable(doc, '--color-primary-gradient-button-from', buttonGradient.from)
	setCssVariable(doc, '--color-primary-gradient-button-to', buttonGradient.to)
	setCssVariable(doc, '--color-primary-gradient-hover-from', darken(gradient.from, GRADIENT_DARKEN_AMOUNT))
	setCssVariable(doc, '--color-primary-gradient-hover-to', darken(gradient.to, GRADIENT_DARKEN_AMOUNT))

	const primaryButtonColor = getPrimaryButtonColor(color)
	setCssVariable(doc, '--color-primary-button', primaryButtonColor)
	setCssVariable(doc, '--color-primary-button-hover', darken(primaryButtonColor, 10))
	setCssVariable(doc, '--color-primary-button-content', primaryContentColor)

	setCssVariable(doc, '--opacity-primary-content', String(getPrimaryContentOpacity(color)))
}
