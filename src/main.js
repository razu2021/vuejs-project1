// main css import is here 
import './assets/main.css'
// create for app ..  vue application create korar junno use kora hoice.. eti node modules er ace 
import { createApp } from 'vue'
const app = createApp(App)
// create for app ..  vue application create korar junno use kora hoice.. eti node modules er ace 
import router from './router'
app.use(router)
// App.vue coming form src/ vue 
import App from './App.vue'

// binding the app .. export  inside of index.html file 
app.mount('#app')
