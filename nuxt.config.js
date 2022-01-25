export default {
	css: ['~/assets/main.scss'],
	target: 'static',
	components: ['~/components/forms', '~/components/global', '~/components/items', '~/components/local', '~/components/sections'],

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Feel House',
		htmlAttrs: { lang: 'en' },
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
		link: [{ rel: 'icon', type: 'png', href: '/favicon.png' }],
	},

	plugins: [{ src: '@/plugins/vee-validate.js' }, { src: `~/plugins/lazysizes.client.js` }],

	modules: ['@nuxtjs/sanity/module'],
	sanity: {
		projectId: process.env.SANITY_ID,
		minimal: true,
	},

	router: {
		trailingSlash: true,
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources', 'nuxt-font-loader'],
	styleResources: { scss: ['./assets/colors.scss'] },
	fontLoader: {
		url: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap',
		prefetch: true,
		preconnect: true,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		// vee validate
		transpile: ['vee-validate/dist/rules'],
		// lazysizes
		extend(config, { isClient, loaders: { vue } }) {
			vue.transformAssetUrls.img = ['data-src', 'src']
			vue.transformAssetUrls.source = ['data-srcset', 'srcset']
		},
	},
}
