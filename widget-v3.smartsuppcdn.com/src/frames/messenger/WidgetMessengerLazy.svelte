<script lang="ts">
import Skeleton from '@/components/core/Skeleton.svelte'
import SkeletonCircle from '@/components/core/SkeletonCircle.svelte'
import LazyComponent from '@/components/LazyComponent.svelte'

import { messengerLoader } from './loader'
</script>

<LazyComponent loader={messengerLoader} delay={0}>
	<div slot="loading" class="h-full p-2 bg-white">
		<div class="flex justify-between">
			<div class="flex">
				<SkeletonCircle size={32} />
			</div>
			<div class="flex space-x-2">
				<SkeletonCircle size={32} />
				<SkeletonCircle size={32} />
				<SkeletonCircle size={32} />
			</div>
		</div>
		<div class="flex mt-2">
			<div class="flex ml-1 mr-2">
				<SkeletonCircle size={44} />
			</div>
			<div class="flex-bottom space-y-2">
				<Skeleton height={20} width={270} />
				<Skeleton height={20} width={122} />
			</div>
		</div>
		<div class="flex items-baseline mt-8">
			<div class="flex ml-1 mr-2">
				<SkeletonCircle size={28} />
			</div>
			<div class="space-y-2">
				<Skeleton height={112} width={295} roundedStyle={'rounded-6'} />
			</div>
		</div>
		<div class="flex flex-col items-end space-y-5 mt-8 mr-1">
			<Skeleton height={32} width={295} />
			<Skeleton height={32} width={148} />
			<Skeleton height={32} width={224} />
		</div>
	</div>
	<div slot="error" let:error class="h-full p-4 bg-white text-red-500">
		<div class="text-lg font-bold">Failed to load widget</div>
		<div class="text-xs">{error}</div>
	</div>
</LazyComponent>
