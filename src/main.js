import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AppLink from './components/AppLink.vue'

createApp(App)
.component('AppLink', AppLink)
.use(router)
.mount('#app')

/* en este proyecto falta corregir
la presentacion, se dio mas enfasis
al vue router 4*/