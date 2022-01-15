<template>
	<n-link class="service card" :to="'/services/' + data.uid">
		<SanityImage :asset-id="data.poster" auto="format" fit="clip" height="400" />
		<h2>{{ data.title }}</h2>
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
	flex-direction: column;
	text-decoration: none;

	color: $text;
}
</style>
