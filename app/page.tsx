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
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )
    const els = container.querySelectorAll<HTMLElement>('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [containerRef])
}

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    title: 'Agent Vocal AI',
    desc: 'Preia apeluri automat, programează întâlniri, răspunde FAQ-uri 24/7. Nu mai pierzi niciun apel.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#10B981" stroke="none"/>
      </svg>
    ),
    title: 'Social Media AI',
    desc: 'Creează conținut, publică automat pe toate platformele, răspunde la comentarii.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'CRM Automatizat',
    desc: 'Urmărire lead-uri, follow-up-uri inteligente, pipeline vizual în timp real.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'Chatbot Website',
    desc: 'Calificare lead-uri instant, răspunsuri 24/7, transfer către om când e necesar.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Calendar Smart',
    desc: 'Programare self-service pentru clienți, reminder-e automate, sincronizare calendare.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Email & WhatsApp Marketing',
    desc: 'Campanii automate personalizate, A/B testing, rapoarte detaliate.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Consultație gratuită',
    desc: 'Înțelegem afacerea ta și identificăm oportunitățile de automatizare.',
    color: '#10B981',
  },
  {
    num: '02',
    title: 'Plan personalizat',
    desc: 'Creăm o strategie customizată cu soluțiile potrivite pentru tine.',
    color: '#F5C518',
  },
  {
    num: '03',
    title: 'Implementare rapidă',
    desc: 'Construim și integrăm sistemele în 2-4 săptămâni.',
    color: '#10B981',
  },
  {
    num: '04',
    title: 'Rezultate măsurabile',
    desc: 'Urmărim KPI-urile și optimizăm continuu pentru ROI maxim.',
    color: '#F5C518',
  },
]

const stats = [
  { value: '50+', label: 'Clienți activi' },
  { value: '200+', label: 'Automatizări livrate' },
  { value: '40h', label: 'Economisiți/săpt.' },
  { value: '24/7', label: 'Sisteme active' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useReveal(servicesRef as React.RefObject<HTMLElement>)
  useReveal(processRef as React.RefObject<HTMLElement>)
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

      {/* ── HERO ── */}
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
              style={{ ...anim, fontSize: 'clamp(1.875rem, 7.5vw, 5.5rem)', lineHeight: '1.05', letterSpacing: '-0.04em' }}>
              Afacerea ta merită
              <br />
              <span className="text-gradient-yellow">tehnologie de excepție</span>
            </h1>

            {/* Subtitle */}
            <p className="hr mb-8 md:mb-12 max-w-[560px]"
              style={{ ...anim, fontSize: 'clamp(0.9375rem, 1.8vw, 1.125rem)', lineHeight: '1.7', color: 'rgba(255,255,255,0.5)' }}>
              Transformăm companiile românești prin agenți vocali, automatizări CRM și chatboți inteligenți.
            </p>

            {/* CTAs */}
            <div className="hr flex flex-col sm:flex-row gap-3 mb-12 md:mb-16 w-full sm:w-auto" style={anim}>
              <Link href="/contact" className="btn-primary text-base px-7 py-3.5 sm:px-9 sm:py-4 w-full sm:w-auto justify-center">
                Programează Acum
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary text-base px-7 py-3.5 sm:px-9 sm:py-4 w-full sm:w-auto justify-center">
                Consultație Gratuită
              </Link>
            </div>

            {/* Stats */}
            <div className="hr grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full max-w-2xl" style={anim}>
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span className="font-black text-white"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', letterSpacing: '-0.04em', color: '#F5C518' }}>
                    {s.value}
                  </span>
                  <span className="text-xs font-medium text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section-py" style={{ background: '#111111' }}>
        <div className="container-main" ref={servicesRef}>
          <div className="text-center mb-14">
            <p className="section-label mb-5 reveal justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
              Servicii
            </p>
            <h2 className="reveal reveal-delay-1 font-black text-white"
              style={{ fontSize: 'clamp(1.625rem, 5vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              Tot ce ai nevoie pentru a
              <br />
              <span className="text-gradient-green">automatiza și scala</span>
            </h2>
            <p className="reveal reveal-delay-2 mt-4 max-w-xl mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Soluții AI complete, construite special pentru afacerile românești care vor să crească fără să angajeze mai mult personal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Link href="/servicii" key={s.title}
                className={`reveal reveal-delay-${(i % 4) + 1} card group cursor-pointer`}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}>
                  {s.icon}
                </div>
                <h3 className="font-black text-white text-lg mb-2" style={{ letterSpacing: '-0.02em' }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold transition-colors"
                  style={{ color: '#10B981' }}>
                  Află mai mult
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/servicii" className="btn-secondary text-sm px-7 py-3.5 inline-flex">
              Vezi toate serviciile
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-py" style={{ background: '#0B0B0B' }}>
        <div className="container-main" ref={processRef}>
          <div className="text-center mb-14">
            <p className="section-label mb-5 reveal justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
              Procesul nostru
            </p>
            <h2 className="reveal reveal-delay-1 font-black text-white"
              style={{ fontSize: 'clamp(1.625rem, 5vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              4 pași spre
              <br />
              <span className="text-gradient-yellow">automatizare completă</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <div key={step.num} className={`reveal reveal-delay-${i + 1} rounded-2xl p-7`}
                style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg mb-5"
                  style={{ background: `${step.color}12`, border: `1px solid ${step.color}28`, color: step.color, letterSpacing: '-0.03em' }}>
                  {step.num}
                </div>
                <h3 className="font-black text-white mb-2" style={{ fontSize: '1.125rem', letterSpacing: '-0.02em' }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/cum-functioneaza" className="btn-secondary text-sm px-7 py-3.5 inline-flex">
              Cum funcționează în detaliu
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="section-py" style={{ background: '#F5C518' }}>
        <div className="container-main" ref={ctaRef}>
          <div className="text-center max-w-2xl mx-auto">
            <p className="reveal text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(11,11,11,0.5)' }}>
              Gata să începi?
            </p>
            <h2 className="reveal reveal-delay-1 font-black text-[#0B0B0B]"
              style={{ fontSize: 'clamp(1.625rem, 5vw, 3.5rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              Gata să automatizezi?
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-base font-medium" style={{ color: 'rgba(11,11,11,0.6)' }}>
              Programează o consultație gratuită și descoperă cum putem transforma afacerea ta.
            </p>
            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link href="/contact" className="btn-ghost-dark text-base px-8 py-4 w-full sm:w-auto justify-center">
                Programează Acum
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href="tel:+40767422497" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 w-full sm:w-auto"
                style={{ background: 'rgba(11,11,11,0.08)', color: '#0B0B0B' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(11,11,11,0.14)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(11,11,11,0.08)')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                +40 767 422 497
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
