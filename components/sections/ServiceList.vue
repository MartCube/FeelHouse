<template>
	<section class="list section-padding">
		<div class="container">
			<template v-if="!$fetchState.pending">
				<ServiceCard v-for="service in data" :key="service.uid" :data="service" />
			</template>
		</div>
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
	width: 100%;
	.container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
	}
}
@media screen and (max-width: 800px) {
	.list {
		.container {
			justify-content: center;
			padding: 100px 5%;
		}
	}
}
</style>
