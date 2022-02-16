<template>
	<section class="articles section-padding">
		<div class="container">
			<div class="grid">
				<template v-if="!$fetchState.pending">
					<ArticleCard v-for="(article, i) in data" :key="article.uid" :reverse="i % 2 == 0 ? false : true" :data="article" />
				</template>
			</div>
		</div>
		<div v-animate-onscroll="{ down: 'animated fadeInUp' }" class="pagination">
			<span class="prev" :class="{ disable: from === 0 }" @click="fetchPrev">
				<Icon name="chevron" :fill="color" size="15px" />
			</span>
			<span v-for="page in totalPages" :key="page" :class="{ active: page == currentPage }" @click="fetchPage(page)">{{ page }}</span>
			<span class="next" :class="{ disable: to >= articleCount }" @click="fetchNext">
				<Icon name="chevron" :fill="color" size="15px" />
			</span>
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
		pageSize: 4,
		from: 0,
		to: 4,
		color: '#555',
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(articleList, { from: this.from, to: this.to, lang: this.$i18n.localeProperties.code })
		this.articleCount = await this.$sanity.fetch(articleCount, { lang: this.$i18n.localeProperties.code })
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

	.pagination {
		width: 100%;
		display: flex;
		justify-content: center;

		span {
			width: 40px;
			height: 40px;
			margin: 0 5px;
			border: 1px solid $borderLight;
			color: $text_light;
			font-size: 17px;

			display: flex;
			justify-content: center;
			align-items: center;

			cursor: pointer;
			user-select: none;
			&.prev {
				svg {
					transform: rotate(180deg);
				}
			}
			&.active {
				border-color: $primary;
			}

			&:hover {
				border-color: $primary;
				color: $primary;
				svg {
					fill: $primary;
				}
			}
			&.disable {
				opacity: 0.5;
				cursor: initial;
				pointer-events: none;
			}
		}
	}
}
@media (max-width: 800px) {
	.articles {
		.container {
			padding: 0 15px;
		}
	}
}
</style>
