<template>
	<n-link class="article_card" :class="{ reverse: reverse }" :to="`/blog/${data.uid}/`">
		<div class="image">
			<ImageItem :image="data.poster" w="500" h="300" />
		</div>
		<div class="info">
			<p>{{ data.releaseDate }}</p>
			<h2>{{ data.title }}</h2>
			<span> read more</span>
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
		reverse: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style lang="scss" scoped>
.article_card {
	width: 1100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	&.reverse {
		flex-direction: row-reverse;
	}
	margin-bottom: 2rem;

	.image {
		width: 500px;
		min-height: 300px;
		display: flex;
		overflow: hidden;
		picture {
			transform: scale(1);
			transition: all 0.75s ease;
		}
	}
	.info {
		width: 500px;

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
</style>
