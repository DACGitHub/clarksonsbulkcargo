<template>
  <div class="outer bg-darkgreen text-offwhite" id="home">
	  <link rel="stylesheet" href="https://use.typekit.net/qqj0czr.css">
	  <script type="text/javascript" src="js/load-more.js"></script>
    <div>
	    
	    
	 <div>
		<div class="menu-container bg-darkergreen xl:hidden" :class="fixedMenu ? 'menu-fixed' : ''">
			<div class="container text-center text-white text-center menu pt-4 pb-4">
				<div class="grid grid-cols-2 lg:grid-cols-2 justify-items-end lg:justify-items-center items-center">

					<div class="justify-self-start" style="width:100px; margin-bottom:-40px;">
						<a href="#home">
						<Lottie-scroll-mobile animation="onscroll"></Lottie-scroll-mobile>
						</a>
					</div>
					<div class="burger-menu ml-auto" @click="menu = !menu">
						<span class="burger-icon"></span>
					</div>
				</div>
			</div>
		</div>
			
		<!-- Mobile nav list -->
		<div v-show="menu" class="m-menu bg-darkgreen">
			<div class="container text-white text-center pt-10 lg:pt-32 menu">
				<div class="grid grid-cols-1 justify-items-end">
					<div class="burger-menu ml-auto xl:hidden p-6" @click="menu = !menu">
						<span class="burger-icon"></span>
					</div>
				</div>	
				<div class="grid grid-cols-1 items-center mt-24"> 
				<div class="m-menu-pages">
					<nav>
						<li class="mt-4 mb-4"><a class="footer-link menu-link" href="#about">About me</a></li>
				  		<li class="mb-4"><a class="footer-link menu-link" href="#koalaa">Koalaa</a></li>
				  		<li class="mb-4"><a class="footer-link menu-link" href="#journey">Journey</a></li>
				  		<li class="mb-4"><a class="footer-link menu-link" href="#media">Media</a></li>
				  		<li class="mb-4"><a class="footer-link menu-link" href="#sponsors">Sponsors</a></li>
				  		<li class="mb-4"><a class="footer-link menu-link" href="#contact">Get in touch</a></li>
			  		</nav>
				</div>
				</div>
			</div>
			<div class="fixed bottom-0 w-screen ">
				<div class="mx-auto w-max">
		  		<a target="_blank" href="https://uk.gofundme.com/f/single-handedly-navigating-the-world" class="button bg-green text-darkgreen w-full absolute left-0 bottom-0 p-4 rounded-tr-lg">Donate!</a>
				</div>
			</div>
		</div>
	</div>	
	    
	   

      <div class="scroll-container" id="header">
	  	<header class="relative flex items-center justify-center h-screen overflow-hidden z-20 scroll">
		  <transition name="logo-enter" appear>
			<div class="relative z-30 p-5 text-2xl text-white">
				<Lottie animation="continuous"></Lottie>
			</div>
		  </transition>
<!--
		  <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
		    <source src="~static/video/SHN_001_Website_HeaderAnimation_v0.3_SB.mp4" type="video/mp4" />
		    Your browser does not support the video tag.
		  </video>

