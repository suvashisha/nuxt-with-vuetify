<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>

        <v-card-text>
          <h2 class="text-h6 primary--text">
            Magento Forests
          </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam recusandae voluptatibus necessitatibus vel laudantium hic nisi esse dolorum at quidem, commodi pariatur et, quos odio in dolores sunt vitae. Possimus?
          Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
        </v-card-text>

        <v-card-title>
          <v-rating
            :value="4"
            dense
            color="orange"
            background-color="orange"
            hover
            class="mr-2"
          ></v-rating>
          <span class="primary--text text-subtitle-2">64 Reviews</span>
        </v-card-title>

        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <v-btn>See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>
<script>
export default {
  name: 'AboutPage',
  head() {
    return {
      title: "Aboutページ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "これはAboutページです。",
        },
      ],
    };
  },
}
</script>
