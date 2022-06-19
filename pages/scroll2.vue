<template>
  <div class="full-screen">
    <div class="header" @click="scrollY"></div>
    <div :class="navbarClass">
      <div class="logo"><a href="#">logo</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerScrollDown: false
    };
  },
computed: {
        navbarClass() {
          return {
          'navbar': true,
          top: this.headerScrollDown
          }
        }
    },
  methods: {
    scrollY() {
      this.headerScrollDown = !this.headerScrollDown;

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
.header {
  display: block;
  position: absolute;
  background: blue;
  top: 10px;
  left: 0;
  width: 800px;
  height: 40px;

}
.navbar {
  display: block;
  position: absolute;
  background: #442341;
  font-family: Arial;
  top: 40px;
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
.top {
  top: 400px;
}
</style>
