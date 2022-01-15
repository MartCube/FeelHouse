<template>
	<div class="page">
		<Intro :title="title" :poster="poster" />
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import serviceList from '~/components/ServiceList.vue'

export default {
	name: 'Services',
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'services' })
	},
	data: () => ({
		serializers: {
			types: {
				serviceList,
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
}
</style>
