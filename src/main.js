import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6ImZyYW4iLCJlbWFpbCI6ImZyYW5AZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU4NjEyNDE0OSwiZXhwIjoxNTg2MzgzMzQ5fQ.LLyCNND0NN3aSHkTFJM20yCUv_7ZhAk5kHH_ZFzm80U'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")