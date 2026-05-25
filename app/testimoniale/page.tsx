'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function useReveal(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    const els = container.querySelectorAll<HTMLElement>('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [containerRef])
}

const stats = [
  { value: '50+', label: 'Clienți activi', color: '#10B981' },
  { value: '200+', label: 'Automatizări livrate', color: '#F5C518' },
  { value: '40h', label: 'Economisiți/săpt.', color: '#10B981' },
  { value: '24/7', label: 'Sisteme active', color: '#F5C518' },
]

const testimonials = [
  {
    quote: 'Am economisit echivalentul a 3 angajați full-time. Rata no-show a scăzut cu 60% după implementarea agentului vocal.',
    name: 'Alexandru M.',
    role: 'Clinică medicală',
    avatar: 'AM',
    color: '#10B981',
    textColor: '#fff',
    rating: 5,
    highlight: '60% reducere no-show',
  },
  {
    quote: 'CRM-ul automatizat ne-a dublat rata de conversie. Niciun lead nu mai cade prin crăpături.',
    name: 'Maria P.',
    role: 'Agenție imobiliară',
    avatar: 'MP',
    color: '#F5C518',
    textColor: '#0B0B0B',
    rating: 5,
    highlight: '2x rata de conversie',
  },
  {
    quote: 'Chatbot-ul răspunde la 90% din întrebările clienților. Echipa mea se ocupă acum de ce contează cu adevărat.',
    name: 'Dan I.',
    role: 'E-commerce',
    avatar: 'DI',
    color: '#10B981',
    textColor: '#fff',
    rating: 5,
    highlight: '90% întrebări automatizate',
  },
]

const moreTestimonials = [
  {
    quote: 'Pierdeam 40% din lead-uri. Acum răspund în 2 minute automat. +60% venituri în 3 luni.',
    name: 'Marco R.',
    role: 'Agenție imobiliară',
    avatar: 'MR',
    color: '#10B981',
    textColor: '#fff',
    rating: 5,
  },
  {
    quote: 'Am scăpat de 3 ore de admin zilnic. CRM-ul se actualizează singur. Nu mi-aș fi imaginat că e posibil.',
    name: 'Dr. Sara K.',
    role: 'Clinică estetică',
    avatar: 'SK',
    color: '#F5C518',
    textColor: '#0B0B0B',
    rating: 5,
  },
  {
    quote: 'De la 3 clienți pe lună la 9 — cu aceeași echipă. Sistemul face munca în locul nostru.',
    name: 'James H.',
    role: 'Agenție digitală',
    avatar: 'JH',
    color: '#10B981',
    textColor: '#fff',
    rating: 5,
  },
]

export default function TestimonialePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const moreRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useReveal(statsRef as React.RefObject<HTMLElement>)
  useReveal(testimonialsRef as React.RefObject<HTMLElement>)
  useReveal(moreRef as React.RefObject<HTMLElement>)
  useReveal(ctaRef as React.RefObject<HTMLElement>)

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
    <main className="min-h-screen">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-20" style={{ background: '#0B0B0B' }}>
        <div className="absolute inset-0 dot-grid-bg pointer-events-none opacity-50" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(245,197,24,0.08) 0%, transparent 60%)' }}/>

        <div className="container-main relative z-10" ref={heroRef}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="hr mb-6" style={anim}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{ background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.25)', color: '#F5C518' }}>
                <span className="yellow-dot" />
                Rezultate reale
              </span>
            </div>
            <h1 className="hr font-black text-white mb-5"
              style={{ ...anim, fontSize: 'clamp(1.875rem, 6vw, 4rem)', lineHeight: '1.05', letterSpacing: '-0.04em' }}>
              Clienții noștri
              <br />
              <span className="text-gradient-yellow">vorbesc</span>
            </h1>
            <p className="hr max-w-xl mx-auto"
              style={{ ...anim, fontSize: '1.0625rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.5)' }}>
              Peste 50 de afaceri din România au ales NextFlow pentru a automatiza și scala. Iată ce spun ei.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14" style={{ background: '#111111' }}>
        <div className="container-main" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="reveal text-center">
                <div className="font-black mb-1"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.04em', color: s.color }}>
                  {s.value}
                </div>
                <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN TESTIMONIALS ── */}
      <section className="section-py" style={{ background: '#0B0B0B' }}>
        <div className="container-main" ref={testimonialsRef}>
          <div className="text-center mb-12">
            <h2 className="reveal font-black text-white"
              style={{ fontSize: 'clamp(1.625rem, 5vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              Poveștile lor de succes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} rounded-2xl p-8 flex flex-col gap-6`}
                style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)' }}>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#F5C518">
                      <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z"/>
                    </svg>
                  ))}
                </div>

                {/* Highlight badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold w-fit"
                  style={{ background: `${t.color}15`, color: t.color }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1L6.18 3.63L9 4.07L6.94 6.08L7.56 9L5 7.63L2.44 9L3.06 6.08L1 4.07L3.82 3.63L5 1Z" fill="currentColor"/>
                  </svg>
                  {t.highlight}
                </div>

                {/* Quote */}
                <p className="font-semibold text-white leading-relaxed flex-1"
                  style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ backgroundColor: t.color, color: t.textColor }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MORE TESTIMONIALS ── */}
      <section className="section-py" style={{ background: '#111111' }}>
        <div className="container-main" ref={moreRef}>
          <div className="text-center mb-12">
            <h2 className="reveal font-black text-white"
              style={{ fontSize: 'clamp(1.375rem, 4vw, 2.25rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              Mai multe povești de succes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {moreTestimonials.map((t, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} rounded-2xl p-7 flex flex-col gap-5`}
                style={{ background: '#0B0B0B', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} width="13" height="13" viewBox="0 0 14 14" fill="#F5C518">
                      <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z"/>
                    </svg>
                  ))}
                </div>
                <p className="font-semibold text-white leading-relaxed flex-1" style={{ fontSize: '0.9375rem' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ backgroundColor: t.color, color: t.textColor }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-py" style={{ background: '#F5C518' }}>
        <div className="container-main" ref={ctaRef}>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="reveal font-black text-[#0B0B0B] mb-4"
              style={{ fontSize: 'clamp(1.625rem, 5vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              Vrei și tu rezultate ca ale lor?
            </h2>
            <p className="reveal reveal-delay-1 text-base font-medium mb-8" style={{ color: 'rgba(11,11,11,0.6)' }}>
              Fii următoarea poveste de succes. Programează o consultație gratuită astăzi.
            </p>
            <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-ghost-dark text-base px-8 py-4 w-full sm:w-auto justify-center">
                Programează Acum
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href="https://wa.me/40767422497" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 w-full sm:w-auto"
                style={{ background: 'rgba(11,11,11,0.08)', color: '#0B0B0B' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(11,11,11,0.14)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(11,11,11,0.08)')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
