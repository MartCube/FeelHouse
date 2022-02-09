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
	async asyncData({ $sanity, route, store, i18n }) {
		let uid
		if (i18n.locale === 'ru') uid = 'uslugi'
		else if (i18n.locale === 'en') uid = 'services'
		else if (i18n.locale === 'ua') uid = 'poslygu'

		const data = await $sanity.fetch(page, { uid, lang: i18n.locale })

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
