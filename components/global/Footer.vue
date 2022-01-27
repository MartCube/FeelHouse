<template>
	<footer class="main-footer dark">
		<div class="topbanner-footer">
			<div class="section-padding banner-img valign bg-img bg-fixed" style="background-image: url('1.jpg')">
				<div class="container">
					<div class="section-title">Contact Us</div>
					<div class="row">
						<div class="phones">
							<h6>Phone</h6>
							<h5 class="mb-30">+1 123-456-0606</h5>
							<p class="mb-30">Monday - Friday: 8am - 6pm<br />Saturday - Sunday: 9am - 3pm</p>
						</div>
						<div class="adress">
							<h6>Email</h6>
							<h5 class="mb-30">info@architecture.com</h5>
							<p class="mb-30">24 King St, Charleston<br />SC 29401 USA</p>
						</div>
						<div class="vid-area">
							<a class="play-button" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.758017847153!2d-79.93420398486563!3d32.77215479154045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a1ae84ff639%3A0xe5c782f71924a526!2s24%20King%20St%2C%20Charleston%2C%20SC%2029401%2C%20USA!5e0!3m2!1sen!2str!4v1631170502143!5m2!1sen!2str">
								<svg class="circle-fill">
									<circle cx="43" cy="43" r="39" stroke="#272727" stroke-width="1"></circle>
								</svg>
								<svg class="circle-track">
									<circle cx="43" cy="43" r="39" stroke="none" stroke-width="1" fill="none"></circle>
								</svg>
								<span class="polygon">
									<Icon name="location" :fill="color" />
								</span>
							</a>
							<div class="cont mt-20 mb-30">
								<h5>Our Location</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="item abot">
				<div class="logo mb-15"><img src="logo-light.png" alt="" /></div>
				<p>Welcome to our FeelHouse Architecture agency. Viverra tristique justo in duis vitae diam neque niva.</p>
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
					<li><n-link to="/faq">FAQ</n-link></li>
					<li><n-link to="/faq">Interior Design</n-link></li>
					<li><n-link to="/faq">Urban Design</n-link></li>
					<li><n-link to="/faq">Decor Plan</n-link></li>
				</ul>
			</div>
			<div class="item fotcont">
				<div class="fothead">
					<h6>Let's talk</h6>
				</div>
				<p>Have a project in mind?</p>
				<p>Let's Build Something Great Together</p>
				<p>+1 123-456-0606</p>
				<p>info@architecture.com</p>
			</div>
		</div>
		<div class="sub-footer">
			<div class="container">
				<div class="text-left">
					<p>© 2021, FeelHouse. All right reserved.</p>
				</div>
				<div class="text-right-left">
					<p><a href="#">Terms of use</a> <span>|</span> <a href="#"> Privacy Environmental Policy </a></p>
				</div>
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
.bg-img {
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
.bg-img2 {
	background-size: contain;
	background-repeat: no-repeat;
	background-position: left;
}
.bg-fixed {
	background-attachment: fixed;
}
.topbanner-footer {
	position: relative;
	.container {
		display: flex;
		justify-content: space-between;
	}
}
.topbanner-footer h6 {
	color: #fff;
	font-size: 17px;
	font-family: 'Khand', sans-serif;
	font-weight: 400;
	margin-bottom: 10px;
	text-transform: uppercase;
	letter-spacing: 4px;
}
.topbanner-footer h5 {
	color: #fff;
	font-size: 24px;
	font-family: 'Khand', sans-serif;
	margin-bottom: 20px;
}
.topbanner-footer h5 a {
	color: #c5a47e;
}
.topbanner-footer h1 {
	font-size: 45px;
	font-family: 'Khand', sans-serif;
	color: #fff;
	position: relative;
	margin-bottom: 20px;
	line-height: 1.25em;
}
.topbanner-footer p {
	font-size: 17px;
	font-weight: 400;
	color: #fff;
	line-height: 1.75em;
}
@media screen and (max-width: 800px) {
	.topbanner-footer {
	}
	.topbanner-footer h6 {
		font-size: 12px;
		font-weight: 400;
		margin-bottom: 10px;
	}
	.topbanner-footer h5 {
	}
	.topbanner-footer h1 {
	}
}
.banner-img:after {
	position: absolute;
	height: 100%;
	right: 0;
	left: 0;
	top: 0;
	content: '';
	background: -webkit-linear-gradient(bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%, rgba(255, 255, 255, 0.2) 100%);
	background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%, rgba(255, 255, 255, 0.2) 100%);
	object-fit: cover;
}
.main-footer {
	padding: 0;
}
.main-footer.dark {
	position: relative;
	background: #fff;
	color: #555;
}
.main-footer p,
.main-footer .abot p {
	color: #555;
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
	color: #c5a47e;
}
.main-footer .usful-links ul {
	margin: 0;
	padding: 0;
}
.main-footer .usful-links ul li {
	margin-bottom: 5px;
}
.main-footer .usful-links ul li:hover {
	color: #fff;
}
.main-footer .usful-links ul li i {
	font-size: 7px;
	color: #fff;
	margin-right: 3px;
}
.main-footer .usful-links ul li a {
	color: rgba(255, 255, 255, 0.7);
}
.main-footer .usful-links ul li a:hover {
	color: #c5a47e;
}
.main-footer .fothead h6 {
	color: #fff;
	font-size: 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-bottom: 15px;
	font-weight: 500;
}
.main-footer .fotcont .fothead h6 {
	position: relative;
}
.main-footer .fotcont p {
	margin-bottom: 0px;
	color: rgba(255, 255, 255, 0.7);
}
.main-footer .sub-footer {
	padding: 20px 0;
	border-top: 1px solid #f6f6f6;
}
.main-footer .sub-footer p {
	font-size: 15px;
	color: #555;
	margin-bottom: 0;
}
.main-footer .sub-footer p a {
	color: rgba(255, 255, 255, 0.7);
}
.main-footer .sub-footer p a:hover {
	color: #c5a47e;
}
.main-footer .sub-footer p span {
	color: rgba(255, 255, 255, 0.1);
	padding: 0 10px;
}
.main-footer .logo h2 {
	font-weight: normal;
	font-size: 30px;
	color: #fff;
	line-height: 1.25em;
	margin-bottom: 20px;
	letter-spacing: 1px;
}
.main-footer .logo span {
	display: block;
	color: #fff;
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
</style>
