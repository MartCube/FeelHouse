<template>
	<div class="lang" :class="{ opened: showLocales }">
		<div class="current_locale" @click="showLocales = !showLocales">
			<span>{{ currentLocale }}</span>
		</div>
		<n-link v-for="locale in availableLocales" :key="locale.code" class="locale" :to="switchLocalePath(locale.code)" @click.native="showLocales = false">
			{{ locale.code }}
		</n-link>
	</div>
</template>

<script>
import { localleAnim } from '~/assets/anime'

export default {
	data: () => ({
		showLocales: false,
	}),
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
		},
		currentLocale() {
			return this.$i18n.locale
		},
	},
	watch: {
		async showLocales(newValue, oldValue) {
			await this.$nextTick()
			if (newValue) localleAnim(document.querySelectorAll('.locale'), true)
			else localleAnim(document.querySelectorAll('.locale'), false)
		},
	},
}
</script>

<style lang="scss" scoped>
.lang {
	height: 25px;
	margin-left: 1.5rem;
	display: flex;
	width: 36px;
	font-size: 1.2rem;
	color: $white;
	overflow: hidden;
	transition: width 0.3s linear;
	&.opened {
		width: auto;
	}
	.current_locale {
		padding: 0 10px;
		padding-bottom: 2px;
		display: flex;
		align-items: center;
		z-index: 2;
		cursor: pointer;
		// background: $primary;

		span {
			line-height: 12px;
		}
		&:hover {
			opacity: 0.85;
		}
	}
	.locale {
		opacity: 0; //opacity:1
		padding-bottom: 2px;
		&:hover {
			background: $primary;
			color: $white;
		}
	}
	a {
		padding: 0 10px;
		display: flex;
		align-items: center;
		text-decoration: none;
		line-height: 12px;
		outline: none;
		position: relative;
	}
}
.fill {
	.lang {
		color: $text;
		// .current_locale {
		// 	color: $white;
		// }
	}
}

@media (max-width: 800px) {
	.lang {
		color: $text;
		.locale {
			&:hover {
				color: $white;
			}
		}
	}
}
</style>
