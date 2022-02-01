<template>
	<div>
		<Intro :title="title" :poster="poster" />
		<section class="service section-padding">
			<div class="container">
				<!-- <SanityContent class="content" :blocks="content" :serializers="serializers" /> -->
				<aside class="sidebar blog-sidebar">
					<div class="sidebar-widget services">
						<div class="widget-inner">
							<div class="sidebar-title">
								<h5>All Services</h5>
							</div>
							<ul>
								<li>
									<a href="#">
										<span>Architectural Design</span>
									</a>
								</li>
								<li>
									<a class="active" href="#">
										<span>Interior Design</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>Bunker's construction</span>
									</a>
								</li>
								<li>
									<a href="#">
										<span>Overhaul</span>
									</a>
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
			</div>
		</section>
	</div>
</template>

<script>
import { service } from '@/assets/queries'

export default {
	name: 'Service',
	asyncData({ $sanity, route }) {
		return $sanity.fetch(service, { uid: route.params.service })
	},
	data: () => ({
		color: '#c5a47e',
		// serializers: {
		// 	types: {
		// 		faq,
		// 		articleList,
		// 	},
		// },
	}),
}
</script>

<style lang="scss" scoped>
.service {
	width: 100%;
	display: flex;
	justify-content: space-between;
	aside {
		width: 35%;
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
					&.active,
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
}
</style>
