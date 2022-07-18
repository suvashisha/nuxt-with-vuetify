<template>
  <div>
    <div class="btn-ok-area">OK</div>
    <div class="btn-cancel-area">CANCEL</div>
    <div class="select-color-style-btn-area">
      <ColorTile
        v-for="(colorTile, index) in colorTiles"
        :key="'colorTile_' + index"
        :color-label="colorTile.label"
        :btn-bg-color="colorTile.bgColor"
        :is-selected="isSelected===index"
        @action-color-select="actionColorSelect(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false,
      colorTiles: [
        { label: "wt", bgColor: "#a151d6"},
        { label: "vs" , bgColor: "#FF1493" },
        { label: "fg" , bgColor: "#696969" },
        { label: "gh" , bgColor: "#DF9DC3" },
        { label: "gh" , bgColor: "#91A4B6" },
        { label: "hj" , bgColor: "#ffbb33" },
        { label: "jh" , bgColor: "#1188ff" },
        { label: "hj" , bgColor: "#3399cc" }
      ],
    };
  },
  methods: {
    actionColorSelect(targetIndex) {
      console.log("actionColorSelect");
      this.isSelected = targetIndex;
      console.log(this.isSelected);
    }
  }
};
</script>

<style scoped>
.btn-ok-area,
.btn-cancel-area {
  position: absolute;
  top: 200px;
  width: 100px;
  height: 40px;
  border-radius: 40px;
  background-color: #3d3d3d;
  text-align: center;
  font: bold 16px Noto Sans JP;
  color: #ffffff;
  /* center */
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-ok-area {
  right: 20px;
}
.btn-cancel-area {
  right: 140px;
}
.btn-ok-area:hover,
.btn-cancel-area:hover {
  background-color: #05f2f6;
  transition: background-color 0.3s;
}
/* select-color-style-btn-area */
.select-color-style-btn-area {
  display: inline-block;
  position: absolute;
  bottom: 200px;
  width: 100%;
  height: 50px;
  /* background-color: #05f2f6; */
}

.red {
  background-color: red;
}
</style>
