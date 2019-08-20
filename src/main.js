import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import Toasted from 'vue-toasted';

Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
