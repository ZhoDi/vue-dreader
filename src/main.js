import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import api from './request/api'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

Vue.prototype.$api = api;


moment.locale('zh-cn')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')