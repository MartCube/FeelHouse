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
			},
			...
    	},
		_type == 'articleList' => {...},
  	},
	metaTags {
		title,
		description,
		"image": image.asset._ref
	},
}`
export const navbar = groq`*[ _type == "navbar" ][0]{
	links[]->{'uid':uid.current}
}`

// by UID
export const page = groq`*[ _type == "page" && uid.current == $uid][0]{
	"uid": uid.current,
	poster{
		'src': asset._ref,
		alt
 	},
    title,
    content,
}`
export const project = groq`*[ _type == "project" && uid.current == $uid][0]{
	"uid": uid.current,
	"poster": poster.asset._ref,
    title,
    content,
}`
export const article = groq`*[ _type == "article" && uid.current == $uid][0]{
	"uid": uid.current,
	"poster": poster.asset._ref,
    title,
    content,
}`
export const service = groq`*[ _type == "service" && uid.current == $uid][0]{
	"uid": uid.current,
	"poster": poster.asset._ref,
    title,
    content,
}`

// list
export const projectList = groq`*[ _type == "project" && tags[].value == $tag ]{
	title,
	"poster": poster.asset._ref,
	"tags": tags[].value,
	"uid": uid.current,
}`
export const articleList = groq`*[ _type == "article" ][0...3]{
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

// refs
export const projectRef = groq`*[ _id in $refs ]{
	title,
	poster,
	"uid": uid.current,
}`
