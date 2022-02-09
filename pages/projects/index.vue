<template>
	<div class="page">
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
		<ProjectList />
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import intro from '@/components/sections/Intro.vue'

export default {
	name: 'Projects',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(page, { uid: route.params.page })
	},
	data: () => ({
		serializers: {
			types: {
				intro,
			},
		},
	}),
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
