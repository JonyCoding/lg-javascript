import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const vm = new Vue({
  // 3. 注册 router 对象
  router,
  // 给Vue注入两个属性，一个是$router 一个是 router
  render: h => h(App)
}).$mount('#app')

console.log(vm)
