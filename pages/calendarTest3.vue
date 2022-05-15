<template>
  <div>
    <div class="d-flex justify-center">
        <v-card @click="goToCurrentMonth()" class="date-panel ma-4 pa-4 justify-center" width="200">
          <span class='today-text'>Today</span>
          <span class='today-date'>{{ this.$moment(today,'YYYY-MM-DD').format("YYYY /MM /DD") }} </span>
        </v-card>
    </div>
    <v-sheet black>
      <div>
          <div class='slide-prev' @click="slidePrev()"><v-icon large>mdi-chevron-left</v-icon></div>
      </div>
      <div class='cal-container'>
        <div id="slide" class='slide-container'>
          <div class='panel' v-for="n in 25" :key="n">
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
                readonly
              ></v-date-picker>
            </v-card>
          </div>
        </div>
      </div>
      <div text @click="slideNext()"><v-icon>mdi-chevron-right</v-icon></div>
    </v-sheet>
      <div>
    <v-divider></v-divider>
  </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",
    beforeMount() {
      this.goToCurrentMonth()
    },
  data() {
    return {
      today: new Date().toISOString().substr(0, 10),
      picker1: new Date(new Date().setMonth(new Date().getMonth() - 12))
        .toISOString()
        .substr(0, 7),
      picker2: new Date(new Date().setMonth(new Date().getMonth() - 11))
        .toISOString()
        .substr(0, 7),
      picker3: new Date(new Date().setMonth(new Date().getMonth() - 10))
        .toISOString()
        .substr(0, 7),
      picker4: new Date(new Date().setMonth(new Date().getMonth() - 9))
        .toISOString()
        .substr(0, 7),
      picker5: new Date(new Date().setMonth(new Date().getMonth() - 8))
        .toISOString()
        .substr(0, 7),
      picker6: new Date(new Date().setMonth(new Date().getMonth() - 7))
        .toISOString()
        .substr(0, 7),
        picker7: new Date(new Date().setMonth(new Date().getMonth() - 6))
        .toISOString()
        .substr(0, 7),
        picker8: new Date(new Date().setMonth(new Date().getMonth() - 5))
        .toISOString()
        .substr(0, 7),
        picker9: new Date(new Date().setMonth(new Date().getMonth() - 4))
        .toISOString()
        .substr(0, 7),
        picker10: new Date(new Date().setMonth(new Date().getMonth() - 3))
        .toISOString()
        .substr(0, 7),
        picker11: new Date(new Date().setMonth(new Date().getMonth() - 2))
        .toISOString()
        .substr(0, 7),
        picker12: new Date(new Date().setMonth(new Date().getMonth() - 1))
        .toISOString()
        .substr(0, 7),
        picker13: new Date().toISOString().substr(0, 10),
        picker14: new Date(new Date().setMonth(new Date().getMonth() + 1))
        .toISOString()
        .substr(0, 7),
        picker15: new Date(new Date().setMonth(new Date().getMonth() + 2))
        .toISOString()
        .substr(0, 7),
        picker16: new Date(new Date().setMonth(new Date().getMonth() + 3))
        .toISOString()
        .substr(0, 7),
        picker17: new Date(new Date().setMonth(new Date().getMonth() + 4))
        .toISOString()
        .substr(0, 7),
        picker18: new Date(new Date().setMonth(new Date().getMonth() + 5))
        .toISOString()
        .substr(0, 7),
        picker19: new Date(new Date().setMonth(new Date().getMonth() + 6))
        .toISOString()
        .substr(0, 7),
        picker20: new Date(new Date().setMonth(new Date().getMonth() + 7))
        .toISOString()
        .substr(0, 7),
        picker21: new Date(new Date().setMonth(new Date().getMonth() + 8))
        .toISOString()
        .substr(0, 7),
        picker22: new Date(new Date().setMonth(new Date().getMonth() + 9))
        .toISOString()
        .substr(0, 7),
        picker23: new Date(new Date().setMonth(new Date().getMonth() + 10))
        .toISOString()
        .substr(0, 7),
        picker24: new Date(new Date().setMonth(new Date().getMonth() + 11))
        .toISOString()
        .substr(0, 7),
        picker25: new Date(new Date().setMonth(new Date().getMonth() + 12))
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
    goToCurrentMonth() {
      return document.getElementById('slide').scrollLeft = 489 * 12;
    },
    slidePrev() {
      document.getElementById('slide').scrollLeft -= 489 * 2;
    },
    slideNext() {
    document.getElementById('slide').scrollLeft += 489 * 2;
    },
    sideScroll(element,direction,speed,distance,step) {
    var scrollAmount = 0;
    var slideTimer = setInterval(function() {
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
  },
};
</script>

<style scoped>
/* >>> div.main_container {
  width: 684px !important;
} */
.slide-prev {
  align-items: center;
    display: flex;
    flex: 0 1 52px;
    justify-content: center;
    min-width: 52px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #3d3d3d;
    cursor: pointer;
}
.date-panel:hover {
background-color: aqua;
}
.date-panel {
  border-radius: 50px;
  text-align: center;
}
.slide-container {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
}

/* .panel {
  border: solid 1px #6c757d;
  padding: 10px;
  flex: none;
  width:700px;
} */
>>> .foo-class {
  width: 10225px;
}
>>> .foo-class-main {
  overflow-x: scroll;
}
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
