'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    step: '01',
    title: 'We analyse your business',
    description: 'In a 30-minute strategy call, we map your lead flow, find where you lose time and money, and design your custom automation architecture.',
    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="11" stroke="currentColor" strokeWidth="1.5"/><circle cx="13" cy="13" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M13 2V6M13 20V24M2 13H6M20 13H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/></svg>,
  },
  {
    step: '02',
    title: 'We build your system',
    description: 'Our team builds your complete automation stack — lead capture, follow-up sequences, CRM integrations — tailored to how your business actually works.',
    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="14" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M19 14V17H22M19 20V17M16 17H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    step: '03',
    title: 'You scale without chaos',
    description: 'Your system goes live. Leads are handled automatically. Follow-ups run on their own. You focus on closing deals and growing — not managing tasks.',
    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M3 19L9 13L13 17L19 9L23 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 9H23V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M3 23H23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/></svg>,
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py" style={{ background: '#FFFFFF' }} id="how-it-works">
      <div className="container-main" ref={ref}>
        <div className="text-center mb-16">
          <p className="section-label mb-4 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            How It Works
          </p>
          <h2 className="reveal reveal-delay-1 font-bold text-[#0B0B0B]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            From first call to<br />fully automated — in weeks.
          </h2>
          <p className="reveal reveal-delay-2 text-[#6B7280] mt-4 text-lg max-w-xl mx-auto leading-relaxed">
            Three clear steps. No technical headaches. Just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Desktop connector */}
          <div className="hidden md:block absolute"
            style={{ top: '27px', left: 'calc(16.67% + 27px)', right: 'calc(16.67% + 27px)', height: '1px', background: 'linear-gradient(90deg, rgba(245,197,24,0.3) 0%, rgba(245,197,24,0.6) 50%, rgba(245,197,24,0.3) 100%)' }}/>

          {steps.map((step, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} flex flex-col items-center md:items-start text-center md:text-left`}>
              <div className="relative mb-6">
                {/* Icon box */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                  style={{ background: 'rgba(245,197,24,0.08)', border: '1px solid rgba(245,197,24,0.2)', color: '#D4A800' }}>
                  {step.icon}
                </div>
                {/* Step number badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center z-20"
                  style={{ background: '#F5C518', fontSize: '0.6rem', fontWeight: '900', color: '#0B0B0B', letterSpacing: '-0.02em' }}>
                  {i + 1}
                </div>
              </div>

              <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#F5C518' }}>
                Step {step.step}
              </div>
              <h3 className="font-bold text-[#0B0B0B] mb-3"
                style={{ fontSize: '1.2rem', letterSpacing: '-0.02em', lineHeight: '1.3' }}>
                {step.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs md:max-w-none">
                {step.description}
              </p>
            </div>
          ))}
        </div>

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
