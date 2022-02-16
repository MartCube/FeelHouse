<template>
	<div class="info_table">
		<div class="image">
			<ImageItem :image="info.image.asset._ref" w="800" />
		</div>
		<div class="wrapper">
			<p>
				<span>{{ $t('pages.project.infotable.total_space') }}:</span> {{ info.totalSpace }}
			</p>
			<p>
				<span>{{ $t('pages.project.infotable.space') }}:</span> {{ info.space }}
			</p>
			<p>
				<span>{{ $t('pages.project.infotable.rooms') }}:</span> {{ info.roomNum }}
			</p>
			<p>
				<span>{{ $t('pages.project.infotable.bathrooms') }}:</span> {{ info.BathroomNum }}
			</p>
			<p>
				<span>{{ $t('pages.project.infotable.architect') }}:</span> {{ info.architect }}
			</p>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		info: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style lang="scss">
.info_table {
	display: flex;
	margin-bottom: 2rem;
	.image {
		width: 50%;
		picture {
			object-fit: cover;
			object-position: center;
		}
	}
	.wrapper {
		width: 50%;
		padding-left: 2rem;
	}
	p {
		span {
			color: $primary;
			font-weight: 400;
		}
	}
}
@media (max-width: 600px) {
	.info_table {
		.image {
			display: none;
		}
		.wrapper {
			width: 100%;
			padding-left: 0;
		}
	}
}
</style>
