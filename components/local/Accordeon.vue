<template>
	<div class="accordion block" :class="{ activeBlock: isOpen }" @click="toggleAccordion">
		<div class="acc-btn" :class="{ active: isOpen }">
			<span class="count">{{ number }}.</span>
			{{ question }}
		</div>
		<div class="acc-content" :class="{ current: isOpen }">
			<div ref="height" class="content">
				<p class="text">{{ answer }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		number: {
			type: Number,
			required: true,
		},
		question: {
			type: String,
			required: true,
		},
		answer: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isOpen: false,
		}
	},
	methods: {
		toggleAccordion() {
			console.log(this.$refs.height.offsetHeight)
			this.isOpen = !this.isOpen
		},
	},
}
</script>

<style lang="scss" scoped>
.accordion {
	position: relative;
	background: $light_bg;
	border-radius: 0px;
	overflow: hidden;
	margin-bottom: 16px;

	.acc-btn {
		position: relative;
		font-size: 17px;
		line-height: 24px;
		font-weight: 400;
		cursor: pointer;
		padding: 20px 40px;
		padding-right: 60px;
		color: $text;
		transition: all 500ms ease;
	}
	.acc-content {
		position: relative;
		height: 0;
		transition: transform 0.2s ease-in;
		transform: scaleY(0);
		&.current {
			transform: scaleY(1);
			height: auto;
			border-bottom: 1px solid $primary;
		}
	}
	.content {
		position: relative;
		padding: 0px 40px 30px;
		background-color: $light_bg;
		color: $text_light;
		.text {
			display: block;
			position: relative;
			top: 0px;
			display: block;
		}
	}
}
@media (max-width: 950px) {
}
</style>
