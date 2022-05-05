<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in 6"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="238"
          width="240"
          @click="toggle"
        >
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
          <!-- <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row> -->
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    name: 'calScroll',
    data: () => ({
      model: null,
    }),
  }
</script>

<style lang="scss" scoped>

</style>
