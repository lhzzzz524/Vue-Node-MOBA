import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Tab, Tabs, Icon } from 'vant';
import VueAwesomeSwiper from "vue-awesome-swiper"

import '../src/assets/css/reset.scss'
import 'vant/lib/index.css';

Vue.use(VueAwesomeSwiper)
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Icon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
