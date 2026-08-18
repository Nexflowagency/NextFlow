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
      <svg width="132" height="116" viewBox="0 0 48 42" fill="none" className="intro-mark">
        <defs>
          <linearGradient id="intro-g" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--green-deep)" />
            <stop offset="55%" stopColor="var(--green)" />
            <stop offset="100%" stopColor="var(--green-soft)" />
          </linearGradient>
        </defs>
        <path
          className="intro-line intro-line-2"
          d="M5 35 L16 23 L27 33 L43 19"
          stroke="url(#intro-g)"
          strokeWidth="5.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="intro-line intro-line-1"
          d="M5 23 L16 11 L27 21 L43 7"
          stroke="#FFFFFF"
          strokeWidth="5.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
