<template>
	<section class="list section-padding">
		<div class="container">
			<h2 class="section-title">{{ title }}</h2>
			<div class="grid">
				<ServiceCard v-for="service in list" :key="service.uid" :data="service" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ServiceList',
	props: {
		title: {
			type: String,
			required: true,
		},
		list: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.list {
	width: 100%;
	.section-title {
		margin-bottom: 4rem;
		text-align: center;
	}
	.grid {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
	}
}
@media screen and (max-width: 800px) {
	.list {
		.grid {
			justify-content: center;
			padding: 100px 5%;
		}
	}
}
</style>
