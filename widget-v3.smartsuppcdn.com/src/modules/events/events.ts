import type { Message } from '@smartsupp/smartsupp-message'
import type { Agent, Rating, VisitorEvents } from '@smartsupp/websocket-client-visitor'

import { createEventEmitter } from './eventEmitter'

type AppEvents = {
	analyticsConsentChanged: boolean
	marketingConsentChanged: boolean
	messageSent: Message
	messageReceived: Message
	chatClosed: Message
	chatVisitorClosed: Message
	contactAcquired: VisitorEvents.ContactAcquired
	agentJoined: Agent
	chatRated: Rating
	transcriptPdf: VisitorEvents.ChatTranscriptPdf
	messengerClose: boolean
}

export const eventEmitter = createEventEmitter<AppEvents>()
