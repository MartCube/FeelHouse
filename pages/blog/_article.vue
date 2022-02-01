<template>
	<div class="page">
		<template v-if="!$fetchState.pending">
			<Intro :title="data.title" :poster="data.poster" :uid="$route.params.article" />
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
import img from '@/components/items/ImageItem.vue'
import VideoSection from '@/components/sections/VideoSection.vue'

export default {
	name: 'Article',
	data: () => ({
		data: null,
		serializers: null,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(article, { uid: this.$route.params.article })
	},
	mounted() {
		this.serializers = {
			types: {
				img,
				youtube: VideoSection,
			},
		}
	},
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
