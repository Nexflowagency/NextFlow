'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { publishVelocity, prefersReducedMotion } from '@/lib/scrollStore'

/**
 * Scroll cu inerție + parallax legat de scroll.
 *
 * Inerția e cel mai puternic semnal că un site a fost lucrat, nu asamblat:
 * derularea capătă greutate în loc să sară din pixel în pixel.
 *
 * Elementele cu data-speed plutesc față de restul paginii. Valorile mici
 * (0.04–0.12) sunt de preferat — parallax-ul se simte, nu se vede.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      duration: 1.05,
      // ease-out exponențial: pornire promptă, oprire lină
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    })

    // Ancorele trebuie să treacă tot prin Lenis, altfel sar brusc
    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!link) return
      const href = link.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: -96, duration: 1.3 })
    }
    document.addEventListener('click', onAnchorClick)

    const parallax = Array.from(
      document.querySelectorAll<HTMLElement>('[data-speed]')
    ).map((el) => ({ el, speed: parseFloat(el.dataset.speed || '0') }))

    const viewportH = () => window.innerHeight

    const applyParallax = () => {
      const h = viewportH()
      for (const { el, speed } of parallax) {
        const rect = el.getBoundingClientRect()
        // sari peste ce e departe de ecran — nu merită calculat
        if (rect.bottom < -h || rect.top > h * 2) continue
        const fromCenter = rect.top + rect.height / 2 - h / 2
        el.style.transform = `translate3d(0, ${(-fromCenter * speed).toFixed(2)}px, 0)`
      }
    }

    lenis.on('scroll', ({ velocity }: { velocity: number }) => {
      publishVelocity(velocity)
      applyParallax()
    })

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    applyParallax()
    window.addEventListener('resize', applyParallax)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onAnchorClick)
      window.removeEventListener('resize', applyParallax)
      lenis.destroy()
    }
  }, [])

  return null
}
