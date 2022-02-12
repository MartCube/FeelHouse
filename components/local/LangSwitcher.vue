<template>
	<div class="lang">
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
// rewrite component where you will fetch in back-end only alternative languages
// so need to filter in front-end
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
	display: flex;
	font-size: 1rem;
	color: $white;

	.current_locale {
		padding: 0 10px;
		padding-bottom: 2px;
		display: flex;
		align-items: center;
		z-index: 2;
		cursor: pointer;
		background: $primary;

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
</style>
