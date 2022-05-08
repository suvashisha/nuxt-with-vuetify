import Vue from 'vue'
import VueHorizontalList from 'vue-horizontal-list'
Vue.use(VueHorizontalList)

import moment from 'moment'

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
