<template>
  <v-sheet>
    <v-slide-group multiple show-arrows>
      <v-slide-item v-for="n in 6" :key="n">
        <!-- <v-card style="margin: 0 0 0 0; width: 320px; height: 240px;"> -->
         <v-card>
          <v-date-picker
              v-model="$data['picker' + n]"
              :first-day-of-week="1"
              color="green lighten-1"
              header-color="theme--dark"
              locale="ja-jp"
              :day-format="(date) => new Date(date).getDate()"
              :title-date-format="getTitleDateFormat"
            ></v-date-picker>
          <v-card-text class="text--primary">
           {{ n }}
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: "sample123",
  data() {
    return {
      // picker1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      //   picker2: '2022-06-01',

        picker1: new Date().toISOString().substr(0, 10),
        picker2: '2022-06-29'
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
  width: 41.5px;
  align-items: center;
}
>>> .v-picker__title {
  padding: 0 0 0 0;
}
>>> .v-date-picker-table {
  padding: 0px;
  height: 226px;
}

>>> .v-date-picker-title,
>>> .v-date-picker-table--date th:nth-child(1),
>>> .v-date-picker-table--date td:nth-child(1) {
  background-color: lightgray;
}

>>> .v-date-picker-table table{
  border-spacing: 0px !important;
}

</style>
