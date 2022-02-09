<template>
	<div class="page">
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import intro from '@/components/sections/Intro.vue'
import contactForm from '@/components/forms/ContactForm.vue'
import about from '@/components/sections/About.vue'
import team from '@/components/sections/Team.vue'
import faq from '@/components/sections/Faq.vue'

export default {
	name: 'Page',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(page, { uid: route.params.page })
	},
	data: () => ({
		serializers: {
			types: {
				intro,
				contactForm,
				about,
				team,
				faq,
			},
		},
	}),
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	min-height: 100vh;
	// display: flex;
	// flex-direction: column;
	// align-items: center;
	// justify-content: center;

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
