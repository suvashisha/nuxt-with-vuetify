<template>
  <div id="wrapper">
    <div id="image-list">
      <v-row>
      <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
</template>

<script>
export default {
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
  top: 250px;
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
  padding: 15px;
}
</style>
