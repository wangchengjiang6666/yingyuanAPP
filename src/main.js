import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs, List, Cell, NavBar, Search } from 'vant'
import './assets/styles/base.scss'
import 'vant/lib/index.css'

// Vue.use(Toast) //Vue.prototype.$toast = Toast

Vue.config.productionTip = false

Vue.use(Tab)
  .use(Tabs)
  .use(List)
  .use(Cell)
  .use(NavBar)
  .use(Search)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
