<template>
	<div class="page">
		<template v-if="$fetchState.error">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<Intro :title="data.title" :poster="data.poster" :crumbs="{ enabled: true, url: $route.params.service, link: $t('pages.service.crumbsName'), title: data.title }" />
			<section class="service section-padding">
				<div class="container">
					<SanityContent class="content" :blocks="data.content" :serializers="serializers" />
					<ServiceSidebar />
				</div>
			</section>
		</template>
	</div>
</template>

<script>
import { service } from '@/assets/queries'
import image from '@/components/items/ImageItem.vue'
import VideoSection from '@/components/sections/VideoSection.vue'

export default {
	name: 'Service',
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
			.fetch(service, { uid: this.$route.params.service })
			.then((fetch) => {
				this.data = fetch
				this.$store.dispatch('i18n/setRouteParams', {
					ru: { service: this.data.langs.filter((el) => el.lang === 'ru')[0].uid },
					en: { service: this.data.langs.filter((el) => el.lang === 'en')[0].uid },
					ua: { service: this.data.langs.filter((el) => el.lang === 'ua')[0].uid },
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
	computed: {
		crumbsUrl() {
			let link
			switch (this.$i18n.localeProperties.code) {
				case 'en':
					link = `/en/services/${this.$route.params.service}/`
					break
				case 'ua':
					link = `/ua/poslygu/${this.$route.params.service}/`
					break
				default:
					link = `/uslugi/${this.$route.params.service}/`
			}
			return link
		},
	},
}
</script>

<style lang="scss" scoped>
.service {
	width: 100%;
	.container {
		display: flex;
		padding: 0 15px;
		justify-content: space-between;
		aside {
			width: 35%;
		}
		.content {
			width: 65%;
			picture {
				height: auto;
			}
		}
	}
}
@media (max-width: 800px) {
	.service {
		.container {
			flex-direction: column;
			aside,
			.content {
				width: 100%;
			}
			aside {
				margin-top: 30px;
				padding: 0;
			}
		}
	}
}
</style>
