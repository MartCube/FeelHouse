import { groq } from '@nuxtjs/sanity'

// singleton
export const index = groq`*[ _type == "index" ][0]{
	content[] {
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
		_type == 'articleList' => {...},
		_type == 'countdown' => { 'bg': background.asset._ref, ...},

  	},
	metaTags {
		title,
		description,
		"image": image.asset._ref
	},
}`
export const navbar = groq`*[ _type == "navbar" ][0]{
	links[]->{
		'uid':uid.current,
		'label':linkLabel,
	}
}`

// by UID
export const page = groq`*[ _type == "page" && uid.current == $uid][0]{
    title,
	'poster':poster.asset._ref,
	content[] {
		_type == 'blockContent' => { '_type': 'block', ... },
		_type == 'contactForm' => { ... },
		_type == 'about' => { 'poster': poster.asset._ref, ... },
	}
}`
export const project = groq`*[ _type == "project" && uid.current == $uid][0]{
    title,
	"uid": uid.current,
	"poster": poster.asset._ref,
    "youtube": youtube.url,
	info,
	description,
	gallery,
}`
export const article = groq`*[ _type == "article" && uid.current == $uid][0]{
    title,
	"poster": poster.asset._ref,
    content[] {
		_type == 'blockContent' => {
      		'_type': 'block',
       		...
		},
		_type == 'img' => {
       		_key,
       		_type,
       		alt,
			"image": asset._ref,
		},
		_type == 'youtube' => {...}
	}
}`
export const service = groq`*[ _type == "service" && uid.current == $uid][0]{
	"uid": uid.current,
	"poster": poster.asset._ref,
    title,
    content,
}`

// list
export const projectList = groq`*[ _type == "project" ]{
	title,
	"poster": poster.asset._ref,
	"uid": uid.current,
}`
export const articleList = groq`*[ _type == "article" ] | order(_createdAt desc)[$from...$to]{
	title,
	"uid": uid.current,
	"poster": poster.asset._ref,
	releaseDate,
}`
export const serviceList = groq`*[ _type == "service" ]{
	title,
	"poster": poster.asset._ref,
	"uid": uid.current,
}`

// pagination
export const articleCount = groq`count(*[ _type == "article" ])`
