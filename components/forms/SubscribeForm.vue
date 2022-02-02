<template>
	<div class="subscribe">
		<h5 class="title">{{ title }}</h5>
		<ValidationProvider ref="subscribe" v-slot="{ errors, classes }" class="input_item" :rules="rules" :mode="mode" tag="div">
			<div v-if="errors.length" class="error" :class="classes">
				<!-- {{ errors[0] }} -->
			</div>
			<input id="subscribe" v-model="inputValue" v-mask="'###-###-####'" placeholder="phone number" name="subscribe" />
			<ButtonItem @click.native="Submit()"> Subscribe </ButtonItem>
		</ValidationProvider>
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
		Submit() {
			const isValid = this.$refs.subscribe.validate()
			if (isValid) {
				console.log('data ready to send')
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.subscribe {
	z-index: 2;
	max-width: 800px;
	height: min-content;
	margin-top: 40px;

	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	.title {
		color: $white;
		text-transform: initial;
		margin-bottom: 20px;
		font-weight: 300;
	}
	.input_item {
		width: 500px;
		height: 60px;

		display: flex;
		position: relative;

		border: 1px solid $primary;
		padding: 6px;
		.error {
			position: absolute;
			top: 0;
			left: 0;
		}
		input {
			width: 100%;
			height: 45px;
			padding-left: 10px;
			outline: 0;
			background: transparent;
			border: none;
			font-family: inherit;
			font-size: 1rem;
			color: $white;

			&::placeholder {
				text-transform: capitalize;
				color: $white;
				font-weight: 300;
			}
		}
		button {
			height: 45px;
		}
	}
}
</style>
