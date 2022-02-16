<template>
	<div class="crumbs">
		<n-link :to="localePath({ name: linkname })">{{ linklabel }}</n-link>
		<span>/ {{ title }}</span>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: undefined,
		},
		enabled: {
			type: Boolean,
			required: false,
		},
		linklabel: {
			type: String,
			default: undefined,
		},
		linkname: {
			type: String,
			default: undefined,
		},
	},
	computed: {
		link() {
			const link = this.$route.path.split('/')
			// if(this.$i18n.locale)
			return link
		},
	},
	mounted() {
		console.log(this.$route)
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
