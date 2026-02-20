import { createRouter, createWebHistory } from 'vue-router'
import {
  buildLocalizedPath,
  defaultLocale,
  getPageMeta,
  resolveLocale,
  type PageKey,
} from '../content/site-content'
import { trackPageView } from '../lib/analytics'

function setMetaByName(name: string, value: string): void {
  const meta = document.querySelector(`meta[name="${name}"]`)

  if (meta instanceof HTMLMetaElement) {
    meta.setAttribute('content', value)
    return
  }

  const element = document.createElement('meta')
  element.setAttribute('name', name)
  element.setAttribute('content', value)
  document.head.appendChild(element)
}

function setMetaByProperty(property: string, value: string): void {
  const meta = document.querySelector(`meta[property="${property}"]`)

  if (meta instanceof HTMLMetaElement) {
    meta.setAttribute('content', value)
    return
  }

  const element = document.createElement('meta')
  element.setAttribute('property', property)
  element.setAttribute('content', value)
  document.head.appendChild(element)
}

const legacySlugs = ['services', 'work', 'about', 'team', 'skills', 'philosophy', 'contact']

const routes = [
  {
    path: '/',
    redirect: buildLocalizedPath(defaultLocale, ''),
  },
  ...legacySlugs.map((slug) => ({
    path: `/${slug}`,
    redirect: buildLocalizedPath(defaultLocale, slug),
  })),
  {
    path: '/:locale(pt|en)',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { pageKey: 'home' as PageKey },
  },
  {
    path: '/:locale(pt|en)/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: { pageKey: 'services' as PageKey },
  },
  {
    path: '/:locale(pt|en)/work',
    name: 'work',
    component: () => import('../views/WorkView.vue'),
    meta: { pageKey: 'work' as PageKey },
  },
  {
    path: '/:locale(pt|en)/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { pageKey: 'about' as PageKey },
  },
  {
    path: '/:locale(pt|en)/team',
    name: 'team',
    component: () => import('../views/TeamView.vue'),
    meta: { pageKey: 'team' as PageKey },
  },
  {
    path: '/:locale(pt|en)/skills',
    name: 'skills',
    component: () => import('../views/SkillsView.vue'),
    meta: { pageKey: 'skills' as PageKey },
  },
  {
    path: '/:locale(pt|en)/philosophy',
    name: 'philosophy',
    component: () => import('../views/PhilosophyView.vue'),
    meta: { pageKey: 'philosophy' as PageKey },
  },
  {
    path: '/:locale(pt|en)/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { pageKey: 'contact' as PageKey },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: buildLocalizedPath(defaultLocale, ''),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  const locale = resolveLocale(to.params.locale)
  const pageKey = typeof to.meta.pageKey === 'string' ? (to.meta.pageKey as PageKey) : 'home'
  const meta = getPageMeta(locale, pageKey)

  document.title = meta.title
  document.documentElement.lang = locale

  setMetaByName('description', meta.description)
  setMetaByName('twitter:title', meta.ogTitle)
  setMetaByName('twitter:description', meta.ogDescription)
  setMetaByProperty('og:title', meta.ogTitle)
  setMetaByProperty('og:description', meta.ogDescription)
  setMetaByProperty('og:locale', locale === 'pt' ? 'pt_BR' : 'en_US')

  const canonical = `${window.location.origin}${to.fullPath}`
  setMetaByProperty('og:url', canonical)

  trackPageView(to.fullPath, meta.title, locale)
})

export default router
