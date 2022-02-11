<template>
	<div>
		<Navbar />
		<main>
			<Nuxt />
		</main>
		<Footer />
	</div>
</template>
<script>
export default {
	transition: {
		afterLeave(el) {
			console.log('afterLeave', el)
		},
	},
}
</script>
