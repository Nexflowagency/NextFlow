'use client'

import { useEffect } from 'react'
import { trackEvent, upgradeClaritySession } from '@/lib/analytics'

// ─────────────────────────────────────────────
// ÎNLOCUIEȘTE ACEST LINK CU AL TĂU DIN CALENDLY
// Mergi pe calendly.com → copiază linkul tău
// ex: https://calendly.com/nextflow-ai/30min
const CALENDLY_URL = 'https://calendly.com/YOUR_USERNAME/30min'
// ─────────────────────────────────────────────

export default function CalendlyButton() {
  useEffect(() => {
    // Injectează CSS-ul Calendly
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    document.head.appendChild(link)

    // Injectează scriptul Calendly
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Interceptează toate butoanele "Book a Call" / "Book a Free Call"
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href') || ''
      const text = anchor.textContent?.toLowerCase() || ''

      const isBooking =
        href === '#cta' ||
        text.includes('book') ||
        text.includes('call') ||
        text.includes('demo')

      if (isBooking) {
        e.preventDefault()

        // Micro-conversie: a deschis calendarul. Raportul dintre
        // booking_click și booking_scheduled arată câți abandonează
        // în widget-ul Calendly.
        trackEvent('booking_click', {
          cta_text: anchor.textContent?.trim().slice(0, 60) || 'unknown',
          page_path: window.location.pathname,
        })

        // @ts-ignore — Calendly e injectat global
        if (window.Calendly) {
          // @ts-ignore
          window.Calendly.initPopupWidget({ url: CALENDLY_URL })
        }
      }
    }

    // Conversia propriu-zisă: Calendly notifică prin postMessage când
    // programarea e confirmată.
    const handleCalendlyMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return
      if (e.data?.event !== 'calendly.event_scheduled') return

      trackEvent('booking_scheduled', { page_path: window.location.pathname })
      upgradeClaritySession('booking_scheduled')
    }

    document.addEventListener('click', handleClick)
    window.addEventListener('message', handleCalendlyMessage)

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('message', handleCalendlyMessage)
    }
  }, [])

  return null
}
