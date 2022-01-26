<template>
	<header>
		<div v-if="!$fetchState.pending" class="links">
			<n-link v-for="link in data.links" :key="link.uid" :to="`/${link.uid}/`"> {{ link.uid }} </n-link>
		</div>
	</header>
</template>

<script>
import { navbar } from '@/assets/queries'

export default {
	name: 'Navbar',
	data: () => ({
		data: null,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(navbar)
	},
}
</script>

<style lang="scss" scoped>
header {
	width: 100vw;
	height: 100px;
	position: fixed;
	z-index: 3;
	top: 0;
	border-bottom: 1px solid $borderWhite;
	// background: $white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.links {
		display: flex;
		a {
			text-transform: uppercase;
			text-decoration: none;
			color: $white;
			margin: 0 20px;
		}
	}
}
</style>
