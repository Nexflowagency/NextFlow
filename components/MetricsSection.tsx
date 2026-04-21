'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const metrics = [
  {
    value: '3×',
    label: 'Revenue growth',
    sub: 'Average increase in converted leads within 90 days.',
  },
  {
    value: '90%',
    label: 'Less manual work',
    sub: 'Hours freed from repetitive tasks every single week.',
  },
  {
    value: '0',
    label: 'Leads lost',
    sub: 'Every enquiry is captured, qualified, and followed up automatically.',
  },
  {
    value: '24/7',
    label: 'Always on',
    sub: 'Your system runs around the clock — even while you sleep.',
  },
]

export default function MetricsSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-[#F9FAFB] section-py" id="results">
      <div className="container-main" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-4 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
            Real Results
          </p>
          <h2
            className="reveal reveal-delay-1 font-bold text-[#0B0B0B]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}
          >
            The numbers speak
            <br />
            for themselves.
          </h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl border border-[#E5E7EB] p-8 text-center`}
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)' }}
            >
              <div
                className="font-black text-[#0B0B0B] mb-2 text-gradient-green"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: '1', letterSpacing: '-0.04em' }}
              >
                {metric.value}
              </div>
              <div
                className="font-bold text-[#0B0B0B] mb-2"
                style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}
              >
                {metric.label}
              </div>
              <p className="text-[#9CA3AF] text-xs leading-relaxed">
                {metric.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
