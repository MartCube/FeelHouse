<template>
	<div class="page">
		<Intro :title="title" :poster="poster" />
		<ProjectList title="test" />
	</div>
</template>

<script>
import { page } from '@/assets/queries'
import projectList from '@/components/ProjectList.vue'

export default {
	name: 'Projects',
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'projects' })
	},
	data: () => ({
		serializers: {
			types: {
				projectList,
			},
		},
	}),
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
