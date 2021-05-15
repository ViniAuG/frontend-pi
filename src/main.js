import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

let port = process.env.PORT || 8080

new Vue({
  router,
  port,
  render: h => h(App)
}).$mount('#app')
