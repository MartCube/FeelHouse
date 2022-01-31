<template>
	<button class="button">
		<slot />
	</button>
</template>

<script>
export default {
	props: {
		submit: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<style lang="scss" scoped>
button {
	border: none;
	font-family: 'Oswald', sans-serif;
}
</style>
