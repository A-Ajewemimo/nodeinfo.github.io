<script lang="ts">
type SkeletonColorScheme = 'gray' | 'darkGray'

export let height = 20
export let width: string | number = '100%'
export let colorScheme: SkeletonColorScheme = 'gray'
export let roundedStyle = 'rounded-full'
const skeletonClass = `${roundedStyle} animate-pulse`
</script>

<div
	class={skeletonClass}
	class:bg-gray-200={colorScheme === 'gray'}
	class:bg-gray-300={colorScheme === 'darkGray'}
	style:height
	style:width
/>
