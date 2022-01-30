<template>
	<section class="articles">
		<div class="grid">
			<template v-if="!$fetchState.pending">
				<ArticleCard v-for="(article, i) in data" :key="article.uid" :reverse="i % 2 == 0 ? false : true" :data="article" />
			</template>
		</div>
		<div class="pagination">
			<span class="prev" :class="{ disable: from === 0 }" @click="fetchPrev">prev</span>
			<span v-for="page in totalPages" :key="page" :class="{ active: page == currentPage }" @click="fetchPage(page)">{{ page }}</span>
			<span class="next" :class="{ disable: to >= articleCount }" @click="fetchNext">next</span>
		</div>
	</section>
</template>

<script>
import { articleList, articleCount } from '@/assets/queries'
export default {
	data: () => ({
		data: null,
		// pagination
		articleCount: null,
		currentPage: 1,
		pageSize: 2,
		from: 0,
		to: 2,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(articleList, { from: this.from, to: this.to })
		this.articleCount = await this.$sanity.fetch(articleCount)
	},
	computed: {
		totalPages() {
			return Math.ceil(this.articleCount / this.pageSize)
		},
	},
	methods: {
		fetchPrev() {
			if (this.from === 0) return
			this.currentPage--
			this.to = this.currentPage * this.pageSize
			this.from = this.to - this.pageSize
			this.$fetch()
		},
		fetchPage(page) {
			this.currentPage = page
			this.to = this.currentPage * this.pageSize
			this.from = this.to - this.pageSize
			this.$fetch()
		},
		fetchNext() {
			if (this.to >= this.articleCount) return
			this.currentPage++
			this.to = this.currentPage * this.pageSize
			this.from = this.to - this.pageSize
			this.$fetch()
		},
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
