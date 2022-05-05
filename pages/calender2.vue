<template>
  <v-container>
    <v-row justify="space-around">
      <v-date-picker
        v-model="picker"
        :first-day-of-week="1"
        :now="today"
        :value="today"
        color="green lighten-1"
        header-color="primary"
        locale="ja-jp"
        :day-format="(date) => new Date(date).getDate()"
        :month-format="
          (timestamp) => new Date(timestamp.date).getMonth() + 1 + ' /'
        "
      ></v-date-picker>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "calender2",
  data() {
    return {
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    };
  },
};
</script>
