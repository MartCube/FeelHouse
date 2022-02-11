<template>
	<div class="page">
		<template v-if="$fetchState.error">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<SanityContent class="content" :blocks="data.content" :serializers="serializers" />
		</template>
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import intro from '@/components/sections/Intro.vue'
import contactForm from '@/components/forms/ContactForm.vue'
import about from '@/components/sections/About.vue'
import team from '@/components/sections/Team.vue'
import faq from '@/components/sections/Faq.vue'

export default {
	name: 'Page',
	data: () => ({
		data: null,
		serializers: {
			types: {
				intro,
				contactForm,
				about,
				team,
				faq,
			},
		},
	}),
	async fetch() {
		await this.$sanity
			.fetch(page, { uid: this.$route.params.page, lang: this.$i18n.localeProperties.code })
			.then((fetch) => {
				this.data = fetch
				this.$store.dispatch('i18n/setRouteParams', {
					ru: { page: this.data.langs.filter((el) => el.lang === 'ru')[0].uid },
					en: { page: this.data.langs.filter((el) => el.lang === 'en')[0].uid },
					ua: { page: this.data.langs.filter((el) => el.lang === 'ua')[0].uid },
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
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	min-height: 100vh;

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
