'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'We were losing 40% of our leads to slow follow-up. After Nextflow built our automation, response time dropped to under 2 minutes. Revenue is up 60% in 3 months.',
    name: 'Marco Reyes', role: 'CEO', company: 'Reyes Real Estate Group',
    avatar: 'MR', color: '#F5C518', textColor: '#0B0B0B', industry: 'Real Estate',
  },
  {
    quote: "I spent hours every week on admin. Now our CRM updates itself, follow-ups go out automatically, and I actually have time to run my clinic. It's been a game changer.",
    name: 'Dr. Sara Klein', role: 'Founder', company: 'Klein Medical Aesthetics',
    avatar: 'SK', color: '#10B981', textColor: '#FFFFFF', industry: 'Healthcare',
  },
  {
    quote: 'Nextflow automated our entire onboarding and lead nurture flow. We went from 3 signed clients per month to 9 — with the same team size.',
    name: 'James Harlow', role: 'Director', company: 'Harlow Digital Agency',
    avatar: 'JH', color: '#3B82F6', textColor: '#FFFFFF', industry: 'Agency',
  },
]

export default function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#111111' }} id="testimonials">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(245,197,24,0.05) 0%, transparent 65%)' }}/>

      <div className="container-main relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <p className="section-label mb-4 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            Client Results
          </p>
          <h2 className="reveal reveal-delay-1 font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            Businesses that stopped<br />doing it the hard way.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-8 flex flex-col`}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#F5C518">
                    <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z"/>
                  </svg>
                ))}
              </div>

              <blockquote className="leading-relaxed mb-8 flex-1"
                style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)' }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="border-t pt-6" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    style={{ backgroundColor: t.color, color: t.textColor }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.role}, {t.company}</div>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }}>
                      {t.industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry strip */}
        <div className="reveal mt-12 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-medium tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.2)' }}>
          {['Real Estate', 'Healthcare', 'Agencies', 'E-commerce', 'Consulting', 'Finance'].map((ind, i, arr) => (
            <span key={ind} className="flex items-center gap-6">
              {ind}
              {i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
