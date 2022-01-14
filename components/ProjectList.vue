<template>
	<section class="projects">
		<h2 class="title">{{ title }}</h2>
		<ProjectCard v-for="project in data" :key="project.uid" :data="project" />
	</section>
</template>

<script>
import { projectList } from '@/assets/queries'

export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		tag: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		data: null,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(projectList, { tag: this.tag[0].value })
	},
}
</script>

<style lang="scss" scoped>
.projects {
	width: 100%;
	max-width: 1200px;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.title {
		width: 100%;
	}
	margin: 100px 0;
}
</style>
