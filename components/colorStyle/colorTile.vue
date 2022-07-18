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
    isGroup: {
      type: Boolean,
      default: false,
    },
    isGroupSelected: {
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
      if (this.isGroup) {
        return {
          "color-group-tile": true,
          selected: this.isGroupSelected,
        };
      } else {
        return {
          "color-tile": true,
          selected: this.isSelected,
        };
      }
    },
  },
  methods: {
    colorSelect() {
      if (this.isGroup) {
        this.$emit("action-color-group-select", this.isGroupSelected);
      } else {
        this.$emit("action-color-select", this.isSelected);
      }

      //this.isSelected = !this.isSelected;
    },
  },
};
</script>

<style scoped>
.color-tile-area {
  position: relative;
  /* left: 70px; */
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
.color-tile.selected,
.color-group-tile.selected  {
  outline: #00b2b2 solid 2px;
}
.color-group-tile {
  position: relative;
  width: 46px;
  height: 46px;
  text-align: center;
  font: bold 16px Noto Sans JP;
  color: #ffffff;

  /* center */
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
