<template>
	<section class="service list">
		<template v-if="!$fetchState.pending">
			<ServiceCard v-for="service in data" :key="service.uid" :data="service" />
		</template>
	</section>
</template>

<script>
import { serviceList } from '@/assets/queries'

export default {
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
