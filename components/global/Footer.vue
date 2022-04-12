<template>
	<footer class="main-footer dark">
		<div class="topbanner-footer">
			<div class="section-padding banner-img bg-img bg-fixed" style="background-image: url('/1.jpg')">
				<div class="container">
					<div class="section-title">Contact Us</div>
					<div class="info">
						<div class="phones">
							<h6>Phone</h6>
							<h5><a href="tel:+380674011181">+380 (67) 401 11 81</a></h5>
							<p>Monday - Friday: 8am - 6pm<br />Saturday - Sunday: 9am - 3pm</p>
						</div>
						<div class="adress">
							<h6>Email</h6>
							<h5><a href="mailto:info@architecture.com">activehouse.ua@gmail.com</a></h5>
							<!-- <p>24 King St, Charleston<br />SC 29401 USA</p> -->
						</div>
						<div class="vid-area">
							<a class="location_button" target="_blank" href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x40d4d27ed68ea52f:0x5983e5f77ca719fd?source=g.page.share">
								<Icon name="location" :fill="color" size="48px" />
							</a>
							<h5>Our Location</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container bottom-footer">
			<div class="item abot">
				<div class="logo"><img src="/logo-light.png" alt="" /></div>
				<p>Welcome to our ActiveHouse Architecture agency. Viverra tristique justo in duis vitae diam neque niva.</p>
				<div class="social-icon">
					<a href="#">
						<Icon name="facebook" :fill="color" />
					</a>
					<a href="#">
						<Icon name="instagram" :fill="color" />
					</a>
					<a href="#">
						<Icon name="youtube" :fill="color" />
					</a>
				</div>
			</div>
			<div class="item usful-links">
				<div class="fothead">
					<h6>Sitemap</h6>
				</div>
				<ul>
					<li><n-link to="/faq/">FAQ</n-link></li>
					<li><n-link to="/faq/">Interior Design</n-link></li>
					<li><n-link to="/faq/">Urban Design</n-link></li>
					<li><n-link to="/faq/">Decor Plan</n-link></li>
				</ul>
			</div>
			<div class="item fotcont">
				<div class="fothead">
					<h6>Let's talk</h6>
				</div>
				<p>Have a project in mind?</p>
				<p>Let's Build Something Great Together</p>
				<a href="tel:+380674011181">+380 (67) 401 11 81</a>
				<a href="mailto:activehouse.ua@gmail.com">activehouse.ua@gmail.com</a>
			</div>
		</div>
		<div class="sub-footer">
			<div class="container">
				<div class="text-left">
					<p>AcivwHouse.design © 2022 All right reserved.</p>
				</div>
				<!-- <div class="text-right-left">
					<p><a href="#">Terms of use</a> <span>|</span> <a href="#"> Privacy Environmental Policy </a></p>
				</div> -->
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data: () => ({
		color: '#272727',
	}),
}
</script>
<style lang="scss" scoped>
.bottom-footer {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.item {
		width: 20%;
	}
	.logo {
		margin-bottom: 2rem;
	}
}
.bg-img {
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
.bg-fixed {
	background-attachment: fixed;
}
.topbanner-footer {
	position: relative;
	.container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		z-index: 3;
		position: relative;
		.section-title {
			width: 100%;
		}
		.info {
			margin-top: 3rem;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.phones,
			.vid-area,
			.adress {
				width: 20%;
			}
			.vid-area {
				a {
					display: flex;
					position: relative;
					width: 120px;
					height: 120px;
					z-index: 1;
					background-color: rgb(255, 255, 255, 50%);
					border: 2px solid $text;
					border-width: 0;
					transition: border 0.5s ease-in;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					&:hover {
						animation: dash 5s linear forwards;
					}
				}
			}
		}
	}
}
@keyframes dash {
	from {
		border-width: 0;
	}
	to {
		border-width: 100%;
	}
}
.topbanner-footer h6 {
	font-size: 17px;
	font-weight: 400;
	margin-bottom: 10px;
	text-transform: uppercase;
	letter-spacing: 4px;
}
.topbanner-footer h5 {
	font-size: 24px;
	margin: 20px 0;
}
.topbanner-footer h1 {
	font-size: 45px;
	position: relative;
	margin-bottom: 20px;
	line-height: 1.25em;
}
.topbanner-footer p {
	font-size: 17px;
	line-height: 1.75em;
}

.banner-img:after {
	position: absolute;
	height: 100%;
	right: 0;
	left: 0;
	top: 0;
	content: '';
	background: -webkit-linear-gradient(bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%);
	background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%);
	object-fit: cover;
}
.main-footer {
	padding: 0;
	&::before {
		height: 80px;
		width: 2px;
		background-color: $primary;
		content: '';
		z-index: 10;
		top: -40px;
		left: 50%;
		position: absolute;
		transform: translateX(-50%);
	}
}
.main-footer.dark {
	position: relative;
	color: $text_light;
}
.main-footer p,
.main-footer .abot p {
	color: $text_light;
}
.main-footer .abot .logo img {
	width: 150px;
	height: 45px;
	width: auto;
	display: block;
	-webkit-transition: all 0.3s ease-out;
	transition: all 0.3s ease-out;
}
.main-footer .abot .social-icon {
	margin-top: 20px;
}
.main-footer .abot .social-icon a {
	font-size: 17px;
	margin-right: 10px;
	color: rgba(255, 255, 255, 0.7);
}
.main-footer .abot .social-icon a:hover {
	color: $primary;
}
.main-footer .usful-links ul {
	margin: 0;
	padding: 0;
}
.main-footer .usful-links ul li {
	margin-bottom: 5px;
}
.main-footer .usful-links ul li i {
	font-size: 7px;
	margin-right: 3px;
}
.main-footer .usful-links ul li a:hover {
	color: $primary;
}
.main-footer .fothead h6 {
	font-size: 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-bottom: 15px;
	font-weight: 500;
	color: $text_light;
}
.main-footer .fotcont .fothead h6 {
	position: relative;
}
.main-footer .fotcont p {
	margin-bottom: 0px;
	color: $text_light;
}
.main-footer .sub-footer {
	padding: 20px 1rem;
	border-top: 1px solid #f6f6f6;
	margin-top: 2rem;
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
}
.main-footer .sub-footer p {
	font-size: 15px;
	color: $text_light;
	margin-bottom: 0;
}
.main-footer .sub-footer p a:hover {
	color: $primary;
}
.main-footer .sub-footer p span {
	padding: 0 10px;
}
.main-footer .logo h2 {
	font-weight: normal;
	font-size: 30px;
	color: $white;
	line-height: 1.25em;
	margin-bottom: 20px;
	letter-spacing: 1px;
}
.main-footer .logo span {
	display: block;
	text-transform: uppercase;
	letter-spacing: 3px;
	font-size: 9px;
	font-family: 'Nunito Sans', sans-serif;
	font-weight: 400;
	line-height: 1.25em;
}
.main-footer .sub-footer .text-right-left {
	text-align: right !important;
}

@media screen and (max-width: 800px) {
	.topbanner-footer {
		.section-padding {
			padding-left: 15px;
			padding-right: 15px;
		}
		.container .info {
			.phones,
			.vid-area,
			.adress {
				width: 100%;
				margin-top: 2rem;
			}
		}
		h6 {
			font-size: 12px;
			margin-bottom: 10px;
		}
	}
	.bottom-footer {
		.item {
			width: 100%;
			margin-top: 2rem;
		}
	}
}
@media (max-width: 600px) {
	.bottom-footer {
		padding: 0 1rem;
	}
}
</style>
