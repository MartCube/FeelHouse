<template>
	<div v-if="enabled" class="crumbs">
		<a :href="`${url}`">{{ link }}</a>
		<span>/ {{ title }}</span>
	</div>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			required: true,
		},
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
