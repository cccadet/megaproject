// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import Router from 'vue-router'
import {routes} from './router/index'
import {sync} from 'vuex-router-sync'
import mutations from './vuex/mutations'
import store from './vuex/store'
import CcNProgress from 'vue-nprogress'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)
const router = new Router({
  linkActiveClass: 'is-active',
  routes,
  mode: 'history'
})
sync(store, router)

/* NProgress - Loading */
Vue.use(CcNProgress)
const nprogress = new CcNProgress({parent: '.nprogress-container'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mutations,
  render: h => h(App),
  nprogress
}).$mount('#app')
