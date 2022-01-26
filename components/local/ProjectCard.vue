<template>
	<div>
		<n-link class="project_card" :to="`/projects/${data.uid}/`">
			<ImageItem :image="data.poster" w="500" h="300" />
		</n-link>
		<div class="info">
			<h2>{{ data.title }}</h2>
			<span> {{ data.releaseDate }} </span>
			<ButtonItem>send</ButtonItem>
		</div>
	</div>
</template>

<script>
import ButtonItem from '../items/ButtonItem.vue'
export default {
	components: { ButtonItem },
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
	width: 500px;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	text-decoration: none;

	color: $text;
}
</style>
