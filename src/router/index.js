import Vue from 'vue'
import Router from 'vue-router'
import Calendar from '@/components/Calendar'
import BookingForm from '@/components/BookingForm'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/book',
      name: 'BookingForm',
      component: BookingForm
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
  ]
})
