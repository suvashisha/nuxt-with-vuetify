<template>
  <div class="full-screen">
    <div class="text">gjkjj</div>
    <div class="main-panel">
      <div id="wrapper">
        <div id="title-area">
          RECOMMENDATION
          <v-icon id="arrow" class="rotate" @click="clickToExpand" large>
            mdi-chevron-up
          </v-icon>
        </div>
        <div id="image-list">
          <v-row>
            <v-col
              v-for="card in cards"
              :key="card.id"
              class="d-flex child-flex"
              cols="4"
            >
              <v-img
                :src="card.src"
                aspect-ratio="1"
                class="grey lighten-2"
                height="100"
                width="100"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
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
  methods: {
    clickToExpand() {
      const title = document.getElementById("title");
      const wrapper = document.getElementById("wrapper");

      // title.addEventListener("click", () => {
      //   wrapper.classList.toggle("expanded");
      // });
      wrapper.classList.toggle("expanded");
      //document.getElementById("arrow").toggle("down");
      document.getElementById("arrow").classList.toggle("down");
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
  top: 500px;
  left: 30px;
  width: 550px;
  height: 200px;
  background-color: black;
}
#wrapper {
  position: fixed;
  display: inline-block;
  background: gray;
  color: #fff;
  /* top: calc(100% - 80px); */
  top: 600px;
  left: 300px;
  right: 0;
  width: 500px;
  transition: top 250ms ease-in-out;
}

#wrapper.expanded {
  top: 270px;
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
