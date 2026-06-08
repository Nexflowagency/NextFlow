'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    step: '01',
    title: 'Analizăm afacerea ta',
    description:
      'Într-un apel strategic de 30 de minute, cartografiem fluxul de lead-uri, identificăm unde pierzi timp și bani și proiectăm arhitectura de automatizare personalizată.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 2V7M14 21V26M2 14H7M21 14H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Construim sistemul tău',
    description:
      'Echipa noastră construiește stiva completă de automatizare — capturare lead-uri, secvențe de follow-up, integrări CRM — adaptată exact modului în care funcționează afacerea ta.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 15V18H23M20 21V18M17 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Tu scalezi fără haos',
    description:
      'Sistemul intră în funcțiune. Lead-urile sunt gestionate automat. Follow-up-urile rulează singure. Tu te concentrezi pe încheierea contractelor și creștere — nu pe gestionarea sarcinilor.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 14L14 18L20 10L24 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 10H24V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 24H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" id="cum-functioneaza"
      style={{ background: '#0D1525' }}>
      <div className="absolute inset-0 dot-grid-bg pointer-events-none opacity-25" />

      <div className="container-main relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <p className="section-label mb-4 reveal justify-center">
            <span className="gold-dot" />
            Cum Funcționează
          </p>
          <h2 className="reveal font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            De la primul apel la
            <br />
            <span className="text-gradient-yellow">complet automatizat — în săptămâni.</span>
          </h2>
          <p className="reveal text-white/40 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
            Trei pași clari. Fără bătăi de cap tehnice. Doar rezultate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[28px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.4) 50%, rgba(212,175,55,0.2) 100%)' }}/>

          {steps.map((step, i) => (
            <div key={i} className="reveal flex flex-col items-center md:items-start text-center md:text-left">
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                  style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', color: '#D4AF37' }}>
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center z-20"
                  style={{ background: '#D4AF37', fontSize: '0.65rem', fontWeight: '800', color: '#000', letterSpacing: '-0.02em' }}>
                  {i + 1}
                </div>
              </div>
              <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#D4AF37' }}>
                Pasul {step.step}
              </div>
              <h3 className="font-bold text-white mb-3"
                style={{ fontSize: '1.25rem', letterSpacing: '-0.02em', lineHeight: '1.3' }}>
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs md:max-w-none">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <p className="text-white/30 text-sm mb-4">Ești gata să începi?</p>
          <a href="#contact" className="btn-primary">
            Programează un Apel Gratuit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
