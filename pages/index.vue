<template>
	<div>
	<transition name="fade-out">
		<img class="loading-animation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" v-if="!loaded" style="width:235px;" src="~assets/img/Clarksons_logo_Red.png" alt="">
	</transition>
	<button class="text-offwhite" @click="loaded = !loaded">UNLOAD</button>
	<transition name="fade">
  <div class="outer bg-skyblue text-offwhite" id="home" v-show="loaded">
	<link rel="stylesheet" href="https://use.typekit.net/gma3jng.css">

	  <script type="text/javascript" src="js/load-more.js"></script>
   
   
   
	  	<div class="menu-container bg-white xl:hidden" :class="fixedMenu ? 'menu-fixed' : ''">
			<div class="container text-center text-darkblue text-center menu pt-4 pb-4">
				<div class="grid grid-cols-2 lg:grid-cols-2 justify-items-end lg:justify-items-center items-center">

					<div class="justify-self-start" style="width:100px;">
						<a href="#home">
						<img style="width:184px; max-width: none;" src="~assets/img/Clarksons_logo_Red.png">
						</a>
					</div>
					<div class="burger-menu ml-auto" @click="menu = !menu">
						<span class="burger-icon"></span>
					</div>
				</div>
			</div>
		</div>
			
		<!-- Mobile nav list -->
		<div v-show="menu" class="m-menu bg-lightblue">
			<div class="container text-white text-center pt-4 pb-4 menu">
				<div class="grid grid-cols-2 lg:grid-cols-2 justify-items-end lg:justify-items-center items-center">
					<div class="justify-self-start" style="width:100px;">
						<a href="#home">
						<img style="width:184px; max-width: none;" src="~assets/img/Clarksons_logo_Red.png">
						</a>
					</div>
					<div class="burger-menu burger-close ml-auto xl:hidden" @click="menu = !menu">
						<span class="burger-icon"></span>
					</div>
				</div>	
				<div class="grid grid-cols-1 items-center mt-24"> 
				<div class="m-menu-pages">
					<nav>
						<li class="mt-4 mb-4"><a class="footer-link menu-link text-darkblue" href="#cargo">1 Cargo</a></li>
				  		<li class="mb-4"><a class="footer-link menu-link text-darkblue" href="#trader">2 Trader</a></li>
				  		<li class="mb-4"><a class="footer-link menu-link text-darkblue" href="#broker">3 Broker</a></li>
				  		<li class="mb-4"><a class="footer-link menu-link text-darkblue" href="#customs">4 Customs</a></li>
				  		<li class="mb-4"><a class="footer-link menu-link text-darkblue" href="#ships-agent">5 Ships Agent</a></li>
				  		<li class="mb-4"><a class="footer-link menu-link text-darkblue" href="#contact">Contact</a></li>
			  		</nav>
				</div>
				</div>
			</div>

		</div>
   
   
   

		<header class="bg-darkblue">
			<div class="container">

				<div class="grid grid-cols-1 pt-16 xl:pb-24 pb-12 hidden xl:block">
					<div class="justify-self-start">
						<img src="~assets/img/Clarksons_logo_Red.png" style="width:236px;">
					</div>
				</div>
				<div class="grid grid-cols-1 justify-items-center items-center">
					<div class="text-center pt-40 xl:pt-16 pb-48 xl:pb-72">
						<h1 class="text-brightblue uppercase">Supporting growth across<br class="hidden md:block" /> the Agri Bulk Sector</h1>
					</div>
				</div>

			</div>
		</header>

		<!-- <section class="section-one flex h-screen justify-center items-center text-center"> -->
		<section class="section-one text-center" id="cargo">
<!-- 			<img class="-mt-16 xl:-mt-48" src="~assets/img/first-section.svg"> -->
			<!-- set the animation prob to the name of the file in static/animations and the component will take care of the rest :) -->
		      <Lottie @animationLoaded="animationLoaded" class="-mt-16 xl:-mt-48" animation="2022/01_Intro/01_Intro"></Lottie>
			<div class="container pt-20 xl:pt-24 pb-20">
				<h2 class="text-darkblue uppercase">Cargo</h2>
				<p>Crops grown to meet<br class="hidden md:block" /> demand in global market</p>
			</div>
