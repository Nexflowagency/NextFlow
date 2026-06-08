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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(16,185,129,0.06) 0%, transparent 70%)' }}/>

      <div className="container-main relative z-10" ref={ref}>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-5 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            Recunoști asta?
          </p>
          <h2 className="reveal reveal-delay-1 font-black text-white"
            style={{ fontSize: 'clamp(1.625rem, 5vw, 3.5rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
            Ești ocupat.
            <br />
            <span className="text-gradient-yellow">Dar nu productiv.</span>
          </h2>
        </div>

        {/* Pain list — minimal, punchy */}
        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {pains.map((pain, i) => (
            <div key={i}
              className={`reveal reveal-delay-${i + 1} flex items-center gap-4 rounded-2xl px-5 py-4 md:px-7 md:py-5`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(16,185,129,0.05)'
                e.currentTarget.style.borderColor = 'rgba(16,185,129,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              }}>
              <span style={{ fontSize: '1.5rem' }}>{pain.emoji}</span>
              <p className="font-semibold text-white" style={{ fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)', letterSpacing: '-0.02em' }}>
                {pain.line}
              </p>
              <div className="ml-auto w-2 h-2 rounded-full bg-red-500 opacity-60 shrink-0"/>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <p className="reveal text-center mt-12 font-bold"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'rgba(255,255,255,0.3)', letterSpacing: '-0.02em' }}>
          Costul real:{' '}
          <span style={{ color: '#F5C518' }}>pierzi 20–40% din clienți</span>
          {' '}fără să știi.
        </p>
      </div>
    </section>
  )
}
