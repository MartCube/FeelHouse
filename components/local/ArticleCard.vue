<template>
	<n-link class="article_card" :to="link">
		<template v-if="reverse">
			<div v-animate-onscroll="{ down: 'animated fadeInRight' }" class="image">
				<ImageItem :image="data.poster" w="500" h="300" />
			</div>
			<div v-animate-onscroll="{ down: 'animated fadeInLeft' }" class="info">
				<div class="date">
					<span class="day">{{ formatDate[0] }}</span>
					<p class="month_year">{{ formatDate[1] }} {{ formatDate[2] }}</p>
				</div>
				<div class="content">
					<h2 class="title">{{ data.title }}</h2>
					<span class="read_more"> {{ $t('pages.blog.read_more') }}</span>
				</div>
			</div>
		</template>
		<template v-else>
			<div v-animate-onscroll="{ down: 'animated fadeInLeft' }" class="image">
				<ImageItem :image="data.poster" w="500" h="300" />
			</div>
			<div v-animate-onscroll="{ down: 'animated fadeInRight' }" class="info">
				<div class="date">
					<span class="day">{{ formatDate[0] }}</span>
					<p class="month_year">{{ formatDate[1] }} {{ formatDate[2] }}</p>
				</div>
				<div class="content">
					<h2 class="title">{{ data.title }}</h2>
					<span class="read_more"> {{ $t('pages.blog.read_more') }}</span>
				</div>
			</div>
		</template>
	</n-link>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
		reverse: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		formatDate() {
			const date = new Date(this.data.releaseDate)
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			// Then specify how you want your dates to be formatted
			let updatedFormat = new Intl.DateTimeFormat(this.$i18n.localeProperties.iso, options).format(date).split(' ')
			if (this.$i18n.localeProperties.code === 'en') {
				updatedFormat = [updatedFormat[1].slice(0, 2), updatedFormat[0], updatedFormat[2]]
			}
			return updatedFormat
		},
		link() {
			let link
			switch (this.$i18n.localeProperties.code) {
				case 'en':
					link = `/en/blog/${this.data.uid}/`
					break
				case 'ua':
					link = `/ua/novunu/${this.data.uid}/`
					break
				default:
					link = `/novosti/${this.data.uid}/`
			}
			return link
		},
	},
}
</script>

<style lang="scss" scoped>
.article_card {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	&:nth-child(even) {
		flex-direction: row-reverse;
	}
	margin-bottom: 2rem;

	.image {
		width: 48%;
		display: flex;
		overflow: hidden;
		picture {
			transform: scale(1);
			object-fit: cover;
			transition: all 0.75s ease;
		}
	}
	.info {
		width: 48%;
		display: flex;
		justify-content: center;
		padding: 3rem;

		.read_more {
			display: flex;
			align-items: center;

			color: $text;
			text-decoration: none;
			text-transform: capitalize;
			transition: all 0.75s ease;

			&::before {
				content: '';
				width: 2rem;
				height: 1px;
				margin-right: 1rem;
				background: $primary;
				transition: all 0.35s ease;
			}
		}
		.date {
			flex-basis: 20%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.day {
				font-size: 75px;
				font-weight: 500;
				color: $primary;
				line-height: 1em;
			}
			.month_year {
				color: $text_light;
				letter-spacing: 2px;
				font-size: 12px;
				text-transform: uppercase;
				font-weight: 300;
				margin-top: 1rem;
			}
		}
		.content {
			flex-basis: 80%;
			padding-left: 2rem;
			.title {
				font-size: 2.5rem;
				font-weight: 300;
				line-height: 1.1em;
			}
			.read_more {
				margin-top: 2rem;
			}
		}
	}

	&:hover {
		.image picture {
			transform: scale(1.1);
		}
		span {
			color: $primary;
			&::before {
				width: 4rem;
			}
		}
	}
}
@media (max-width: 800px) {
	.article_card {
		flex-wrap: wrap;
		.image {
			order: 1;
			width: 100%;
			margin-bottom: 2rem;
			min-height: 100%;
		}
		.info {
			width: 100%;
			order: 2;
			padding: 0;
			.date {
				flex-basis: 25%;
			}
			.content {
				padding-left: 1rem;
				flex-basis: fill;
				.title {
					font-size: 2rem;
				}
				.read_more {
					margin-top: 1rem;
				}
			}
		}
	}
}
</style>
