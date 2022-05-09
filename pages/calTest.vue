<template>
 <div class="container--fluid days-header">
            <v-sheet black class="mx-auto" width="839px">
                <v-slide-group multiple center-active show-arrows v-model="activeDay">
                    <template v-slot:prev>
                        <v-btn text @click="prev()"><v-icon>mdi-chevron-left</v-icon></v-btn>
                    </template>
                    <v-slide-item v-for="d in items" :key="d.id" v-slot:default="{ active, toggle }">
<v-card class="fix_cal_wh">
            <v-date-picker
            v-model="picker"
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
                    <template v-slot:next>
                       <v-btn text @click="next()"><v-icon>mdi-chevron-right</v-icon></v-btn>
                    </template>
                </v-slide-group>
                <v-tabs show-arrows="true" v-model="activeDay" height="5">
                    <v-tab-item v-for="item in items" :key="item.id">{{item.name}}</v-tab-item>
                </v-tabs>
            </v-sheet>
             </div>
</template>

<script>
export default {
  name: "cardTest",
  data() {
        return {
            items: [
                {name: new Date(new Date().setMonth(new Date().getMonth() - 2))
        .toISOString()
        .substr(0, 7), id: 1},
                {name: new Date(new Date().setMonth(new Date().getMonth() - 1))
        .toISOString()
        .substr(0, 7), id: 2},
                {picker: 'Wednesday', id: 3},
                {name: 'Thursday', id: 4},
                {name: 'Friday', id: 5}
            ],
            activeDay: 2,
        }
    },
    methods: {
        prev() {
            if (this.activeDay === 0) return
            this.activeDay = this.activeDay - 1
        },
        next() {
            this.activeDay = this.activeDay + 1
        },
        setActive(id) {
            this.activeDay = this.items.findIndex(d => d.id===id)
        },
        getTitleMonthFormat(str) {
      if (str === "") return str;
      let m = str.substr(5, 2);
      return m;
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      this.text = `${year}${month}${day}`;
      return;
    },
      }

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


