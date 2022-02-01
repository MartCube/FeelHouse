<template>
	<section class="partners">
		<div class="container">
			<div class="grid">
				<div v-for="image in list" :key="image" class="image">
					<ImageItem :image="image" w="200" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'PartnersGallery',
	props: {
		list: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.partners {
	width: 100%;
	.grid {
		display: flex;
		flex-wrap: wrap;
		.image {
			height: 180px;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid $borderLight;
			&:hover {
				background-color: $light_bg;
			}
		}
	}
}
@media (max-width: 600px) {
	.partners {
		.grid {
			justify-content: center;
			.image {
				height: 50%;
			}
		}
	}
}
</style>
