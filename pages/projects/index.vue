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
	async asyncData({ $sanity, route, store, i18n }) {
		const data = await $sanity.fetch(page, { uid: route.params.page, lang: i18n.locale })

		await store.dispatch('i18n/setRouteParams', {
			[data.langs[0].id]: { page: data.langs[0].uid },
			[data.langs[1].id]: { page: data.langs[1].uid },
			[data.langs[2].id]: { page: data.langs[2].uid },
		})

		return data
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
