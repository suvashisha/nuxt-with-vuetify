<template>
<div class="full-screen">
  <div class="text">gjkjj</div>
  <div id="wrapper">
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
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { src: 'https://picsum.photos/500/300?image=15' },
        { src: 'https://picsum.photos/500/300?image=20' },
        { src: 'https://picsum.photos/500/300?image=25' },
        { src: 'https://picsum.photos/500/300?image=30' },
        { src: 'https://picsum.photos/500/300?image=35' },
        { src: 'https://picsum.photos/500/300?image=40' },
        { src: 'https://picsum.photos/500/300?image=45' },
        { src: 'https://picsum.photos/500/300?image=50' },
        { src: 'https://picsum.photos/500/300?image=55' },
      ],
    };
  },
  mounted() {
    this.click();
  },
  methods: {
    click() {
      const title = document.getElementById("title");
      const wrapper = document.getElementById("wrapper");

      wrapper.addEventListener("click", () => {
        wrapper.classList.toggle("expanded");
      });
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
#wrapper {
  position: fixed;
  background: gray;
  color: #fff;
  top: calc(100% - 80px);
  left: 300px;
  right: 0;
  border-radius: 12px 12px 0 0;
  width: 50%;
  transition: top 250ms ease-in-out;
}

#wrapper.expanded {
  top: 310px;
}

#title {
  text-align: center;
  padding: 15px;
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
</style>
