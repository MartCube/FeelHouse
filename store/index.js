export const state = (context) => ({
	domain: 'https://feel-house.vercel.app',
	metaHead: {},
})

export const getters = {
	metaHead: (state) => state.metaHead,
}

export const mutations = {
	setMeta(state, value) {
		state.metaHead = value
	},
}

export const actions = {
	async metaTags({ state, commit, app }, { type, fetch }) {
		const metaData = await fetch.metaTags
		const lang = this.$i18n.localeProperties.code
		const image = `https://cdn.sanity.io/images/n9rlxbmy/production/${metaData.image === undefined ? '' : metaData.image.slice(6)}?auto=metaData`
		const head = {
			htmlAttrs: { lang },
			title: metaData.title,
			link: [],
			meta: [],
		}
		// canonical link
		let canonical
		if (type === 'index') {
			canonical = `${state.domain}/`
			head.link.push(
				...[
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/en/`, hreflang: 'en' },
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/ua/`, hreflang: 'ua' },
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/`, hreflang: 'x-default' },
				],
			)
		} else if (type === 'page') {
			canonical = `${state.domain}/${fetch.langs.filter((el) => el.lang === 'ru')[0].uid}/`
			head.link.push(
				...[
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/en/${fetch.langs.filter((el) => el.lang === 'en')[0].uid}/`, hreflang: 'en' },
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/ua/${fetch.langs.filter((el) => el.lang === 'ua')[0].uid}/`, hreflang: 'ua' },
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/${fetch.langs.filter((el) => el.lang === 'ru')[0].uid}/`, hreflang: 'x-default' },
				],
			)
		} else {
			canonical = `${state.domain}${this.localePath(type, 'ru')}${fetch.langs.filter((el) => el.lang === 'ru')[0].uid}/`
			head.link.push(
				...[
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/en${this.localePath(type, 'en')}${fetch.langs.filter((el) => el.lang === 'en')[0].uid}/`, hreflang: 'en' },
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/ua${this.localePath(type, 'ua')}${fetch.langs.filter((el) => el.lang === 'ua')[0].uid}/`, hreflang: 'ua' },
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}${this.localePath(type, 'ru')}${fetch.langs.filter((el) => el.lang === 'ru')[0].uid}/`, hreflang: 'x-default' },
				],
			)
		}
		head.link.push({ hid: 'canonical', rel: 'canonical', href: canonical })
		head.meta.push({ hid: 'og:url', name: 'og:url', content: canonical })
		head.meta.push(
			...[
				{ hid: 'robots', name: 'robots', content: 'follow' },
				{ hid: 'description', name: 'description', content: metaData.description },
				// facebook
				{ hid: 'og:type', property: 'og:type', content: '' },
				{ hid: 'og:url', property: 'og:url', content: canonical },
				{ hid: 'og:title', property: 'og:title', content: metaData.title },
				{ hid: 'og:description', property: 'og:description', content: metaData.description },
				{ hid: 'og:image', property: 'og:image', content: image },
				// twitter
				{ hid: 'twitter:card', name: 'twitter:card', content: image },
			],
		)
		await commit('setMeta', head)
	},
}
