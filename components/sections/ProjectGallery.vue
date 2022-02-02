<template>
	<div class="gallery">
		<CoolLightBox :items="getImagesArray(gallery)" :index="index" @close="index = null"></CoolLightBox>
		<div class="wrapper">
			<figure v-for="(item, y) in gallery" :key="y" @click="index = y">
				<ImageItem :image="item" w="500" h="500" />
			</figure>
		</div>
	</div>
</template>
<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
	components: {
		CoolLightBox,
	},
	props: {
		gallery: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		index: null,
	}),
	methods: {
		getImagesArray(arr) {
			const imageUrls = []
			arr.forEach((item) => {
				imageUrls.push(`https://cdn.sanity.io/images/n9rlxbmy/production/${item.slice(6, item.length - 4)}.jpg`)
			})
			console.log(imageUrls)
			return imageUrls
		},
	},
}
</script>
<style lang="scss" scoped>
.gallery {
	.wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-columns: 17%;
		grid-gap: 20px;
		figure {
			display: flex;
			transition: width 0.2s linear;
			picture {
				object-fit: cover;
			}
			&:nth-child(1) {
				grid-column: 1 / 1;
				grid-row: 1 / 3;
			}
			&:nth-child(2) {
				grid-column: 2 / 2;
				grid-row: 1 / 1;
			}
			&:nth-child(3) {
				grid-column: 3 / 3;
				grid-row: 1 / 1;
			}
			&:nth-child(4) {
				grid-column: 1 / 1;
				grid-row: 3 / 3;
			}
			&:nth-child(5) {
				grid-column: 2 / 2;
				grid-row: 2 / 4;
			}
			&:nth-child(6) {
				grid-column: 3 / 3;
				grid-row: 2 / 2;
			}
			&:nth-child(7) {
				grid-column: 1 / 1;
				grid-row: 4 / 4;
			}
			&:nth-child(8) {
				grid-column: 2 / 2;
				grid-row: 4 / 4;
			}
			&:nth-child(9) {
				grid-column: 3 / 3;
				grid-row: 3 / 5;
			}
		}
	}
	img {
		width: auto;
		height: auto;
	}
}
</style>
