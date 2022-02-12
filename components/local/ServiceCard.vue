<template>
	<div class="square-flip">
		<div class="square bg-img">
			<ImageItem :image="data.poster" w="650" h="900" />
			<div class="square-container d-flex align-items-end justify-content-end">
				<div class="box-title text-vertical">
					<h4>{{ data.title }}</h4>
				</div>
			</div>
			<div class="flip-overlay"></div>
		</div>
		<div class="square2">
			<div class="square-container2">
				<h4>{{ data.title }}</h4>
				<p>Architecture viverra tristique ustoni missten vitae diam neque nivamus aestan the atene artines arinianu ateli ine finibus viverra nec lacus. Nedana theme sea no curabit.</p>
				<div class="btn-line">
					<a href="architectural-design.html"></a>
					<n-link class="service card" :to="localePath({ name: 'service-service', params: { service: data.uid } })">Read more</n-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.square-flip {
	perspective: 1000px;
	transform: perspective(1000px);
	transform-style: preserve-3d;
	position: relative;
	background-size: cover;
	background-position: center center;
	width: 49%;
	min-height: 420px;
	margin-bottom: 30px;
	.square {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		z-index: 1;
		picture {
			position: absolute;
			z-index: 0;
			object-fit: cover;
		}
	}
	.square2 {
		-webkit-transform: rotateY(180deg);
		transform: rotateY(180deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		z-index: 1;
	}
	&:hover {
		.square {
			-webkit-transform: rotateY(-180deg);
			transform: rotateY(-180deg);
			-webkit-transform-style: preserve-3d;
			transform-style: preserve-3d;
		}
		.square2 {
			-webkit-transform: rotateY(0deg);
			transform: rotateY(0deg);
			-webkit-transform-style: preserve-3d;
			transform-style: preserve-3d;
		}
		.square-container {
			-webkit-transform: translateX(-650px) scale(0.88);
			-ms-transform: translateX(-650px) scale(0.88);
			transform: translateX(-650px) scale(0.88);
		}
		.square-container2 {
			-webkit-transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
			transform: translateY(-50%) translateX(0px) translateZ(0px) scale(1);
		}
	}
}
.square,
.square2 {
	width: 100%;
	height: 100%;
}
.square {
	background-size: cover;
	background-position: center center;
	-webkit-transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	-o-transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25), -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	overflow: hidden;
	position: absolute;
	top: 0;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	h4 {
		color: $white;
		font-size: 27px;
		text-align: left;
		margin-bottom: 0;
		display: inline-flex;
	}
}
.square2 {
	background: $light_bg;
	background-size: cover;
	background-position: center center;
	// -webkit-transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	// -o-transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	// transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25), -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	overflow: hidden;
	position: absolute;
	top: 0;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	&:before {
		top: 25px;
		left: 15px;
		right: 15px;
		bottom: 25px;
	}
	h4 {
		font-size: 27px;
		color: $text;
	}
	p {
		font-size: 17px;
		color: $text_light;
	}
}
.btn-line a {
	border-bottom: 1px solid rgba($primary, 70%);
	color: $text_light;
	&:hover {
		border-bottom: 1px solid $primary;
		color: $text_light;
	}
}
.square-container {
	padding: 40px;
	text-align: center;
	height: 420px;
	position: relative;
	-webkit-transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	-o-transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25), -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	-webkit-transform: translateX(0px) scale(1);
	-ms-transform: translateX(0px) scale(1);
	transform: translateX(0px) scale(1);
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	z-index: 2;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
}
.text-vertical {
	writing-mode: vertical-rl;
	transform: rotate(180deg);
}
.text-vertical {
	writing-mode: vertical-rl;
	transform: rotate(180deg);
}
.square-container2 {
	padding: 30px;
	text-align: left;
	position: relative;
	top: 50%;
	-webkit-transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	transition: -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	-o-transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	transition: transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25), -webkit-transform 0.9s cubic-bezier(0.68, -0.55, 0.265, 1.25);
	-webkit-transform: translateY(-50%) translateX(650px) translateZ(60px) scale(0.88);
	transform: translateY(-50%) translateX(650px) translateZ(60px) scale(0.88);
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	z-index: 2;
}
.flip-overlay {
	display: block;
	background: #000;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.2;
}
@media screen and (max-width: 1000px) {
	.square-flip {
		margin-bottom: 30px;
	}
}
@media screen and (max-width: 800px) {
	.square-flip {
		width: 320px;
	}
}
</style>
