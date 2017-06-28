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
import VeeValidate from 'vee-validate'
import messagesBR from '../node_modules/vee-validate/dist/locale/pt_BR'

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

/* VeValidator */
VeeValidate.Validator.addLocale(messagesBR)
Vue.use(VeeValidate, {locale: 'pt_BR', events: 'blur'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mutations,
  VeeValidate,
  render: h => h(App),
  nprogress
}).$mount('#app')
