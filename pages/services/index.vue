<template>
	<div class="page">
		<Intro :title="title" :poster="poster" />
	</div>
</template>

<script>
import { page } from '@/assets/queries'

export default {
	name: 'Projects',
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'services' })
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
}
</style>
