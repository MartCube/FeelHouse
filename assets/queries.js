import { groq } from '@nuxtjs/sanity'

export const index = groq`*[_type == "page" && name == "index"][0]{
	content,
}`

export const articleList = groq`*[_type == "article" ][0...3]{
	title,
	"poster": poster.asset._ref,
	_createdAt,
}`

export const serviceList = groq`*[_type == "service" ]{
	title,
	"poster": poster.asset._ref,
}`