<!-- 			<img class="xl:-mt-32" src="~assets/img/second-section.svg"> -->
		    <Lottie @animationLoaded="animationLoaded" class="xl:-mt-32" animation="2022/02_Cargo/02_Cargo"></Lottie>
		</section>
		<section class="section-two text-center" id="trader">
			<div class="container pt-24 xl:pt-96">
				<h2 class="text-darkblue uppercase">Trader</h2>
				<p>Trader connects<br class="hidden md:block" /> crops to buyer</p>
			</div>
<!-- 			<img class="hidden xl:block xl:-mt-80" src="~assets/img/third-section.svg"> -->
		    <Lottie @animationLoaded="animationLoaded" class="hidden xl:block xl:-mt-80" animation="2022/03_Trader/03_Trader"></Lottie>
			<img class="block xl:hidden mt-12" src="~assets/img/third-section_mobile.svg">
		</section>
		<section class="section-three bg-lightblue text-center" id="broker">
			<img class="block xl:hidden xl:mt-12 md:-ml-72 -ml-32 pt-32" src="~assets/img/fourth-section_mobile1.svg">
			<div class="container pt-8 xl:pt-48 pb-20" style="z-index: 100; position: relative;">
				<h2 class="text-darkblue uppercase">Broker</h2>
				<p>Our Ship Brokers source the<br class="hidden md:block" /> appropriate vessel and<br class="hidden md:block"/> trading routes for shipment</p>
			</div>
<!-- 			<img class="hidden xl:block xl:-mt-96" src="~assets/img/fourth-section.svg"> -->
		    <Lottie @animationLoaded="animationLoaded" class="hidden xl:block xl:-mt-96" style="z-index:1 ; position: relative;" animation="2022/04_Broker/04_Broker"></Lottie>
			<img class="block xl:hidden" src="~assets/img/fourth-section_mobile2.svg">
		</section>
		<section class="section-four bg-lightblue text-center" id="customs">
			<div class="container pt-48 pb-20">
				<h2 class="text-darkblue uppercase">Customs</h2>
				<p>Our Customs Agents provide<br class="hidden md:block" /> guidance and support to ensure<br class="hidden md:block"/> the relevant customs clearance is<br class="hidden md:block"/> completed in a timely manner</p>
			</div>
<!-- 			<img class="hidden xl:block xl:-mt-80" src="~assets/img/fifth-section.svg"> -->
		    <Lottie @animationLoaded="animationLoaded" class="hidden xl:block xl:-mt-80" animation="2022/05_Customs/05_Customs"></Lottie>
			<img class="block xl:hidden" src="~assets/img/fifth-section_mobile.svg">
		</section>
		<section class="section-five text-center" id="ships-agent">
			<img class="block xl:hidden mb-16" src="~assets/img/sixth-section_mobile1.svg">
			<div class="container pt-140 pb-20">
				<h2 class="text-darkblue uppercase">Ships agent</h2>
				<p>Our Ships Agents coordinate<br class="hidden md:block" /> and facilitate all parties<br class="hidden md:block"/> requirements within the port</p>
			</div>
<!-- 			<img class="hidden xl:block -mt-140 xl:-mb-32 xl:-ml-36" src="~assets/img/sixth-section.svg"> -->
		    <Lottie @animationLoaded="animationLoaded" class="hidden xl:block -mt-140 xl:-mb-10 xl:-ml-36" animation="2022/06_ShipAgent01/06_ShipAgent01"></Lottie>
			<img class="block xl:hidden -mb-20" src="~assets/img/sixth-section_mobile2.svg">
		</section>
		
		<section class="section-six bg-lightblue text-center">
			<div class="container pt-32 xl:pt-48 pb-20" style="z-index: 100; position: relative;">
				<p>Our Ships Agents complete<br class="hidden md:block" /> cargo documentation and<br class="hidden md:block"/> arrange vessel’s departure</p>
			</div>
