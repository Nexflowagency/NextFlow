'use client'

import { useEffect, useRef } from 'react'

const avatarColors = ['#10B981', '#F5C518', '#3B82F6', '#8B5CF6', '#EF4444']
const avatarInitials = ['AR', 'MC', 'DP', 'IL', 'SB']

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.querySelectorAll<HTMLElement>('.hr').forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = '1'
        item.style.transform = 'translateY(0)'
      }, 60 + i * 120)
    })
  }, [])

  const anim = { opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{ background: '#0B0B0B' }}>

      <div className="absolute inset-0 dot-grid-bg pointer-events-none opacity-70" />
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(16,185,129,0.1) 0%, transparent 60%)' }}/>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(245,197,24,0.07) 0%, transparent 60%)' }}/>
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0B0B0B)' }}/>

      <div className="container-main relative z-10" ref={heroRef}>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="hr mb-10" style={anim}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10B981' }}>
              <span className="green-dot" />
              Automatizare AI · România
            </span>
          </div>

          {/* H1 */}
          <h1 className="hr font-black text-white mb-5 md:mb-7"
            style={{ ...anim, fontSize: 'clamp(1.875rem, 7.5vw, 6rem)', lineHeight: '1.05', letterSpacing: '-0.04em', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
            Nu muncești
            <br />
            <span className="text-gradient-yellow">prea puțin.</span>
            <br />
            Muncești fără sistem.
          </h1>

          {/* Sub — very short */}
          <p className="hr mb-8 md:mb-12 max-w-[480px]"
            style={{ ...anim, fontSize: 'clamp(0.9375rem, 1.8vw, 1.15rem)', lineHeight: '1.7', color: 'rgba(255,255,255,0.45)' }}>
            Construim sisteme AI care lucrează în locul tău.
            <br />
            Tu câștigi timp, bani și control.
          </p>

          {/* CTAs */}
          <div className="hr flex flex-col sm:flex-row gap-3 mb-10 md:mb-16 w-full sm:w-auto" style={anim}>
            <a href="#cta" className="btn-primary text-base px-7 py-3.5 sm:px-9 sm:py-4 w-full sm:w-auto justify-center">
              Vreau un Demo Gratuit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn-secondary text-base px-7 py-3.5 sm:px-9 sm:py-4 w-full sm:w-auto justify-center">
              Cum funcționează
            </a>
          </div>

          {/* Social proof */}
          <div className="hr flex flex-col sm:flex-row items-center gap-4 text-sm"
            style={{ ...anim, color: 'rgba(255,255,255,0.35)' }}>
            <div className="avatar-stack flex">
              {avatarColors.map((color, i) => (
                <div key={i} className="avatar" style={{ backgroundColor: color, zIndex: avatarColors.length - i }}>
                  {avatarInitials[i]}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#F5C518">
                  <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z"/>
                </svg>
              ))}
              <span className="font-semibold text-white ml-1">50+ afaceri</span>
              <span>automatizate</span>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }}/>
      </div>
    </section>
  )
}
