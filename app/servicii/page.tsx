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

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    title: 'Agent Vocal AI',
    desc: 'Preia apeluri automat, programează întâlniri, răspunde FAQ-uri 24/7. Nu mai pierzi niciun apel.',
    features: [
      'Răspunde automat la apeluri 24/7',
      'Programează întâlniri în calendar',
      'Răspunde la întrebările frecvente',
      'Transfer inteligent către om',
      'Rapoarte detaliate despre apeluri',
      'Integrare cu orice sistem CRM',
    ],
    accent: '#10B981',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#F5C518" stroke="none"/>
      </svg>
    ),
    title: 'Social Media AI',
    desc: 'Creează conținut, publică automat pe toate platformele, răspunde la comentarii.',
    features: [
      'Generare automată de conținut',
      'Publicare pe toate platformele',
      'Răspuns automat la comentarii',
      'Planificare editorială inteligentă',
      'Analiză de performanță în timp real',
      'A/B testing pentru postări',
    ],
    accent: '#F5C518',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'CRM Automatizat',
    desc: 'Urmărire lead-uri, follow-up-uri inteligente, pipeline vizual în timp real.',
    features: [
      'Pipeline vizual în timp real',
      'Follow-up-uri automate personalizate',
      'Scoring și calificare lead-uri',
      'Integrare cu email și WhatsApp',
      'Rapoarte de vânzări automate',
      'Alerte inteligente pentru echipă',
    ],
    accent: '#10B981',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'Chatbot Website',
    desc: 'Calificare lead-uri instant, răspunsuri 24/7, transfer către om când e necesar.',
    features: [
      'Disponibil 24/7 pe site-ul tău',
      'Califică lead-urile automat',
      'Răspunde la întrebări frecvente',
      'Transfer inteligent către agent uman',
      'Colectare date contact',
      'Integrare cu CRM-ul tău',
    ],
    accent: '#F5C518',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Calendar Smart',
    desc: 'Programare self-service pentru clienți, reminder-e automate, sincronizare calendare.',
    features: [
      'Programare self-service pentru clienți',
      'Reminder-e automate SMS/email',
      'Sincronizare cu Google Calendar',
      'Reschedulare ușoară pentru clienți',
      'Reducere no-show cu până la 60%',
      'Gestionare mai multe locații',
    ],
    accent: '#10B981',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Email & WhatsApp Marketing',
    desc: 'Campanii automate personalizate, A/B testing, rapoarte detaliate.',
    features: [
      'Campanii email automate personalizate',
      'Secvențe WhatsApp automate',
      'A/B testing pentru optimizare',
      'Segmentare avansată a audienței',
      'Rapoarte detaliate de performanță',
      'Integrare cu CRM și e-commerce',
    ],
    accent: '#F5C518',
  },
]

export default function ServiciiPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useReveal(cardsRef as React.RefObject<HTMLElement>)
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
          style={{ background: 'radial-gradient(ellipse at top, rgba(16,185,129,0.1) 0%, transparent 60%)' }}/>

        <div className="container-main relative z-10" ref={heroRef}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="hr mb-6" style={anim}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10B981' }}>
                <span className="green-dot" />
                Servicii complete
              </span>
            </div>
            <h1 className="hr font-black text-white mb-5"
              style={{ ...anim, fontSize: 'clamp(1.875rem, 6vw, 4rem)', lineHeight: '1.05', letterSpacing: '-0.04em' }}>
              Soluții AI pentru
              <br />
              <span className="text-gradient-green">fiecare nevoie</span>
            </h1>
            <p className="hr max-w-xl mx-auto"
              style={{ ...anim, fontSize: '1.0625rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.5)' }}>
              De la agenți vocali la automatizări CRM — construim sisteme complete care lucrează în locul tău, zi și noapte.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES CARDS ── */}
      <section className="section-py" style={{ background: '#111111' }}>
        <div className="container-main" ref={cardsRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className={`reveal reveal-delay-${(i % 3) + 1} rounded-2xl p-8`}
                style={{ background: '#0B0B0B', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${s.accent}10`, border: `1px solid ${s.accent}20` }}>
                    {s.icon}
                  </div>
                  <div>
                    <h2 className="font-black text-white text-xl mb-2" style={{ letterSpacing: '-0.02em' }}>
                      {s.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                        <circle cx="7" cy="7" r="6" fill={s.accent} fillOpacity="0.12"/>
                        <path d="M4 7L6 9L10 5" stroke={s.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
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
              Alege serviciile potrivite pentru tine
            </h2>
            <p className="reveal reveal-delay-1 text-base font-medium mb-8" style={{ color: 'rgba(11,11,11,0.6)' }}>
              Programează o consultație gratuită și creăm împreună pachetul ideal pentru afacerea ta.
            </p>
            <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-ghost-dark text-base px-8 py-4 w-full sm:w-auto justify-center">
                Consultație Gratuită
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href="tel:+40767422497"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 w-full sm:w-auto"
                style={{ background: 'rgba(11,11,11,0.08)', color: '#0B0B0B' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(11,11,11,0.14)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(11,11,11,0.08)')}>
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
