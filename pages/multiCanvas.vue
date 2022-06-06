<template>
  <div class="full-screen">
    <div class="metaball-area">
      <canvas id="canvas1" class="canvas-wrapper" width="180px" height="180px">
      </canvas>
      <canvas id="canvas2" class="canvas-wrapper" width="180px" height="180px">
      </canvas>
      <canvas id="canvas3" class="canvas-wrapper" width="180px" height="180px">
      </canvas>
      <canvas id="canvas4" class="canvas-wrapper" width="180px" height="180px">
      </canvas>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.createMetaball();
  },
  methods: {
    createMetaball() {
      let canvas1 = document.querySelector("#canvas1");
      let ctx1 = canvas1.getContext("2d");
      const blur = 10;

      ctx1.beginPath();
      ctx1.filter = "blur(" + blur + "px)";
      ctx1.ellipse(80, 80, 25, 25, 0, 0, Math.PI * 2, false);
      ctx1.fillStyle = "rgba(255, 147, 0, 255)";
      ctx1.fill();

      this.convert(1, ctx1, canvas1);

      let canvas2 = document.querySelector("#canvas2");
      let ctx2 = canvas2.getContext("2d");
      ctx2.beginPath();
      ctx2.filter = "blur(" + blur + "px)";
      ctx2.ellipse(110, 80, 25, 25, 0, 0, Math.PI * 2, false);
      ctx2.fillStyle = "rgba(0, 147, 0, 255)";
      ctx2.fill();

      this.convert(2, ctx2, canvas2);

      let canvas3 = document.querySelector("#canvas3");
      let ctx3 = canvas3.getContext("2d");
      ctx3.beginPath();
      ctx3.filter = "blur(" + blur + "px)";
      ctx3.ellipse(140, 80, 25, 25, 0, 0, Math.PI * 2, false);
      ctx3.fillStyle = "rgba(34, 147, 255, 255)";
      ctx3.fill();

      this.convert(3, ctx3, canvas3);

      let img1 = new Image();
      img1.src = canvas1.toDataURL("image/png");
      let img2 = new Image();
      img2.src = canvas2.toDataURL("image/png");
      let img3 = new Image();
      img3.src = canvas3.toDataURL("image/png");

      let outputCanvas = document.querySelector("#canvas4");
      let outputCtx = outputCanvas.getContext("2d");
      img1.onload=function(){
      outputCtx.drawImage(img1, 0, 0);}
      img2.onload=function(){
      outputCtx.drawImage(img2, 0, 0);}
      img3.onload=function(){
      outputCtx.drawImage(img3, 0, 0);}

    },
    convert(layer, ctx, canvas) {
      const THRESHOLD = 128 * 0.2;
      let src = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let dst = ctx.createImageData(canvas.width, canvas.height);
      for (let i = 0; i < src.data.length; i += 4) {
        let y =
          0.2126 * src.data[i] +
          0.7152 * src.data[i + 1] +
          0.0722 * src.data[i + 2];
        y = parseInt(y, 10);
        if (y > THRESHOLD) {
          if (layer === 1) {
            dst.data[i] = 255;
            dst.data[i + 1] = 147;
            dst.data[i + 2] = 0;
            dst.data[i + 3] = 255;
          } else if (layer === 2) {
            dst.data[i] = 0;
            dst.data[i + 1] = 147;
            dst.data[i + 2] = 0;
            dst.data[i + 3] = 255;
          } else if (layer === 3) {
            dst.data[i] = 34;
            dst.data[i + 1] = 147;
            dst.data[i + 2] = 255;
            dst.data[i + 3] = 255;
          }
        }
      }
      ctx.putImageData(dst, 0, 0);
    },
  },
};
</script>

<style scoped>
.full-screen {
  display: block;
  position: fixed;
  width: 800px;
  height: 800px;
  background-color: lightblue !important;
}
.metaball-area {
  display: inline-block;
  position: absolute;
  height: 200px;
  width: 200px;
  left: 50px;
  top: 20px;
  border-radius: 20px;
  background-color: antiquewhite;
}

.canvas-wrapper {
  position: fixed;
  margin: 10px;
  border-radius: 20px;
  background-color: #ffffff;
}
</style>
