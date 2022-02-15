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
import slider from '@/components/global/Slider.vue'
import LatestNews from '@/components/sections/LatestNews.vue'
import PartnersGallery from '@/components/sections/PartnersGallery.vue'
import ProjectRef from '@/components/sections/ProjectRef.vue'
import countdown from '@/components/sections/Countdown.vue'
import team from '@/components/sections/Team.vue'

export default {
	name: 'Index',
	data: () => ({
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
		if (id)
			await this.$sanity
				.fetch(page, { uid: id, lang: this.$i18n.localeProperties.code })
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
.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
