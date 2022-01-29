<template>
	<section class="project_list section-padding">
		<div class="container">
			<h2 class="section-title">Our Projects</h2>
			<div class="grid">
				<ProjectCard v-for="project in list" :key="project.uid" :data="project" />
			</div>
		</div>
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
<style lang="scss">
.project_list {
	width: 100%;
	.section-title {
		text-align: center;
		margin-bottom: 5rem;
	}
	.grid {
		width: 100%;
		padding: 0 15px;
	}
}
</style>
