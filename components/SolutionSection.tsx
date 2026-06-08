'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const solutions = [
  {
    number: '01',
    title: 'Agent Vocal AI',
    description:
      'Un agent vocal AI care preia apeluri, califică lead-uri și programează întâlniri — 24/7, fără intervenție umană. Niciun prospect nu se mai pierde.',
    highlight: 'Răspuns instant. Oricând.',
  },
  {
    number: '02',
    title: 'Automatizare Follow-Up',
    description:
      'Secvențe inteligente de urmărire care se declanșează automat în funcție de comportamentul clientului. Mesajul potrivit, la momentul potrivit.',
    highlight: 'Mai multe vânzări. Zero efort manual.',
  },
  {
    number: '03',
    title: 'CRM Automatizat',
    description:
      'CRM-ul tău nu mai este un cimitir de contacte uitate. Fiecare lead este urmărit, punctat și mutat automat prin pipeline.',
    highlight: 'Vizibilitate completă asupra pipeline-ului.',
  },
  {
    number: '04',
    title: 'Automatizare Operațiuni',
    description:
      'Eliminăm sarcinile repetitive: introducere date, programări, raportări, notificări. Echipa ta se concentrează pe ce aduce cu adevărat venituri.',
    highlight: 'Ore economisite în fiecare săptămână.',
  },
]

export default function SolutionSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" id="servicii"
      style={{ background: '#0D1525' }}>
      <div className="absolute inset-0 dot-grid-bg pointer-events-none opacity-30" />

      <div className="container-main relative z-10" ref={ref}>
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4 reveal">
            <span className="gold-dot" />
            Serviciile Noastre
          </p>
          <h2 className="reveal font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            Sisteme care lucrează
            <br />
            <span className="text-gradient-yellow">în timp ce tu dormi.</span>
          </h2>
          <p className="reveal text-white/40 mt-4 text-lg leading-relaxed">
            Automatizare AI personalizată pentru afacerea ta. Nu șabloane — sisteme care se potrivesc exact cu modul în care operezi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((item, i) => (
            <div key={i} className="card reveal group">
              <div className="flex items-start gap-4 mb-5">
                <span className="text-xs font-bold tracking-widest rounded-lg px-2.5 py-1.5 shrink-0"
                  style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.25)', color: '#D4AF37' }}>
                  {item.number}
                </span>
              </div>
              <h3 className="font-bold text-white mb-3"
                style={{ fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5">{item.description}</p>
              <div className="flex items-center gap-2 pt-5"
                style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
                  <path d="M3 7.5L6 10.5L12 4.5" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-semibold" style={{ color: '#D4AF37' }}>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
