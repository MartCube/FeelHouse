<template>
	<n-link class="panel_card" :to="'blog/' + data.uid">
		<SanityImage :asset-id="data.poster" auto="format" fit="clip" height="400" />
		<h2>{{ data.title }}</h2>
		<span> {{ data.releaseDate }} </span>
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
.panel_card {
	width: 350px;
	display: flex;
	flex-direction: column;
	text-decoration: none;

	color: $text;
}
</style>
