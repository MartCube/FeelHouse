<template>
	<section class="articles">
		<h2>{{ title }}</h2>
		<div class="grid">
			<template v-if="!$fetchState.pending">
				<ArticleCard v-for="(article, i) in data" :key="article.uid" :reverse="i % 2 == 0 ? false : true" :data="article" />
			</template>
		</div>
	</section>
</template>

<script>
import { articleList } from '@/assets/queries'

export default {
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
.articles {
	width: 100%;
	max-width: 1200px;
	margin: 100px 0;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	.grid {
		min-height: 670px;
	}
	.pagination {
		width: 100%;
		display: flex;
		justify-content: center;

		span {
			width: 3rem;
			height: 3rem;
			margin: 0 1rem;
			border: 1px solid $text;

			display: flex;
			justify-content: center;
			align-items: center;

			cursor: pointer;
			user-select: none;

			&.active {
				border-color: $primary;
			}

			&:hover {
				border-color: $primary;
			}
			&.disable {
				opacity: 0.5;
				cursor: initial;
				pointer-events: none;
			}
		}
	}
}
</style>
