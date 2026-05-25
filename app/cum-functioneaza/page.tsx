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

const steps = [
  {
    num: '01',
    title: 'Consultație gratuită',
    desc: 'Înțelegem afacerea ta și identificăm oportunitățile de automatizare.',
    detail: 'Începem cu un apel de 30-45 minute în care mapăm complet procesele tale actuale. Identificăm unde pierzi timp și bani, ce poate fi automatizat și care este potențialul de creștere. Nu există costuri pentru această etapă.',
    color: '#10B981',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    highlights: [
      'Apel de 30-45 minute complet gratuit',
      'Analiză completă a proceselor actuale',
      'Identificare oportunități de automatizare',
      'Estimare ROI și economii potențiale',
    ],
  },
  {
    num: '02',
    title: 'Plan personalizat',
    desc: 'Creăm o strategie customizată cu soluțiile potrivite pentru tine.',
    detail: 'Pe baza consultației, construim un plan detaliat specific afacerii tale. Alegem exact ce sisteme AI se potrivesc cel mai bine, stabilim prioritățile și definim metricile de succes. Primești o propunere clară cu costuri și termene.',
    color: '#F5C518',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    highlights: [
      'Strategie customizată pentru afacerea ta',
      'Selecție soluții AI potrivite',
      'Plan clar cu costuri și termene',
      'KPI-uri și metrici de succes definite',
    ],
  },
  {
    num: '03',
    title: 'Implementare rapidă',
    desc: 'Construim și integrăm sistemele în 2-4 săptămâni.',
    detail: 'Echipa noastră se ocupă de tot: configurare, integrare cu sistemele existente, testare și lansare. Primești update-uri săptămânale despre progres. Implementăm rapid fără să perturbăm activitatea curentă a afacerii tale.',
    color: '#10B981',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    highlights: [
      'Implementare completă în 2-4 săptămâni',
      'Integrare cu sistemele existente',
      'Update-uri săptămânale de progres',
      'Lansare fără perturbarea activității',
    ],
  },
  {
    num: '04',
    title: 'Rezultate măsurabile',
    desc: 'Urmărim KPI-urile și optimizăm continuu pentru ROI maxim.',
    detail: 'Monitorizăm constant performanța sistemelor și facem ajustări pentru a maximiza rezultatele. Primești rapoarte lunare detaliate cu toate metricile importante. Suportul nostru este disponibil oricând ai nevoie.',
    color: '#F5C518',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    highlights: [
      'Monitorizare continuă a performanței',
      'Optimizare pentru ROI maxim',
      'Rapoarte lunare detaliate',
      'Suport tehnic disponibil 24/7',
    ],
  },
]

const faqs = [
  {
    q: 'Cât durează implementarea unui sistem AI?',
    a: 'De obicei între 2 și 4 săptămâni, în funcție de complexitatea proiectului. Un chatbot simplu poate fi live în câteva zile, în timp ce un sistem CRM complet cu agent vocal poate dura 3-4 săptămâni.',
  },
  {
    q: 'Trebuie să am cunoștințe tehnice?',
    a: 'Nu. Ne ocupăm de tot din punct de vedere tehnic. Tu trebuie doar să ne explici procesele de business și noi construim, integrăm și configurăm totul. Primești un sistem gata de utilizat.',
  },
  {
    q: 'Ce se întâmplă dacă sistemul nu funcționează cum trebuie?',
    a: 'Oferim garanție de funcționare și suport continuu. Monitorizăm activ sistemele și intervenim rapid la orice problemă. Optimizăm continuu pentru a atinge și depăși KPI-urile stabilite.',
  },
  {
    q: 'Se poate integra cu sistemele pe care le folosesc deja?',
    a: 'Da, în marea majoritate a cazurilor. Integrăm cu CRM-uri populare (HubSpot, Salesforce, etc.), Google Workspace, diverse platforme de e-commerce și multe altele. Discutăm în detaliu în consultația gratuită.',
  },
]

export default function CumFunctioneazaPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useReveal(stepsRef as React.RefObject<HTMLElement>)
  useReveal(faqRef as React.RefObject<HTMLElement>)
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
                Proces simplu
              </span>
            </div>
            <h1 className="hr font-black text-white mb-5"
              style={{ ...anim, fontSize: 'clamp(1.875rem, 6vw, 4rem)', lineHeight: '1.05', letterSpacing: '-0.04em' }}>
              De la idee la sistem
              <br />
              <span className="text-gradient-yellow">în 4 pași simpli</span>
            </h1>
            <p className="hr max-w-xl mx-auto"
              style={{ ...anim, fontSize: '1.0625rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.5)' }}>
              Nu e complicat. Noi gestionăm toată complexitatea tehnică — tu te concentrezi pe afacerea ta.
            </p>
          </div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="section-py" style={{ background: '#111111' }}>
        <div className="container-main" ref={stepsRef}>
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className={`reveal reveal-delay-${(i % 3) + 1} rounded-2xl p-8 md:p-10`}
                style={{ background: '#0B0B0B', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left: number + title */}
                  <div className="md:w-72 shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center font-black text-lg"
                        style={{ background: `${step.color}12`, border: `1px solid ${step.color}28`, color: step.color, letterSpacing: '-0.03em' }}>
                        {step.num}
                      </div>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${step.color}10`, color: step.color }}>
                        {step.icon}
                      </div>
                    </div>
                    <h2 className="font-black text-white text-2xl mb-2" style={{ letterSpacing: '-0.03em' }}>
                      {step.title}
                    </h2>
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {step.desc}
                    </p>
                  </div>
                  {/* Right: detail + highlights */}
                  <div className="flex-1 flex flex-col gap-5">
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {step.detail}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                            <circle cx="7" cy="7" r="6" fill={step.color} fillOpacity="0.12"/>
                            <path d="M4 7L6 9L10 5" stroke={step.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-py" style={{ background: '#0B0B0B' }}>
        <div className="container-main" ref={faqRef}>
          <div className="text-center mb-12">
            <p className="section-label mb-5 reveal justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
              Întrebări frecvente
            </p>
            <h2 className="reveal reveal-delay-1 font-black text-white"
              style={{ fontSize: 'clamp(1.625rem, 5vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              Ai întrebări?
              <br />
              <span className="text-gradient-green">Noi avem răspunsuri.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 3) + 1} rounded-2xl p-7`}
                style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 className="font-black text-white mb-3" style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em' }}>
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {faq.a}
                </p>
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
              Începe cu o consultație gratuită
            </h2>
            <p className="reveal reveal-delay-1 text-base font-medium mb-8" style={{ color: 'rgba(11,11,11,0.6)' }}>
              30 de minute care îți pot transforma afacerea. Fără obligații, fără costuri ascunse.
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
