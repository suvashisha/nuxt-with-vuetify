<template>
  <v-app id="inspire">
    <v-layout row wrap class="ma-3">
      <v-flex xs12 sm4>
        <v-card class="py-3" :dark="dark">
          <v-layout row :wrap="vertical">
            <v-flex xs12>
              <v-date-picker
                id="picker1"
                ref="picker1"
                v-model="dates"
                :events="events"
                :picker-date.sync="pickerPage1"
                no-title
                locale="ja-jp"
                :day-format="(date) => new Date(date).getDate()"
              :month-format="
                (timestamp) => new Date(timestamp.date).getMonth() + 1 + ' /'
              "
              :title-date-format="getTitleDateFormat"
              ></v-date-picker>
            </v-flex>
            <v-flex xs12>
              <v-date-picker
                id="picker2"
                ref="picker2"
                v-model="dates"
                :events="events"
                :picker-date.sync="pickerPage2"
                no-title
                locale="ja-jp"
                :day-format="(date) => new Date(date).getDate()"
              :month-format="
                (timestamp) => new Date(timestamp.date).getMonth() + 1 + ' /'
              "
              :title-date-format="getTitleDateFormat"
              ></v-date-picker>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>

      <!-- <v-flex xs12 sm6 class="pa-3">
        <div class="title">{{ dates }}</div>
        <v-switch label="Dark" v-model="dark"></v-switch>
        <v-switch label="Shade" v-model="shadeAccent"></v-switch>
        <v-btn @click="setDefaultDates()" color="primary">Default Dates</v-btn>
        {{ valid }}
      </v-flex> -->
    </v-layout>
  </v-app>
</template>

<script>
export default {
  name: "mulCal",
  data: () => ({
    // dark: false,
    // vertical: false,
    // events: [],
    // eventColor: {},
    // dateRange: [],
    // dateRangePrevious: [],
    pickerPage1: null,
    pickerPage2: null,
    pickerPage1Adjusted: false,
    pickerPage2Adjusted: false,
    // shadeAccent: true,
  }),
  // computed: {
  //   dates: {
  //     get() {
  //       if (!this.dateRange.length) {
  //         this.dateRange = this.getDefaultDates();
  //         this.render();
  //       }
  //       return this.dateRange;
  //     },
  //     set(value) {
  //       if (value.length) {
  //         if (value.length == 2) {
  //           this.dateRange = value;
  //         } else {
  //           let difference = [];
  //           value.length == 1
  //             ? (difference = this.arrayDifference(
  //                 this.dateRangePrevious,
  //                 value
  //               ))
  //             : (difference = this.arrayDifference(value, this.dateRange));
  //           if (difference.length) {
  //             this.dateRange = difference;
  //           }
  //         }
  //       }
  //       this.render();
  //       this.dateRangePrevious = this.dateRange;
  //     },
  //   },
  //   valid: function () {
  //     return this.dates.length === 2;
  //   },
  // },

  methods: {
    // render() {
    //   this.events = this.getDateRange(this.dates);
    //   this.eventColor = this.buildEventColors(this.events);
    // },
    addDaysToDate(date, days) {
      d = new Date(date);
      d.setDate(d.getDate() + days);
      return d;
    },
    formatDate(date) {
      return date.toISOString().split("T")[0];
    },
    // buildEventColors(range) {
    //   let colors = {};
    //   for (let i = 0; i < range.length; i++) {
    //     let accentShade = "";
    //     this.shadeAccent
    //       ? this.dark
    //         ? (accentShade = "darken-2")
    //         : (accentShade = "lighten-2")
    //       : (accentShade = "");
    //     colors[range[i]] =
    //       "accent " + accentShade + " v-date-picker-table__event";
    //     if (i === 0) {
    //       colors[range[i]] += " v-date-picker-table__event--start";
    //     }
    //     if (i === range.length - 1) {
    //       colors[range[i]] += " v-date-picker-table__event--end";
    //     }
    //   }
    //   return colors;
    // },
    // getDateRange(dates) {
    //   let date1 = new Date(dates[0]);
    //   let date2 = new Date(dates[dates.length - 1]);
    //   let cur = new Date(Math.min(date1, date2)),
    //     range = [];
    //   while (cur <= Math.max(date1, date2)) {
    //     range.push(this.formatDate(new Date(cur)));
    //     cur.setDate(cur.getDate() + 1);
    //   }
    //   return range;
    // },
    // getDefaultDates() {
    //   let today = new Date();
    //   return [
    //     this.formatDate(today),
    //     this.formatDate(this.addDaysToDate(today, 1)),
    //   ];
    // },
    // setDefaultDates() {
    //   this.dateRange = this.getDefaultDates();
    //   this.render();
    //   this.bringDateIntoView();
    // },
    // clearDates() {
    //   this.dateRange = [];
    // },
    // arrayDifference(array1, array2) {
    //   return array1.filter(function (i) {
    //     return array2.indexOf(i) < 0;
    //   });
    // },
    parsePickerPage(date) {
      let dateParts = date.split("-");
      return {
        year: parseInt(dateParts[0]),
        month: parseInt(dateParts[1]),
      };
    },
    increasePickerPage(pickerPage) {
      pickerPage.month == 12
        ? (pickerPage.year++, (pickerPage.month = 1))
        : pickerPage.month++;
      return pickerPage;
    },
    decreasePickerPage(pickerPage) {
      pickerPage.month == 1
        ? (pickerPage.year--, (pickerPage.month = 12))
        : pickerPage.month--;
      return pickerPage;
    },
    pickerPageToString(pickerPage) {
      pickerPage.month < 10
        ? (pickerPage.month = "0" + pickerPage.month.toString())
        : (pickerPage.month = pickerPage.month.toString());
      return pickerPage.year.toString() + "-" + pickerPage.month;
    },
    bringDateIntoView() {
      if (this.dateRange.length > 0) {
        this.pickerPage1 = this.pickerPageToString(
          this.parsePickerPage(this.dateRange[0])
        );
      }
    },
  },

  watch: {
    // dark(value) {
    //   this.render();
    // },
    // shadeAccent(value) {
    //   this.render();
    // },
    pickerPage1(value) {
      if (!this.pickerPage1Adjusted) {
        this.pickerPage2Adjusted = true;
        this.pickerPage2 = this.pickerPageToString(
          this.increasePickerPage(this.parsePickerPage(value))
        );
      }
      this.pickerPage1Adjusted = false;
    },
    pickerPage2(value) {
      if (!this.pickerPage2Adjusted) {
        this.pickerPage1Adjusted = true;
        this.pickerPage1 = this.pickerPageToString(
          this.decreasePickerPage(this.parsePickerPage(value))
        );
      }
      this.pickerPage2Adjusted = false;
    },
  },
};
</script>

<style lang="scss" scoped>
>>> #picker1.v-picker .v-date-picker-header .v-btn:last-of-type,
>>> #picker2.v-picker .v-date-picker-header .v-btn:first-of-type {
  display: none;
}

>>> .v-picker.v-card {
  box-shadow: none;
}

>>> .v-date-picker-table--date table {
  border-collapse: separate;
  border-spacing: 0px 8px;
}

>>> .v-date-picker-table--date table td {
  /*   border: 1px solid blue; */
}

>>> .v-date-picker-table__event {
  z-index: -1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  border-radius: 0;
  transform: none;
}

>>> .v-date-picker-table__event--start {
  margin-left: 50%;
}

>>> .v-date-picker-table__event--end {
  margin-right: 50%;
  width: auto;
}
</style>
