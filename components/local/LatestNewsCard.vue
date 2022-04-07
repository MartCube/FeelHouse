<template>
	<n-link class="latestNews_card" :to="link">
		<div class="image">
			<ImageItem :image="data.poster" w="350" h="410" />
		</div>
		<div class="info">
			<h4 class="title">{{ data.title }}</h4>
			<div class="date">
				<span>Blog</span>
				<span>{{ formatDate(data.releaseDate) }}</span>
			</div>
		</div>
	</n-link>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	computed: {
		link() {
			let link
			switch (this.$i18n.localeProperties.code) {
				case 'en':
					link = `/news/${this.data.uid}/`
					break
				case 'ua':
					link = `/ua/novunu/${this.data.uid}/`
					break
				default:
					link = `/ru/novosti/${this.data.uid}/`
			}
			return link
		},
	},
	methods: {
		formatDate(dateString) {
			const date = new Date(dateString)
			const options = { month: 'long', day: '2-digit' }
			// Then specify how you want your dates to be formatted
			const updatedFormat = new Intl.DateTimeFormat(this.$i18n.localeProperties.iso, options).format(date).split(' ').join(', ')
			// console.log();
			return updatedFormat
		},
	},
}
</script>

<style lang="scss" scoped>
.latestNews_card {
	// display: flex;
	// flex-direction: column;
	// justify-content: flex-start;
	// align-items: flex-end;
	margin-bottom: 2rem;
	position: relative;
	width: 31.5%;
	.image {
		display: flex;
		overflow: hidden;
		picture {
			width: 100%;
			height: auto;
			transform: scale(1);
			transition: all 0.75s ease;
		}
	}
	.info {
		width: 97%;
		z-index: 5;
		background-color: $white;
		position: relative;
		margin-top: -60px;
		margin-left: 20px;
		margin-bottom: 20px;
		padding: 20px;
		.title {
			font-size: 24px;
			font-weight: 300;
		}
		.date {
			display: flex;
			align-items: center;
			font-size: 15px;
		}
		span {
			color: $text;
			display: flex;
			align-items: center;
			&:first-child {
				&::after {
					content: '';
					display: inline-flex;
					width: 4px;
					height: 4px;
					margin: 0 10px;
					opacity: 0.35;
					background: $text;
					border-radius: 20px;
				}
			}
		}
	}

	&:hover {
		.image picture {
			transform: scale(1.1);
		}
	}
}

@media (max-width: 800px) {
	.latestNews_card {
		width: 100%;
	}
}
</style>
