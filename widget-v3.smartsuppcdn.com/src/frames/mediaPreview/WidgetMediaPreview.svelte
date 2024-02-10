<script lang="ts">
import { fly } from 'svelte/transition'
import IconClose from 'virtual:icons/lucide/x'

import IconButton from '@/components/core/IconButton.svelte'
import { PreviewedMediaType } from '@/modules/app'
import { previewedMedia } from '@/modules/app/mediaPreview'
import { isDesktop } from '@/modules/device'

$: overlaySourceAllowed = $isDesktop

const closePreview = (source: 'overlay' | 'button') => {
	if (source === 'overlay' && !overlaySourceAllowed) return
	previewedMedia.set(null)
}
</script>

<div
	class="w-full h-full flex flex-col"
	in:fly={{ y: 20, delay: 300, duration: 400 }}
	out:fly={{ y: 10, duration: 250 }}
>
	<div class="flex-shrink flex flex-row w-full bg-black text-white">
		<div class="flex-grow flex items-center text-md px-4 overflow-hidden">
			<span class="whitespace-nowrap text-ellipsis overflow-hidden">{$previewedMedia?.attachment.fileName}</span>
		</div>
		<div class="flex-shrink">
			<IconButton on:click={() => closePreview('button')} icon={IconClose} iconDescription="Close" size="xl" />
		</div>
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="relative overflow-hidden flex-grow flex items-center bg-black/80 z-10"
		class:p-8={$isDesktop}
		class:p-4={!$isDesktop}
		on:click={() => closePreview('overlay')}
		on:keypress
	>
		{#if $previewedMedia?.type === PreviewedMediaType.Image}
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<img
				class="m-auto max-h-full max-w-full select-none bg-black"
				width="auto"
				height="auto"
				src={$previewedMedia?.attachment.url}
				alt={$previewedMedia?.attachment.fileName}
				on:click|stopPropagation
				on:keypress
			/>
		{:else if $previewedMedia?.type === PreviewedMediaType.Video}
			<video
				controls
				class="m-auto max-h-full max-w-full bg-black object-contain"
				on:click|stopPropagation
				on:keypress
				autoplay={true}
				loop={true}
			>
				<track kind="captions" />
				<source src={$previewedMedia.attachment.url} />
			</video>
		{/if}
	</div>
</div>
