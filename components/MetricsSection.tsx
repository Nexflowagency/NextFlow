'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const metrics = [
  {
    value: '3×',
    label: 'Creștere venituri',
    sub: 'Creștere medie a lead-urilor convertite în primele 90 de zile.',
  },
  {
    value: '90%',
    label: 'Mai puțin efort manual',
    sub: 'Ore eliberate din sarcini repetitive în fiecare săptămână.',
  },
  {
    value: '0',
    label: 'Lead-uri pierdute',
    sub: 'Fiecare interogare este captată, calificată și urmărită automat.',
  },
  {
    value: '24/7',
    label: 'Mereu activ',
    sub: 'Sistemul tău funcționează non-stop — chiar și în timp ce dormi.',
  },
]

export default function MetricsSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#070D1A' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)' }}/>

      <div className="container-main relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <p className="section-label mb-4 reveal justify-center">
            <span className="gold-dot" />
            Rezultate Reale
          </p>
          <h2 className="reveal font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            Cifrele vorbesc
            <br />
            <span className="text-gradient-yellow">de la sine.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <div key={i} className="reveal text-center rounded-2xl p-8"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(212,175,55,0.15)',
              }}>
              <div className="font-black mb-2 text-gradient-yellow"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: '1', letterSpacing: '-0.04em' }}>
                {metric.value}
              </div>
              <div className="font-bold text-white mb-2" style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}>
                {metric.label}
              </div>
              <p className="text-white/30 text-xs leading-relaxed">{metric.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
