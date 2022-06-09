<template>
  <div class="full-screen">
    <div class="text">gjkjj</div>
    <div class="main-panel">
      <div id="wrapper" ref='wrapper' :class='wapperClass' @click="clickToExpand" >
        <div id="title-area">
          RECOMMENDATION
          <v-icon id="arrow" class="rotate" large>
            mdi-chevron-up
          </v-icon>
        </div>
        <div id="image-list">
          <v-row>
            <v-col
              v-for="card in cards"
              :key="card.id"
              class="d-flex child-flex mx-5"
              cols="3"
            >
              <v-img
                :src="card.src"
                height="100"
                width="200"
              >
              </v-img>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpaned: false,
      cards: [
        { src: "https://picsum.photos/500/300?image=15" },
        { src: "https://picsum.photos/500/300?image=20" },
        { src: "https://picsum.photos/500/300?image=25" },
        { src: "https://picsum.photos/500/300?image=30" },
        { src: "https://picsum.photos/500/300?image=35" },
        { src: "https://picsum.photos/500/300?image=40" },
        { src: "https://picsum.photos/500/300?image=45" },
        { src: "https://picsum.photos/500/300?image=50" },
        { src: "https://picsum.photos/500/300?image=55" },
      ],
    };
  },
  // mounted() {
  //   this.clickToExpand();
  // },
  computed: {
    wapperClass() {
      return {
        expanded: this.isExpaned
      }
    }
  },
  methods: {
    clickToExpand() {
      // //document.getElementById("arrow").toggle("down");
      // document.getElementById("arrow").classList.toggle("down");
      this.isExpaned = !this.isExpaned;
    },
  },
};
</script>

<style scoped>
.full-screen {
  display: block;
  position: fixed;
  width: 50%;
  height: 800px;
  left: 300px;
  background-color: lightblue !important;
}
.text {
  display: block;
  position: absolute;
  top: 400px;
  left: 400px;
}
.main-panel {
  display: block;
  position: absolute;
  top: 150px;
  left: 30px;
  width: 550px;
  height: 400px;
  background-color: black;
}
#wrapper {
  /* position: fixed; */
  position: absolute;
  display: inline-block;
  background: gray;
  color: #fff;
  /* top: calc(100% - 80px); */
  top: 350px;
  left: 20px;
  right: 0;
  width: 500px;
  transition: top 250ms ease-in-out;
}

#wrapper.expanded {
  top: 10px;
}

#title {
  text-align: left;
  border-bottom: 1px solid white;
}

#image-list {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
}

.entry {
  padding: 5px;
}

/* .rotate {
    -moz-transition: all .5s linear;
    -webkit-transition: all .5s linear;
    transition: all .5s linear;
} */
.rotate.down {
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
</style>
