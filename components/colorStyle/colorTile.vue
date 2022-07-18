<template>
  <div class="color-tile-area">
    <div :style="buttonStyle" :class="colorTileClass" @click="colorSelect">
      {{ colorLabel }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colorLabel: {
      type: String,
      default: "",
    },
    btnBgColor: {
      type: String,
      default: "",
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    buttonStyle: {
      get() {
        return `background-color: ${this.btnBgColor};`;
      },
    },
    colorTileClass() {
      return {
        "color-tile": true,
        selected: this.isSelected,
      };
    },
  },
  methods: {
    colorSelect() {
      this.$emit('action-color-select', this.isSelected);
      //this.isSelected = !this.isSelected;
    },
  },
};
</script>

<style scoped>
.color-tile-area {
  position: relative;
  left: 70px;
  text-align: center;

  /* center */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /* background-color: #18ae29; */
}
.color-tile {
  position: relative;
  width: 46px;
  height: 46px;
  text-align: center;
  font: bold 16px Noto Sans JP;
  color: #ffffff;
  margin-right: 10px;

  /* center */
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.color-tile.selected {
  outline: #00b2b2 solid 2px;
}
</style>
