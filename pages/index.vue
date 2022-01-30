<template>
	<div class="page">
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { index } from '@/assets/queries'
import slider from '@/components/global/Slider.vue'
// import projectList from '@/components/sections/ProjectList.vue'
import LatestNews from '@/components/sections/LatestNews.vue'
import PartnersGallery from '@/components/sections/PartnersGallery.vue'
import ProjectRef from '@/components/sections/ProjectRef.vue'
// import articleList from '@/components/sections/ArticleLatest.vue'

export default {
	name: 'Index',
	asyncData({ $sanity }) {
		return $sanity.fetch(index)
	},
	data: () => ({
		content: undefined,
		serializers: {
			types: {
				slider,
				projectList: ProjectRef,
				articleList: LatestNews,
				partners: PartnersGallery,
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
