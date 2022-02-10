<template>
	<div class="page">
		<template v-if="!$fetchState.pending">
			<Intro :title="data.title" :poster="data.poster" :crumbs="{ enabled: true, url: $route.params.article, link: $t('pages.blog.crumbsName'), title: data.title }" />
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
		await this.$sanity.fetch(article, { uid: this.$route.params.article }).then((fetch) => {
			this.data = fetch
			this.$store.dispatch('i18n/setRouteParams', {
				ru: { article: this.data.langs.filter((el) => el.lang === 'ru')[0].uid },
				en: { article: this.data.langs.filter((el) => el.lang === 'en')[0].uid },
				ua: { article: this.data.langs.filter((el) => el.lang === 'ua')[0].uid },
			})
		})
		// console.log(data.langs, store)
	},
	fetchOnServer: false,
}
</script>

<style lang="scss" scoped>
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
