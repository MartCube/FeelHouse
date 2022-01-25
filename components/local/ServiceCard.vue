<template>
	<n-link class="service card" :to="'/services/' + data.uid">
		<ImageItem :image="data.poster" h="400" fit="clip" />
		<h2 class="title">{{ data.title }}</h2>
	</n-link>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.card {
	width: 350px;
	display: flex;
	position: relative;

	.title {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		z-index: 3;

		text-transform: uppercase;
		writing-mode: sideways-lr;
		text-orientation: mixed;
		text-decoration: none;
		color: $white;
	}
}
</style>
