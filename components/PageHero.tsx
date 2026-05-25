'use client'

import { useEffect, useRef } from 'react'

interface Props {
  label: string
  title: string
  titleHighlight?: string
  subtitle?: string
}

export default function PageHero({ label, title, titleHighlight, subtitle }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.querySelectorAll<HTMLElement>('.hr').forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = '1'
        item.style.transform = 'translateY(0)'
      }, 80 + i * 130)
    })
  }, [])

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-40 md:pb-24" style={{ background: '#0A0A0A' }}>
      <div className="absolute inset-0 dot-grid-bg pointer-events-none opacity-60" />
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[460px] pointer-events-none animate-float"
        style={{ background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.14) 0%, transparent 62%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0A)' }}
      />

      <div className="container-main relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto">
          <div className="hr mb-6 flex justify-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(212,175,55,0.1)',
                border: '1px solid rgba(212,175,55,0.25)',
                color: '#D4AF37',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              ✦ {label} ✦
            </span>
          </div>

          <h1
            className="hr font-serif text-white mb-5"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 4.6rem)', lineHeight: '1.05', fontWeight: 600 }}
          >
            {title}
            {titleHighlight && (
              <>
                {' '}
                <span className="text-gold-gradient">{titleHighlight}</span>
              </>
            )}
          </h1>

          {subtitle && (
            <p
              className="hr max-w-xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)' }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
