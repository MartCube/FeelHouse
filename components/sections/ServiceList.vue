<template>
	<section class="service list">
		<!-- <h2 v-if="title" class="title">{{ title }}</h2> -->
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
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	padding: 100px 0;
}
@media screen and (max-width: 800px) {
	.list {
		padding: 100px 5%;
	}
}
</style>
