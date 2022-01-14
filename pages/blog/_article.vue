<template>
	<div class="article">
		<!-- <SanityContent class="content" :blocks="content" :serializers="serializers" /> -->
		{{ title }}
	</div>
</template>

<script>
import { article } from '@/assets/queries'

export default {
	name: 'Article',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(article, { uid: route.params.page })
	},
	data: () => ({
		// serializers: {
		// 	types: {
		// 		faq,
		// 		articleList,
		// 	},
		// },
	}),
}
</script>

<style lang="scss" scoped>
.article {
	width: 100%;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
