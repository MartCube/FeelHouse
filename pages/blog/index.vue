<template>
	<div class="page">
		<Intro :title="title" :poster="poster" />
	</div>
</template>

<script>
import { page } from '@/assets/queries'

export default {
	name: 'Blog',
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'blog' })
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
