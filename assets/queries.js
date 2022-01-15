import { groq } from '@nuxtjs/sanity'

export const page = groq`*[ _type == "page" && uid.current == $uid][0]{
	"uid": uid.current,
	"poster": poster.asset._ref,
    title,
    content,
}`

export const pageLinks = groq`*[ _type == "page" && uid.current != "index"]{
	"uid": uid.current,
    title,
}`

export const project = groq`*[ _type == "project" && uid.current == $uid][0]{
	"uid": uid.current,
	"poster": poster.asset._ref,
    title,
    content,
}`

export const projectList = groq`*[ _type == "project" && tags[].value == $tag ]{
	title,
	"poster": poster.asset._ref,
	"tags": tags[].value,
	"uid": uid.current,
}`

export const article = groq`*[ _type == "article" && uid.current == $uid][0]{
	"uid": uid.current,
	"poster": poster.asset._ref,
    title,
    content,
}`

export const articleList = groq`*[ _type == "article" ][0...3]{
	title,
	"uid": uid.current,
	"poster": poster.asset._ref,
	releaseDate,
}`

export const service = groq`*[ _type == "service" && uid.current == $uid][0]{
	"uid": uid.current,
	"poster": poster.asset._ref,
    title,
    content,
}`

export const serviceList = groq`*[ _type == "service" ]{
	title,
	"poster": poster.asset._ref,
	"uid": uid.current,
}`
