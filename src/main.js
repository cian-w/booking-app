// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'
import EventBus from './EventBus'
import VueStripeCheckout from 'vue-stripe-checkout';

// Setup Stripe information
const options = {
  key: '',
  image: 'http://cdn.shopify.com/s/files/1/1325/1409/products/48-Soccer-Ball-Solo_Single_Front_grande_9a65142b-ea92-4060-96ed-eafe3737feb7_grande.png?v=1477344810',
  locale: 'auto',
  currency: 'EUR',
  billingAddress: true,
  panelLabel: 'Pay {{amount}}'
}

Vue.use(VueStripeCheckout, options);

Vue.use(vueEventCalendar, {locale: 'en', color: '#3d7fe2'})

Vue.config.productionTip = false

Vue.prototype.$bus = EventBus

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
