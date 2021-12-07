import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './js/rem'
import Vant from 'vant'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
