<template>

    
	<lottie-player id="lottie_01" src="https://assets6.lottiefiles.com/packages/lf20_c80tsa9t.json" style="width:400px; height: 400px;"></lottie-player>
	
	
</template>

<script> 

  export default {
    mounted() {
      LottieInteractivity.create({
          player: "#lottie_01",
          mode:"scroll",
          actions: [
        
            {
              visibility: [0, 1],
              type: "seek",
              frames: [0, 448]
            }
          ]
        });
    }
  }
</script>