<template>
	<section class="faq">
		<h2 class="title">{{ title }}</h2>
		<div v-for="item in list" :key="item._key">
			<span>{{ item.question }}</span>
			<span>{{ item.answer }}</span>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		list: {
			type: Array,
			required: true,
		},
	},
}
</script>
