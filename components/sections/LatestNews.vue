<template>
	<section class="latest_news section-padding">
		<div class="container">
			<h2 class="section-title">Latest news</h2>
			<div class="grid">
				<LatestNewsCard v-for="article in data" :key="article.uid" :data="article" />
			</div>
		</div>
	</section>
</template>

<script>
import { latestNews } from '@/assets/queries'
export default {
	data: () => ({
		data: null,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(latestNews)
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
		.grid {
			padding: 0 15px;
		}
	}
}
</style>
