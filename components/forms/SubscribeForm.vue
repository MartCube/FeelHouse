<template>
	<div class="subscribe">
		<h4 class="title">{{ title }}</h4>
		<form ref="subscribe" autocomplete="off" @submit.prevent="Submit()">
			<ValidationProvider ref="subscribe" v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="input_item">
				<div v-if="errors.length" class="error" :class="classes">
					{{ errors[0] }}
				</div>

				<input id="subscribe" v-model="inputValue" v-mask="'###-###-####'" :placeholder="number" name="subscribe" />
			</ValidationProvider>

			<ButtonItem> {{ button }} </ButtonItem>
		</form>
	</div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

import { mask } from 'vue-the-mask'
export default {
	components: {
		ValidationProvider,
	},
	directives: { mask },
	props: {
		title: {
			type: String,
			required: true,
		},
		number: {
			type: String,
			required: true,
		},
		button: {
			type: String,
			required: true,
		},
		rules: {
			type: [Object, String],
			default: 'min:9|required',
		},
		mode: {
			type: String,
			default: 'eager',
		},
	},
	data: () => ({
		loading: false,
		inputValue: '',
	}),
	methods: {
		Submit(field) {
			const provider = this.$refs[field]

			// Validate the field
			return provider.validate()
		},
	},
}
</script>

<style lang="scss">
.subscribe {
	z-index: 2;

	width: 500px;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.title {
		color: $text;
	}
	.message {
		display: flex;
		background-color: rgb(0 219 17 / 5%);
		padding: 1rem;
		flex-direction: column;
		justify-content: center;
		color: $white;
		align-items: center;
		border: 1px solid rgb(255, 255, 255, 10%);
		a {
			font-weight: bold;
		}
	}
	p {
		padding: 0;
	}
	.input_item {
		margin: 1rem 0;
		height: 4rem;
	}
}
</style>
