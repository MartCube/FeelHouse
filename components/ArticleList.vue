<template>
	<section class="latest_articles">
		<h2 class="title">{{ title }}</h2>
	</section>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
	},
}
</script>
