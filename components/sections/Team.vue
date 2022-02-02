<template>
	<section class="team">
		<div class="container">
			<h2 class="section-title">{{ title }}</h2>
			<div class="grid">
				<Employee v-for="item in employee" :key="item._key" :data="item" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		employee: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.team {
	width: 100%;
	padding-bottom: 120px;
	.section-title {
		margin-bottom: 50px;
	}
	.container {
		padding: 0 15px;
	}
	.grid {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
}
</style>
