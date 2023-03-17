<template>
  <div class="example">
    <Swipe v-if="show" ref="swipe" />

    <button @click="showSwiper">Swipe</button>
  </div>
</template>

<script>
export default {
  name: "SwiperNuxt",
  data() {
    return {
      show: false,
    };
  },
  mounted() {},
  methods: {
    showSwiper() {
      this.show = true;
      // this.$refs.swipe.init;
    },
  },
};
</script>

<style lang="scss" scoped>
.example {
  height: auto;
  .swiper {
    height: 300px;
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
}
</style>
