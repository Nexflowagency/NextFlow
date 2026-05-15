'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Pierdeam 40% din lead-uri. Acum răspund în 2 minute automat. +60% venituri în 3 luni.',
    name: 'Marco R.', role: 'Agenție imobiliară', avatar: 'MR', color: '#10B981', text: '#fff',
  },
  {
    quote: 'Am scăpat de 3 ore de admin zilnic. CRM-ul se actualizează singur. Nu mi-aș fi imaginat că e posibil.',
    name: 'Dr. Sara K.', role: 'Clinică estetică', avatar: 'SK', color: '#F5C518', text: '#0B0B0B',
  },
  {
    quote: 'De la 3 clienți pe lună la 9 — cu aceeași echipă. Sistemul face munca în locul nostru.',
    name: 'James H.', role: 'Agenție digitală', avatar: 'JH', color: '#10B981', text: '#fff',
  },
]

export default function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#111111' }} id="testimonials">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(16,185,129,0.06) 0%, transparent 65%)' }}/>

      <div className="container-main relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <p className="section-label mb-5 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            Rezultate reale
          </p>
          <h2 className="reveal reveal-delay-1 font-black text-white"
            style={{ fontSize: 'clamp(1.625rem, 5vw, 3.5rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
            Ei au oprit
            <br />
            <span className="text-gradient-yellow">haosul.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-8 flex flex-col gap-6`}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="13" height="13" viewBox="0 0 14 14" fill="#F5C518">
                    <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z"/>
                  </svg>
                ))}
              </div>

              {/* Quote — short */}
              <p className="font-semibold text-white leading-relaxed flex-1"
                style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ backgroundColor: t.color, color: t.text }}>
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
  )
}
