<template>
	<div class="page">
		<Intro :title="title" :poster="poster" :uid="$route.params.article" />
		<section class="article section-padding">
			<div class="container">
				<SanityContent class="content" :blocks="content" :serializers="serializers" />
			</div>
		</section>
	</div>
</template>

<script>
import { article } from '@/assets/queries'
import img from '@/components/items/ImageItem.vue'
import VideoSection from '@/components/sections/VideoSection.vue'

export default {
	name: 'Article',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(article, { uid: route.params.article })
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
.article {
	.container {
		padding: 0 15px;
	}
	picture {
		margin-bottom: 15px;
		display: block;
	}
}
</style>
