<template>
	<section class="about">
		<SanityContent class="text" :blocks="text" />

		<ImageItem :image="poster" w="200" />
	</section>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		poster: {
			type: String,
			required: true,
		},
	},
}
</script>
