<script lang="ts">
type TypingIndicatorSize = 'sm' | 'md'
type TypingIndicatorColor = 'gray' | 'black'

export let size: TypingIndicatorSize = 'md'
export let color: TypingIndicatorColor = 'black'
export let iterations: number | undefined = undefined

$: animationInterationCount = iterations ?? 'infinite'
</script>

<div class="flex p-2">
	<div
		class={`typing-indicator ${size} indicator-color-${color} animate-typing`}
		style:animation-iteration-count={animationInterationCount}
	/>
	<div
		class={`typing-indicator ${size} indicator-color-${color} typing-indicator-second animate-typing`}
		style:animation-iteration-count={animationInterationCount}
	/>
	<div
		class={`typing-indicator ${size} indicator-color-${color} typing-indicator-third animate-typing`}
		style:animation-iteration-count={animationInterationCount}
	/>
</div>

<style lang="postcss">
.typing-indicator {
	@apply rounded-full;
}

.typing-indicator.sm {
	@apply w-1 h-1;
}

.typing-indicator.md {
	@apply w-2 h-2;
}

.typing-indicator.indicator-color-black {
	@apply bg-black;
}

.typing-indicator.indicator-color-gray {
	@apply bg-slate-500;
}

.typing-indicator:not(:first-child) {
	@apply ml-1;
}

.typing-indicator-second {
	animation-delay: 0.1s;
}

.typing-indicator-third {
	animation-delay: 0.2s;
}
</style>
