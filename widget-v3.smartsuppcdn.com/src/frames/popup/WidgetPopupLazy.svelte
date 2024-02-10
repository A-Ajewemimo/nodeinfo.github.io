<script lang="ts">
import Skeleton from '@/components/core/Skeleton.svelte'
import LazyComponent from '@/components/LazyComponent.svelte'
import SkeletonCircle from '@/core/SkeletonCircle.svelte'

import { popupLoader } from './loader'
</script>

<LazyComponent loader={popupLoader} delay={0}>
	<div slot="loading" class="h-full p-2 bg-white">
		<SkeletonCircle size={44} />
		<div class="mt-4 space-y-2">
			<Skeleton height={20} width={270} />
			<Skeleton height={20} width={270} />
			<Skeleton height={20} width={122} />
		</div>
	</div>
</LazyComponent>
