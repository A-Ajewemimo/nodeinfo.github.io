import { RatingValue } from '../chatRating'
import { type GAEventParams, sendEvent } from './googleAnalyticsSetup'

// GA names
const visitorStartedConversation = 'Visitor_started_conversation'
const triggerMessageSent = 'Trigger_message_sent'
const triggerMessageViewed = 'Trigger_message_viewed'
const triggerVisitorReaction = 'Trigger_visitor_reaction'
const autoMessageSent = 'Auto_message_sent'
const autoMessageViewed = 'Auto_message_viewed'
const autoMessageVisitorReaction = 'Auto_message_visitor_reaction'
const chatbotSent = 'Chatbot_sent'
const chatbotViewed = 'Chatbot_viewed'
const chatbotInteraction = 'Chatbot_interaction'
const chatbotButtonInteraction = 'Chatbot_button_interaction'
const chatbotVisitorReaction = 'Chatbot_visitor_reaction'
const agentServedConversation = 'Agent_served_conversation'
const contactAcquired = 'Contact_acquired'
const authFormFilled = 'Auth_form_filled'
const offlineMessageSent = 'Offline_message_sent'
const feedbackSent = 'Feedback_sent'
const feedbackTextSent = 'Feedback_text_sent'
const urlCardOpened = 'Url_card_opened'

// Shared settings
const GASettings: GAEventParams = {
	event_category: 'Smartsupp_v3',
	non_interaction: true,
}

const fireGA = (action: string, eventParams?: GAEventParams): void => {
	const googleAnalyticsData: GAEventParams = { ...GASettings, ...eventParams }
	sendEvent(action, googleAnalyticsData)
}
// TODO remove triggers when they will be deprecated
export const triggerSentMessageGA = (triggerName = ''): void => fireGA(triggerMessageSent, { event_label: triggerName })

export const triggerMessageOpenedGA = (triggerName: string): void =>
	fireGA(triggerMessageViewed, { event_label: triggerName })

export const triggerVisitorReactionGA = (triggerName = ''): void =>
	fireGA(triggerVisitorReaction, { event_label: triggerName })

export const autoMessageSentGA = (triggerName = ''): void => fireGA(autoMessageSent, { event_label: triggerName })

export const autoMessageOpenedGA = (triggerName: string): void =>
	fireGA(autoMessageViewed, { event_label: triggerName })

export const autoMessageVisitorReactionGA = (triggerName = ''): void =>
	fireGA(autoMessageVisitorReaction, { event_label: triggerName })

export const chatbotSentGA = (chatbotTitle = ''): void => fireGA(chatbotSent, { event_label: chatbotTitle })

export const chatbotOpenedGA = (triggerName: string): void => fireGA(chatbotViewed, { event_label: triggerName })

export const chatbotInteractionGA = (chatbotTitle = ''): void =>
	fireGA(chatbotInteraction, { event_label: chatbotTitle })

export const chatbotButtonInteractionGA = (buttonTitle = ''): void =>
	fireGA(chatbotButtonInteraction, { event_label: buttonTitle })

export const chatbotVisitorReactionGA = (chatbotTitle = ''): void =>
	fireGA(chatbotVisitorReaction, { event_label: chatbotTitle })

export const visitorStartedConversationGA = (): void => fireGA(visitorStartedConversation)

export const agentServedConversationGA = (agentName: string): void =>
	fireGA(agentServedConversation, { event_label: agentName })

export const authFormFilledGA = (): void => fireGA(authFormFilled)

export const visitorSentOfflineMessage = (): void => fireGA(offlineMessageSent)

export const feedbackSentGA = (value: RatingValue, text: string | null): void => {
	const eventParams = {
		event_label: text ? text : RatingValue[value] || '',
		value: value,
	}
	fireGA(text ? feedbackTextSent : feedbackSent, eventParams)
}

export const contactAcquiredGA = (acquiredBy: string): void => fireGA(contactAcquired, { event_label: acquiredBy })

export const cardOpenedGA = (url: string): void => fireGA(urlCardOpened, { event_label: url })
