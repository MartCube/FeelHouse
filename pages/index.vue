<template>
	<div class="page">
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { index } from '@/assets/queries'
import slider from '@/components/global/Slider.vue'
import projectList from '@/components/sections/ProjectRef.vue'
import articleList from '@/components/sections/ArticleLatest.vue'
import partners from '@/components/sections/Partners.vue'
import countdown from '@/components/sections/Countdown.vue'

export default {
	name: 'Index',
	asyncData({ $sanity }) {
		return $sanity.fetch(index)
	},
	data: () => ({
		serializers: {
			types: {
				slider,
				projectList,
				articleList,
				partners,
				countdown,
			},
		},
	}),
}
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	// margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
