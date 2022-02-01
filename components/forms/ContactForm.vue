<template>
	<section class="contact section-padding">
		<div class="container">
			<SanityContent class="content" :blocks="info" />
			<div class="contact_form">
				<h5 class="title">{{ title }}</h5>
				<form ref="contact_form" autocomplete="off" @submit.prevent="Submit()">
					<ValidationObserver ref="contact" tag="div">
						<InputItem id="fullName" :label="fullName" rules="required" @getValue="storeValue" />
						<InputItem id="number" :label="number" type="number" rules="min:9|required" @getValue="storeValue" />
						<InputItem id="email" :label="email" rules="email|required" @getValue="storeValue" />
						<InputItem id="message" :label="message" rules="required" @getValue="storeValue" />
						<ButtonItem> {{ button }} </ButtonItem>
					</ValidationObserver>
					<!-- <div v-else class="message">
						<h2>success ?!</h2>
					</div> -->
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import * as emailjs from '@emailjs/browser'
export default {
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
		fullName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		number: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
		button: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		// message: false,
		loading: false,
		form: {
			fullName: '',
			number: '',
			email: '',
			message: '',
		},
	}),
	methods: {
		storeValue(input) {
			switch (input.name) {
				case 'name': {
					this.form.name = input.value
					break
				}
				case 'number': {
					this.form.number = input.value
					break
				}
				case 'email': {
					this.form.email = input.value
					break
				}
				case 'message': {
					this.form.message = input.value
					break
				}
			}
			// if (input.name === 'name') this.form.name = input.value
			// else if (input.name === 'number') this.form.number = input.value
			// else if (input.name === 'email') this.form.email = input.value
			// else if (input.name === 'message') this.form.message = input.value
		},

		async Submit() {
			const isValid = await this.$refs.contact.validate()
			// validation
			if (!isValid) return

			this.loading = true
			console.log('loading')

			// compose email template
			this.form.emailTemplate = `
				<h4>Name</h4>
				<p>${this.form.name}</p>
				<h4>Number</h4>
				<p>${this.form.number}</p>
				<h4>Email</h4>
				<p>${this.form.email}</p>
				<h4>Message</h4>
				<p>${this.form.message}</p>
			`

			emailjs.sendForm('default_service', 'feel_house_contact', this.$refs.contact_form, 'user_vgxo7Nole0QeHb4nsY5SS').then(
				(result) => {
					console.log('SUCCESS!', result.text)
					this.loading = false
					// this.message = !this.message
				},
				(error) => {
					console.log('FAILED...', error.text)
					// this.message = !this.message
				},
			)

			this.loading = false
			console.log('submited')
			// this.message = !this.message
		},
	},
}
</script>

<style lang="scss">
.contact {
	width: 100%;
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
