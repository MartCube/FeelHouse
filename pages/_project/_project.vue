<template>
	<div>
		<Intro :title="title" :poster="poster" />
		<section class="project section-padding">
			<div class="container">
				<InfoTable :info="data.info" />
				<SanityContent class="content" :blocks="data.content" :serializers="serializers" />
				<ProjectGallery :gallery="data.gallery" />
			</div>
		</section>
	</div>
</template>

<script>
import { project } from '@/assets/queries'
import img from '@/components/items/ImageItem.vue'
import VideoSection from '@/components/sections/VideoSection.vue'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
	name: 'Project',
	async asyncData({ $sanity, route, store, i18n }) {
		const data = await $sanity.fetch(project, { uid: route.params.uid, lang: i18n.locale })

		await store.dispatch('i18n/setRouteParams', {
			[data.langs[0].id]: { page: 'proekty', project: data.langs[0].uid },
			[data.langs[1].id]: { page: 'projects', project: data.langs[1].uid },
			[data.langs[2].id]: { page: 'nashi-proekty', project: data.langs[2].uid },
		})

		return data
	},
	data: () => ({
		serializers: {
			types: {
				img,
				youtube: VideoSection,
			},
		},
	}),
}
</script>

<style lang="scss" scoped>
.project {
	width: 100%;
	.container {
		padding: 0 15px;
	}
}
</style>
