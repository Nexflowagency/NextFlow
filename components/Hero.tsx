'use client'

import { useEffect, useRef, useState } from 'react'
import { WHATSAPP_URL } from '@/lib/contact'

const specs = [
  { k: 'Status', v: 'Sisteme active', live: true },
  { k: 'Timp răspuns', v: '< 2 min' },
  { k: 'Implementare', v: '2–4 săptămâni' },
  { k: 'Afaceri', v: '20' },
]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const meshRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(t)
  }, [])

  // Parallax discret pe straturile de fundal
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        if (y < 1400) {
          if (meshRef.current) meshRef.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`
          if (gridRef.current) gridRef.current.style.transform = `translate3d(0, ${y * 0.08}px, 0)`
        }
        raf = 0
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const line = (delay: number) => ({ transitionDelay: `${delay}ms` })
  const fade = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'none' : 'translateY(18px)',
    transition: 'opacity 0.9s var(--ease), transform 0.9s var(--ease)',
    transitionDelay: `${delay}ms`,
  })

  return (
    <section
      className={`relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28 ${
        loaded ? 'visible' : ''
      }`}
    >
      {/* Straturi de atmosferă */}
      <div ref={gridRef} className="blueprint" aria-hidden="true" />
      <div ref={meshRef} className="mesh" aria-hidden="true" />
      <div className="fade-b" aria-hidden="true" />

      <div className="shell relative z-10 flex flex-1 flex-col justify-center pb-10">
        <div className="g12 items-end gap-y-14">
          {/* ── Coloana principală ── */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mono eyebrow mb-9" style={fade(60)}>
              <span className="live" aria-hidden="true" />
              Automatizare AI · România
            </div>

            <h1 className="display mb-9" style={{ fontSize: 'clamp(2.7rem, 6.6vw, 6rem)' }}>
              <span className="line-mask">
                <span style={line(120)}>Nu muncești</span>
              </span>
              <span className="line-mask">
                <span style={{ ...line(200), color: 'var(--bone-30)' }}>prea puțin.</span>
              </span>
              <span className="line-mask">
                <span style={line(300)}>Muncești</span>
              </span>
              <span className="line-mask">
                <span style={line(380)}>
                  fără <span style={{ color: 'var(--green)' }}>sistem</span>.
                </span>
              </span>
            </h1>

            <p className="lede mb-11 max-w-[40ch]" style={fade(560)}>
              Îți fac site-ul și pun roboți să răspundă clienților, să-i programeze
              și să țină evidența. Non-stop, fără tine.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row" style={fade(660)}>
              <span data-magnetic className="inline-flex">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green px-8 py-[1.15rem]"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.42 1.3-1.96 1.35-.5.05-.98.23-3.35-.7-2.82-1.11-4.6-3.99-4.74-4.18-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.97-2.31.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.47-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.28.14.45.12.61-.07.17-.19.7-.82.89-1.1.19-.28.38-.23.63-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.33.07.11.07.65-.17 1.33Z" />
                </svg>
                Scrie-mi pe WhatsApp
              </a>
              </span>
              <a href="#impact" className="btn btn-line px-8 py-[1.15rem]">
                Vezi cât pierzi acum
              </a>
            </div>
          </div>

          {/* ── Coloana tehnică ── */}
          <div className="col-span-12 lg:col-span-4" style={fade(780)}>
            <div className="mono-sm mb-4" style={{ color: 'var(--bone-30)' }}>
              Nextflow / stare curentă
            </div>
            <dl className="border-t" style={{ borderColor: 'var(--line-mid)' }}>
              {specs.map((s) => (
                <div
                  key={s.k}
                  className="flex items-center justify-between gap-4 border-b py-3.5"
                  style={{ borderColor: 'var(--line)' }}
                >
                  <dt className="mono-sm" style={{ color: 'var(--bone-30)' }}>
                    {s.k}
                  </dt>
                  <dd
                    className="num flex items-center gap-2 text-[0.8125rem] font-medium"
                    style={{ color: s.live ? 'var(--green)' : 'var(--bone-72)' }}
                  >
                    {s.live && <span className="live" aria-hidden="true" />}
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* ── Bara de jos: dovadă socială + indiciu de scroll ── */}
      <div
        className="relative z-10 border-t"
        style={{ borderColor: 'var(--line)', ...fade(900) }}
      >
        <div className="shell flex flex-wrap items-center justify-between gap-6 py-6">
          <p className="mono-sm flex items-center gap-2.5" style={{ color: 'var(--bone-46)' }}>
            <span className="live" aria-hidden="true" />
            <span style={{ color: 'var(--bone)' }}>20 de afaceri</span> automatizate
          </p>

          <div className="mono-sm flex items-center gap-3" style={{ color: 'var(--bone-30)' }}>
            Derulează
            <svg width="10" height="24" viewBox="0 0 10 24" fill="none" aria-hidden="true">
              <path
                d="M5 0V20M5 20L1 16M5 20L9 16"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
