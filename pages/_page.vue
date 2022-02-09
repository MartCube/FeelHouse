<template>
	<div class="page">
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import intro from '@/components/sections/Intro.vue'
import contactForm from '@/components/forms/ContactForm.vue'
import about from '@/components/sections/About.vue'
import team from '@/components/sections/Team.vue'

export default {
	name: 'Page',
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
				contactForm,
				about,
				team,
			},
		},
	}),
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
