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
        :is-selected="isSelected === index"
        :is-group="false"
        @action-color-select="actionColorSelect(index)"
      />
    </div>
    <div class="color-style-group-btn-area">
      <ColorGroupTile
        v-for="(colorGroupTile, index) in colorGroupTiles"
        :key="'colorGroupTile_' + index"
        :color-tiles="colorGroupTile.colorTiles"
        :btn-bg-color="colorTiles.bgColor"
        :is-group="true"
        :is-group-selected="isGroupSelected === index"
        @action-color-group-select="actionColorGroupSelect(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected: false,
      isGroupSelected: false,
      colorTiles: [
        { label: "wt", bgColor: "#9F98CF" },
        { label: "fg", bgColor: "#696969" },
        { label: "vs", bgColor: "#FF1493" },
        { label: "gh", bgColor: "#DF9DC3" },
        { label: "gh", bgColor: "#91A4B6" },
        { label: "hj", bgColor: "#ffbb33" },
        { label: "jh", bgColor: "#1188ff" },
        { label: "hj", bgColor: "#3399cc" },
      ],
      colorGroupTiles: [
        {
          colorTiles: [
            { bgColor: "#9f98cf" },
            { bgColor: "#a8a2d3" },
            { bgColor: "#b2acd8" },
            { bgColor: "#bbb6dd" },
            { bgColor: "#c5c1e2" },
            { bgColor: "#cfcbe7" },
            { bgColor: "#d8d5eb" },
            { bgColor: "#e2e0f0" },
            { bgColor: "#ebeaf5" },
            { bgColor: "#f5f4fa" },
          ],
        },
        {
          colorTiles: [
            { bgColor: "#696969" },
            { bgColor: "#75a375" },
            { bgColor: "#84ad84" },
            { bgColor: "#84ad84" },
            { bgColor: "#93b793" },
            { bgColor: "#a3c1a3" },
            { bgColor: "#b2ccb2" },
            { bgColor: "#c1d6c1" },
            { bgColor: "#d1e0d1" },
            { bgColor: "#e0eae0" },
          ],
        },
      ],
    };
  },
  methods: {
    actionColorSelect(targetIndex) {
      console.log("actionColorSelect");
      this.isSelected = targetIndex;
      console.log(this.isSelected);
    },
    actionColorGroupSelect(targetIndex) {
      console.log("actionColorGroupSelect");
      this.isGroupSelected = targetIndex;
      console.log(this.isGroupSelected);
    },
  },
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
  left: 70px;
  /* background-color: #05f2f6; */
}
/* color-style-group-btn-area */
.color-style-group-btn-area {
  display: inline-block;
  position: absolute;
  bottom: 140px;
  width: 100%;
  height: 50px;
  /* background-color: #05f2f6; */
}
</style>
