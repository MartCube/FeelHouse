<template>
	<header :class="{ fill: scrollPosition > 500 && mobile > 800 }">
		<div class="container">
			<n-link to="/" class="logo">
				<img src="/logo-light.png" alt="logo" />
				<img src="/logo-dark.png" alt="logo" />
			</n-link>
			<div v-if="!$fetchState.pending" class="links" :class="{ open: isOpened }">
				<n-link v-for="link in data.links" :key="link.uid" :to="`/${link.uid}/`"> {{ link.label }} </n-link>
			</div>
			<button class="burger" :class="{ open: isOpened }" @click="openMenu()">
				<span></span>
				<span></span>
				<span></span>
			</button>
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
		mobile: null,
		isOpened: false,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(navbar)
	},

	mounted() {
		window.addEventListener('scroll', this.updateScroll)
		window.addEventListener('resize', this.resize)
	},
	methods: {
		updateScroll() {
			this.scrollPosition = window.scrollY
		},
		resize() {
			this.mobile = window.innerWidth
		},
		openMenu() {
			this.isOpened = !this.isOpened
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
.burger {
	display: none;
}

@media (max-width: 800px) {
	header {
		width: 100%;
		background-color: $white;
		.container {
			padding: 0 15px;
		}
		.links {
			position: fixed;
			width: 100%;
			height: 100vh;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			left: -100%;
			top: 0;
			opacity: 0;
			transition: left, opacity 0.2s ease-in;
			z-index: 1;
			background-color: $white;
			a {
				color: $text;
				margin: 20px;
				font-size: 1.5rem;
			}
			&.open {
				left: 0;
				opacity: 1;
			}
		}
		.logo {
			z-index: 3;
		}
	}
	.burger {
		width: 40px;
		height: 22px;
		background: none;
		box-shadow: none;
		display: block;
		border: none;
		outline: 0;
		cursor: pointer;
		position: relative;
		z-index: 3;
		span {
			position: absolute;
			left: 50%;
			width: 26px;
			height: 2px;
			background-color: $primary;
			&:nth-child(1) {
				top: 0;
				transform: translateX(-50%) translateY(0);
				transition: top 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87) 0.3s, transform 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87);
			}
			&:nth-child(2) {
				top: 8px;
				opacity: 1;
				transform: translateX(-50%);
			}
			&:last-child {
				top: 16px;
				transform: translateX(-50%) translateY(0);
				transition: top 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87) 0.3s, transform 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87);
			}
		}
		&.open {
			span {
				&:nth-child(1) {
					top: 50%;
					transform: translateX(-50%) translateY(0) rotate(45deg);
					transition: top 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87), transform 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87) 0.3s;
				}
				&:nth-child(2) {
					opacity: 0;
				}
				&:last-child {
					top: 50%;
					transform: translateX(-50%) translateY(0) rotate(-45deg);
					transition: bottom 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87), transform 0.3s cubic-bezier(0.21, 0.83, 0.26, 0.87) 0.3s;
				}
			}
		}
	}
}
</style>
