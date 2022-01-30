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
$border: #f6f6f6;
.partners {
	width: 100%;
	.grid {
		display: flex;
		// border-left: 1px solid $border;
		// border-top: 1px solid $border;
		flex-wrap: wrap;
		.image {
			height: 180px;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid $border;
			// border-top: 1px solid $border;
			&:hover {
				background-color: #f3ece5;
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
