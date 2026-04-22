'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const metrics = [
  { value: '3×', label: 'Creștere venituri', sub: 'Creștere medie a lead-urilor convertite în primele 90 de zile.', color: '#F5C518' },
  { value: '90%', label: 'Mai puțin efort manual', sub: 'Ore eliberate din sarcini repetitive în fiecare săptămână.', color: '#10B981' },
  { value: '0', label: 'Lead-uri pierdute', sub: 'Fiecare solicitare este captată, calificată și urmărită automat.', color: '#F5C518' },
  { value: '24/7', label: 'Mereu activ', sub: 'Sistemul tău funcționează non-stop — inclusiv când dormi.', color: '#10B981' },
]

export default function MetricsSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#0B0B0B' }} id="results">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.05) 0%, rgba(245,197,24,0.04) 50%, transparent 70%)' }}/>

      <div className="container-main relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <p className="section-label mb-4 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            Rezultate Reale
          </p>
          <h2 className="reveal reveal-delay-1 font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            Cifrele vorbesc<br />de la sine.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <div key={i}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-8 text-center`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${metric.color}22`,
              }}>
              <div className="font-black mb-2"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  lineHeight: '1',
                  letterSpacing: '-0.04em',
                  color: metric.color,
                }}>
                {metric.value}
              </div>
              <div className="font-bold text-white mb-2" style={{ fontSize: '0.9375rem', letterSpacing: '-0.01em' }}>
                {metric.label}
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {metric.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
