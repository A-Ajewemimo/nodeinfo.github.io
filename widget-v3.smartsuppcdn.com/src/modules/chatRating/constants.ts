import type { ChatRatingInfo } from './types'

export enum RatingValue {
	Good = 5,
	Normal = 3,
	Bad = 1,
}

export const chatRatingInfoMap: Record<number, ChatRatingInfo> = {
	[RatingValue.Good]: {
		value: RatingValue.Good,
		text: 'agentRating.good.formText',
		name: 'good',
	},
	[RatingValue.Normal]: {
		value: RatingValue.Normal,
		text: 'agentRating.normal.formText',
		name: 'neutral',
	},
	[RatingValue.Bad]: { value: RatingValue.Bad, text: 'agentRating.bad.formText', name: 'bad' },
}

export const ratingInfoArray = Object.values(chatRatingInfoMap).sort((a, b) => b.value - a.value)
