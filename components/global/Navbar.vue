<template>
	<header :class="{ fill: scrollPosition > 500 && mobile > 800 }">
		<div class="container">
			<n-link :to="localePath('index')" class="logo">
				<img src="/logo-light.png" alt="logo" />
				<img src="/logo-dark.png" alt="logo" />
			</n-link>
			<LangSwitcher />
			<nav class="links" :class="{ open: isOpened }" @click="openMenu()">
				<n-link v-for="link in getNavigation" :key="link.uid" :to="`${normalizeLocale}/${link.uid}/`"> {{ link.title }} </n-link>
			</nav>
			<button class="burger" :class="{ open: isOpened }" @click="openMenu()">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Navbar',
	data: () => ({
		scrollPosition: null,
		mobile: null,
		isOpened: false,
	}),
	computed: {
		getNavigation() {
			return this.$store.getters.navigation.filter((el) => el.lang === this.$i18n.localeProperties.code && el.uid !== this.getIndexId).sort((a, b) => a.place - b.place)
		},
		normalizeLocale() {
			return this.$i18n.localeProperties.code === 'en' ? '' : '/' + this.$i18n.localeProperties.code
		},
		getIndexId() {
			let id = 'home'
			switch (this.$i18n.localeProperties.code) {
				case 'ru':
					id = 'domashnyaja'
					break
				case 'ua':
					id = 'golovna'
					break
			}
			return id
		},
	},
	mounted() {
		this.mobile = window.innerWidth
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
			if (window.innerWidth < 801) this.isOpened = !this.isOpened
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
		justify-content: flex-end;
		align-items: center;
		height: 30px;
		flex-grow: 1;

		a {
			margin: 0 20px;
			text-transform: uppercase;
			text-decoration: none;
			font-size: 1rem;
			color: $white;
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
			justify-content: flex-start;
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
			img {
				&:first-child {
					opacity: 0;
				}
				&:last-child {
					opacity: 1;
				}
			}
		}
	}
	.burger {
		margin-left: auto;
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
