<template>
	<div class="article">
		<Intro :title="title" :poster="poster" />
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { article } from '@/assets/queries'
import img from '@/components/items/ImageItem.vue'

export default {
	name: 'Article',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(article, { uid: route.params.article })
	},
	data: () => ({
		serializers: {
			types: {
				img,
			},
		},
	}),
}
</script>

<style lang="scss" scoped>
.article {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	.content {
		width: 1200px;
	}
}
</style>
