'use client'

import { useEffect } from 'react'
import { isTouchOnly, prefersReducedMotion } from '@/lib/scrollStore'

/**
 * Butoane magnetice.
 *
 * Orice element cu data-magnetic e atras ușor spre cursor cât timp acesta
 * se află în apropiere, iar la ieșire revine elastic. Efectul e mic prin
 * proiectare: la câțiva pixeli se simte ca finisaj, la mai mulți devine
 * o jucărie și scade încrederea.
 */
const RADIUS = 90 // px în jurul butonului în care începe atracția
const PULL = 0.28 // cât din distanță e parcursă efectiv

export default function Magnetic() {
  useEffect(() => {
    if (isTouchOnly() || prefersReducedMotion()) return

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-magnetic]')
    )
    if (!targets.length) return

    let raf = 0
    let mx = -9999
    let my = -9999

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (!raf) raf = requestAnimationFrame(update)
    }

    const update = () => {
      raf = 0
      for (const el of targets) {
        const r = el.getBoundingClientRect()
        if (r.bottom < 0 || r.top > window.innerHeight) continue

        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        const dx = mx - cx
        const dy = my - cy
        const dist = Math.hypot(dx, dy)
        const reach = Math.max(r.width, r.height) / 2 + RADIUS

        if (dist < reach) {
          const strength = 1 - dist / reach
          el.style.transform = `translate3d(${dx * PULL * strength}px, ${
            dy * PULL * strength
          }px, 0)`
        } else if (el.style.transform) {
          el.style.transform = ''
        }
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update) }, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
      targets.forEach((el) => (el.style.transform = ''))
    }
  }, [])

  return null
}
