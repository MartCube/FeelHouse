<template>
	<div class="page">
		<template v-if="$fetchState.error && data !== null">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<Intro :title="data.title" :crumbs="{ enabled: true, url: crumbsUrl(), link: $t('pages.project.crumbsName'), title: data.title }" :poster="data.poster" />
			<section class="project section-padding">
				<div class="container">
					<InfoTable :info="data.info" />
					<SanityContent class="content" :blocks="data.content" :serializers="serializers" />
					<ProjectGallery :gallery="data.gallery" />
				</div>
			</section>
		</template>
	</div>
</template>

<script>
import { project } from '@/assets/queries'
import img from '@/components/items/ImageItem.vue'
import VideoSection from '@/components/sections/VideoSection.vue'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
	name: 'Project',
	data: () => ({
		data: null,
		serializers: {
			types: {
				img,
				youtube: VideoSection,
			},
		},
	}),
	async fetch() {
		await this.$sanity
			.fetch(project, { uid: this.$route.params.project })
			.then((fetch) => {
				this.data = fetch
				this.$store.dispatch('i18n/setRouteParams', {
					ru: { project: this.data.langs.filter((el) => el.lang === 'ru')[0].uid },
					en: { project: this.data.langs.filter((el) => el.lang === 'en')[0].uid },
					ua: { project: this.data.langs.filter((el) => el.lang === 'ua')[0].uid },
				})
			})
			.catch((error) => {
				console.log(error)
				// set status code on server and
				if (process.server) {
					this.$nuxt.context.res.statusCode = 404
				}
				// use throw new Error()
				throw new Error('project not found', error)
			})
		// console.log(data.langs, store)
	},
	fetchOnServer: false,
	methods: {
		crumbsUrl() {
			let link
			switch (this.$i18n.localeProperties.code) {
				case 'en':
					link = `/en/projects/${this.$route.params.project}/`
					break
				case 'ua':
					link = `/ua/nashi-proekty/${this.$route.params.project}/`
					break
				default:
					link = `/proekty/${this.$route.params.project}/`
			}
			return link
		},
	},
}
</script>

<style lang="scss" scoped>
.project {
	width: 100%;
	.container {
		padding: 0 15px;
	}
}
</style>
