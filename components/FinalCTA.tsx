'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="bg-[#0B0B0B] section-py relative overflow-hidden" id="cta">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)' }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-bg opacity-[0.04] pointer-events-none" />

      <div className="container-main relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <p className="section-label text-[#10B981] mb-6 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
            Get Started Today
          </p>

          {/* Headline */}
          <h2
            className="reveal reveal-delay-1 font-black text-white mb-6"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: '1.05', letterSpacing: '-0.035em' }}
          >
            Stop losing leads.
            <br />
            <span className="text-gradient-green">Start scaling.</span>
          </h2>

          {/* Sub */}
          <p
            className="reveal reveal-delay-2 text-[#6B7280] mb-10 max-w-lg mx-auto"
            style={{ fontSize: '1.125rem', lineHeight: '1.65' }}
          >
            Book a free 30-minute strategy call. We&apos;ll map your exact automation opportunities and show you what&apos;s possible.
          </p>

          {/* CTAs */}
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href="mailto:hello@nextflow.ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#10B981] text-white text-base font-semibold rounded-xl transition-all duration-200"
              style={{
                boxShadow: '0 4px 20px rgba(16,185,129,0.35)',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = '#059669'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 28px rgba(16,185,129,0.45)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = '#10B981'
                el.style.transform = ''
                el.style.boxShadow = '0 4px 20px rgba(16,185,129,0.35)'
              }}
            >
              Book a Free Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="mailto:hello@nextflow.ai" className="btn-ghost-dark text-base px-8 py-4">
              Get a Free Demo
            </a>
          </div>

          {/* Trust text */}
          <div className="reveal reveal-delay-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-[#4B5563]">
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              No commitment required
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              30-minute strategy call
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Tailored to your business
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
