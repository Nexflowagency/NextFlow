'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const testimonials = [
  {
    quote:
      'Pierdeam 40% din lead-uri din cauza follow-up-ului lent. După ce NextFlow ne-a construit automatizarea, timpul de răspuns a scăzut la sub 2 minute. Veniturile au crescut cu 60% în 3 luni.',
    name: 'Andrei Radu',
    role: 'CEO',
    company: 'Radu Imobiliare',
    avatar: 'AR',
    color: '#10B981',
    industry: 'Imobiliare',
  },
  {
    quote:
      'Petreceam ore întregi pe sarcini administrative. Acum CRM-ul se actualizează singur, follow-up-urile ies automat și am în sfârșit timp să-mi conduc clinica. A fost o schimbare radicală.',
    name: 'Dr. Monica Cristea',
    role: 'Fondator',
    company: 'Cristea Medical Clinic',
    avatar: 'MC',
    color: '#3B82F6',
    industry: 'Medicală',
  },
  {
    quote:
      'NextFlow a automatizat complet fluxul nostru de onboarding și nurture. Am trecut de la 3 clienți semnați pe lună la 9 — cu aceeași echipă.',
    name: 'Dan Popescu',
    role: 'Director',
    company: 'Popescu Digital Agency',
    avatar: 'DP',
    color: '#8B5CF6',
    industry: 'Agenție',
  },
]

export default function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" id="testimoniale"
      style={{ background: '#070D1A' }}>
      <div className="absolute inset-0 dot-grid-bg pointer-events-none opacity-20" />

      <div className="container-main relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <p className="section-label mb-4 reveal justify-center">
            <span className="gold-dot" />
            Testimoniale
          </p>
          <h2 className="reveal font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            Afaceri care au ales
            <br />
            <span className="text-gradient-yellow">să lucreze mai inteligent.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="reveal flex flex-col rounded-2xl p-8"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(212,175,55,0.15)',
              }}>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#D4AF37">
                    <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="text-white/55 leading-relaxed mb-8 flex-1"
                style={{ fontSize: '0.9375rem' }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div style={{ borderTop: '1px solid rgba(212,175,55,0.12)', paddingTop: '1.5rem' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: t.color }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-white/30 text-xs">{t.role}, {t.company}</div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(212,175,55,0.1)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.2)' }}>
                      {t.industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-wrap justify-center items-center gap-6 text-xs font-medium tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.2)' }}>
          <span>Imobiliare</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span>Medicală</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span>Agenții</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span>E-commerce</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span>Consultanță</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span>Finanțe</span>
        </div>
      </div>
    </section>
  )
}
