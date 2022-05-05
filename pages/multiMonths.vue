


<template>
<v-container>
    <div class="calendar">
    <p>{{ beforeMonth }}</p>
    <p>{{ afterMonth }}</p>
  </div>
</v-container>

</template>

<script>
export default {
  name: "multiMonths",
  data() {
    return {
      now: this.$dayjs().locale("ja"),
    };
  },
  computed: {
    beforeMonth() {
      return this.now.subtract(1, "month").format("YYYY-MM-DD_HH:mm");
    },
    afterMonth() {
      return this.now.add(1, "month").format("YYYY-MM-DD_HH:mm");
    },
  },
};
</script>
