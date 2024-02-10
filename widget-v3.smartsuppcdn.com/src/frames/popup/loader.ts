import type { SvelteComponentModule } from '@/types'

export const popupLoader = () => import('./WidgetPopup.svelte') as Promise<SvelteComponentModule>
