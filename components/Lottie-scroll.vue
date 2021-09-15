<template>
    <div :id="`animation-` + animation" class="lottie-animation">
    </div>
</template>
 
<script>
  import lottie from 'lottie-web/build/player/lottie'
 
  export default {
    props: {
      animation: String,
    },
    data() {
      return {
        lastScrollTop: 0
      }
    },
    mounted() {
      var animation = document.getElementById(`animation-${this.animation}`);

      this.anim = lottie.loadAnimation({
        container: animation, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: false,
        path: '/animations/' + this.animation + '.json' // the path to the animation json
      });
      this.anim.setSpeed(3);
    },
    created () {
      window.addEventListener('scroll', this.playAnimation);
    },
    destroyed () {
      window.removeEventListener('scroll', this.playAnimation);
    },
    methods: {
      playAnimation() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > this.lastScrollTop){
          //scrolling down. play animation forwards
          this.anim.setSpeed(1)
        } else {
          // scrolling up. play animation backwards
          this.anim.setSpeed(-1)
          console.log('scrolling up')
        }
        this.anim.play() // Starts animation
        setTimeout(() => {
          this.anim.pause() // Stops animation after 50ms.
        }, 50);
        
        //set new last scroll top position
        this.lastScrollTop = st <= 0 ? 0 : st;

      },
    }
  }
</script>

<!--
<style scoped>
.lottie-animation svg {
  width: 100%;
  height: auto!important;
}
</style>
-->