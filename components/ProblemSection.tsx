'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const pains = [
  { emoji: '⏱', line: 'Răspunzi manual la fiecare mesaj.' },
  { emoji: '📉', line: 'Pierzi lead-uri în fiecare zi.' },
  { emoji: '🔁', line: 'Faci același lucru în fiecare zi.' },
  { emoji: '😤', line: 'Business-ul depinde 100% de tine.' },
]

export default function ProblemSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#111111' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(16,185,129,0.06) 0%, transparent 70%)' }}/>

      <div className="container-main relative z-10" ref={ref}>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-5 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            Recunoști asta?
          </p>
          <h2 className="reveal reveal-delay-1 font-black text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: '1.05', letterSpacing: '-0.035em' }}>
            Ești ocupat.
            <br />
            <span className="text-gradient-yellow">Dar nu productiv.</span>
          </h2>
        </div>

        {/* Pain list */}
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {pains.map((pain, i) => (
            <div key={i} className={`pain-card reveal reveal-delay-${i + 1}`}>
              <span className="text-2xl shrink-0 select-none">{pain.emoji}</span>
              <p className="font-semibold text-white" style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em' }}>
                {pain.line}
              </p>
              <div className="ml-auto w-2 h-2 rounded-full shrink-0"
                style={{ background: 'rgba(239,68,68,0.7)', boxShadow: '0 0 0 3px rgba(239,68,68,0.12)' }}/>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <p className="reveal text-center mt-12 font-bold"
          style={{ fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', color: 'rgba(255,255,255,0.28)', letterSpacing: '-0.02em' }}>
          Costul real:{' '}
          <span style={{ color: '#F5C518' }}>pierzi 20–40% din clienți</span>
          {' '}fără să știi.
        </p>
      </div>
    </section>
  )
}
