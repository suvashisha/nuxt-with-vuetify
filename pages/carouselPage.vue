<template>
<v-container>
  <div>{{ picker }}</div>
  <v-carousel height="400" hide-delimiters>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <div class="main">
            <v-date-picker
              v-model="picker"
              :first-day-of-week="1"
              color="green lighten-1"
              header-color="theme--dark"
              locale="ja-jp"
              :day-format="(date) => new Date(date).getDate()"
              :month-format="
                (timestamp) => new Date(timestamp.date).getMonth() + 1 + ' /'
              "
              :title-date-format="getTitleDateFormat"
            ></v-date-picker>
            <v-date-picker
              v-model="picker"
              :first-day-of-week="1"
              color="green lighten-1"
              header-color="theme--dark"
              locale="ja-jp"
              :day-format="(date) => new Date(date).getDate()"
              :month-format="
                (timestamp) => new Date(timestamp.date).getMonth() + 1 + ' /'
              "
              :title-date-format="getTitleDateFormat"
            ></v-date-picker>
            <v-date-picker
              v-model="picker"
              :first-day-of-week="1"
              color="green lighten-1"
              header-color="theme--dark"
              locale="ja-jp"
              :day-format="(date) => new Date(date).getDate()"
              :month-format="
                (timestamp) => new Date(timestamp.date).getMonth() + 1 + ' /'
              "
              :title-date-format="getTitleDateFormat"
            ></v-date-picker>
            <v-date-picker
              v-model="picker"
              :first-day-of-week="1"
              color="green lighten-1"
              header-color="theme--dark"
              locale="ja-jp"
              :day-format="(date) => new Date(date).getDate()"
              :month-format="
                (timestamp) => new Date(timestamp.date).getMonth() + 1 + ' /'
              "
              :title-date-format="getTitleDateFormat"
            ></v-date-picker>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: "carouselPage",
  data() {
    return {
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  methods: {
    getTitleDateFormat(isoDate) {
      console.log("getTitleDateFormat: " + isoDate);
      return new Date().toISOString().substr(5, 2);
    },
  },
};
</script>



<style scoped>
>>> .main {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
}
>>> .v-window__next,
>>> .v-window__prev {
  top: 0%;
  height: 400px;
  border-top-left-radius: 0%;
  border-top-right-radius: 0%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 0%;
  margin: 0%;
}
>>> .v-window__next .v-btn,
>>> .v-window__prev .v-btn {
  top: calc(50% - 20px);
}
>>> .v-date-picker-header {
  display: none;
}
>>> .v-date-picker-title__date {
  font-size: 14px;
}

>>> .v-picker__title {
  background: #424242;
}
>>> .v-date-picker-title {
  width: 39px;
  align-items: center;
}
>>> .v-picker__title {
  padding: 2px 0 0 2px;
}
>>> .v-date-picker-table {
  padding: 0px;
}

>>> .v-date-picker-title,
>>> .v-date-picker-table--date th:nth-child(1),
>>> .v-date-picker-table--date td:nth-child(1) {
  background-color: lightgray;
}
</style>
