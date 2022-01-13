<template>
	<section class="latest_articles">
		<h2 class="title">{{ title }}</h2>
		<ArticleCard v-for="article in data" :key="article._createdAt" :data="article" />
	</section>
</template>

<script>
import ArticleCard from './ArticleCard.vue'
import { articleList } from '@/assets/queries'

export default {
	components: { ArticleCard },
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		data: null,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(articleList)
	},
}
</script>

<style lang="scss" scoped>
.latest_articles {
	width: 100%;
	max-width: 1200px;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.title {
		width: 100%;
	}
	margin: 100px 0;
}
</style>
