// Helper-e de tracking pentru GA4 + Microsoft Clarity.
//
// Toate funcțiile sunt safe: dacă scripturile nu sunt încărcate (lipsesc
// ID-urile, rulezi local, sau userul a blocat trackerele), nu aruncă erori
// și nu fac nimic.

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    clarity?: (...args: unknown[]) => void
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID
export const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

// Trimitem date reale doar din producție. Pentru a testa local, setează
// NEXT_PUBLIC_ANALYTICS_DEBUG=true în .env.local.
export const analyticsEnabled =
  process.env.NODE_ENV === 'production' ||
  process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === 'true'

type EventParams = Record<string, string | number | boolean | null | undefined>

/**
 * Page view manual — necesar pentru App Router, unde navigarea client-side
 * nu declanșează un page load nou.
 */
export function pageview(url: string) {
  if (typeof window === 'undefined' || !window.gtag || !GA_ID) return
  window.gtag('config', GA_ID, { page_path: url })
}

/**
 * Eveniment custom, trimis simultan în GA4 și Clarity.
 *
 * În GA4 apare în Reports → Engagement → Events (și îl poți marca drept
 * conversie din Admin → Events). În Clarity poți filtra înregistrările
 * după el, ca să vezi exact sesiunile în care s-a întâmplat.
 *
 *   trackEvent('booking_click', { location: 'hero' })
 */
export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return

  if (window.gtag) {
    window.gtag('event', name, params)
  }

  if (window.clarity) {
    window.clarity('event', name)
  }
}

/**
 * Etichetă pe sesiunea din Clarity — utilă ca să segmentezi înregistrările
 * (ex. plan-ul clientului, varianta de A/B test, tipul de trafic).
 */
export function setClarityTag(key: string, value: string | string[]) {
  if (typeof window === 'undefined' || !window.clarity) return
  window.clarity('set', key, value)
}

/**
 * Marchează sesiunea curentă din Clarity ca fiind importantă, ca să nu fie
 * eliminată la sampling. Apeleaz-o când se întâmplă ceva ce vrei sigur să
 * poți revedea (ex. un lead completat).
 */
export function upgradeClaritySession(reason: string) {
  if (typeof window === 'undefined' || !window.clarity) return
  window.clarity('upgrade', reason)
}
