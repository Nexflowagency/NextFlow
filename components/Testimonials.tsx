'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Pierdeam 40% din lead-uri din cauza follow-up-ului lent. După ce Nextflow ne-a construit automatizarea, timpul de răspuns a scăzut sub 2 minute. Veniturile au crescut cu 60% în 3 luni.',
    name: 'Marco Reyes', role: 'CEO', company: 'Reyes Imobiliare',
    avatar: 'MR', color: '#10B981', textColor: '#FFFFFF', industry: 'Imobiliare',
  },
  {
    quote: 'Pierdeam ore întregi cu administrație. Acum CRM-ul se actualizează singur, follow-up-urile se trimit automat și am în sfârșit timp să conduc clinica. A schimbat totul.',
    name: 'Dr. Sara Klein', role: 'Fondator', company: 'Klein Medical Aesthetics',
    avatar: 'SK', color: '#F5C518', textColor: '#0B0B0B', industry: 'Sănătate',
  },
  {
    quote: 'Nextflow ne-a automatizat tot fluxul de onboarding și nurturare. Am trecut de la 3 clienți semnați pe lună la 9 — cu aceeași echipă.',
    name: 'James Harlow', role: 'Director', company: 'Harlow Digital Agency',
    avatar: 'JH', color: '#10B981', textColor: '#FFFFFF', industry: 'Agenție',
  },
]

export default function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#111111' }} id="testimonials">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(16,185,129,0.06) 0%, transparent 65%)' }}/>

      <div className="container-main relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <p className="section-label mb-4 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            Rezultate Clienți
          </p>
          <h2 className="reveal reveal-delay-1 font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            Afaceri care au renunțat<br />să o facă pe calea grea.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-8 flex flex-col`}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#F5C518">
                    <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="leading-relaxed mb-8 flex-1"
                style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)' }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ backgroundColor: t.color, color: t.textColor }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.role}, {t.company}</div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}>
                      {t.industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-medium tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.2)' }}>
          {['Imobiliare', 'Sănătate', 'Agenții', 'E-commerce', 'Consultanță', 'Finanțe'].map((ind, i, arr) => (
            <span key={ind} className="flex items-center gap-6">
              {ind}
              {i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
