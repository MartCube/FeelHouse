<template>
	<button>
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
	margin: 1rem 0;
	padding: 1rem 2rem;

	display: flex;
	justify-content: center;
	align-items: center;

	border: none;
	background-color: $primary;
	color: $white;
	cursor: pointer;

	font-size: 1.1rem;
	font-weight: 500;
	line-height: 2rem;
	transition: all 0.2s ease;
	&::first-letter {
		text-transform: uppercase;
	}
	&:hover {
		display: flex;
	}
}
</style>
