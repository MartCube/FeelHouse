<template>
	<div v-animate-onscroll="{ down: 'animated fadeInUp' }" class="project_card">
		<n-link :to="localePath({ name: 'project-project', params: { uid: data.uid } })" class="image">
			<ImageItem :image="data.poster" w="770" h="600" />
		</n-link>
		<div class="info">
			<span class="subtitle">ARCHITECTURE</span>
			<h3 class="title">{{ data.title }}</h3>
			<SanityContent class="content" :blocks="data.description" />
			<n-link :to="`/projects/${data.uid}/`" class="button">Discover</n-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.project_card {
	width: 100%;
	min-height: 300px;
	display: flex;
	text-decoration: none;
	justify-content: flex-end;
	margin-bottom: 5rem;

	color: $text;
	position: relative;
	.info {
		flex-direction: column;
		display: flex;
		background-color: $white;
		position: absolute;
		left: 0;
		top: 50%;
		width: 50%;
		padding: 5% 4% 5% 0%;
		transform: translate(0, -50%);
		color: $text;
		.subtitle {
			color: $primary;
			text-transform: uppercase;
			letter-spacing: 4px;
			font-size: 17px;
			margin-bottom: 10px;
		}
		.content {
			p {
				display: none;
			}
			p:first-child {
				display: block;
			}
		}
		.title {
			margin-bottom: 20px;
			font-weight: 300;
		}
	}
	.image {
		width: 66.6%;
		transition: transform 0.3s linear;
	}
	&:nth-child(even) {
		justify-content: flex-start;
		.info {
			right: 0;
			left: initial;
			padding: 5% 0% 5% 4%;
		}
	}
	&:hover {
		.image {
			transform: scale(0.95);
		}
	}
}

@media (max-width: 1000px) {
	.project_card {
		flex-wrap: wrap;
		.image {
			width: 100%;
		}
		.info {
			position: relative;
			left: 0;
			top: 0;
			width: auto;
			padding: 30px 0px;
			transform: translate(0, 0);
		}
	}
}
</style>
