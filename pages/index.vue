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
// import HomeIntro from '@/components/sections/HomeIntro.vue'
import LatestNews from '@/components/sections/LatestNews.vue'
import PartnersGallery from '@/components/sections/PartnersGallery.vue'
import ProjectRef from '@/components/sections/ProjectRef.vue'
import countdown from '@/components/sections/Countdown.vue'
import team from '@/components/sections/Team.vue'
import about from '@/components/sections/About.vue'

export default {
	name: 'Index',
	data: () => ({
		data: {
			content: undefined,
		},
		serializers: {
			types: {
				slider,
				projectList: ProjectRef,
				articleList: LatestNews,
				partners: PartnersGallery,
				homeintro: slider,
				countdown,
				team,
				about,
			},
		},
	}),
	async fetch() {
		if (this.getIndexId)
			await this.$sanity
				.fetch(page, { uid: this.getIndexId, lang: this.$i18n.localeProperties.code })
				.then(async (fetch) => {
					this.data.content = fetch.content
					await this.$store.dispatch('metaTags', {
						type: 'index',
						fetch,
					})
				})
				.catch((error) => {
					// set status code on server and
					if (process.server) {
						this.$nuxt.context.res.statusCode = 404
					}
					// use throw new Error()
					throw new Error('index not found', error)
				})
	},
	fetchOnServer: false,
	head() {
		return this.$store.getters.metaHead
	},
	computed: {
		getIndexId() {
			let id = 'home'
			switch (this.$i18n.localeProperties.code) {
				case 'ru':
					id = 'domashnyaja'
					break
				case 'ua':
					id = 'golovna'
					break
			}
			return id
		},
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
