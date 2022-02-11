import { groq } from '@nuxtjs/sanity'

// by UID
export const page = groq`*[ _type == "page" && uid.current == $uid &&  __i18n_lang == $lang ][0]{
    title,
	'poster':poster.asset._ref,
	content[] {
		_type == 'intro' => { 'poster': poster.asset._ref, ... },
		_type == 'blockContent' => { '_type': 'block', ... },
		_type == 'contactForm' => { info[] { '_type': 'block', 	...	}, ... },
		// _type == 'articleList' => {...},
		// _type == 'faq' => {...},
		_type == 'countdown' => { 'bg': background.asset._ref, ...},
		_type == 'about' => { 
			text[] { '_type': 'block', 	...	},
			'poster': poster.asset._ref, 
			... 
		},
		_type == 'team' => { 
			employee[]{
				SMedia[]{ name,link },
				'image':image.asset._ref,
				...
			},
			...   
		},
		_type == 'slider' => {
			list[] {
				title,
				description,
				'poster': poster.asset._ref,
     		},
      		...
		},
		_type == 'projectList' => {
			list[] -> {
				title,
				'uid': uid.current,
				'poster': poster.asset._ref,
				description
			},
			...
    	},
		_type == 'partners' => {  
			'list': list[].asset._ref,
			...
		},
		_type == 'partners' => {  
			...,
			'list': list[].asset._ref
		},
		...
	},
	__i18n_lang != 'ru'  => {
			'langs': [
				{
			'label': __i18n_base -> __i18n_lang,
			'uid': __i18n_base -> uid.current,
				},
				...
				__i18n_base -> __i18n_refs[] -> {'label': __i18n_lang,'uid':uid.current}, 
			]  
    },
  __i18n_lang == 'ru' => {
			'langs': [
        {
         'lang': __i18n_lang,
         'uid':uid.current,
      },
      ...
      __i18n_refs[] -> {'lang': __i18n_lang,'uid':uid.current}
    ],
  },
}`
export const project = groq`*[ _type == "project" && uid.current == $uid][0]{
    title,
	"poster": poster.asset._ref,
	info,
	'gallery': gallery[].asset._ref,
    content[] {
		_type == 'blockContent' => {'_type': 'block', ...},
		_type == 'image' => { _key, _type, alt, "image": asset._ref, },
		_type == 'youtube' => {...}
	},
	__i18n_lang != 'ru'  => {
			'langs': [
				{
			'label': __i18n_base -> __i18n_lang,
			'uid': __i18n_base -> uid.current,
				},
				...
				__i18n_base -> __i18n_refs[] -> {'label': __i18n_lang,'uid':uid.current}, 
			]  
    },
  __i18n_lang == 'ru' => {
			'langs': [
        {
         'lang': __i18n_lang,
         'uid':uid.current,
      },
      ...
      __i18n_refs[] -> {'lang': __i18n_lang,'uid':uid.current}
    ],
  },
}`
export const article = groq`*[ _type == "article" && uid.current == $uid][0]{
    title,
	"poster": poster.asset._ref,
    content[] {
		_type == 'blockContent' => {'_type': 'block', ...},
		_type == 'image' => { _key, _type, alt, "image": asset._ref, },
		_type == 'youtube' => {...}
	},
	__i18n_lang != 'ru'  => {
			'langs': [
				{
			'label': __i18n_base -> __i18n_lang,
			'uid': __i18n_base -> uid.current,
				},
				...
				__i18n_base -> __i18n_refs[] -> {'label': __i18n_lang,'uid':uid.current}, 
			]  
    },
  __i18n_lang == 'ru' => {
			'langs': [
        {
         'lang': __i18n_lang,
         'uid':uid.current,
      },
      ...
      __i18n_refs[] -> {'lang': __i18n_lang,'uid':uid.current}
    ],
  },
}`
export const service = groq`*[ _type == "service" && uid.current == $uid][0]{
	title,
	"poster": poster.asset._ref,
    content[] {
		_type == 'blockContent' => {'_type': 'block', ...},
		_type == 'image' => { _key, _type, alt, "image": asset._ref, },
		_type == 'youtube' => {...}
	},
	__i18n_lang != 'ru'  => {
			'langs': [
				{
			'label': __i18n_base -> __i18n_lang,
			'uid': __i18n_base -> uid.current,
				},
				...
				__i18n_base -> __i18n_refs[] -> {'label': __i18n_lang,'uid':uid.current}, 
			]  
    },
  __i18n_lang == 'ru' => {
			'langs': [
        {
         'lang': __i18n_lang,
         'uid':uid.current,
      },
      ...
      __i18n_refs[] -> {'lang': __i18n_lang,'uid':uid.current}
    ],
  },
}`

// list
export const projectList = groq`*[ _type == "project" &&  __i18n_lang == $lang ]{
	title,
	"poster": poster.asset._ref,
	"uid": uid.current,
	description
}`
export const articleList = groq`*[ _type == "article" &&  __i18n_lang == $lang ] | order(_createdAt desc)[$from...$to]{
	title,
	"uid": uid.current,
	"poster": poster.asset._ref,
	releaseDate,
}`
export const serviceList = groq`*[ _type == "service" &&  __i18n_lang == $lang ]{
	title,
	"poster": poster.asset._ref,
	"uid": uid.current,
	description
}`
export const serviceListLinks = groq`*[ _type == "service" &&  __i18n_lang == $lang ]{
	title,
	"uid": uid.current,
}`
export const navbar = groq`*[ _type == "navbar" ][0]{
	links[]->{
		'uid':uid.current,
		'label':title,
	}
}`

// pagination
export const articleCount = groq`count(*[ _type == "article" ])`
