<template>
	<section class="team">
		<h2>{{ title }}</h2>
		<Employee v-for="item in employee" :key="item._key" :data="item" />
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
	display: flex;
	flex-direction: column;
	margin: 50px 0;

	h2 {
		margin-bottom: 50px;
	}
}
</style>
