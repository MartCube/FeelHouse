<template>
	<section class="intro">
		<div class="box"></div>
		<SanityImage :asset-id="poster" auto="format" crop="top" fit="crop" width="1920" height="1080" />
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
	overflow: hidden;
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	.box {
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
}
</style>
