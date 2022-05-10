<template>
  <div>
    <div class="d-flex justify-center">
      <v-hover v-slot="{ hover }">
        <v-card class="ma-4 pa-4" width="300">
          <p class="mb-4">Sign up to get started</p>
          <v-expand-transition>
            <div v-if="hover"><v-btn color="primary" dark>Sign up</v-btn></div>
          </v-expand-transition>
        </v-card>
      </v-hover>
    </div>
    <div>
      {{ this.$moment(today,'YYYY-MM-DD').format("YYYY /MM /DD") }}</div>
    <v-sheet black>
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="n in 11" :key="n">
          <v-card class="fix_cal_wh">
            <v-date-picker
              v-model="$data['picker' + n]"
              :first-day-of-week="0"
              header-color="theme--dark"
              color="cyan accent-2"
              locale="ja-jp"
              :day-format="(date) => new Date(date).getDate()"
              :title-date-format="getTitleMonthFormat"
              height="438px"
              width="439px"
            ></v-date-picker>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
      <div>
    <v-divider></v-divider>
  </div>
  </div>
</template>

<script>
export default {
  name: "sample123",
  data() {
    return {
      today: new Date().toISOString().substr(0, 10),
      picker1: new Date(new Date().setMonth(new Date().getMonth() - 2))
        .toISOString()
        .substr(0, 7),
      picker2: new Date(new Date().setMonth(new Date().getMonth() - 1))
        .toISOString()
        .substr(0, 7),
      picker3: new Date().toISOString().substr(0, 10),
      picker4: new Date(new Date().setMonth(new Date().getMonth() + 1))
        .toISOString()
        .substr(0, 7),
      picker5: new Date(new Date().setMonth(new Date().getMonth() + 2))
        .toISOString()
        .substr(0, 7),
      picker6: new Date(new Date().setMonth(new Date().getMonth() + 3))
        .toISOString()
        .substr(0, 7),
        picker7: new Date(new Date().setMonth(new Date().getMonth() + 4))
        .toISOString()
        .substr(0, 7),
        picker8: new Date(new Date().setMonth(new Date().getMonth() + 5))
        .toISOString()
        .substr(0, 7),
        picker9: new Date(new Date().setMonth(new Date().getMonth() + 6))
        .toISOString()
        .substr(0, 7),
        picker10: new Date(new Date().setMonth(new Date().getMonth() + 7))
        .toISOString()
        .substr(0, 7),
        picker11: new Date(new Date().setMonth(new Date().getMonth() + 8))
        .toISOString()
        .substr(0, 7),
    };
  },
  methods: {
    getTitleMonthFormat(date) {
      if (date === "") return date;
      let m = date.substr(5, 2).replace(/^0+/, '');
      return m;
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      this.text = `${year}${month}${day}`;
      return;
    },
  },
};
</script>

<style scoped>
/* >>> div.main_container {
  width: 684px !important;
} */

>>> .v-btn::before {
  background-color: transparent;
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

/* >>> .v-picker__title {
  background: #424242;
} */
>>> .v-date-picker-title {
  width: 41.5px;
  align-items: center;
}

>>> .v-date-picker-table {
  /* padding: 0px; */
  /* height: 226px; */
  height: 356px;
}

/* >>> .v-date-picker-title,
>>> .v-date-picker-table--date th:nth-child(1),
>>> .v-date-picker-table--date td:nth-child(1) {
  background-color: lightgray;
} */

>>> .v-date-picker-table table {
  border-spacing: 0px !important;
}
>>> .v-date-picker-title {
  pointer-events: none;
}
>>> .v-date-picker-title::before,
>>> .v-picker__body::before {
  height: 438px;
  width: 70px;
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1E1E1E;
}
>>> .v-picker__title,
>>> .v-picker__body {
  background-color: black;
}
>>> .v-picker__body {
  border-radius: 0px !important;
}
.fix_cal_wh {
  width: 439px;
  height: 438px;
}
.v-picker {
  font-size: 2.2em;
}
.v-divider {
    border-color: #FFFFFF !important;
    margin: 25px 25px 0 25px;
}
>>> .v-date-picker-table th,
>>> .v-date-picker-table .v-btn {
  font-size: 15px !important;
}
>>> .v-date-picker-title__year {
  font-size: 16px !important;
}
>>> .v-date-picker-title__date {
  font-size: 18px !important;
}
>>> .v-slide-group__next,
>>> .v-slide-group__prev {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin: 250px 15px 0 15px;
  background-color: #3d3d3d;
}
>>> .v-sheet {
  background-color: black;
}
</style>
