'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#F5C518' }} id="cta">
      {/* Subtle dot grid on yellow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}/>

      {/* Dark top-left shape */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.05)' }}/>

      <div className="container-main relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">

          <p className="section-label mb-6 reveal justify-center" style={{ color: 'rgba(0,0,0,0.5)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B0B0B] inline-block opacity-50"/>
            Get Started Today
          </p>

          <h2 className="reveal reveal-delay-1 font-black text-[#0B0B0B] mb-6"
            style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)', lineHeight: '1.0', letterSpacing: '-0.04em' }}>
            Stop losing leads.
            <br />
            Start scaling.
          </h2>

          <p className="reveal reveal-delay-2 mb-10 max-w-lg mx-auto"
            style={{ fontSize: '1.125rem', lineHeight: '1.65', color: 'rgba(0,0,0,0.6)' }}>
            Book a free 30-minute strategy call. We&apos;ll map your exact automation
            opportunities and show you what&apos;s possible.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 justify-center mb-10">
            {/* Dark primary button */}
            <a href="mailto:hello@nextflow.ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white text-base font-bold rounded-xl transition-all duration-200"
              style={{
                background: '#0B0B0B',
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = '#1a1a1a'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = '#0B0B0B'
                el.style.transform = ''
                el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25)'
              }}>
              Book a Free Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="mailto:hello@nextflow.ai" className="btn-ghost-dark text-base px-8 py-4">
              Get a Free Demo
            </a>
          </div>

          {/* Trust badges */}
          <div className="reveal reveal-delay-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-medium"
            style={{ color: 'rgba(0,0,0,0.45)' }}>
            {['No commitment required', '30-minute strategy call', 'Tailored to your business'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
