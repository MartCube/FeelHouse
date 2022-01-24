<template>
	<div>
		<n-link class="project_card" :to="'/projects/' + data.uid">
			<SanityImage :asset-id="data.poster" auto="format" fit="crop" w="500" h="300" />
		</n-link>
		<div class="info">
			<h2>{{ data.title }}</h2>
			<span> {{ data.releaseDate }} </span>
			<Btn>send</Btn>
		</div>
	</div>
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
.project_card {
	width: fit-content;
	display: flex;
	flex-direction: column;
	text-decoration: none;

	color: $text;
}
</style>
