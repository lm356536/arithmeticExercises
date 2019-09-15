import Vue from 'vue'
import App from './App'
import { router } from './router/router'
// eslint-disable-next-line
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
