'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const testimonials = [
  {
    quote:
      "We were losing 40% of our leads to slow follow-up. After Nextflow built our automation, response time dropped to under 2 minutes. Revenue is up 60% in 3 months.",
    name: 'Marco Reyes',
    role: 'CEO',
    company: 'Reyes Real Estate Group',
    avatar: 'MR',
    color: '#10B981',
    industry: 'Real Estate',
  },
  {
    quote:
      "I spent hours every week on admin. Now our CRM updates itself, follow-ups go out automatically, and I actually have time to run my clinic. It's been a game changer.",
    name: 'Dr. Sara Klein',
    role: 'Founder',
    company: 'Klein Medical Aesthetics',
    avatar: 'SK',
    color: '#3B82F6',
    industry: 'Healthcare',
  },
  {
    quote:
      "Nextflow automated our entire onboarding and lead nurture flow. We went from 3 signed clients per month to 9 — with the same team size.",
    name: 'James Harlow',
    role: 'Director',
    company: 'Harlow Digital Agency',
    avatar: 'JH',
    color: '#8B5CF6',
    industry: 'Agency',
  },
]

export default function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-[#F9FAFB] section-py" id="testimonials">
      <div className="container-main" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-4 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
            Client Results
          </p>
          <h2
            className="reveal reveal-delay-1 font-bold text-[#0B0B0B]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}
          >
            Businesses that stopped
            <br />
            doing it the hard way.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl border border-[#E5E7EB] p-8 flex flex-col`}
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#F59E0B">
                    <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-[#374151] leading-relaxed mb-8 flex-1"
                style={{ fontSize: '0.9375rem' }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="border-t border-[#F3F4F6] pt-6">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0B0B0B] text-sm">{t.name}</div>
                    <div className="text-[#9CA3AF] text-xs">
                      {t.role}, {t.company}
                    </div>
                  </div>
                  {/* Industry tag */}
                  <div className="ml-auto">
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: '#F3F4F6', color: '#6B7280' }}
                    >
                      {t.industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="reveal mt-12 flex flex-wrap justify-center items-center gap-6 text-[#D1D5DB] text-xs font-medium tracking-widest uppercase">
          <span>Real Estate</span>
          <span className="text-[#E5E7EB]">·</span>
          <span>Healthcare</span>
          <span className="text-[#E5E7EB]">·</span>
          <span>Agencies</span>
          <span className="text-[#E5E7EB]">·</span>
          <span>E-commerce</span>
          <span className="text-[#E5E7EB]">·</span>
          <span>Consulting</span>
          <span className="text-[#E5E7EB]">·</span>
          <span>Finance</span>
        </div>
      </div>
    </section>
  )
}
