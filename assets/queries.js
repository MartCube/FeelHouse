import { groq } from '@nuxtjs/sanity'

export const page = groq`*[ _type == "page" && uid.current == $uid][0]{
	"uid": uid.current,
    title,
    content,
}`

export const pageLinks = groq`*[ _type == "page" ]{
	"uid": uid.current,
    title,
}`

export const articleList = groq`*[_type == "article" ][0...3]{
	title,
	"uid": uid.current,
	"poster": poster.asset._ref,
	releaseDate,
}`

export const serviceList = groq`*[_type == "service" ]{
	title,
	"poster": poster.asset._ref,
}`
