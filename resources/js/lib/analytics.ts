import type { Locale } from '../content/site-content'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

let analyticsInitialized = false

function hasAnalytics(): boolean {
  return typeof measurementId === 'string' && measurementId.length > 0
}

export function initializeAnalytics(): void {
  if (!hasAnalytics() || analyticsInitialized) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    send_page_view: false,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)

  analyticsInitialized = true
}

export function trackEvent(eventName: string, params: Record<string, string | number | boolean> = {}): void {
  if (!hasAnalytics() || !window.gtag) {
    return
  }

  window.gtag('event', eventName, params)
}

export function trackPageView(path: string, title: string, locale: Locale): void {
  if (!hasAnalytics() || !window.gtag) {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    language: locale,
  })
}
