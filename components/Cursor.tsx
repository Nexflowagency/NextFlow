'use client'

import { useEffect, useRef } from 'react'
import { isTouchOnly, prefersReducedMotion } from '@/lib/scrollStore'

/**
 * Cursor propriu, cu text contextual.
 *
 * Un punct mic urmărește mouse-ul aproape instant; un inel îl urmează cu
 * întârziere. Pe elementele care poartă data-cursor, inelul se umple cu
 * verde și afișează textul respectiv („Vezi site-ul", „Redă").
 *
 * Apare doar acolo unde există un mouse adevărat. Cursorul sistemului se
 * ascunde abia după ce acesta pornește, ca pagina să rămână utilizabilă
 * dacă scriptul nu rulează.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (isTouchOnly() || prefersReducedMotion()) return

    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring || !label) return

    document.documentElement.classList.add('has-cursor')

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let dx = mx
    let dy = my
    let rx = mx
    let ry = my
    let visible = false

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (!visible) {
        visible = true
        dot.style.opacity = '1'
        ring.style.opacity = '1'
      }
    }

    const onLeave = () => {
      visible = false
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    // Starea de hover se citește din DOM la fiecare mișcare peste un element nou
    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-cursor]')
      if (el) {
        ring.dataset.state = 'label'
        label.textContent = el.dataset.cursor || ''
        return
      }
      const interactive = (e.target as HTMLElement).closest(
        'a, button, input[type="range"], [role="button"]'
      )
      ring.dataset.state = interactive ? 'active' : 'idle'
      label.textContent = ''
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    let raf = 0
    const loop = () => {
      // punctul aproape lipit de mouse, inelul cu întârziere — de aici senzația de greutate
      dx += (mx - dx) * 0.55
      dy += (my - dy) * 0.55
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14

      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" data-state="idle" aria-hidden="true">
        <span ref={labelRef} className="cursor-label mono-sm" />
      </div>
    </>
  )
}
