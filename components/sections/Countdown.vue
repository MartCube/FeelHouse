<template>
	<section class="countdown">
		<ImageItem :image="bg" />
		<h6 class="subtitle">
			{{ subtitle }}
		</h6>
		<h2 class="title">
			{{ title }}
		</h2>
		<div class="counter">
			<div>
				<span>- {{ days }}</span>
				<span> days </span>
			</div>
			<div>
				<span> 0 - {{ hours }}</span>
				<span> hours </span>
			</div>
			<div>
				<span> 0- {{ minutes }}</span>
				<span> minutes </span>
			</div>
			<div>
				<span> 0- {{ seconds }}</span>
				<span> seconds </span>
			</div>
		</div>
		<SubscribeForm title="Subscribe to us" number="phone number" button="subscribe" />
	</section>
</template>

<script>
export default {
	name: 'Countdown',
	props: {
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			required: true,
		},
		bg: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		countdownTime: new Date('Feb 28, 2022 16:20:00').getTime(),
		days: undefined,
		hours: undefined,
		minutes: undefined,
		seconds: undefined,
	}),
	mounted() {
		this.updateTime()
	},
	methods: {
		updateTime() {
			const countdownTime = this.countdownTime
			setInterval(() => {
				const currentTime = new Date().getTime()
				const distance = countdownTime - currentTime
				this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
				this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
				this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
				this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
			}, 1000)
		},
	},
}
</script>

<style lang="scss" scoped>
.countdown {
	width: 100%;
	height: 100vh;
	overflow: hidden;
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	text-transform: uppercase;

	&::after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background: $black;
		opacity: 0.5;
		z-index: 1;
	}
	picture {
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.subtitle {
		z-index: 2;
		color: $primary;
		font-size: 1.5rem;
		user-select: none;
	}
	.title {
		z-index: 2;
		color: $white;
		font-size: 5rem;
		user-select: none;
		margin: 40px 0;
	}
	.counter {
		z-index: 2;
		display: flex;
		div {
			width: 200px;
			height: 200px;
			margin: 0 20px;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			user-select: none;
			background: $counter;
			span {
				color: $white;
				font-size: 4rem;
				line-height: initial;
				&:last-child {
					font-size: 1rem;
					color: $primary;
					margin-top: 20px;
				}
			}
		}
	}
}
</style>
