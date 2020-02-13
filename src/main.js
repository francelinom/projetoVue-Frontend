import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJmbWFyY2lsaW8xOTg5QGdtYWlsLmNvbSIsImV4cCI6MTU4MTY4NzM1Nn0.c_rZzRaKXiKlI3RVt6lqZa2XasCODyL-SO0v5ndlHe7aFTj-87ebDvTkjA6Iy-L3nENuqPuxL1YkX-IiXgDhHQ'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")