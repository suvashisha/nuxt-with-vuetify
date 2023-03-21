<template>
  <div class="example">
    <!-- component: only render Swiper on browser env -->
    <client-only>
      <div class="swiper-wrapper">
        <swiper
          activeSlideKey="5"
          ref="swiperRef"
          class="swiper"
          :options="swiperOptions"
          @ready="onSwiperRedied"
          @clickSlide="onSwiperClickSlide"
          @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
        >
          <!-- <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide> -->
          <div v-for="media in medias" class="swiper-slide">
            <img
              v-bind:id="media.id"
              v-if="media.type == 'image'"
              v-bind:src="media.src"
              alt=""
            />
            <video v-bind:id="media.id" v-if="media.type == 'video'" controls>
              <source v-bind:src="media.src" type="video/mp4" />
            </video>
          </div>
          <div slot="pagination" class="swiper-pagination" />
          <div slot="button-prev" class="swiper-button-prev"></div>
          <div slot="button-next" class="swiper-button-next"></div>
        </swiper>
      </div>
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
      swiperOptions: {
        initialSlide: 0,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          Bullets: true,
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      medias: [
        {
          id: "media1",
          type: "image",
          src: "https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
        },
        {
          id: "media4",
          type: "video",
          src: "https://www.w3schools.com/tags/movie.mp4",
        },
        {
          id: "media2",
          type: "image",
          src: "https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
        },
        {
          id: "media3",
          type: "image",
          src: "https://images.pexels.com/photos/5928/salad-healthy-diet-spinach.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
        },
        {
          id: "media5",
          type: "video",
          src: "https://www.w3schools.com/tags/movie.mp4",
        },
      ],
    };
  },
  mounted() {
    // this.init();
  },
  computed: {
    // swiper() {
    //   console.log("********swiper ref", this.$refs.swiperRef.$swiper);
    //   return this.$refs.swiperRef.$swiper;
    // },
  },
  methods: {
    init() {
      debugger;
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
    // swiperOptions() {
    //   debugger;
    //   const swiper = {
    //     swiperOptions: {
    //       initialSlide: this.initialSlide,
    //       spaceBetween: 30,
    //       pagination: {
    //         el: ".swiper-pagination",
    //         dynamicBullets: true,
    //       },
    //       navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //       },
    //     },
    //   };
    //   debugger;
    //   return swiper.swiperOptions;
    // },
    onSwiperRedied(swiper) {
      console.log("Swiper redied!", swiper);
      swiper.slideTo(4);
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
  margin-left: auto;
  margin-right: auto;
  position: relative;
  .swiper {
    height: 500px;
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
        background-color: black;
        height: 1em;
        width: 1em;
      }
    }
  }
  .swiper-pagination-bullet-active {
    background-color: #fff !important;
  }
  .swiper {
    max-width: 83.5%;
  }
  .swiper-slide img,
  .swiper-slide video {
    height: auto;
    width: 100%;
    padding-bottom: 5em;
  }
  .video-js {
    width: 100%;
    height: 100%;
  }
  .vjs-control-bar {
    bottom: 30px !important;
    // z-index:99;
  }
  /* 前への矢印 */
  .swiper-button-prev {
    left: -30px;
  }
  /* 次への矢印 */
  .swiper-button-next {
    right: -30px;
  }
  /* ページネーション */
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: -25px;
  }
}
</style>
