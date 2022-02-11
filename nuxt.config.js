export default {
	loading: { color: '#c5a37d' },
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

	plugins: [{ src: '@/plugins/scroll-plugin.js' }, { src: '@/plugins/vee-validate.js' }, { src: `~/plugins/lazysizes.client.js` }],

	modules: ['@nuxtjs/sanity/module', '@nuxtjs/i18n'],
	sanity: {
		projectId: process.env.SANITY_ID,
		minimal: true,
		imageHelper: false,
	},

	router: {
		trailingSlash: true,
	},

	i18n: {
		defaultLocale: 'ru',
		baseUrl: 'https://feel-house.ua/',
		lazy: true,
		langDir: 'i18n/',
		detectBrowserLanguage: false,
		seo: false,
		parsePages: false, // Disable babel parsing
		locales: [
			{
				code: 'en',
				name: 'eng',
				file: 'en.js',
				iso: 'en-EN',
			},
			{
				code: 'ru',
				name: 'рус',
				file: 'ru.js',
				iso: 'ru-RU',
				isCatchallLocale: true,
			},
			{
				code: 'ua',
				name: 'укр',
				file: 'ua.js',
				iso: 'uk-UA',
			},
		],
		pages: {
			'blog/index': {
				en: '/blog',
				ru: '/novosti',
				ua: '/novunu',
			},
			'blog/_article': {
				en: '/blog/:article?',
				ru: '/novosti/:article?',
				ua: '/novunu/:article?',
			},
			'projects/index': {
				en: '/projects',
				ru: '/proekty',
				ua: '/nashi-proekty',
			},
			'projects/_project': {
				en: '/projects/:project?',
				ru: '/proekty/:project?',
				ua: '/nashi-proekty/:project?',
			},
			'services/index': {
				en: '/services',
				ru: '/uslugi',
				ua: '/poslygu',
			},
			'services/_service': {
				en: '/services/:service?',
				ru: '/uslugi/:service?',
				ua: '/poslygu/:service?',
			},
			_page: {
				en: '/:page?',
				ru: '/:page?',
				ua: '/:page?',
			},
		},
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources', 'nuxt-font-loader'],
	styleResources: { scss: ['./assets/colors.scss', './assets/mixins.scss'] },
	fontLoader: {
		url: 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap',
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
