<template>
	<div>
		<n-link class="project_card" :to="'/projects/' + data.uid">
			<SanityImage :asset-id="data.poster" auto="format" fit="clip" height="400" />
		</n-link>
		<div class="info">
			<h2>{{ data.title }}</h2>
			<span> {{ data.releaseDate }} </span>
			<Btn>send</Btn>
		</div>
	</div>
</template>

<script>
import Btn from './Btn.vue'
export default {
	components: { Btn },
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
	width: 350px;
	display: flex;
	flex-direction: column;
	text-decoration: none;

	color: $text;
}
</style>
