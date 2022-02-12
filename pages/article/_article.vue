<template>
	<div class="page">
		<Intro :title="title" :poster="poster" :uid="$route.params.article" />
		<section class="article section-padding">
			<div class="container">
				<SanityContent class="content" :blocks="content" :serializers="serializers" />
			</div>
		</section>
	</div>
</template>

<script>
import { article } from '@/assets/queries'
import img from '@/components/items/ImageItem.vue'
import VideoSection from '@/components/sections/VideoSection.vue'

export default {
	name: 'Article',
	async asyncData({ $sanity, route, store, i18n }) {
		console.log(route.params, i18n.locale)
		const data = await $sanity.fetch(article, { uid: route.params.article, lang: i18n.locale })
		console.log(data)

		await store.dispatch('i18n/setRouteParams', {
			[data.langs[0].id]: { page: 'novosti', article: data.langs[0].uid },
			[data.langs[1].id]: { page: 'blog', article: data.langs[1].uid },
			[data.langs[2].id]: { page: 'novini', article: data.langs[2].uid },
		})

		return data
	},
	data: () => ({
		serializers: {
			types: {
				img,
				youtube: VideoSection,
			},
		},
	}),
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