<!-- 			<img class="xl:-mt-24" src="~assets/img/seventh-section.svg"> -->
		    <Lottie @animationLoaded="animationLoaded" class="xl:-mt-48" style="z-index:1 ; position: relative;" animation="2022/07_ShipAgent02/07_ShipAgent02"></Lottie>
		</section>
		
		
		<section class="pt-16 pb-16" id="contact">
			
			<div class="container">
				
					<h2 class="h1 text-center uppercase text-darkblue">Contact us</h2>

					<Map></Map>
				
			</div>
			
		</section>
		
		<section class="xl:pt-64 xl:pb-64 pb-20">
			
			<div class="container">
				
				<p class="text-center">Bulk Cargo team</p>
				
					<div class="grid lg:grid-cols-3 xl:mt-20 mt-12 text-center">
						<div class="mb-12 xl:mb-0">
							<img class="m-auto mb-8" src="~assets/img/paul-hutchison@2x.png" style="width: 177px;">
							<h3 class="mb-8"><span class="font-bold">Paul Hutchinson</span><br />
								Director</h3>
							</h3>
							<p class="small">+44 (0) 782 355 7090<br />
								<a href="mailto:paul.hutchinson@clarksons.com">paul.hutchinson@clarksons.com</a>
							</p>
						</div>
						<div class="mb-12 xl:mb-0">
							<img class="m-auto mb-8" src="~assets/img/steve-smith@2x.png" style="width: 177px;">
							<h3 class="mb-8"><span class="font-bold">Steve Smith</span><br />
								Director</h3>
							</h3>
							<p class="small">+44 (0) 788 071 6071<br />
								<a href="mailto:stephen.smith@clarksons.com">stephen.smith@clarksons.com</a>
							</p>
						</div>
						<div class="">
							<img class="m-auto mb-8" src="~assets/img/jennifer-leonard@2x.png" style="width: 177px;">
							<h3 class="mb-8"><span class="font-bold">Jennifer Leonard</span><br />
								Business Development Manager</h3>
							</h3>
							<p class="small">+44 (0) 754 543 0152<br />
								<a href="mailto:jennifer.leonard@clarksons.com">jennifer.leonard@clarksons.com</a>
							</p>
						</div>

					</div>
				
			</div>
			
		</section>
		
		<section class="">
			
			<div class="container pb-16">
				
				<p class="text-center">Shortsea Brokers</p>
				
					<div class="grid lg:grid-cols-3 xl:mt-20 mt-12 text-center">
						<div class="mb-12 xl:mb-0">
							<img class="m-auto mb-8" src="~assets/img/Asset 3@300x.png" style="width: 177px;">
							<h3 class="mb-8"><span class="font-bold">John Gardner</span><br />
								Broker</h3>
							</h3>
							<p class="small">+44 (0) 782 766 7084<br />
								<a href="mailto:shortsea@clarksons.com">shortsea@clarksons.com</a>
							</p>
						</div>
						<div class="mb-12 xl:mb-0">
							<img class="m-auto mb-8" src="~assets/img/mark-ewings.png" style="width: 177px;">
							<h3 class="mb-8"><span class="font-bold">Mark Ewings</span><br />
								Director</h3>
							</h3>
							<p class="small">+44 (0) 786 659 4930<br />
								<a href="mailto:shortsea@clarksons.com">shortsea@clarksons.com</a>
							</p>
						</div>
						<div class="">
							<img class="m-auto mb-8" src="~assets/img/Asset 2@300x.png" style="width: 177px;">
							<h3 class="mb-8"><span class="font-bold">Lewis Gardner</span><br />
								Broker</h3>
							</h3>
							<p class="small">+44 (0) 778 837 3479<br />
								<a href="mailto:shortsea@clarksons.com">shortsea@clarksons.com</a>
							</p>
						</div>

					</div>
				
			</div>
<!-- 			<img class="" src="~assets/img/footer-section.svg"> -->
		    <Lottie @animationLoaded="animationLoaded" class="" animation="2022/08_Contact/08_Contact"></Lottie>
		</section>
		
		

		<footer class="bg-darkblue xl:-mt-24 pb-32 text-center">
			<a class="text-brightblue relative z-100" href="https://clarksons.com">clarksons.com</a>
		</footer>

  </div>
	</transition>
	</div>
</template>




<script>
export default {
  components: {  },
  data() {
		return {
			menu: false,
			fixedMenu: true,
			animations: 1,
			animationsLoaded: 0,
			loaded: false,
		}
  },
	methods: {
		animationLoaded(){
			this.animationsLoaded += 1
			console.log('animation loaded from child')
			if (this.animationsLoaded >= 8){
				console.log('page is ready')
				this.loaded = true;
			}
		}
	},
	mounted () {
		window.addEventListener('scroll', this.handleScroll);
		window.scroll()
	},
	watch: {
    '$route' () {
      this.menu = false
    }
  }
}
</script>


<style>



</style>

