 import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueWriter from "vue-writer";

const app = createApp(App)

app.use(router)
app.use(VueWriter)
app.mount('#app')
