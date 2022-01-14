<template>
	<div class="project">
		<!-- <SanityContent class="content" :blocks="content" :serializers="serializers" /> -->
		{{ title }}
	</div>
</template>

<script>
import { project } from '@/assets/queries'

export default {
	name: 'Project',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(project, { uid: route.params.page })
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
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
