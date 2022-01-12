import { groq } from '@nuxtjs/sanity'

export const index = groq`*[_type == "page" && name == "index"][0]{
	content,
}`
