<template>
	<section class="project_list">
		<h2 v-if="title" class="title">{{ title }}</h2>
		<ProjectCard v-for="project in data" :key="project.uid" :data="project" />
	</section>
</template>

<script>
import { projectList } from '@/assets/queries'

export default {
	props: {
		title: {
			type: String,
			default: null,
		},
		tag: {
			type: Array,
			default: () => [{ value: 'design' }],
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
.project_list {
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
