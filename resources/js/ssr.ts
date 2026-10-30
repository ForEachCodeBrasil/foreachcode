import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import { createAppRouter } from './router'
import { registerMotionDirectives } from './composables/directives'

// Pré-render no build: cada rota vira HTML estático que o Laravel injeta no #app.
export async function render(url: string): Promise<string> {
  const app = createSSRApp(App)
  const router = createAppRouter()

  app.use(router)
  registerMotionDirectives(app)
  await router.push(url)
  await router.isReady()

  return renderToString(app)
}

export { getPageMeta, pageSlugs } from './content/site-content'
