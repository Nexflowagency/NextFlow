'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const metrics = [
  { value: '3×', label: 'Mai multe venituri', color: '#F5C518', type: 'yellow' },
  { value: '90%', label: 'Timp eliberat', color: '#10B981', type: 'green' },
  { value: '0', label: 'Lead-uri pierdute', color: '#F5C518', type: 'yellow' },
  { value: '24/7', label: 'Sistemul lucrează', color: '#10B981', type: 'green' },
]

export default function MetricsSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#0B0B0B' }} id="results">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 100%)' }}/>

      <div className="container-main relative z-10" ref={ref}>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '20px', overflow: 'hidden' }}>
          {metrics.map((metric, i) => (
            <div key={i}
              className={`metric-cell metric-${metric.type} reveal reveal-delay-${i + 1}`}>
              <div className="metric-value mb-3" style={{ color: metric.color }}>
                {metric.value}
              </div>
              <div className="font-semibold text-sm" style={{ color: 'rgba(255,255,255,0.42)', letterSpacing: '-0.01em' }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
