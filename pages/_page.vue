<template>
	<div class="page">
		<!-- <SanityContent class="content" :blocks="content" :serializers="serializers" /> -->
		<Intro :title="title" :poster="poster" />
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

<style lang="scss" scoped></style>
