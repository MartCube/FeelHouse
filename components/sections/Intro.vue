<template>
	<section class="intro">
		<ImageItem :image="poster" w="1920" h="1080" />

		<h1>{{ title }}</h1>
		<Crumbs v-if="crumbs.enabled" :linklabel="crumbs.linkLabel" :linkname="crumbs.link" :title="title" />
	</section>
</template>

<script>
export default {
	props: {
		crumbs: {
			type: Object,
			default() {
				return {
					enabled: false,
					linkname: null,
					linklabel: null,
					// title: this.title,
				}
			},
		},
		poster: {
			type: String,
			default: '',
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
	width: 100%;
	height: 100vh;
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
		max-width: 80%;
		text-align: center;
	}
	.crumbs {
		z-index: 2;
		color: $white;
	}
}
@media (max-width: 600px) {
	.intro {
		padding: 0 15px;
		h1 {
			font-size: 3rem;
			text-align: center;
			max-width: 95%;
		}
	}
}
</style>
