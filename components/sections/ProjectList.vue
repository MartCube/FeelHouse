<template>
	<section class="project_list">
		<ProjectCard v-for="project in list" :key="project.uid" :data="project" />
	</section>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			required: true,
		},
	},
}
</script>
