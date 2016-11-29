import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

import Home from './Home.vue'
import Counters from './Counters.vue'
import NotFound from './NotFound.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Home },
    { path: '/counters', component: Counters },
    { path: '*', component: NotFound }
  ]
})
