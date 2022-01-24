<template>
	<div class="page">
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { index } from '@/assets/queries'
// import faq from '@/components/Faq.vue'

export default {
	name: 'Index',
	asyncData({ $sanity }) {
		return $sanity.fetch(index)
	},
	data: () => ({
		serializers: {
			types: {},
		},
	}),
}
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
