// import 'es6-promise/auto'
import Promise from 'yaku'
import { app, store } from './app'

// make yaku polyfill promise implementation available
window.Promise = Promise

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
const initState = JSON.parse(document.getElementById('initState').innerHTML)
store.replaceState(initState)

// actually mount to DOM
app.$mount('#app')

// service worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}
