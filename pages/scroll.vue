<template>
  <div class="full-screen">
    <div class="navbar" id="scroll" @mousewheel="scrollY">
      <div class="logo"><a href="#">logo</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  // mounted() {
  //   this.clickToExpand();
  // },
  methods: {
    scrollY(event) {
      let delta = 0;

      // if (!event) event = window.event;

      // normalize the delta
      if (event.wheelDelta) {
        // IE and Opera
        delta = event.wheelDelta / 60;
      } else if (event.detail) {
        // W3C
        delta = -event.detail / 2;
      }

      let currPos = document.getElementById("scroll").offsetTop;
      console.log(currPos);

      //calculating the next position of the object
      currPos = parseInt(currPos) - delta;
      if (currPos < 10) {
        currPos = 10;
      } else if (currPos > 400) {
        currPos = 400;
      }
      //moving the position of the object
      document.getElementById("scroll").style.top = currPos + "px";
    },
    scrollX(event) {
      let scale = 1;
      let el = this.$refs.scroll_container;
      //let el = document.getElementById("scroll_container");
      // debugger;
      console.log("deltaX" + event.deltaY);
      //       if (event.deltaY < 10) {
      //     // Zoom in
      // scale += event.deltaY + 400;

      //   }
      // else {
      //     // Zoom out
      //     // scale += event.deltaX - 400;
      //     // scale = 10;
      //     scale += event.deltaY - 400;

      //   }
      if (scale < 10) {
        // Zoom in
        //scale += event.deltaY + 400;
        scale = 400;
      } else if (scale === 400) {
        // Zoom out
        // scale -= event.deltaY - scale;
        scale = 10;
      }

      // Restrict scale
      // scale = Math.min(Math.max(400, scale), 10);

      // Apply scale transform
      el.style.top = `${scale}px`;
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
.navbar {
  display: block;
  position: absolute;
  background: #442341;
  font-family: Arial;
  top: 10px;
  left: 0;
  width: 800px;
}
.logo a {
  float: left;
  padding: 7.5px 26px;
  color: #fa5545;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: -0.1em;
  transition: all 0.5s ease-in-out;
}
</style>
