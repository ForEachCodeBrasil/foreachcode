// Gera bootstrap/ssr/pages.json: HTML pré-renderizado + metadados de cada rota (pt/en).
// Roda depois de `vite build --ssr`; o Laravel lê o arquivo em App\Support\SiteSeo.
import { writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const bundle = resolve('bootstrap/ssr/ssr.js')
const { render, getPageMeta, pageSlugs } = await import(pathToFileURL(bundle).href)

const pages = {}

for (const locale of ['pt', 'en']) {
  for (const [pageKey, slug] of Object.entries(pageSlugs)) {
    const path = slug === '' ? `/${locale}` : `/${locale}/${slug}`
    const meta = getPageMeta(locale, pageKey)

    pages[path] = { locale, pageKey, html: await render(path), ...meta }
  }
}

writeFileSync(resolve('bootstrap/ssr/pages.json'), JSON.stringify(pages))
console.log(`prerender: ${Object.keys(pages).length} páginas`)
