<template>
	<n-link class="article_card" :to="`/blog/${data.uid}/`">
		<ImageItem :image="data.poster" w="400" h="300" />
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
.article_card {
	width: 400px;
	min-height: 300px;

	display: flex;
	flex-direction: column;
	text-decoration: none;

	color: $text;
}
</style>
