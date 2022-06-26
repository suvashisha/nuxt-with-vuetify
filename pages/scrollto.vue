<template>
  <div class="page">
   <nuxt-link
     v-scroll-to="'#anchor'"
     to
   >
     下にとぶ
   </nuxt-link>
   <div id="anchor">
     とべた！
   </div>
 </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
 duration: 20000,
 easing: [0, 0, 0.1, 1],
 offset: -200,
})

export default {
 data () {
   return {
     options: {
       el: '#anchor',
       onDone: (el) => console.log(el)
     }
   }
 }
}
</script>

<style scoped>
 #anchor {
   margin-top: 1000px;
 }
</style>
