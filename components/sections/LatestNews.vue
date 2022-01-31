<template>
	<section class="latest_news section-padding">
		<div class="container">
			<h2 class="section-title">{{ title }}</h2>
			<div class="grid">
				<template v-if="!$fetchState.pending">
					<LatestNewsCard v-for="article in data" :key="article.uid" :data="article" />
				</template>
			</div>
		</div>
	</section>
</template>

<script>
import { articleList } from '@/assets/queries'
export default {
	name: 'LatestNews',
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
		this.data = await this.$sanity.fetch(articleList, { from: 0, to: 3 })
	},
}
</script>

<style lang="scss" scoped>
.latest_news {
	width: 100%;
	.section-title {
		margin-bottom: 2rem;
	}
	.grid {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
}
@media (max-width: 800px) {
	.latest_news {
		padding-left: 15px;
		padding-right: 15px;
	}
}
</style>
