'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const metrics = [
  { value: '3×', label: 'Revenue growth', sub: 'Average increase in converted leads within 90 days.' },
  { value: '90%', label: 'Less manual work', sub: 'Hours freed from repetitive tasks every single week.' },
  { value: '0', label: 'Leads lost', sub: 'Every enquiry is captured, qualified, and followed up automatically.' },
  { value: '24/7', label: 'Always on', sub: 'Your system runs around the clock — even while you sleep.' },
]

export default function MetricsSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#0B0B0B' }} id="results">
      {/* Yellow center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(245,197,24,0.06) 0%, transparent 70%)' }}/>

      <div className="container-main relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <p className="section-label mb-4 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            Real Results
          </p>
          <h2 className="reveal reveal-delay-1 font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            The numbers speak<br />for themselves.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <div key={i}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-8 text-center`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}>
              <div className="font-black mb-2 text-gradient-yellow"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: '1', letterSpacing: '-0.04em' }}>
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
