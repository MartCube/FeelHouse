<template>
	<div class="page">
		<template v-if="$fetchState.error && data !== null && !$fetchState.pending && $fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<SanityContent class="content" :blocks="data.content" :serializers="serializers" />
		</template>
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import slider from '@/components/global/Slider.vue'
import LatestNews from '@/components/sections/LatestNews.vue'
import PartnersGallery from '@/components/sections/PartnersGallery.vue'
import ProjectRef from '@/components/sections/ProjectRef.vue'
import countdown from '@/components/sections/Countdown.vue'
import team from '@/components/sections/Team.vue'

export default {
	name: 'Index',
	data: () => ({
		data: {
			content: undefined,
			metaTags: {
				title: '',
				description: '',
				image: '',
			},
		},
		serializers: {
			types: {
				slider,
				projectList: ProjectRef,
				articleList: LatestNews,
				partners: PartnersGallery,
				countdown,
				team,
			},
		},
	}),
	async fetch() {
		let id = 'domashnyaja'
		switch (this.$i18n.localeProperties.code) {
			case 'en':
				id = 'home'
				break
			case 'ua':
				id = 'golovna'
				break
		}
		// if (id)
		await this.$sanity
			.fetch(page, { uid: id, lang: this.$i18n.localeProperties.code })
			.then((fetch) => {
				console.log(this.$i18n.localeProperties)
				this.data.content = fetch.content
				this.data.metaTags = {
					title: fetch.metaTags.title,
					description: fetch.metaTags.description,
					image: `https://cdn.sanity.io/images/n9rlxbmy/production/${fetch.metaTags.image.slice(6)}?auto=format`,
				}
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
	},
	fetchOnServer: false,
	head() {
		console.log(this.$store)
		return {
			htmlAttrs: { lang: this.$i18n.localeProperties.code },
			title: this.data.metaTags.title,
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					hreflang: 'x-default',
					href: this.$store.state.domain,
				},
				{
					hid: 'alternate',
					rel: 'alternate',
					href: 'ua',
					hreflang: `${this.$store.state.domain}ua/`,
				},
				{
					hid: 'alternate',
					rel: 'alternate',
					href: 'en',
					hreflang: `${this.$store.state.domain}en/`,
				},
			],
			meta: [
				{
					hid: 'title',
					name: 'title',
					content: this.data.metaTags.title,
				},
				{
					hid: 'description',
					name: 'description',
					content: this.data.metaTags.description,
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: this.data.metaTags.title,
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.data.metaTags.image,
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.data.metaTags.description,
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: 'https://feel-house.vercel.app/',
				},
			],
		}
	},
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
	}
}
</style>
