<template>
	<n-link class="article_card" :to="localePath({ name: 'article-article', params: { article: data.uid } })">
		<template v-if="reverse">
			<div v-animate-onscroll="{ down: 'animated fadeInRight' }" class="image">
				<ImageItem :image="data.poster" w="500" h="300" />
			</div>
			<div v-animate-onscroll="{ down: 'animated fadeInLeft' }" class="info">
				<p>{{ data.releaseDate }}</p>
				<h2>{{ data.title }}</h2>
				<span> read more</span>
			</div>
		</template>
		<template v-else>
			<div v-animate-onscroll="{ down: 'animated fadeInLeft' }" class="image">
				<ImageItem :image="data.poster" w="500" h="300" />
			</div>
			<div v-animate-onscroll="{ down: 'animated fadeInRight' }" class="info">
				<p>{{ data.releaseDate }}</p>
				<h2>{{ data.title }}</h2>
				<span> read more</span>
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
		flex-direction: column;
		justify-content: center;
		padding: 3rem;

		span {
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
		}
	}
}
</style>
