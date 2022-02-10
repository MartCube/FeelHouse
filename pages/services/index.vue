<template>
	<div class="page">
		<template v-if="!$fetchState.pending">
			<SanityContent class="content" :blocks="data.content" :serializers="serializers" />
			<ServiceList />
		</template>
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import intro from '@/components/sections/Intro.vue'

export default {
	name: 'Services',
	data: () => ({
		data: null,
		serializers: {
			types: {
				intro,
			},
		},
	}),
	async fetch() {
		const id = this.$route.path.split('/')
		await this.$sanity.fetch(page, { uid: id[id.length - 2], lang: this.$i18n.localeProperties.code }).then((fetch) => {
			this.data = fetch
			this.$store.dispatch('i18n/setRouteParams', {
				ru: { page: this.data.langs.filter((el) => el.lang === 'ru')[0].uid },
				en: { page: this.data.langs.filter((el) => el.lang === 'en')[0].uid },
				ua: { page: this.data.langs.filter((el) => el.lang === 'ua')[0].uid },
			})
		})
		// console.log(data.langs, store)
	},
	fetchOnServer: false,
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
