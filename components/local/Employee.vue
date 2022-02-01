<template>
	<div class="empployee">
		<ImageItem :image="data.image" w="100" h="100" />
		<div class="info">
			<span>{{ data.name }}</span>
			<span>/ {{ data.roll }}</span>
			<p>{{ data.text }}</p>
			<div class="smedias">
				<n-link v-for="icon in data.SMedia" :key="icon._key" :to="icon.link">
					<Icon :name="icon.name" />
				</n-link>
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
	width: 100%;
	display: flex;

	border: 1px solid $border;
	margin: 20px 0;
	padding: 25px;

	picture {
		width: 100px;
	}
	.info {
		padding-left: 25px;
		span {
			&:first-child {
				font-weight: bold;
				color: $text;
			}
			color: $primary;
		}
		.smedias {
			display: flex;
			a {
				width: 30px;
				height: 30px;
				padding: 5px;
				margin: 5px;
				border: 1px solid rgba(197, 163, 125, 0.5);
				border-radius: 50px;
				display: flex;
				justify-self: center;
				align-items: center;

				&:hover {
					border: 1px solid $primary;
				}
			}
		}
	}

	&:hover {
		background: rgba(197, 163, 125, 0.2);
	}
}
</style>
