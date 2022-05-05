<template>
  <v-container>
    <v-row justify="space-around">
      <v-date-picker
        title-position="left"
        :attributes="attributes"
        :masks="{ title: 'YYYY年 MMM' }"
        :model-config="modelConfig"
        :disabled-dates="disabledDates"
        :first-day-of-week="2"
        v-model="selectedDate"
      ></v-date-picker>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "calendar5",
  data() {
    return {
      calendarIsClicked: false,
      selectedDate: null,
      attributes: [{
        key: "today",
        highlight: {
          style: {
            backgroundColor: "#000",
            opacity: 0.5
          }
        },
      }],
      disabledDates: {
        weekdays: this.fetchClosedDates()
      },
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD"
      }
    };
  },
  methods: {
    clickCalendar(day) {
      this.calendarIsClicked = true
    },

    fetchClosedDates() {
      return [1, 7]
    }
  }
};
</script>
<style scoped>
>>> .v-date-picker-table--date td:nth-child(1) {
  background-color: lightgoldenrodyellow; }
</style>
