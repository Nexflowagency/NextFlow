'use client'

import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '@/lib/scrollStore'

/**
 * Secvență scurtă de intrare: marca se desenează, apoi cortina urcă și
 * descoperă pagina.
 *
 * Rulează o singură dată pe sesiune. O animație de intrare la fiecare
 * navigare încetează să impresioneze și începe să enerveze exact publicul
 * care revine — adică cel care contează.
 */
const KEY = 'nf-intro-seen'
const DURATION = 1900

export default function Intro() {
  const [phase, setPhase] = useState<'hidden' | 'playing' | 'leaving'>('hidden')

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (sessionStorage.getItem(KEY)) return

    sessionStorage.setItem(KEY, '1')
    setPhase('playing')
    document.body.style.overflow = 'hidden'

    const leave = setTimeout(() => setPhase('leaving'), DURATION)
    const done = setTimeout(() => {
      setPhase('hidden')
      document.body.style.overflow = ''
    }, DURATION + 900)

    return () => {
      clearTimeout(leave)
      clearTimeout(done)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'hidden') return null

  return (
    <div className={`intro ${phase === 'leaving' ? 'intro-leaving' : ''}`} aria-hidden="true">
      <svg width="126" height="126" viewBox="0 0 35 35" fill="none" className="intro-mark">
        <path
          className="intro-line intro-line-2"
          d="M2.5 32.5 L12.5 22.5 L18.5 28.5 L32.5 14.5"
          stroke="var(--green)"
          strokeWidth="5"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
        <path
          className="intro-line intro-line-1"
          d="M2.5 20.5 L12.5 10.5 L18.5 16.5 L32.5 2.5"
          stroke="var(--bone)"
          strokeWidth="5"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
      </svg>
    </div>
  )
}
