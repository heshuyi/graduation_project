import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import axios from 'axios'
import './js/rem'
import Vant from 'vant'
axios.defaults.withCredentials = true;
Vue.use(Vant)
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
