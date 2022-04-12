<template>
	<section class="contact section-padding">
		<div class="container">
			<SanityContent class="content" :blocks="info" />
			<div class="contact_form">
				<h5 class="title">{{ title }}</h5>
				<form ref="contact_form" autocomplete="off" @submit.prevent="Submit()">
					<div v-if="message.isActive">
						<p class="result_message" :class="[message.class]">{{ message.text }} 🤓</p>
					</div>
					<ValidationObserver ref="contact" tag="div">
						<InputItem id="fullName" :label="$t('pages.contact.fullName')" rules="required" />
						<InputItem id="number" :label="$t('pages.contact.number')" type="number" rules="min:9|required" />
						<InputItem id="email" :label="$t('pages.contact.email')" rules="email|required" />
						<InputItem id="message" :label="$t('pages.contact.message')" rules="required" />
						<ButtonItem> {{ $t('pages.contact.button') }} </ButtonItem>
					</ValidationObserver>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import * as emailjs from '@emailjs/browser'
export default {
	name: 'ContactForm',
	components: {
		ValidationObserver,
	},
	props: {
		info: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		isMessageActive: false,
		messageText: '',
		loading: false,
		message: {
			isActive: false,
			text: '',
			class: '',
		},
	}),
	methods: {
		async Submit() {
			const isValid = await this.$refs.contact.validate()
			// validation
			if (!isValid) return

			emailjs.sendForm('service_hmxxn2q', 'template_v1siuzg', this.$refs.contact_form, 'JOPo-OQYnguYIDcB3').then(
				(result) => {
					console.log('SUCCESS!', result.text)
					this.message.isActive = true
					this.message.class = 'success'
					this.message.text = this.$t('pages.contact.successMessage')
					setTimeout(() => {
						this.$refs.contact_form.reset()
						this.message.isActive = false
						this.message.text = ''
						this.message.class = ''
					}, 3500)
				},
				(error) => {
					console.log('FAILED...', error.text)
					this.message.isActive = true
					this.message.class = 'error'
					this.message.text = this.$t('pages.contact.errorMessage')
					setTimeout(() => {
						this.$refs.contact_form.reset()
						this.message.isActive = false
						this.message.text = ''
						this.message.class = ''
					}, 3500)
				},
			)

			this.loading = false
			console.log('submited')
		},
	},
}
</script>

<style lang="scss">
.contact {
	width: 100%;
	.result_message {
		&.success {
			color: rgb(0, 156, 104);
		}
		&.error {
			color: #d32f2f;
		}
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.content {
			width: 40%;
			h5 {
				margin-bottom: 2.5rem;
			}
			strong {
				font-weight: 300;
				color: $primary;
				margin-right: 10px;
			}
			p {
				margin-bottom: 15px;
			}
		}
		.contact_form {
			width: 40%;
		}
	}
	h5 {
		color: $text;
		font-size: 30px;
		font-weight: 500;
		text-transform: uppercase;
	}
}
.contact_form {
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;

	form {
		width: 100%;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		button {
			margin-top: 2rem;
		}
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
@media (max-width: 800px) {
	.contact {
		.container {
			padding: 0 15px;
			.content {
				margin-bottom: 3rem;
			}
			.content,
			.contact_form {
				width: 100%;
			}
		}
	}
}
</style>
