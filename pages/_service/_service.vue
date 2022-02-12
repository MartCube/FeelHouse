<template>
	<div>
		<Intro :title="title" :poster="poster" />
		<!-- <section class="service section-padding">
			<div class="container">
				<SanityContent class="content" :blocks="content" :serializers="serializers" />
				<ServiceSidebar />
			</div>
		</section> -->
	</div>
</template>

<script>
import { service } from '@/assets/queries'
import image from '@/components/items/ImageItem.vue'
import VideoSection from '@/components/sections/VideoSection.vue'

export default {
	name: 'Service',
	async asyncData({ $sanity, route, store, i18n }) {
		console.log(route)
		const data = await $sanity.fetch(service, { service: route.params.uid, lang: i18n.locale })

		console.log(data)

		await store.dispatch('i18n/setRouteParams', {
			[data.langs[0].id]: { page: 'uslugi', service: data.langs[0].uid },
			[data.langs[1].id]: { page: 'services', service: data.langs[1].uid },
			[data.langs[2].id]: { page: 'poslygu', service: data.langs[2].uid },
		})

		return data
	},
	data: () => ({
		content: undefined,
		serializers: {
			types: {
				image,
				youtube: VideoSection,
			},
		},
	}),
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
