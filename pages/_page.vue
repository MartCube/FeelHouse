<template>
	<div class="page">
		<Intro :title="title" :poster="poster" />
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import contactForm from '@/components/forms/ContactForm.vue'
import about from '@/components/sections/About.vue'

export default {
	name: 'Page',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(page, { uid: route.params.page })
	},
	data: () => ({
		serializers: {
			types: {
				contactForm,
				about,
			},
		},
	}),
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.content {
		width: 1200px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
