import { reUnescapedHtml } from './regExps'

export const escape = (str: string): string => {
	const htmlEscapes: { [key: string]: string } = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#39;',
	}

	const reHasUnescapedHtml = RegExp(reUnescapedHtml.source)

	return str && reHasUnescapedHtml.test(str) ? str.replace(reUnescapedHtml, (chr) => htmlEscapes[chr]) : str || ''
}
