import { type Message, MessageSubType } from '@smartsupp/smartsupp-message'

const SPAMMING_MESSAGE_COUNT = 10
const SPAMMING_MESSAGES_DELAY = 10000
const SPAMMING_BLOCKING_TIME = 30000

const emojiMap: Record<string, string> = {
	':)': '🙂',
	':-)': '🙂',
	':D': '😀',
	':-D': '😀',
	';)': '😉',
	';-)': '😉',
	'<3': '❤️',
	':(': '😞',
	':-(': '😞',
	':P': '😛',
	':-P': '😛',
	':-o': '😮',
	':O': '😮',
	':/': '😕',
	':-/': '😕',
}

const createEmojiRegExp = (includeEndOfLine: boolean): RegExp => {
	const capturingGroup = `(${includeEndOfLine ? '$|' : ''} )`
	return new RegExp(
		Object.keys(emojiMap)
			.map((key) => `${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}${capturingGroup}`)
			.join('|'),
		'gi',
	)
}

export const replaceEmoticonsByEmojis = (text: string, includeEndOfLine = false): string => {
	const emojiRegExp = createEmojiRegExp(includeEndOfLine)
	return text.replace(emojiRegExp, (match) => {
		const emojiKey = Object.keys(emojiMap).find((key) => match.toUpperCase().includes(key))
		if (!emojiKey) return match

		const afterString = match.endsWith(' ') ? ' ' : ''
		return `${emojiMap[emojiKey]}${afterString}`
	})
}
// TODO create test fo this method
export const isMessageSpamming = (messages: Message[]) => {
	if (messages.length > 0 && messages.length % SPAMMING_MESSAGE_COUNT === 0) {
		const last10Messages = messages.slice(-SPAMMING_MESSAGE_COUNT)
		const lastMessageTime = new Date(messages[messages.length - 1].createdAt).getTime()
		if (new Date().getTime() - lastMessageTime > SPAMMING_BLOCKING_TIME) return false
		if (!last10Messages.every((message) => message.subType === MessageSubType.Contact)) return false
		const last10MessageTime = new Date(last10Messages[0].createdAt).getTime()
		if (lastMessageTime - last10MessageTime < SPAMMING_MESSAGES_DELAY) {
			return true
		}
	}
	return false
}
