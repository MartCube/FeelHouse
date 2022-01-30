<template>
	<section class="project list">
		<template v-if="!$fetchState.pending">
			<ProjectCard v-for="project in data" :key="project.uid" :data="project" />
		</template>
	</section>
</template>

<script>
import { projectList } from '@/assets/queries'

export default {
	data: () => ({
		data: null,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(projectList)
	},
}
</script>

<style lang="scss" scoped>
.list {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	padding: 100px 0;
}
@media screen and (max-width: 800px) {
	.list {
		padding: 100px 5%;
	}
}
</style>
