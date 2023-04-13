import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faBriefcase, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faEnvelope, faBriefcase, faInstagram, faUserSecret)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
