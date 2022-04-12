<template>
	<div class="page">
		<template v-if="$fetchState.error && data !== null && !$fetchState.pending && $fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<Intro :title="data.title" :poster="data.poster" :crumbs="{ enabled: true, linkLabel: $t('pages.blog.crumbsName'), linkName: 'blog' }" />
			<section class="article section-padding">
				<div class="container">
					<SanityContent class="content" :blocks="data.content" :serializers="serializers" />
				</div>
			</section>
		</template>
	</div>
</template>

<script>
import { article } from '@/assets/queries'
import image from '@/components/items/ImageItem.vue'
import VideoSection from '@/components/sections/VideoSection.vue'

export default {
	name: 'Article',
	data: () => ({
		data: null,
		serializers: {
			types: {
				image,
				youtube: VideoSection,
			},
		},
	}),
	async fetch() {
		await this.$sanity
			.fetch(article, { uid: this.$route.params.article })
			.then((fetch) => {
				this.data = fetch
				this.$store.dispatch('i18n/setRouteParams', {
					ru: { article: this.data.langs.filter((el) => el.lang === 'ru')[0].uid },
					en: { article: this.data.langs.filter((el) => el.lang === 'en')[0].uid },
					ua: { article: this.data.langs.filter((el) => el.lang === 'ua')[0].uid },
				})
				this.$store.dispatch('metaTags', {
					type: 'blog',
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
				throw new Error('article not found')
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
	min-height: 100vh;
	width: 100%;
}
.article {
	.container {
		padding: 0 15px;
	}
	picture {
		margin-bottom: 15px;
		display: block;
	}
}
</style>
