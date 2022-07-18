<template>
    <div class="color-group-tile-area">
      <ColorTile
        v-for="(colorTile, index) in colorTiles"
        :key="'colorTile_' + index"
        :btn-bg-color="colorTile.bgColor"
        :is-group="isGroup"
        :is-group-selected="isGroupSelected === index"
        @action-color-group-select="actionColorGroupSelect(index)"
      />
    </div>
</template>

<script>
export default {
  props: {
    btnBgColor: {
      type: String,
      default: "",
    },
    isGroupSelected: {
      type: Boolean,
      default: false,
    },
    colorTiles: {
      type: Array,
      default: null,
    },
    isGroup: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    actionColorGroupSelect(targetIndex) {
      console.log("actionColorGroupSelectgroup");
      this.isGroupSelected = targetIndex;
      this.$emit("action-color-group-select", this.isGroupSelected);
    }
  }
};
</script>

<style scoped>
.color-group-tile-area {
  position: relative;
  left: 0px;
  text-align: center;

  /* center */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /* background-color: lightgray; */
    width: 100%;
  height: 50px;
}
</style>
