<script lang="ts">
import type { SmartsuppWidgetOptions } from '@smartsupp/widget-loader-types'
import type { SvelteComponent } from 'svelte'

import { isTouchDevice } from '@/modules/device'

type IconButtonVariant = 'primary' | 'ghost' | 'success'
type IconButtonSize = 'md' | 'lg' | 'xl'

interface $$Props extends Partial<HTMLButtonElement> {
	icon: typeof SvelteComponent<Record<string, unknown>>
	iconDescription: string
	iconOrientation?: SmartsuppWidgetOptions['orientation']
	iconAnimation?: 'none' | 'spin'
	size?: IconButtonSize
	variant?: IconButtonVariant
	disabled?: boolean
	testId?: string
}

export let icon: $$Props['icon']
export let iconDescription: $$Props['iconDescription']
export let iconOrientation: $$Props['iconOrientation'] = 'right'
export let iconAnimation: $$Props['iconAnimation'] = 'none'
export let size: $$Props['size'] = 'md'
export let variant: $$Props['variant'] = 'ghost'
export let disabled: $$Props['disabled'] = undefined
export let testId: $$Props['testId'] = undefined

const iconScaleX = iconOrientation === 'right' ? 1 : -1
let scale = 1.2
$: {
	if (size === 'xl') scale = 1.5
}
</script>

<button
	type="button"
	tabindex="0"
	{...$$restProps}
	aria-label={iconDescription}
	class={`btn btn-${variant} btn-${size}`}
	class:btn-disabled={!!disabled}
	class:cursor-auto={isTouchDevice()}
	class:cursor-pointer={!isTouchDevice()}
	on:click|stopPropagation
	data-testid={testId}
>
	<div class:animate-spin={iconAnimation === 'spin'} class="w-full h-full flex items-center justify-center">
		<svelte:component
			this={icon}
			width="1em"
			height="1em"
			style={`transform: scale(${scale}) scaleX(${iconScaleX});`}
		/>
	</div>
</button>

<style lang="postcss">
.btn {
	@apply inline-flex items-center justify-center p-1 text-lg rounded-full transition-colors;
}

.btn-primary {
	@apply bg-primary-button text-primary-button-content hover-bg-primary-button-hover;
}

.btn-ghost {
	@apply hover-bg-black hover-bg-opacity-10;
}

.btn-success {
	@apply bg-emerald-500 text-white hover-bg-emerald-600;
}

.btn-md {
	@apply h-8 w-8;
}

.btn-lg {
	@apply h-10 w-10;
}

.btn-xl {
	@apply h-12 w-12;
}

.btn-disabled {
	@apply opacity-20 cursor-not-allowed;
}

.btn-disabled:hover {
	@apply hover-bg-transparent;
}
</style>
