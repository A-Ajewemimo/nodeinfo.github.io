import type { AppLocale } from '@/modules/translations'

import { printWarning } from './console'

interface TimeUnit {
	unit: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'
	amount: number
}

export const SECOND_IN_MS = 1000
export const MINUTE_IN_MS = 60000
export const HOUR_IN_MS = 3600000
export const DAY_IN_MS = 86400000
export const MONTH_IN_MS = 2628000000
export const YEAR_IN_MS = 31536000000

const roundTimeToMinute = (time: number): number => Math.floor(time / MINUTE_IN_MS) * MINUTE_IN_MS

export const isSameMinute = (timeA: string, timeB: string): boolean => {
	return roundTimeToMinute(new Date(timeA).getTime()) === roundTimeToMinute(new Date(timeB).getTime())
}

export const isSameDay = (date1: Date, date2: Date): boolean => {
	const dateA = new Date(date1)
	const dateB = new Date(date2)
	return (
		dateA.getDate() === dateB.getDate() &&
		dateA.getMonth() === dateB.getMonth() &&
		dateA.getFullYear() === dateB.getFullYear()
	)
}

export const differenceInMilliseconds = (date1: Date, date2: Date): number => {
	return date1.getTime() - date2.getTime()
}

export const timeFormatter = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: 'numeric' })
export const dateFormatter = new Intl.DateTimeFormat(undefined, {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
})

export const getAutoDateFormatter = (date: Date): Intl.DateTimeFormat => {
	return isSameDay(new Date(), date) ? timeFormatter : dateFormatter
}

export const isRelativeTimeFormatSupported = (): boolean => {
	return typeof Intl !== 'undefined' && 'RelativeTimeFormat' in Intl
}

const createRelativeTimeFormatter = (locale?: AppLocale): Intl.RelativeTimeFormat | null => {
	if (!isRelativeTimeFormatSupported()) return null
	return new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })
}

const timeUnits: TimeUnit[] = [
	{ unit: 'year', amount: YEAR_IN_MS },
	{ unit: 'month', amount: MONTH_IN_MS },
	{ unit: 'day', amount: DAY_IN_MS },
	{ unit: 'hour', amount: HOUR_IN_MS },
	{ unit: 'minute', amount: MINUTE_IN_MS },
	{ unit: 'second', amount: SECOND_IN_MS },
]

export const formatRelativeTime = (elapsedMs: number, locale?: AppLocale): string => {
	const relativeTimeFormatter = createRelativeTimeFormatter(locale)
	if (!relativeTimeFormatter) {
		printWarning('Relative time format not supported')
		return ''
	}

	for (const { unit, amount } of timeUnits) {
		// Show 'now' for less than 1 minute
		if (unit === 'second') {
			return relativeTimeFormatter.format(0, 'second')
		}

		if (Math.abs(elapsedMs) > amount) {
			return relativeTimeFormatter.format(Math.round(elapsedMs / amount), unit)
		}
	}
	return ''
}
