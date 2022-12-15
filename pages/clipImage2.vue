<template>
  <div class="contains-area">
    <div class="select-catalog-photo">
      <canvas
        id="canvas"
        style="background-color: red; width: 100%; height: 100%"
      />
      <div style="display: none">
        <img id="source" :src="imgSrc" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "",
    };
  },
  mounted() {
    this.createLandMark();
  },
  computed: {},
  methods: {
    createLandMark() {
      this.imgSrc = "https://picsum.photos/500/300?image=20";
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      const image = document.getElementById("source");

      image.onload = function () {
        // ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
        ctx.drawImage(image, 33, 71, 104, 124);
      };
      // canvas.style.width = "100%";
      // canvas.style.height = "100%";
      // canvas.width = canvas.offsetWidth;
      // canvas.height = canvas.offsetHeight;
    },
  },
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
  display: inline-block;
  position: absolute;
  top: 150px;
  width: 176px;
  height: 200px;
  left: 100px;
  background-color: rgb(8, 244, 244);
}
.select-catalog-photo img {
  position: absolute;
  left: 0;
  top: 0;
  width: 176px;
  height: 200px;
  background-color: rgb(8, 244, 244);
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
</style>
