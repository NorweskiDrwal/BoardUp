import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertComponent from './components/shared/Alert.vue'
import EditMeetupDetailsDialog from './components/meetup/edit/EditMeetupDetailsDialog'
import EditMeetupDateDialog from './components/meetup/edit/EditMeetupDateDialog'
import EditMeetupTimeDialog from './components/meetup/edit/EditMeetupTimeDialog'
import RegisterDialog from './components/meetup/registration/RegisterDialog'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComponent)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)

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
      storageBucket: 'gs://boardup-24a7a.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLogin', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
