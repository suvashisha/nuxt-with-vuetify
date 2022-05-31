<template>
  <v-container>
    <v-date-picker
      title-position="left"
      :columns="layout.columns"
      :rows="layout.rows"
      :is-expanded="layout.isExpanded"
      :attributes="attributes"
      :masks="{ title: 'YYYY年 MMM' }"
      :model-config="modelConfig"
      :disabled-dates="disabledDates"
      :first-day-of-week="2"
      v-model="selectedDate"
    ></v-date-picker>
    <p v-if="calendarIsClicked">押された日は "{{ selectedDate }}"</p>
  </v-container>
</template>

<script>
export default {
  name: 'sample1234',
  data() {
    return {
      calendarIsClicked: false,
      selectedDate: null,
      attributes: [
        {
          key: "today",
          highlight: {
            style: {
              backgroundColor: "#000",
              opacity: 0.5,
            },
          },
        },
      ],
      disabledDates: {
        weekdays: this.fetchClosedDates(),
      },
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD",
      },
    };
  },

  methods: {
    clickCalendar(day) {
      this.calendarIsClicked = true;
    },

    fetchClosedDates() {
      return [1, 7];
    },
  },

  computed: {
    layout() {
      return this.$screens({
        // Mobile Layout
        default: {
          columns: 1,
          rows: 1,
          isExpanded: true,
        },
        // PC Layout
        lg: {
          columns: 2,
          rows: 2,
          isExpanded: false,
        },
      });
    },
  },
};
</script>