-->

		<transition name="fade-out" v-if="!videoLoaded" appear>
			<div class="absolute w-auto min-w-full min-h-full max-w-none bg-darkgreen z-20">
			</div>
		</transition>
		
		<!-- <video autoplay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none">
		<source src="https://player.vimeo.com/external/578410080.hd.mp4?s=6e4cc0e5c87fde5dbd8b49b03f58f2eca24e3743&profile_id=175" />
		Your browser does not support the video tag.
		</video> -->
		

		<div class="embed-container">
			<iframe src="https://player.vimeo.com/video/578410080?autoplay=1&controls=0&loop=1&title=0&byline=0&portrait=0&background=1&muted=1"  frameborder="0" allowfullscreen loop muted autoplay allow="autoplay; encrypted-media"></iframe>
		</div>
		  
		  
		</header>
		
		<div class="relative h-full">
			<aside class="h-screen hidden xl:block text-center z-10 bg-darkgreen bg-opacity-25 fixed top-0 w-64 z-10">
		  		<!-- <img class="m-auto" src="~assets/img/one-hand-one-bike-one-dog.svg" style="width:201px;"> -->
					<div class="side-logo m-auto">
						<Lottie-scroll animation="onscroll"></Lottie-scroll>
					</div>
		  		<nav>
			  		<li class="mt-12 mb-4"><a href="#about">About me</a></li>
			  		<li class="mb-4"><a href="#koalaa">Koalaa</a></li>
			  		<li class="mb-4"><a href="#journey">Journey</a></li>
			  		<li class="mb-4"><a href="#media">Media</a></li>
			  		<li class="mb-4"><a href="#sponsors">Sponsors</a></li>
			  		<li class="mb-4"><a href="#contact">Get in touch</a></li>
			  		<a target="_blank" href="https://www.instagram.com/singlehandedlyntw/"><img class="m-auto mt-8" src="~assets/img/instagram.svg"></a>
		  		</nav>
		  		<a target="_blank" href="https://uk.gofundme.com/f/single-handedly-navigating-the-world" class="button bg-green text-darkgreen w-full absolute left-0 bottom-0 p-4 rounded-tr-lg">Donate!</a>
	    	</aside>
	
			<main class="xl:pl-72 z-0 w-full scroll" style="top:0;">
				<section id="about" class="pt-32 pb-32 xl:pt-64 xl:pb-64">
		        	<div class="container">
			        	<div class="grid lg:grid-cols-2">
								<h1 class="mb-6 mt-6 lg:mt-0">Hi I’m Sarah. I’ll be cycling from Scotland to Scotland via the world in 2023.</h1>
			        		<div class="xl:ml-24 mb-12 lg:mb-0 mt-4">
								<p>I was born without my left arm from below the elbow, a totally random occurrence that is unexplained and can happen to anyone, I was just one of the lucky few!</p>
								<p>However, this isn’t a bad thing. It’s actually the biggest driver in my life and pushes me to do things that are a bit mad, hence this ultimate challenge!</p>
			        		</div>
			        	</div>
		        	</div>
				</section>
		
		
		
				<section class="pt-32 pb-32 xl:pt-32 xl:pb-64">
					<div class="skew skew-r w-screen xl:-ml-72 xl:pl-72 bg-purple"></div>
		        	<div class="container">
	        			<h2 class="text-darkgreen mb-12">Key info</h2>
	        			<div class="flex flex-wrap overflow-hidden justify-center text-center -mx-4">
		        			<div class="w-1/2 overflow-hidden md:w-1/5 my-4 px-2 lg:px-6">
			        			<img class="m-auto" src="~assets/img/1-FirstPerson.svg">
			        			<h3 class="mt-6">I’ll be the first person with one hand to achieve this</h3>
		        			</div>
		        			<div class="w-1/2 overflow-hidden md:w-1/5 my-4 px-2 lg:px-6">
			        			<img class="m-auto" src="~assets/img/2-Scotland.svg">
			        			<h3 class="mt-6">Scotland to Scotland via the World</h3>
		        			</div>
		        			<div class="w-1/2 overflow-hidden md:w-1/5 my-4 px-2 lg:px-6">
			        			<img class="m-auto" src="~assets/img/3-18k.svg">
			        			<h3 class="mt-6">18,000+ miles</h3>
		        			</div>
		        			<div class="w-1/2 overflow-hidden md:w-1/5 my-4 px-2 lg:px-6">
			        			<img class="m-auto" src="~assets/img/4-Spring2023.svg">
			        			<h3 class="mt-6">Starting in Spring 2023</h3>
		        			</div>
		        			<div class="w-1/2 overflow-hidden md:w-1/5 my-4 px-2 lg:px-6">
			        			<img class="m-auto" src="~assets/img/5-Woody.svg">
			        			<h3 class="mt-6">My dog Woody is coming too!</h3>
		        			</div>
	        			</div>
			        	
		        	</div>
				</section>
				<section>
		        	<div class="container">
			        	<div class="grid lg:grid-cols-2 justify-end">
			        		<div class="lg:mr-24 mb-12 lg:mb-0">
								<h2 class="mb-12 mt-6">Prosthetics</h2>
								<p>A few years ago I started to cycle long distances and found that the prosthetic arms I was using can no longer keep up! They were heavy, sweaty and uncomfortable - the last thing you want when your legs are already screaming!</p>

								<p>I researched into what else was out there, and was shocked to find the choices were over priced, overly complicated and more focused on aesthetics than function. I was determined to help others who weren’t cycling because of these boundaries.</p>

								<p>This led me to my dad’s shed, where we made a cardboard version of what we thought would work. And then I found Koalaa…</p>
			        		</div>
			        		<img class="animate-wiggle m-auto" src="~assets/img/slant-image.jpg">

			        	</div>
		        	</div>
				</section>
				<section id="koalaa" class="pt-32 pb-32 xl:pt-64 xl:pb-64">
		        	<div class="container">
			        	<div class="grid lg:grid-cols-2 justify-end">
				        	
				        	<img class="order-last lg:order-first animate-wiggle2 m-auto" src="~assets/img/koala-hand.jpg">

			        		<div class="lg:ml-24 mb-12 lg:mb-0">
								<h2 class="mb-12 mt-6">The Koalaa Hand</h2>
								<p>Koalaa are an independent, innovative UK-based start up making waves in upper limb prosthetics. Their sleeves are made from fabric, and they can 3D print any end attachment.</p>
								
								<p>I approached them with my cardboard model and idea and now we are in the process of making the next cycling prosthetic that is comfortable, lightweight and finally affordable.</p>

								<p>It will take me round the world and hopefully help many more one armed cyclist in the future!!</p>
			        		</div>

			        	</div>
		        	</div>
				</section>
				<section class="pt-32 pb-32 xl:pt-32 xl:pb-64">
					<div class="skew skew-l w-screen xl:-ml-72 xl:pl-72 skew-image"></div>
					<div class="skew skew-l w-screen xl:-ml-72 xl:pl-72 bg-red skew-after-image"></div>
		        	<div class="container" id="journey">
	        			<h2 class="text-darkgreen mb-24">A journey to raise<br /> awareness</h2>
			        	<div class="flex flex-wrap overflow-hidden justify-center text-center">
		        			<div class="w-1/2 overflow-hidden md:w-1/3 my-4 px-4 lg:px-12">
			        			<img class="m-auto" src="~assets/img/6-LimbDifference.svg">
			        			<h3 class="mt-6">Limb difference</h3>
		        			</div>
		        			<div class="w-1/2 overflow-hidden md:w-1/3 my-4 px-4 lg:px-12">
			        			<img class="m-auto" src="~assets/img/7-Disability.svg">
			        			<h3 class="mt-6">Disability in sport</h3>
		        			</div>
		        			<div class="w-1/2 overflow-hidden md:w-1/3 my-4 px-4 lg:px-12">
			        			<img class="m-auto" src="~assets/img/8-Adaptability.svg">
			        			<h3 class="mt-6">Adaptability in day to day life</h3>
		        			</div>
		        			
	        			</div>
	        			
	        			<div class="grid mt-24 lg:grid-cols-5">
		        			<div class="lg:col-span-2">
			        			<p>This trip won’t just be the biggest adventure of my life and a serious physical challenge, but it will be an opportunity to meet as many limb different children, adults and families as possible. </p>
		        			</div>
	        			</div>
	        			
	        			<div class="grid mt-48 lg:grid-cols-7">
		        			<div class="lg:col-span-3">
			        			<h2 class="mb-8">Navigating the world with one hand</h2>
			        			<p>I hope you are now as excited as I am about this trip and wondering what the route is…</p>
		        			</div>
	        			</div>
			        	<img class="m-auto pt-12" src="~assets/img/map.svg">
