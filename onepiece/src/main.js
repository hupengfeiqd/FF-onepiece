// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './views/App'
import VueRouter from 'vue-router'
import Axios from 'axios'
import { routes } from './router/router'
import './assets/js/jquery'
import { store } from './store/store'
import './assets/js/rotationChart'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.prototype.opAxios = Axios;

const router = new VueRouter({
  mode:"history",
  routes,
  linkExactActiveClass: 'active-exact',
  linkActiveClass: 'op-active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
