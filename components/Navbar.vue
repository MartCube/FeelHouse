<template>
	<header id="navbar">
		<div class="links">
			<n-link v-for="link in links" :key="link.uid" :to="`/${link.uid}/`"> {{ link.uid }} </n-link>
		</div>
	</header>
</template>

<script>
import { pageLinks } from '@/assets/queries'

export default {
	name: 'Navbar',
	data: () => ({
		links: null,
	}),
	async fetch() {
		this.links = await this.$sanity.fetch(pageLinks)
	},
}
</script>

<style lang="scss" scoped>
#navbar {
	width: 100%;
	height: 100px;
	position: fixed;
	top: 0;
	border-bottom: 1px solid $border;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.links {
		display: flex;
		a {
			text-decoration: none;
			color: $text;
			margin: 0 20px;
		}
	}
}
</style>
