import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkZyYW5jZWxpbm8gTWFyY2lsaW8iLCJlbWFpbCI6ImZyYW5jZWxpbm9AZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU4NjUxMTE5NiwiZXhwIjoxNTg2NzcwMzk2fQ.kS2G62LIaoId5EPTESf01yqTwnE0KZjRgSAjbwDuAxU'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")