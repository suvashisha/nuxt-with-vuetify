<!--loading-->
<template>
  <div id="animation" class="main" />
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
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.loadAnimation();
    this.animation.onComplete = this.onComplete;
  },
  methods: {
    loadAnimation() {
      const icon = document.getElementById("animation");
      this.animation = lottie.loadAnimation({
        container: icon, // 包含动画的dom元素
        renderer: "svg", // 渲染出来的是什么格式
        loop: false, // 循环播放
        autoplay: true, // 自动播放
        animationData: secondAnimationData, // 动画json的路径
      });
    },
    onComplete() {
      console.log('on complete');
      this.$router.push('/sample')
    },
  },
};
</script>
<style scoped>
.main {
  background-color: white !important;
}
</style>
