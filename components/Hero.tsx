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

  const anim = { opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)' }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{ background: '#0B0B0B' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-bg pointer-events-none opacity-60" />

      {/* Ambient glow — green top-left */}
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(16,185,129,0.09) 0%, transparent 55%)' }}/>

      {/* Ambient glow — yellow top-right */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(245,197,24,0.07) 0%, transparent 55%)' }}/>

      {/* Ambient glow — center subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.04) 0%, transparent 65%)' }}/>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0B0B0B)' }}/>

      <div className="container-main relative z-10" ref={heroRef}>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge — animated shimmer */}
          <div className="hr mb-10" style={anim}>
            <span className="badge-shimmer inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              <span className="green-dot" />
              Automatizare AI · România
            </span>
          </div>

          {/* H1 */}
          <h1 className="hr font-black text-white mb-7"
            style={{ ...anim, fontSize: 'clamp(3rem, 7.5vw, 6rem)', lineHeight: '1.0', letterSpacing: '-0.045em' }}>
            Nu muncești
            <br />
            <span className="text-gradient-yellow">prea puțin.</span>
            <br />
            Muncești fără sistem.
          </h1>

          {/* Subtitle */}
          <p className="hr mb-12 max-w-[480px]"
            style={{ ...anim, fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: '1.7', color: 'rgba(255,255,255,0.42)' }}>
            Construim sisteme AI care lucrează în locul tău.
            <br />
            Tu câștigi timp, bani și control.
          </p>

          {/* CTAs */}
          <div className="hr flex flex-col sm:flex-row gap-3 mb-16" style={anim}>
            <a href="#cta" className="btn-primary text-base px-9 py-4">
              Vreau un Demo Gratuit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn-secondary text-base px-9 py-4">
              Cum funcționează
            </a>
          </div>

          {/* Social proof */}
          <div className="hr flex flex-col sm:flex-row items-center gap-5 text-sm"
            style={{ ...anim, color: 'rgba(255,255,255,0.32)' }}>
            <div className="avatar-stack flex">
              {avatarColors.map((color, i) => (
                <div key={i} className="avatar" style={{ backgroundColor: color, zIndex: avatarColors.length - i }}>
                  {avatarInitials[i]}
                </div>
              ))}
            </div>
            <div className="w-px h-5 hidden sm:block" style={{ background: 'rgba(255,255,255,0.1)' }}/>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#F5C518">
                  <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z"/>
                </svg>
              ))}
              <span className="font-semibold text-white ml-1.5">50+ afaceri</span>
              <span>automatizate</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <div className="scroll-indicator-line"/>
        <div className="scroll-indicator-dot"/>
      </div>
    </section>
  )
}
