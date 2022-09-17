import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faChevronDown, faCartShopping, faPlus, faArrowRight, faClock, faBurger, faMobileScreen, faCar, faEnvelope, faWifi} from '@fortawesome/free-solid-svg-icons'

import {faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube} from  '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faChevronDown, faCartShopping, faPlus, faArrowRight, faClock, faBurger, faMobileScreen, faCar, faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube, faEnvelope, faWifi)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
