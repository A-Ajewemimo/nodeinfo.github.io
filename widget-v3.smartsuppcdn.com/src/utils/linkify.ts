import linkifyIt, { type Match } from 'linkify-it'
import tlds from 'tlds'

import { escape } from '@/utils/escapeHtml'

import { getHostWindow } from './window'

export type LinkifyOptions = {
	clamp?: boolean
	replaceText?: string
}

export const clampStyle =
	'overflow: hidden; display: -webkit-inline-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; line-clamp: 1; word-break: break-all;'

export const linkifier = linkifyIt().tlds(tlds).set({ fuzzyIP: true })
export const linkifierCards = linkifyIt().tlds(tlds).add('ftp:', null).add('//', null).add('mailto:', null)

const createLink = (url: string, text: string, options?: LinkifyOptions) => {
	const hostname = getHostWindow().location.hostname
	const target = hostname.length > 0 && url.includes(hostname) ? '_parent' : '_blank'
	return `<a href="${url}" target="${target}" rel="noreferrer noopener" title="${url}" style="${
		options?.clamp && !options?.replaceText ? clampStyle : ''
	}">${text}</a>`
}

export const linkify = (text: string, options?: LinkifyOptions): string => {
	if (text === '') return text
	const matches = linkifier.match(text)
	if (!matches) return escape(text)

	let linkifiedText = ''
	let lastIndex = 0
	matches.forEach((match) => {
		let textToAdd = ''
		let linkToAdd = ''
		const blockedLink = isLinkBlocked(text, match)
		const clamp = options?.clamp && match.text.length > 30 && !blockedLink
		// Add preceding text if there is any
		if (match.index > lastIndex) {
			textToAdd = text.substring(lastIndex, match.index)
		}

		linkToAdd = createLink(match.url, match.text, { ...options, clamp })
		lastIndex = match.lastIndex
		if (blockedLink) {
			textToAdd = textToAdd.substring(0, textToAdd.length - 1)
			lastIndex += 1
		}

		if (clamp && !isLinkSeparated(text, match)) {
			linkToAdd = `\n${linkToAdd}\n`
			textToAdd = textToAdd.trimEnd()
			if (text[lastIndex]?.match(/\s/)) {
				lastIndex += 1
			}
		}
		linkifiedText += escape(textToAdd) + linkToAdd
	})

	// Add remaining text if there is any
	if (text.length > lastIndex) {
		linkifiedText += escape(text.substring(lastIndex))
	}

	return linkifiedText
}

export const isLinkBlocked = (text: string, link: Match) => {
	if (text[link.index - 1] === '"' && text[link.lastIndex] === '"') return true
	return false
}

export const isLinkSeparated = (text: string, link: Match) => {
	if (
		(link.index <= 1 && text.substring(link.lastIndex, link.lastIndex + 3).match(/[\n\r]+/)) ||
		(text.substring(link.index - 3, link.index).match(/[\n\r]+/) &&
			text.substring(link.lastIndex, link.lastIndex + 3).match(/[\n\r]+/)) ||
		(text.substring(link.index - 3, link.index).match(/[\n\r]+/) && link.lastIndex > text.length - 3) ||
		(link.index <= 1 && link.lastIndex >= text.length - 2)
	)
		return true
	return false
}
