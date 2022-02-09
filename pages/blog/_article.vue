<template>
	<div class="page">
		<template v-if="!$fetchState.pending">
			<Intro :title="data.title" :poster="data.poster" :uid="$route.params.article" :crumbs="{ enabled: true, link: 'blog', title: data.title }" />
			<section class="article section-padding">
				<div class="container">
					<SanityContent class="content" :blocks="data.content" :serializers="serializers" />
				</div>
			</section>
		</template>
	</div>
</template>

<script>
import { article } from '@/assets/queries'
import image from '@/components/items/ImageItem.vue'
import VideoSection from '@/components/sections/VideoSection.vue'

export default {
	name: 'Article',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(article, { uid: route.params.article })
	},
	data: () => ({
		serializers: {
			types: {
				image,
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
