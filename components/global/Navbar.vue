<template>
	<header :class="{ fill: scrollPosition > 500 }">
		<div class="container">
			<n-link to="/" class="logo">
				<img src="/logo-light.png" alt="logo" />
				<img src="/logo-dark.png" alt="logo" />
			</n-link>
			<div v-if="!$fetchState.pending" class="links">
				<!-- <n-link to="/"> Home </n-link> -->
				<n-link v-for="link in data.links" :key="link.uid" :to="`/${link.uid}/`"> {{ link.label }} </n-link>
			</div>
		</div>
	</header>
</template>

<script>
import { navbar } from '@/assets/queries'

export default {
	name: 'Navbar',
	data: () => ({
		data: null,
		scrollPosition: null,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(navbar)
	},

	mounted() {
		window.addEventListener('scroll', this.updateScroll)
	},
	methods: {
		updateScroll() {
			this.scrollPosition = window.scrollY
		},
	},
}
</script>

<style lang="scss" scoped>
header {
	width: 100vw;
	height: 100px;
	position: fixed;
	z-index: 30;
	top: 0;
	border-bottom: 1px solid $borderWhite;

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: inherit;
	}
	.links {
		display: flex;
		a {
			text-transform: uppercase;
			text-decoration: none;
			color: $white;
			margin: 0 20px;
			&:hover {
				color: $primary;
			}
		}
	}
	.logo {
		position: relative;
		width: 150px;
		height: 45px;
		img {
			width: 100%;
			transition: opacity 0.3s linear;
			height: 100%;
			position: absolute;
		}
		img:last-child {
			opacity: 0;
		}
	}
	&.fill {
		background-color: $white;
		.logo {
			img {
				&:first-child {
					opacity: 0;
				}
				&:last-child {
					opacity: 1;
				}
			}
		}
		.links {
			a {
				color: $text;
			}
		}
	}
}
</style>
