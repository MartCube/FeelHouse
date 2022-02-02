<template>
	<div>
		<Intro :title="title" :poster="poster" />
		<section class="service section-padding">
			<div class="container">
				<SanityContent class="content" :blocks="content" :serializers="serializers" />
				<ServiceSidebar />
			</div>
		</section>
	</div>
</template>

<script>
import { service } from '@/assets/queries'
import image from '@/components/items/ImageItem.vue'
import VideoSection from '@/components/sections/VideoSection.vue'

export default {
	name: 'Service',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(service, { uid: route.params.service })
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
