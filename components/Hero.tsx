'use client'

import { useEffect, useRef } from 'react'

const avatarColors = ['#F5C518', '#10B981', '#3B82F6', '#8B5CF6', '#EF4444']
const avatarInitials = ['MR', 'JK', 'AS', 'TL', 'NB']

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.querySelectorAll<HTMLElement>('.hero-reveal').forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = '1'
        item.style.transform = 'translateY(0)'
      }, 80 + i * 130)
    })
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
      style={{ background: '#0B0B0B' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-bg pointer-events-none opacity-100" />

      {/* Yellow top-left glow */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(245,197,24,0.09) 0%, transparent 65%)' }}/>

      {/* Green top-right glow */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(16,185,129,0.07) 0%, transparent 65%)' }}/>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0B0B0B)' }}/>

      <div className="container-main relative z-10" ref={heroRef}>
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* Badge */}
          <div className="hero-reveal mb-8"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.25)', color: '#F5C518' }}>
              <span className="yellow-dot" />
              AI Automation Agency
            </span>
          </div>

          {/* H1 */}
          <h1 className="hero-reveal font-black text-white mb-6"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              lineHeight: '1.0',
              letterSpacing: '-0.04em',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}>
            Automate your business.
            <br />
            <span className="text-gradient-yellow">Scale without chaos.</span>
          </h1>

          {/* Sub */}
          <p className="hero-reveal mb-10 max-w-[560px]"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.5)',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}>
            We build AI systems that handle your leads, follow-ups, and
            operations automatically — so you focus on growth, not grind.
          </p>

          {/* CTAs */}
          <div className="hero-reveal flex flex-col sm:flex-row gap-3 mb-14"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
            <a href="#cta" className="btn-primary text-base px-8 py-4">
              Book a Free Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn-secondary text-base px-8 py-4">
              See How It Works
            </a>
          </div>

          {/* Social proof */}
          <div className="hero-reveal flex flex-col sm:flex-row items-center gap-4 text-sm"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease', color: 'rgba(255,255,255,0.4)' }}>
            <div className="avatar-stack flex">
              {avatarColors.map((color, i) => (
                <div key={i} className="avatar" style={{ backgroundColor: color, zIndex: avatarColors.length - i }}>
                  {avatarInitials[i]}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#F5C518">
                    <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z"/>
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-white">50+</span>
              <span>businesses automated</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-25">
        <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem' }}>Scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }}/>
      </div>
    </section>
  )
}
