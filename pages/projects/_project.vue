<template>
	<div>
		<Intro :title="title" :poster="poster" />
		<section class="project section-padding">
			<div class="container">
				<InfoTable :info="info" />
				<SanityContent class="content" :blocks="content" :serializers="serializers" />
				<ProjectGallery :gallery="gallery" />
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
	asyncData({ $sanity, route }) {
		return $sanity.fetch(project, { uid: route.params.project })
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
