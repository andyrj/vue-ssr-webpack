import Promise from 'yaku'
import { app, store } from './app'

window.Promise = Promise

const initState = JSON.parse(document.getElementById('initState').innerHTML)
store.replaceState(initState)

app.$mount('#app')

// service worker
/*
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}
*/
