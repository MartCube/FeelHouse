<template>
	<section class="intro">
		<div class="box"></div>
		<ImageItem :image="poster" w="1920" h="1080" crop="top" />

		<h1>{{ title }}</h1>
	</section>
</template>

<script>
export default {
	props: {
		poster: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.intro {
	display: flex;
	width: 100%;
	height: 70vh;
	position: relative;

	display: flex;
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
	.box {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background: $black;
		opacity: 0.5;
		z-index: 2;
	}
	picture {
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
}
</style>
