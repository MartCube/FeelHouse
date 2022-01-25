<template>
	<section class="service list">
		<h2 v-if="title" class="title">{{ title }}</h2>
		<ServiceCard v-for="article in data" :key="article.uid" :data="article" />
	</section>
</template>

<script>
import { serviceList } from '@/assets/queries'

export default {
	props: {
		title: {
			type: String,
			default: undefined,
		},
	},
	data: () => ({
		data: null,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(serviceList)
	},
}
</script>

<style lang="scss" scoped>
.list {
	width: 1200px;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.title {
		width: 100%;
	}
	margin: 100px 0;
}
</style>
