import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import { createAppRouter } from './router'
import { registerMotionDirectives } from './composables/directives'
import { initializeAnalytics } from './lib/analytics'
import '../css/app.css'

initializeAnalytics()

const root = document.getElementById('app')
const prerendered = root !== null && root.hasChildNodes()
const app = prerendered ? createSSRApp(App) : createApp(App)
const router = createAppRouter()

app.use(router)
registerMotionDirectives(app)
router.isReady().then(() => app.mount('#app'))
