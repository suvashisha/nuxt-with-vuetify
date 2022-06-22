<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'expandiv',
          to: '/expandiv'
        },
        {
          icon: 'mdi-apps',
          title: 'slick',
          to: '/slick'
        },
        {
          icon: 'mdi-apps',
          title: 'Navbar',
          to: '/navbar'
        },
        {
          icon: 'mdi-apps',
          title: 'Scroll',
          to: '/scroll'
        },
        {
          icon: 'mdi-apps',
          title: 'Scroll2',
          to: '/scroll2'
        },
        {
          icon: 'mdi-apps',
          title: 'Sidebar',
          to: '/sidebar'
        },
        {
          icon: 'mdi-apps',
          title: 'Sidebar2',
          to: '/sidebar2'
        },
        {
          icon: 'mdi-apps',
          title: 'Sidebar3',
          to: '/sidebar3'
        },
        {
          icon: 'mdi-apps',
          title: 'expand',
          to: '/expand'
        },
         {
          icon: 'mdi-apps',
          title: 'expand2',
          to: '/expand2'
        },
        {
          icon: 'mdi-apps',
          title: 'MultiCanvas',
          to: '/multiCanvas'
        },
        {
          icon: 'mdi-apps',
          title: 'MultiCanvas2',
          to: '/multiCanvas2'
        },
        {
          icon: 'mdi-apps',
          title: 'CalendarTest',
          to: '/calendarTest'
        },
        {
          icon: 'mdi-apps',
          title: 'CalendarTest2',
          to: '/calendarTest2'
        },
        {
          icon: 'mdi-apps',
          title: 'CalendarTest3',
          to: '/calendarTest3'
        },
        {
          icon: 'mdi-apps',
          title: 'sample',
          to: '/sample'
        },
        {
          icon: 'mdi-apps',
          title: 'sample2',
          to: '/sample2'
        },
        {
          icon: 'mdi-apps',
          title: 'sample3',
          to: '/sample3'
        },
        {
          icon: 'mdi-apps',
          title: 'sample123',
          to: '/sample123'
        },
        {
          icon: 'mdi-apps',
          title: 'calScroll',
          to: '/calScroll'
        },
        {
          icon: 'mdi-apps',
          title: 'Cards',
          to: '/cards'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'MulCal',
          to: '/mulCal'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'DragScroll',
          to: '/dragScroll'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Calender',
          to: '/calender'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Calender2',
          to: '/calender2'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Calendar3',
          to: '/calendar3'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Calendar4',
          to: '/calendar4'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Calendar5',
          to: '/calendar5'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'CarouselPage',
          to: '/carouselPage'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'MultiMonths',
          to: '/multiMonths'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'CardEvent',
          to: '/cardEvent'
        },
         {
          icon: 'mdi-chart-bubble',
          title: 'multiLottie',
          to: '/multiLottie'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'sample1234',
          to: '/sample1234'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
