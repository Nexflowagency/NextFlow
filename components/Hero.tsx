'use client'

import { useEffect, useRef } from 'react'

const avatarColors = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444']
const avatarInitials = ['MR', 'JK', 'AS', 'TL', 'NB']

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    // Stagger animate children with class 'hero-reveal'
    const items = el.querySelectorAll<HTMLElement>('.hero-reveal')
    items.forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = '1'
        item.style.transform = 'translateY(0)'
      }, 100 + i * 120)
    })
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-16">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" />

      {/* Radial fade overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 70%, #FFFFFF 100%)',
        }}
      />

      {/* Green glow top-right */}
      <div
        className="absolute -top-40 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(16,185,129,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container-main relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div
            className="hero-reveal mb-8"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E7EB] bg-white text-sm font-medium text-[#6B7280]"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <span className="green-dot" />
              AI Automation Agency
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-reveal font-black text-[#0B0B0B] mb-6"
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)',
              lineHeight: '1.02',
              letterSpacing: '-0.04em',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            Automate your business.
            <br />
            <span className="text-gradient-green">Scale without chaos.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="hero-reveal text-[#6B7280] mb-10 max-w-[560px]"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.65',
              opacity: 0,
              transform: 'translateY(24px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            We build AI systems that handle your leads, follow-ups, and
            operations automatically — so you focus on growth, not grind.
          </p>

          {/* CTAs */}
          <div
            className="hero-reveal flex flex-col sm:flex-row gap-3 mb-14"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          >
            <a href="#cta" className="btn-primary text-base px-8 py-4">
              Book a Free Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn-secondary text-base px-8 py-4">
              See How It Works
            </a>
          </div>

          {/* Social proof */}
          <div
            className="hero-reveal flex flex-col sm:flex-row items-center gap-4 text-sm text-[#6B7280]"
            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
          >
            {/* Avatar stack */}
            <div className="flex items-center">
              <div className="avatar-stack flex">
                {avatarColors.map((color, i) => (
                  <div
                    key={i}
                    className="avatar"
                    style={{ backgroundColor: color, zIndex: avatarColors.length - i }}
                  >
                    {avatarInitials[i]}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
                    <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z"/>
                  </svg>
                ))}
              </div>
              <span className="font-medium text-[#0B0B0B]">50+</span>
              <span>businesses automated</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-xs text-[#9CA3AF] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#9CA3AF] to-transparent" />
      </div>
    </section>
  )
}
