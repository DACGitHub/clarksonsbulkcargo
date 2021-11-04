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
    mounted() {
      var animation = document.getElementById(`animation-${this.animation}`);

      var anim = lottie.loadAnimation({
        container: animation, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animations/' + this.animation + '.json' // the path to the animation json
      });

      anim.addEventListener('DOMLoaded', (e) => {
        console.log('element loaded')
        this.$emit('animationLoaded')
      });
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