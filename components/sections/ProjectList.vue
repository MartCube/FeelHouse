<template>
	<section class="project_list section-padding">
		<div class="container">
			<h2 class="section-title">Our Projects</h2>
			<div v-if="!$fetchState.pending" class="grid">
				<ProjectCard v-for="project in data" :key="project.uid" :data="project" />
			</div>
		</div>
	</section>
</template>

<script>
import { projectList } from '@/assets/queries'

export default {
	data: () => ({
		data: null,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(projectList, { lang: this.$i18n.localeProperties.code })
	},
}
</script>
<style lang="scss">
.project_list {
	width: 100%;
	.section-title {
		text-align: center;
		margin-bottom: 3rem;
	}
	.grid {
		width: 100%;
		padding: 0 15px;
	}
}
</style>
