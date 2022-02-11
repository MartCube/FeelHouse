<template>
	<div class="error">
		<section class="intro">
			<img src="/1.jpg" alt="" />
			<h1>{{ $t('pages.f0f.not_found') }}</h1>
		</section>
		<div class="section-padding error-text">
			<div class="container">
				<img src="/404-image.png" alt="" />
				<h2>{{ $t('pages.f0f.not_found_h2') }}</h2>
				<p>{{ $t('pages.f0f.not_found_p') }}</p>
				<n-link :to="localePath('index')" class="button">
					{{ $t('pages.f0f.gotohome') }}
				</n-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// data: () => ({
	// 	image: null,
	// }),
	// async fetch() {
	// 	const error = await this.$prismic.api.getSingle('error')
	// 	this.image = error.data.image.url
	// },
}
</script>

<style lang="scss" scoped>
.error {
	.intro {
		width: 100%;
		height: 70vh;
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		&::after {
			height: 80px;
			width: 2px;
			background-color: $primary;
			content: '';
			z-index: 10;
			bottom: -40px;
			left: 50%;
			position: absolute;
			transform: translateX(-50%);
		}
		&::before {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			background: $black;
			opacity: 0.5;
			z-index: 2;
		}

		img {
			position: absolute;
			z-index: 1;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		h1 {
			text-transform: uppercase;
			z-index: 2;
			color: $white;
		}
		.crumbs {
			z-index: 2;
			color: $white;
		}
	}
	.error-text {
		text-align: center;
		img {
			max-width: 45vw;
			margin-bottom: 2rem;
		}
		h2,
		p {
			margin: 1rem 0;
		}
		.button {
			margin-top: 2rem;
		}
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 600px) {
		.intro {
			padding: 0 15px;
			h1 {
				font-size: 3rem;
				text-align: center;
			}
		}
		.error-text {
			img {
				max-width: 90vw;
			}
		}
	}
}
</style>
