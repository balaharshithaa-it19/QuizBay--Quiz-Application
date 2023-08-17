// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
 
import { fas } from '@fortawesome/free-solid-svg-icons'
 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


 
library.add(fas)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false
Vue.prototype.moment = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
