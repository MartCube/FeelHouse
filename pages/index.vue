<template>
	<div class="page">
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import slider from '@/components/global/Slider.vue'
import LatestNews from '@/components/sections/LatestNews.vue'
import PartnersGallery from '@/components/sections/PartnersGallery.vue'
import ProjectRef from '@/components/sections/ProjectRef.vue'
import countdown from '@/components/sections/Countdown.vue'

export default {
	name: 'Index',
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'home' })
	},
	data: () => ({
		serializers: {
			types: {
				slider,
				projectList: ProjectRef,
				articleList: LatestNews,
				partners: PartnersGallery,
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
