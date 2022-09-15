import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faChevronDown, faCartShopping, faPlus, faArrowRight, faClock, faBurger, faMobileScreen, faCar} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faChevronDown, faCartShopping, faPlus, faArrowRight, faClock, faBurger, faMobileScreen, faCar)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
