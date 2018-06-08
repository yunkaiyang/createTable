import Vue from 'vue'
import Iview from "iview"
import App from './App.vue'

import "iview/dist/styles/iview.css"

Vue.use(Iview);

new Vue({
  el: '#app',
  render: h => h(App)
})
