<template>
	<aside class="sidebar blog-sidebar">
		<div class="sidebar-widget services">
			<div class="widget-inner">
				<div class="sidebar-title">
					<h5>All Services</h5>
				</div>
				<ul>
					<li v-for="link in data" :key="link.uid">
						<n-link :to="`/services/${link.uid}/`">
							<span>{{ link.title }}</span>
						</n-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="sidebar-widget help">
			<div class="widget-inner">
				<div class="sidebar-title">
					<h5>Need Savoye Help?</h5>
				</div>
				<p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions. info@savoye.com</p>
				<div class="phone">
					<a href="tel:+11234560606">
						<Icon name="phone" :fill="color" size="25px" />
						+1 123-456-0606
					</a>
				</div>
			</div>
		</div>
	</aside>
</template>
<script>
import { serviceListLinks } from '@/assets/queries'
export default {
	data: () => ({
		color: '#c5a47e',
		data: null,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(serviceListLinks)
	},
}
</script>
<style lang="scss" scoped>
aside {
	padding: 0 15px;
	.sidebar-widget {
		margin-bottom: 2rem;
	}
	.widget-inner {
		display: block;
		padding: 45px;
		background: $light_bg;
	}
	ul {
		li {
			a {
				display: block;
				font-size: 17px;
				color: $text_light;
				transition: all 0.3s ease;
				line-height: 48px;
				position: relative;
				span {
					position: relative;
					z-index: 2;
				}
				&::after {
					content: '';
					position: absolute;
					left: -20px;
					top: 0;
					right: -20px;
					bottom: 0;
					z-index: 0;
					background: $primary;
					border-radius: 0;
					opacity: 0;
					transition: all 0.3s ease;
				}
				&.nuxt-link-active,
				&:hover {
					color: $white;
					&::after {
						opacity: 1;
					}
				}
			}
		}
	}
	.sidebar-title {
		margin-bottom: 20px;
		border-bottom: 1px solid $borderLight;
		padding-bottom: 15px;
		h5 {
			font-size: 30px;
			color: $text;
			text-transform: uppercase;
			font-weight: 500;
			letter-spacing: 0.5px;
		}
	}
	.phone a {
		display: flex;
		align-items: center;
		font-size: 24px;
		text-transform: uppercase;
		font-weight: 400;
		svg {
			margin-right: 10px;
		}
	}
}
@media (max-width: 800px) {
	aside {
		.phone {
			a {
				font-size: 22px;
			}
		}
	}
}
</style>
