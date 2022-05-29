<template>
  <div class="full-screen">
    <v-divider dark mt-5 inset>jhhh</v-divider>
    <div class="metaball-area">
      <div class="line-vertical top arrow-up"></div>
      <div class="line-vertical down arrow-down"></div>
      <div class="line-horizontal left arrow-left"></div>
      <div class="line-horizontal right arrow-right"></div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
