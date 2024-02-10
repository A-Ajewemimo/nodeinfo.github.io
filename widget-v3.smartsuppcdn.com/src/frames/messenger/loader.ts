import type { SvelteComponentModule } from '@/types'

export const messengerLoader = () => import('./WidgetMessenger.svelte') as unknown as Promise<SvelteComponentModule>
