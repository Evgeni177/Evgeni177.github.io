import Vue from 'vue'
import router from './router/router';
import Main from './components/Main.vue';
Vue.config.productionTip = false

new Vue({
  render: h => h(Main),
  router
}).$mount('#app')
