import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from './axiosConfig'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(router)

app.mount('#app')
