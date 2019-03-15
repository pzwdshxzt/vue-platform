import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import VueScroller from 'vue-scroller'
import md5 from 'js-md5'
import axios from '@/js/utils/axios.js'

Vue.config.productionTip = false
Vue.prototype.$md5 = md5
Vue.prototype.$axios = axios
Vue.use(VueScroller)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

