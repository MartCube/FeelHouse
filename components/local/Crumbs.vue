<template>
	<div v-if="enabled" class="crumbs">
		<n-link :to="`/${link}/`">{{ link }}</n-link>
		<span>/ {{ title }}</span>
	</div>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			required: true,
		},
		enabled: {
			type: Boolean,
			required: true,
		},
		title: {
			type: String,
			default: undefined,
		},
	},
}
</script>

<style lang="scss" scoped>
a {
	color: $primary;
	&::first-letter {
		text-transform: uppercase;
	}
	&:hover {
		opacity: 0.85;
	}
}
</style>
