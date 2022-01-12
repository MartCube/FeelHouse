<template>
	<section class="latest_articles">
		<h2 class="title">{{ title }}</h2>
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
		this.data = await this.$sanity.fetch(articleList)
	},
}
</script>
