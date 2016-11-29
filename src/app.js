import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './views'

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue(Vue.util.extend({
  router,
  store
}, App))

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store }
