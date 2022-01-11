export default {
	css: ['~/assets/main.scss'],
	target: 'static',
	components: true,
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Feel House',
		htmlAttrs: { lang: 'en' },
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
		link: [{ rel: 'icon', type: 'png', href: '/favicon.png' }],
	},

	plugins: [],

	modules: ['@nuxtjs/sanity/module'],
	sanity: {
		projectId: process.env.projectId,
		minimal: true,
		contentHepler: true,
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources'],
	styleResources: { scss: ['./assets/colors.scss'] },
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}
