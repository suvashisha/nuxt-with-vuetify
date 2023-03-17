<template>
  <div class="example">
    <!-- component: only render Swiper on browser env -->
    <client-only>
      <swiper
        activeSlideKey="5"
        ref="carousel"
        class="swiper"
        :options="swiperOptions()"
        @ready="onSwiperRedied"
        @clickSlide="onSwiperClickSlide"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <div slot="pagination" class="swiper-pagination" />
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import { Swiper, swiperSlide } from "vue-awesome-swiper";
components: {
  Swiper, swiperSlide;
}
export default {
  name: "SwiperNuxt",
  data() {
    return {
      slider: null,
      initialSlide: 0,
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    slider() {
      debugger;
      // return this.$refs.carousel.$swiper;
      return this.slider;
    },
  },
  methods: {
    init() {
      debugger;
      this.initialSlide = 2;
      // this.slider = new Swiper(this.$refs.carousel, {
      //   swiperOptions: {
      //     initialSlide: 5,
      //     spaceBetween: 30,
      //     pagination: {
      //       el: ".swiper-pagination",
      //       dynamicBullets: true,
      //     },
      //     navigation: {
      //       nextEl: ".swiper-button-next",
      //       prevEl: ".swiper-button-prev",
      //     },
      //   },
      // });
      //this.$refs.carousel.swiper.slideTo(2);
    },
    swiperOptions() {
      debugger;
      const swiper = {
        swiperOptions: {
          initialSlide: this.initialSlide,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
      };
      debugger;
      return swiper.swiperOptions;
    },
    onSwiperRedied(swiper) {
      console.log("Swiper redied!", swiper);
    },
    onSwiperSlideChangeTransitionStart() {
      console.log("SwiperSlideChangeTransitionStart!");
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log("Swiper click slide!", reallyIndex);
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
