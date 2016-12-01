import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './views'
import { sync } from 'vuex-router-sync'

sync(store, router)

const app = new Vue(Vue.util.extend({
  router,
  store
}, App))

export { app, router, store }
