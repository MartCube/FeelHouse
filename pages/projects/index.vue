<template>
	<div class="page">
		<Intro :title="poster.alt" :poster="poster.src" />
		<ProjectList />
	</div>
</template>

<script>
import { page } from '@/assets/queries'

export default {
	name: 'Projects',
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'projects' })
	},
	data: () => ({}),
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
