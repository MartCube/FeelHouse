<template>
	<div class="page">
		{{ title }}
	</div>
</template>

<script>
import { page } from '@/assets/queries'

export default {
	name: 'Index',
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'projects' })
	},
	data: () => ({}),
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
