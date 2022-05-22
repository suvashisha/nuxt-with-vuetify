<!--loading-->
<template>
<div>
  <div id="animation" ref="animation" class="main" />
  <!-- <div id="animation2" ref="animation2" class="main" /> -->
</div>
</template>

<script>
import lottie from "lottie-web";
import firstAnimationData from "@/assets/lottie/animation1.json";
import secondAnimationData from "@/assets/lottie/animation2.json";
export default {
  components: {},
data() {
    return {
      animation: null,
      animation2: null,
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.loadAnimation();
    // this.loadAnimation2();
    this.animation.onComplete = this.onComplete;
    // this.animation2.onComplete = this.onComplete2;
  },
  methods: {
    loadAnimation() {
      // const icon = document.getElementById("animation");
      this.animation = lottie.loadAnimation({
        container: this.$refs.animation, // 包含动画的dom元素
        renderer: "svg", // 渲染出来的是什么格式
        loop: false, // 循环播放
        autoplay: true, // 自动播放
        animationData: firstAnimationData, // 动画json的路径
      });
    },
    onComplete() {
      console.log('on complete');
      this.animation.destroy();
      this.loadAnimation2();

      // this.$router.push('/sample')
    },
    loadAnimation2() {
      // const icon = document.getElementById("animation");
      this.animation2 = lottie.loadAnimation({
        container: this.$refs.animation, // 包含动画的dom元素
        renderer: "svg", // 渲染出来的是什么格式
        loop: false, // 循环播放
        autoplay: true, // 自动播放
        animationData: secondAnimationData, // 动画json的路径
      });
    },
    onComplete2() {
      console.log('on complete2');
      this.$router.push('/sample')
    },
  },
};
</script>
<style scoped>
.main {
  background-color: white !important;
  width: 400px;
  height: 400px;
}
</style>
