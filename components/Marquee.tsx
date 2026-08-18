'use client'

import { useEffect, useRef } from 'react'
import { subscribeVelocity, prefersReducedMotion } from '@/lib/scrollStore'

/* Ordinea începe cu domeniile în care avem deja proiecte livrate. */
const industries = [
  'Saloane de înfrumusețare',
  'Cabinete de cosmetică',
  'Clinici estetice',
  'Coafor & frizerie',
  'Fitness & wellness',
  'Servicii locale',
  'Imobiliare',
  'HoReCa',
]

/**
 * Bandă rulantă cuplată la viteza de scroll.
 *
 * Merge singură în ritm constant, dar accelerează și se înclină ușor când
 * derulezi, apoi revine. Detaliul e mic și tocmai de asta funcționează:
 * pagina pare că are inerție proprie, nu că rulează o animație pusă peste.
 */
export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const loop = [...industries, ...industries]

  useEffect(() => {
    const track = trackRef.current
    if (!track || prefersReducedMotion()) return

    let offset = 0
    let velocity = 0
    let width = track.scrollWidth / 2

    const measure = () => { width = track.scrollWidth / 2 }
    measure()
    window.addEventListener('resize', measure)

    const unsubscribe = subscribeVelocity((v) => { velocity = v })

    let raf = 0
    const tick = () => {
      // deriva de bază, plus contribuția scroll-ului
      offset -= 0.45 + Math.min(Math.abs(velocity) * 0.14, 6) * Math.sign(velocity || 1)
      if (offset <= -width) offset += width
      if (offset > 0) offset -= width

      const skew = Math.max(-6, Math.min(6, velocity * 0.22))
      track.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0) skewX(${skew.toFixed(2)}deg)`

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      unsubscribe()
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <div
      className="relative overflow-hidden border-y py-4"
      style={{ borderColor: 'var(--line)', background: 'var(--ink-1)' }}
      aria-label={`Industrii automatizate: ${industries.join(', ')}`}
    >
      <div ref={trackRef} className="marquee-track-js" aria-hidden="true">
        {loop.map((item, i) => (
          <span key={i} className="mono flex items-center whitespace-nowrap">
            <span style={{ color: 'var(--bone-46)' }}>{item}</span>
            <span
              className="mx-7 h-1 w-1 rounded-full"
              style={{ background: 'var(--green)', opacity: 0.55 }}
            />
          </span>
        ))}
      </div>

      {/* Estompare pe margini ca textul să nu se taie brusc */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{ background: 'linear-gradient(to right, var(--ink-1), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24"
        style={{ background: 'linear-gradient(to left, var(--ink-1), transparent)' }}
      />
    </div>
  )
}
