<template>
	<div v-if="uid" class="crumbs">
		<n-link :to="`/${link}/`">{{ link }}</n-link>
		<span>/ {{ uid }}</span>
	</div>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			required: true,
		},
		uid: {
			type: String,
			default: undefined,
		},
	},
}
</script>

<style lang="scss" scoped>
a {
	color: $primary;
	&:hover {
		opacity: 0.85;
	}
}
</style>
