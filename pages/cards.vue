<template>
  <v-layout justify-center>
      <div style="width: 600px; background-color: red">
        <v-slide-group center-active active-class="success">
          <v-slide-item v-slot:default="{ active, toggle }"
            v-for="(item, idx) in 25"
            :key="idx"
            >
              <v-card
                @click="toggle"
                class="mx-2 rounded-lg"
                width="250"
                height="175"
                :ripple="{ class: 'rounded-lg' }"
                :color="active ? undefined : 'grey lighten-1'"
              />
          </v-slide-item>
        </v-slide-group>
      </div>
    </v-layout>
</template>

<script>
  export default {
    name: 'cards',
//     const slider = document.querySelector('.parent');
// let mouseDown = false;
// let startX, scrollLeft;

// let startDragging = function (e) {
//   mouseDown = true;
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// };
// let stopDragging = function (event) {
//   mouseDown = false;
// };

// slider.addEventListener('mousemove', (e) => {
//   e.preventDefault();
//   if(!mouseDown) { return; }
//   const x = e.pageX - slider.offsetLeft;
//   const scroll = x - startX;
//   slider.scrollLeft = scrollLeft - scroll;
// });

// // Add the event listeners
// slider.addEventListener('mousedown', startDragging, false);
// slider.addEventListener('mouseup', stopDragging, false);
// slider.addEventListener('mouseleave', stopDragging, false);
  }
</script>

<style lang="scss" scoped>
>>> .v-slide-group__wrapper {
  overflow-x: auto; /* Enables the horizontal scrollbar */
  /* Next lines hides scrollbar in different browsers for styling purposes */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
>>> .v-slide-group__wrapper::-webkit-scrollbar {
  display: none; /* Chrome opera and Safary */
  width: 0px;
  background: transparent;
}
</style>
