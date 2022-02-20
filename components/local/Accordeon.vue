<template>
	<div class="accordion block" :class="{ activeBlock: isOpen }" @click="toggleAccordion">
		<div class="acc-btn" :class="{ active: isOpen }">
			<span class="count">{{ number }}.</span>
			<p class="text">{{ question }}</p>
			<button class="collapse_button"></button>
		</div>
		<div ref="elemHeight" class="acc-content">
			<div ref="height" class="content">
				<p class="text">{{ answer }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
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
			height: 0,
			isOpen: false,
		}
	},
	mounted() {
		this.height = this.$refs.elemHeight.offsetHeight
		this.$refs.elemHeight.style.height = '0px'
	},
	methods: {
		toggleAccordion() {
			if (!this.isOpen) {
				this.$refs.elemHeight.style.height = `${this.height}px`
			} else {
				this.$refs.elemHeight.style.height = '0px'
			}
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
	p {
		margin: 0;
	}

	.acc-btn {
		position: relative;
		font-size: 17px;
		font-weight: 400;
		cursor: pointer;
		padding: 20px 40px;
		padding-right: 60px;
		color: $text;
		transition: all 500ms ease;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		.count {
			margin-top: 3px;
			margin-right: 1rem;
			line-height: 24px;
			color: $primary;
		}
		.text {
			flex-grow: 1;
			transition: color 50ms ease;
		}
		.collapse_button {
			line-height: 24px;
			margin-left: 1rem;
			margin-top: 3px;
			background-color: transparent;
			display: flex;
			justify-content: center;
			border: none;
			align-items: center;
			height: 2rem;
			width: 2rem;
			cursor: pointer;
			&::before,
			&::after {
				content: '';
				width: 15px;
				position: absolute;
				height: 1.5px;
				transition: opacity 50ms ease;
				display: block;
				background-color: $primary;
			}
			&::before {
				transform: rotate(90deg);
			}
		}
		&.active {
			.collapse_button {
				&::before {
					opacity: 0;
				}
			}
			.text {
				color: $primary;
			}
		}
	}
	.acc-content {
		transition: height 0.2s ease-in;
		&.current {
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
	&.activeBlock {
		border-bottom: 1px solid $primary;
	}
}
@media (max-width: 950px) {
}
</style>
