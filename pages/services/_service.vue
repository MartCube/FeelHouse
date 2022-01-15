<template>
	<div class="service">
		<!-- <SanityContent class="content" :blocks="content" :serializers="serializers" /> -->
		<Intro :title="title" :poster="poster" />
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
