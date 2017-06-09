// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import {routes} from './router/index'
import CcNProgress from 'vue-nprogress'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

/* NProgress - Loading */
Vue.use(CcNProgress)
const nprogress = new CcNProgress({parent: '.nprogress-container'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  nprogress
}).$mount('#app')
