<template>
	<section class="faq section-padding">
		<div class="container">
			<Accordeon v-for="(item, i) in list" :key="item._key" :number="++i" :question="item.question" :answer="item.answer"/>
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
