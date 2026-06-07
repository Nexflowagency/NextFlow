'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const solutions = [
  {
    number: '01',
    title: 'AI Lead Capture & Response',
    description:
      'Every lead is captured, qualified, and responded to instantly — 24/7, no human needed. Never let a prospect go cold again.',
    highlight: 'Instant response. Every time.',
  },
  {
    number: '02',
    title: 'Automated Follow-Up Sequences',
    description:
      'Smart follow-up sequences trigger automatically based on behavior. The right message reaches the right lead at exactly the right time.',
    highlight: 'More deals closed. Zero manual effort.',
  },
  {
    number: '03',
    title: 'CRM Optimization',
    description:
      "Your CRM stops being a graveyard of forgotten contacts. Every lead is tracked, scored, and moved through your pipeline automatically.",
    highlight: 'Full pipeline visibility.',
  },
  {
    number: '04',
    title: 'Operations Automation',
    description:
      'Eliminate repetitive tasks: data entry, scheduling, reporting, notifications. Your team focuses on work that actually drives revenue.',
    highlight: 'Hours saved every week.',
  },
]

export default function SolutionSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-white section-py" id="solution">
      <div className="container-main" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4 reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
            The Solution
          </p>
          <h2
            className="reveal reveal-delay-1 font-bold text-[#0B0B0B]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}
          >
            We build systems that
            <br />
            work while you sleep.
          </h2>
          <p className="reveal reveal-delay-2 text-[#6B7280] mt-4 text-lg leading-relaxed">
            Custom AI automation built around your business. Not templates — systems that fit exactly how you operate.
          </p>
        </div>

        {/* Solution cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((item, i) => (
            <div key={i} className={`card reveal reveal-delay-${(i % 4) + 1} group`}>
              <div className="flex items-start gap-4 mb-5">
                <span
                  className="text-xs font-bold tracking-widest text-[#10B981] bg-[#D1FAE5] rounded-lg px-2.5 py-1.5 shrink-0"
                >
                  {item.number}
                </span>
              </div>

              <h3
                className="font-bold text-[#0B0B0B] mb-3"
                style={{ fontSize: '1.25rem', letterSpacing: '-0.02em' }}
              >
                {item.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Highlight */}
              <div className="flex items-center gap-2 pt-5 border-t border-[#F3F4F6]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-[#10B981] shrink-0">
                  <path d="M3 7.5L6 10.5L12 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-semibold text-[#0B0B0B]">{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
