<template>
	<div class="project">
		<Intro :title="title" :poster="poster" />
		<!-- <SanityContent class="content" :blocks="content" :serializers="serializers" /> -->
	</div>
</template>

<script>
import { project } from '@/assets/queries'

export default {
	name: 'Project',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(project, { uid: route.params.project })
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
.project {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
