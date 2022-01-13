<template>
	<div id="page">
		<!-- <SanityContent class="content" :blocks="content" :serializers="serializers" /> -->
		{{ title }}
	</div>
</template>

<script>
import { page } from '@/assets/queries'

export default {
	name: 'Page',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(page, { uid: route.params.page })
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
#page {
	width: 100%;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
