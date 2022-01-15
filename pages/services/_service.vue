<template>
	<div class="service">
		<Intro :title="title" :poster="poster" />
		<!-- <SanityContent class="content" :blocks="content" :serializers="serializers" /> -->
	</div>
</template>

<script>
import { service } from '@/assets/queries'

export default {
	name: 'Service',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(service, { uid: route.params.service })
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
.service {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
