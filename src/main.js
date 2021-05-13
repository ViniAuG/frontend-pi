import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let port = process.env.PORT || 8080

new Vue({
  router,
  port,
  render: h => h(App)
}).$mount('#app')
