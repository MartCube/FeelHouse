<template>
	<section class="slider">
		<VueSlickCarousel v-bind="options">
			<!-- <div class="swiper-wrapper"> -->
			<template v-for="slide in list">
				<div :key="slide.link" class="slide">
					<div class="container">
						<div class="content">
							<span class="subtitle">residental</span>
							<p class="h1">{{ slide.title }}</p>
							<p class="description">{{ slide.description }}</p>
							<n-link to="/projects/" class="button">Discover</n-link>
						</div>
					</div>
					<ImageItem :image="slide.poster" w="2000" />
				</div>
			</template>
			<!-- </div> -->
			<template #customPaging="page">
				<div class="custom-dot">
					{{ page }}
				</div>
			</template>
		</VueSlickCarousel>
	</section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
	name: 'Slider',
	components: {
		VueSlickCarousel,
	},
	props: {
		list: {
			type: Array,
			required: true,
		},
	},
	data: () => ({
		data: null,
		options: {
			dots: true,
			dotsClass: 'slick-dots home_intro',
			draggable: true,
			infinite: true,
			speed: 1000,
			autoplay: true,
			arrows: false,
			fade: true,
		},
	}),
}
</script>
<style lang="scss" scoped>
.slider {
	width: 100%;
	height: 100vh;
	overflow: hidden;
	.slide {
		width: 100vw;
		height: 100vh;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		&::after {
			content: '';
			background-color: rgb(0, 0, 0, 50%);
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 2;
		}
		.container {
			position: relative;
			height: 100vh;
		}
		.content {
			position: absolute;
			max-width: 60%;
			z-index: 5;
			top: 50%;
			transform: translateY(-50%);
			color: $white;
			.h1 {
				font-size: 6rem;
				text-transform: uppercase;
				margin-bottom: 0;
				opacity: 0;
			}
			.description {
				font-size: 20px;
				opacity: 0;
			}
			.subtitle {
				font-size: 17px;
				font-weight: 300;
				color: $primary;
				text-align: left;
				margin-bottom: 10px;
				text-transform: uppercase;
				letter-spacing: 4px;
				align-items: center;
				display: inline-flex;
				opacity: 0;
				&::before {
					position: relative;
					top: 0px;
					content: '';
					background-color: $primary;
					width: 30px;
					height: 1px;
					margin-right: 15px;
				}
			}
			.button {
				opacity: 0;
			}
		}
		picture {
			z-index: 1;
			top: 0;
			left: 0;
			position: absolute;
			width: 100vw;
			height: 100vh;
			object-fit: cover;
		}
	}
	.slick-active {
		.slide {
			.content {
				.subtitle {
					@include fadeIn;
				}
				.h1 {
					@include fadeIn;
					animation-delay: 0.2s;
				}
				.description {
					@include fadeIn;
					animation-delay: 0.4s;
				}
				.button {
					@include fadeIn;
					animation-delay: 0.6s;
				}
			}
		}
	}
}
@media (max-width: 600px) {
	.slider {
		.slide {
			.content {
				max-width: 100%;
				.h1 {
					font-size: 4rem;
					margin: 1rem 0;
				}
				.description {
					font-size: 17px;
				}
			}
			.container {
				padding: 0 15px;
			}
		}
	}
}
</style>
