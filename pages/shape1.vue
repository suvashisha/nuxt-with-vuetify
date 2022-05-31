<template>
  <div class="full-screen">
    <v-divider dark mt-5 inset>jhhh</v-divider>
    <div class="metaball-area">
      <div class="line-vertical top arrow-up"></div>
      <div class="line-vertical down arrow-down"></div>
      <div class="line-horizontal left arrow-left"></div>
      <div class="line-horizontal right arrow-right"></div>
      <canvas id="canvas" class="not-blured-wrapper">
        <!-- <div class="not-blured-circle"></div> -->
      </canvas>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    createMetaball() {
      let canvas = document.querySelector("#canvas");
      let context = canvas.getContext('2d');

      // context.beginPath();
      // context.arc(50, 60, 40, 0, Math.PI * 2, true);
      // context.strokeStyle = "deepskyblue";
      // context.lineWidth = 5;
      // context.stroke();

      // context.beginPath();
      // context.arc(170, 80, 40, 0, Math.PI * 2, true);
      // context.fillStyle = "lightskyblue";
      // context.fill();
const THRESHOLD = 10;


      context.beginPath();
      context.filter = 'blur(10px)';
      context.ellipse(100, 50, 50, 25, 0, 0, Math.PI * 2);
      context.fillStyle = "rgba(255, 0, 0, 0.5)";
      context.fill();
      // context.strokeStyle = "deepskyblue";
      // context.lineWidth = 5;
      // context.stroke();

var src = context.getImageData(0, 0, canvas.width, canvas.height);
      var dst = context.createImageData(canvas.width, canvas.height);
//       // debugger;
//       for (var i = 0; i < src.data.length; i=i+4) {
//         console.log(src.data[i]);
//             var y = ~~(255 * src.data[i] + 0 * src.data[i + 1] + 0 * src.data[i + 2]);
//             var ret = (y > THRESHOLD) ? 255 : 0;
//             dst.data[i] = dst.data[i+1] = dst.data[i+2] = ret;
//             dst.data[i+3] = src.data[i+3];
//         }
// console.log(dst);
//         context.putImageData(dst, 20, 50);

      context.filter = 'none';
 let width = canvas.width;
   let height = canvas.height;
   let imageData = context.getImageData(0, 0, width, height);
// The width index is output position.
    let w2 = width / 2;

    // Run through the image.
  // The height of the image.
    for (let y = 0; y < height; y++) {
	  // *4 for 4 ints per pixel.
	  // This is an input index.
        let inpos = y * width * 4;
	  // This is an output index.
        let outpos = inpos + w2 * 4
	  // The width of the image.
        for (let x = 0; x < w2; x++) {
		// Get the pixel of the red channel.
            let r = imageData.data[inpos++]
		// Get the pixel of the green channel.
            let g = imageData.data[inpos++]
		// Get the pixel of the blue channel.
            let b = imageData.data[inpos++]
		// Get the pixel of the alpha channel.
            let a = imageData.data[inpos++]
            // Transform RGB color space to gray scale.
			//let gray =  (0.299 * r + 0.587 * g + 0.114 * b)
      let gray =  (0.299 * r + 0.587 * g + 0.114 * b)
            // This is our threshold. You can change it.
            if ( gray > 120 )
			{
			// Set the pixel is white.
	            imageData.data[outpos++] = 255;
    	            imageData.data[outpos++] = 255;
        	      imageData.data[outpos++] = 255;
            	imageData.data[outpos++] = a;
			}
			else
			{
			// Set the pixel is black.
            	imageData.data[outpos++] = 255;
            	imageData.data[outpos++] = 0;
	            imageData.data[outpos++] = 0;
    	        imageData.data[outpos++] = a;
			}
        } // The closing "The width of the image".
    } // The closing "The height of the image".

    // Put pixel data on canvas.
    imageData.data.filter = 'none';
    context.putImageData(imageData, 0, 0);
    },
  },
  mounted() {
    this.createMetaball();
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
.line-horizontal {
  height: 2px; /* line width */
  width: 85px; /* line length */
  margin-top: 100px;
}
/* vertical arrows */
.line-vertical {
  width: 2px; /* line-width */
  height: 85px; /* line length */
  margin-left: 100px;
  float: left;
}
.top {
  margin-top: 10px;
}
.down {
  margin-top: 105px;
}
.left {
  margin-left: 10px;
}
.right {
  margin-left: 105px;
}
/* common arrow styles */
.line-vertical,
.line-horizontal {
  position: absolute;
  background: #aaa;
}
.arrow-up:after,
.arrow-down:before,
.arrow-left:after,
.arrow-right:before {
  content: "";
  position: absolute;
  width: 0px;
  height: 0px;
  border: 5px solid transparent;
}

/* vertical arrows */
.arrow-up:after,
.arrow-down:before {
  left: -4px;
}
.arrow-up:after {
  top: -15px;
  border-bottom: 15px solid #aaa;
}
.arrow-down:before {
  bottom: -15px;
  border-top: 15px solid #aaa;
}

/* horizontal arrows */
.arrow-left:after,
.arrow-right:before {
  top: -4px;
}
.arrow-left:after {
  left: -15px;
  border-right: 15px solid #aaa;
}
.arrow-right:before {
  right: -15px;
  border-left: 15px solid #aaa;
}

.not-blured-wrapper {
  position: initial;
  width: 160px;
  height: 160px;
  /* top: 20px;
  left: 20px; */
  margin: 20px;
  border-radius: 20px;
  background-color: #ffffff;
}
.not-blured-circle {
  position: absolute;
  border-radius: 100%;
  background-color: #ff8000;
  /* top: 45vh; */
  /* left: 45vw; */
  width: 5vmax;
  height: 5vmax;
  display: inline-block;
}
</style>
