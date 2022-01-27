<template>
	<section class="project_ref">
		{{ list }}

		<!-- <ProjectCard v-for="project in data" :key="project.uid" :data="project" /> -->
	</section>
</template>

<script>
// import { projectList } from '@/assets/queries'

export default {
	props: {
		list: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		data: null,
	}),
	// async fetch() {
	// 	this.data = await this.$sanity.fetch(projectList, { tag: this.tag[0].value })
	// },
}
</script>
