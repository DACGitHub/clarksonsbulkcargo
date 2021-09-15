<template>
    <div :id="`animation-mobile-` + animation" class="lottie-animation">
    </div>
</template>
 
<script>
  import lottie from 'lottie-web/build/player/lottie'
 
  export default {
    props: {
      animation: String,
    },
    mounted() {
      var animation = document.getElementById(`animation-mobile-${this.animation}`);

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
        this.anim.play() // Starts animation
        setTimeout(() => {
          this.anim.pause() // Stops animation after 50ms.
        }, 50);
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