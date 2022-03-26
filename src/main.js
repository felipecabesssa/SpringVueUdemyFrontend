import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import bootstrap from './bootstrap'

import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(store)
.use(router)
.use(bootstrap)
.provide(VueAxios, axios)
.mount('#app')
