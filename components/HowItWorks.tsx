'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    step: '01',
    title: 'We analyse your business',
    description:
      'In a 30-minute strategy call, we map your lead flow, find where you lose time and money, and design your custom automation architecture.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 2V7M14 21V26M2 14H7M21 14H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    step: '02',
    title: 'We build your system',
    description:
      'Our team builds your complete automation stack — lead capture, follow-up sequences, CRM integrations — tailored to how your business actually works.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 15V18H23M20 21V18M17 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    step: '03',
    title: 'You scale without chaos',
    description:
      'Your system goes live. Leads are handled automatically. Follow-ups run on their own. You focus on closing deals and growing — not managing tasks.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 14L14 18L20 10L24 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 10H24V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 24H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-white section-py" id="how-it-works">
      <div className="container-main" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
            How It Works
          </p>
          <h2
            className="reveal reveal-delay-1 font-bold text-[#0B0B0B]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}
          >
            From first call to
            <br />
            fully automated — in weeks.
          </h2>
          <p className="reveal reveal-delay-2 text-[#6B7280] mt-4 text-lg max-w-xl mx-auto leading-relaxed">
            Three clear steps. No technical headaches. Just results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector lines (desktop only) */}
          <div
            className="hidden md:block absolute top-[28px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px"
            style={{ background: 'linear-gradient(90deg, #E5E7EB 0%, #D1D5DB 50%, #E5E7EB 100%)' }}
          />

          {steps.map((step, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} flex flex-col items-center md:items-start text-center md:text-left`}>
              {/* Step number and icon */}
              <div className="relative mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-[#10B981] relative z-10"
                  style={{ background: '#F0FDF4', border: '1px solid #D1FAE5' }}
                >
                  {step.icon}
                </div>
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0B0B0B] flex items-center justify-center z-20"
                  style={{ fontSize: '0.65rem', fontWeight: '800', color: 'white', letterSpacing: '-0.02em' }}
                >
                  {i + 1}
                </div>
              </div>

              <div
                className="text-[#10B981] text-xs font-bold tracking-widest uppercase mb-3"
              >
                Step {step.step}
              </div>

              <h3
                className="font-bold text-[#0B0B0B] mb-3"
                style={{ fontSize: '1.25rem', letterSpacing: '-0.02em', lineHeight: '1.3' }}
              >
                {step.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs md:max-w-none">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="text-center mt-16 reveal">
          <p className="text-[#9CA3AF] text-sm mb-4">Ready to get started?</p>
          <a href="#cta" className="btn-primary">
            Book Your Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
