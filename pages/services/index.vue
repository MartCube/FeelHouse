<template>
	<div class="page">
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
		<ServiceList />
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import intro from '@/components/sections/Intro.vue'

export default {
	name: 'Services',
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'services' })
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
