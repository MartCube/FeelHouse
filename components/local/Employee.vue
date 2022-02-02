<template>
	<div class="empployee">
		<div class="image">
			<ImageItem :image="data.image" w="100" h="100" />
		</div>
		<div class="info">
			<span>{{ data.name }}</span>
			<span>/ {{ data.roll }}</span>
			<p>{{ data.text }}</p>
			<div class="smedias">
				<a v-for="icon in data.SMedia" :key="icon._key" :href="icon.link" target="_blank">
					<Icon :name="icon.name" size="15px" />
				</a>
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
.empployee {
	width: 49%;
	display: flex;

	border: 1px solid $borderLight;
	margin-bottom: 30px;
	padding: 50px;
	.image {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		overflow: hidden;
		flex-shrink: 0;
		picture {
			object-fit: cover;
		}
	}
	.info {
		padding-left: 25px;
		span {
			&:first-child {
				margin-right: 7px;
				font-size: 21px;
				color: $text;
			}
			&:last-child {
				font-size: 15px;
			}
			color: $primary;
		}
		p {
			margin: 20px 0;
		}
		.smedias {
			display: flex;
			a {
				text-align: center;
				width: 35px;
				height: 35px;
				line-height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				border: 1px solid $borderLight;
				color: $text_light;
				font-size: 12px;
				margin-right: 3px;

				&:hover {
					border-color: $primary;
				}
			}
		}
	}

	&:hover {
		background: $light_bg;
	}
}

@media (max-width: 1000px) {
	.empployee {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.info {
			padding-left: 0;
			margin-top: 30px;
			text-align: center;
			.smedias {
				justify-content: center;
			}
		}
	}
}
@media (max-width: 1000px) {
	.empployee {
		width: 100%;
	}
}
</style>
