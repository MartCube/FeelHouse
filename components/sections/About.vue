<template>
	<section class="about section-padding">
		<div class="container">
			<SanityContent class="content" :blocks="content" />
			<div class="image">
				<ImageItem :image="poster" w="500" h="400" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		// title: {
		// 	type: String,
		// 	required: true,
		// },
		content: {
			type: Array,
			required: true,
		},
		poster: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.about {
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.image,
		.content {
			width: 50%;
			padding: 0 15px;
		}
		.content {
			h2 {
				@include section_title(50px, 25px);
			}
		}
		.image {
			transition: transform 0.3s linear;
			&:hover {
				transform: scale(0.95);
			}
		}
	}
}
</style>
