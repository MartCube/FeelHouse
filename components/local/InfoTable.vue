<template>
	<div class="info_table">
		<div class="wrapper">
			<p><span>Archtect:</span> {{ info.architect }}</p>
			<p><span>Bathrooms:</span> {{ info.BathroomNum }}</p>
			<p><span>Rooms:</span> {{ info.roomNum }}</p>
			<p><span>Space:</span> {{ info.space }}</p>
			<p><span>Total space:</span> {{ info.totalSpace }}</p>
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
