import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertComponent from './components/shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComponent)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAxvTGqZk71FQHDC_Gj-ahMWC1gC8VOmyM',
      authDomain: 'boardup-24a7a.firebaseapp.com',
      databaseURL: 'https://boardup-24a7a.firebaseio.com',
      projectId: 'boardup-24a7a',
      storageBucket: 'boardup-24a7a.appspot.com'
    })
  }
})
