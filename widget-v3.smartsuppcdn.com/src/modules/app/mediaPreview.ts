import { derived, writable } from 'svelte/store'

import type { PreviewedMedia } from './types'

export const previewedMedia = writable<PreviewedMedia | null>(null)

export const shouldRenderMediaPreview = derived([previewedMedia], ([$previewedImage]) => !!$previewedImage)
