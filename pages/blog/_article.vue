<template>
	<div class="article">
		<template v-if="!$fetchState.pending">
			<Intro :title="data.title" :poster="data.poster" :uid="$route.params.article" />
			<SanityContent class="content" :blocks="data.content" :serializers="serializers" />
		</template>
	</div>
</template>

<script>
import { article } from '@/assets/queries'
import img from '@/components/items/ImageItem.vue'

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
			},
		}
	},
}
</script>

<style lang="scss" scoped>
.article {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;

	.content {
		width: 1200px;
	}
}
</style>
