export enum StorageItem {
	AnalyticsConsent = 'analyticsConsent',
	AuthForm = 'authForm',
	IsMessengerFrameExpanded = 'isMessengerFrameExpanded',
	IsMessengerFrameOpened = 'opened',
	MarketingConsent = 'marketingConsent',
	Message = 'message',
	RatingText = 'ratingText',
	SoundsEnabled = 'enableSounds',
	VisitorId = 'vid',
	Visits = 'visits',
	SessionId = 'sessionId',
}

export interface SetToStorageParams {
	name: StorageItem
	value: string
}
