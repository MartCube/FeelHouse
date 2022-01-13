<template>
	<div id="index">
		<SanityContent class="content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import faq from '@/components/Faq'
import articleList from '@/components/ArticleList'

export default {
	name: 'Index',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(page, { uid: 'index' })
	},
	data: () => ({
		serializers: {
			types: {
				faq,
				articleList,
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