<!--

						<div class="grid mt-24 lg:mt-48 lg:grid-cols-2 justify-items-end">
							<div></div>
		        			<div class="place-self-end">
			        			<h2 class="mb-8">A bit about the bike sponsor here?</h2>
			        			<p>Words here</p>
		        			</div>
	        			</div>
-->

		        	</div>
				</section>
				
				
				<section id="media" class="pb-32 xl:pb-64">
					<div class="container">
						<div class="grid lg:grid-cols-7">
		        			<div class="lg:col-span-3">
			        			<h2 class="mb-8">See who’s been talking about the trip!</h2>
		        			</div>
	        			</div>
	        			
	        			<div class="media-links grid mt-12 lg:grid-cols-3 gap-16">
		        			<div class="media-item">
			        			<span>22 July 21</span>
			        			<a class="text-purple block mt-2" target="_blank" href="https://eggedinburgh.com/interviews/around-the-world-on-two-wheels/">
				        			Egg Edinburgh - Around the world on two wheels
				        			<img class="mt-2" src="~assets/img/arrow.svg">
			        			</a>
		        			</div>
		        			<div class="media-item">
			        			<span>11 June 21</span>
			        			<a class="text-purple block mt-2" target="_blank" href="https://open.spotify.com/episode/0OdKJuLIeneXgmMvl42Z8u?si=15230e7f0e474153&nd=1">
				        			IAMPOSSIBLE podcast - Single Handedly Navigating the World
				        			<img class="mt-2" src="~assets/img/arrow.svg">
				        		</a>
		        			</div>
		        			<div class="media-item">
			        			<span>1 March 21</span>
			        			<a class="text-purple block mt-2" target="_blank" href="https://www.yourkoalaa.com/post/limb-buddies">
				        			Koalaa - Meet our new Limb Buddies
				        			<img class="mt-2" src="~assets/img/arrow.svg">
				        		</a>
		        			</div>
		        			<div class="media-item">
			        			<span>22 July 21</span>
			        			<a class="text-purple block mt-2" target="_blank" href="https://news.stv.tv/highlands-islands/cyclist-born-with-one-hand-takes-on-round-the-world-challenge?top">
				        			STV News - Cyclist born with one hand takes on round the world challenge
				        			<img class="mt-2" src="~assets/img/arrow.svg">
				        		</a>
		        			</div>
		        			<div class="media-item">
			        			<span style="color:rgba(15, 38, 38, 0.25);">Summer 2021</span>
			        			<a class="text-purple block mt-2" target="_blank" href="https://www.disabilityreviewmagazine.co.uk/issue-summer-2021/">
				        			Disability Review - Issue Summer 2021
				        			<img class="mt-2" src="~assets/img/arrow.svg">
			        			</a>
		        			</div>
		        			
		        			

	        			</div>
		        		<!--<button class="mt-16 bg-purple text-darkgreen p-3 pl-12 pr-12 pt-2"id="load-more-comments">Load More</button>-->
					</div>
				</section>
				
				<section id="sponsors" class="pt-32 pb-32 xl:pt-32 xl:pb-64">
					<div class="skew skew-r w-screen xl:-ml-72 xl:pl-72 skew-image skew-image-2"></div>
					<div class="skew skew-r w-screen xl:-ml-72 xl:pl-72 bg-purple skew-after-image"></div>
					<div class="container" id="journey">
	        			<h2 class="text-darkgreen mb-8">Thank you to my sponsors</h2>
	        			<p class="text-darkgreen mb-24">Keen to sponsor me? I’d love to hear from you!</p>
			        	<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 text-center">
		        			<a class="text-center" target="_blank" href="https://buddyrider.com/">
			        			<img class="m-auto" src="~assets/img/buddyrider.png">
			        			<h4 class="mt-6">Buddy Rider</h4>
		        			</a>
		        			<a class="text-center" target="_blank" href="https://www.yourkoalaa.com/">
			        			<img class="m-auto" src="~assets/img/koaalaa-logo.png">
			        			<h4 class="mt-6">Koalaa</h4>
		        			</a>
		        			
		        			
	        			</div>

						<div class="grid mt-48 lg:grid-cols-2 justify-items-end">
							<div></div>
		        			<div class="place-self-end">
			        			<h2 class="mb-8">I appreciate every bit of your support!</h2>
			        			<p>I will be planning and navigating this trip all on my own. In order to raise the funds to make this all happen, I will need support from as many people as possible.</p>

								<p>Every penny will be put to good use, helping me and Woody every day on this trip. The food we eat, the shelter we sleep under, the visas to enter each country and the bike I ride on!</p>

								<p>Thank you to everyone who donates, follows and shares.</p>
		        			</div>
	        			</div>

		        	</div>

					
					
					
				</section>
				
				<section id="contact" class="pb-32 xl:pb-64">
					
					<div class="container">
						<a class="footer-link mb-16 text-purple" href="mailto:singlehandedlyntw@gmail.com">
							Sponsor me
							<span class="text-offwhite block mt-2">Drop me a line <img class="inline-block ml-4" src="~assets/img/arrow.svg"></span>
						</a>
						<a class="footer-link mb-16 text-green" target="_blank" href="https://uk.gofundme.com/f/single-handedly-navigating-the-world">
							Donate
							<span class="text-offwhite block mt-2">Visit my GoFundMe <img class="inline-block ml-4" src="~assets/img/arrow.svg"></span>
						</a>
						<a class="footer-link" target="_blank" href="https://www.instagram.com/singlehandedlyntw/">
							Follow my story
							<span class="text-offwhite block mt-2">Visit my Instagram <img class="inline-block ml-4" src="~assets/img/arrow.svg"></span>
						</a>	
						
					</div>
					
				</section>
				

	    	</main>
		</div>
		</div>
    </div>
  </div>
</template>




<script>
import LottieScroll from '../components/Lottie-scroll.vue'
export default {
  components: { LottieScroll },
  data() {
		return {
			menu: false,
			fixedMenu: false,
			videoLoaded: false,
		}
  },
	methods: {
		handleScroll () {
			if (window.scrollY > window.innerHeight + 0){
				this.fixedMenu = true
			} else {
				this.fixedMenu = false
			}
		}
	},
	mounted () {
		window.addEventListener('scroll', this.handleScroll);
		window.scroll()

		var iframe = document.querySelector('iframe');
		var player = new Vimeo.Player(iframe);

		player.on('play', () => {
			console.log('played the video!');
			this.videoLoaded = true;
		});

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

