<template>
	<div class="page">
		<template v-if="!$fetchState.pending">
			<Intro :title="page.poster.alt" :poster="page.poster.src" />
			<ProjectCard v-for="project in list" :key="project.uid" :data="project" />
		</template>
	</div>
</template>

<script>
import { page, projectList } from '@/assets/queries'

export default {
	name: 'Projects',

	data: () => ({
		page: null,
		list: null,
	}),
	async fetch() {
		this.page = await this.$sanity.fetch(page, { uid: 'projects' })
		this.list = await this.$sanity.fetch(projectList)
	},
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.project_list {
		flex-direction: column;
	}
}
</style>
