<template>
	<div class="page">
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import faq from '@/components/Faq.vue'
import articleList from '@/components/ArticleList.vue'
import projectList from '@/components/ProjectList.vue'

export default {
	name: 'Index',
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'index' })
	},
	data: () => ({
		serializers: {
			types: {
				faq,
				articleList,
				projectList,
			},
		},
	}),
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
