<template>
	<div class="page">
		<template v-if="$fetchState.error && data !== null && !$fetchState.pending && $fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<SanityContent class="content" :blocks="data.content" :serializers="serializers" />
			<ArticleList />
		</template>
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import intro from '@/components/sections/Intro.vue'

export default {
	name: 'Blog',
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
		await this.$sanity
			.fetch(page, { uid: id[id.length - 2], lang: this.$i18n.localeProperties.code })
			.then((fetch) => {
				this.data = fetch
				this.$store.dispatch('i18n/setRouteParams', {
					ru: { page: this.data.langs.filter((el) => el.lang === 'ru')[0].uid },
					en: { page: this.data.langs.filter((el) => el.lang === 'en')[0].uid },
					ua: { page: this.data.langs.filter((el) => el.lang === 'ua')[0].uid },
				})
				this.$store.dispatch('metaTags', {
					type: 'page',
					fetch,
				})
			})
			.catch((error) => {
				console.log(error)
				// set status code on server and
				if (process.server) {
					this.$nuxt.context.res.statusCode = 404
				}
				// use throw new Error()
				throw new Error('service not found')
			})
		// console.log(data.langs, store)
	},
	fetchOnServer: false,
	head() {
		return this.$store.getters.metaHead
	},
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
