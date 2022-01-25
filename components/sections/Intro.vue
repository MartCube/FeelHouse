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
	height: 600px;
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
		background: $text;
		opacity: 0.75;
		z-index: 2;
	}
	img {
		position: absolute;
		z-index: 1;
	}
	h1 {
		z-index: 2;
		color: $white;
		font-size: 2rem;
	}
}
</style>
