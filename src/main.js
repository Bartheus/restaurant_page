import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//importing the global css file
import './assets/css/main.css'

import vuetify from './plugins/vuetify'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
