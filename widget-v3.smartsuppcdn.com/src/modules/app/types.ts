import type { Attachment } from '@smartsupp/smartsupp-message'

export enum NotificationSound {
	Default = 'blackberry2.mp3',
}

export enum ConnectionStatus {
	Connecting = 'connecting',
	Connected = 'connected',
	Disconnected = 'disconnected',
}

export enum PreviewedMediaType {
	Image = 'image',
	Video = 'video',
}

export type PreviewedMedia = PreviewedImage | PreviewedVideo
interface PreviewedImage {
	type: PreviewedMediaType.Image
	attachment: Attachment.Image
}
interface PreviewedVideo {
	type: PreviewedMediaType.Video
	attachment: Attachment.File
}
