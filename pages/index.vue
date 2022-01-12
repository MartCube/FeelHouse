<template>
	<div id="index">
		<SanityContent class="sanity_content" :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { index } from '@/assets/queries'
import faq from '@/components/Faq'
import articleList from '@/components/ArticleList'

export default {
	name: 'Index',
	asyncData({ $sanity }) {
		return $sanity.fetch(index)
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

<style lang="scss" scoped></style>
