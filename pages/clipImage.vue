<template>
  <div class="contains-area">
    <div class="select-catalog-photo">
      <img
        class="my-clip"
        style="width: 176px; height: 200px"
        src="https://picsum.photos/500/300?image=20"
      />
    </div>
    <div class="break-line">
      {{ text }}
    </div>
    <div class="hero">
      <img src="https://picsum.photos/500/300?image=20" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "我等が尊ふとむ王は.　　　　　　　　　　　　我等の良心我等が尊ふと.   む王は我等の良心我等が尊ふとむ王は我等の良心我等が尊ふとむ王は我等の良心我等が尊ふとむ王は我等の良心我等が尊ふとむ王は我等の良心",
    };
  },
  computed: {},
};
</script>

<style scoped>
.contains-area {
  display: block;
  position: fixed;
  width: 50%;
  height: 100%;
  left: 300px;
  background-color: black;
}
.select-catalog-photo-area {
  display: inline-block;
  position: absolute;
  top: 150px;
  width: 176px;
  height: 200px;
  max-height: 200px;
  max-width: 176px;
  left: 0px;
  background-color: rgb(8, 244, 244);
}
.select-catalog-photo {
  /* display: flex;
  position: absolute;
  width: 170px;
  height: 200px;
  clip: rect(120px 200px 300px 100px);
  object-fit: cover;
  object-position: 100% 0; */
  display: inline-block;
  position: absolute;
  top: 150px;
  width: 176px;
  height: 200px;
  max-height: 200px;
  max-width: 176px;
  left: 0px;
  background-color: rgb(8, 244, 244);
  clip: rect(100px 275px 300px 100px);
}
/* .select-catalog-photo img {
  display: block;
  object-fit: none;
  width: 176px;
  height: 200px;
  clip: rect(120px 200px 300px 100px);
  object-fit: cover;
  object-position: 100% 0;
} */
.image-class {
  height: 100%;
  width: 100%;
  object-fit: contain;
  clip: rect(120px 200px 300px 100px);
}
.my-clip {
  position: absolute;
  --x: 180px;
  --y: 200px;
  left: calc(80px - var(--x));
  top: calc(100px - var(--y));
  /* clip-path: circle(80px at var(--x) var(--y)); */
  clip: rect(100px 275px 300px 100px);
  /* background-color: #bdbdbd; */
  -o-object-fit: cover;
  object-fit: cover;
}
.break-line {
  display: inline-block;
  position: absolute;
  top: 450px;
  width: 200px;
  height: 100px;
  left: 0px;
  background-color: rgb(8, 244, 244);
  color: #000000;
  font-size: 14px;
  font-weight: bold;
  line-height: 150%;
  font-family: "ＭＳ Ｐゴシック", Meiryo, sans-serif;
  text-align: left;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.hero {
  position: relative;
  min-height: 350px;
  left: 150px;
}

.hero img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  clip-path: inset(20px 20px 50px 20px);
}

.hero:after {
  content: "";
  position: absolute;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #4545a0;
  clip-path: inset(20px 20px 50px 20px);
}
</style>
