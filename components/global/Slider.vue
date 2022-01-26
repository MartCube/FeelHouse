<template>
	<section class="slider">
		<div v-for="slide in list" :key="slide.link" class="slider">
			<h2>{{ slide.title }}</h2>
			<p>{{ slide.description }}</p>
			<ImageItem :image="slide.poster" w="150" />
			<ButtonItem>Discover</ButtonItem>
		</div>
	</section>
</template>

<script>
// import { projectList } from '@/assets/queries'

export default {
	name: 'Slider',
	props: {
		list: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		data: null,
	}),
}
</script>
