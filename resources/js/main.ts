import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeAnalytics } from './lib/analytics'
import '../css/app.css'

initializeAnalytics()

createApp(App).use(router).mount('#app')
