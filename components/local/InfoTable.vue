<template>
	<div class="info_table">
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
	// justify-content: center;
	p {
		span {
			color: $primary;
			font-weight: 400;
		}
	}
}
</style>
