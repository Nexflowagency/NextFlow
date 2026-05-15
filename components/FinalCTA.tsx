'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#F5C518' }} id="cta">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px' }}/>
      {/* Green circle accent */}
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(16,185,129,0.15)' }}/>

      <div className="container-main relative z-10" ref={ref}>
        <div className="max-w-2xl mx-auto text-center">

          <h2 className="reveal font-black text-[#0B0B0B] mb-5 md:mb-6"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 4.5rem)', lineHeight: '1.05', letterSpacing: '-0.04em', overflowWrap: 'break-word' }}>
            Nu trebuie să
            <br />
            muncești mai mult.
            <br />
            <span style={{ color: '#0B0B0B', textDecoration: 'underline', textDecorationColor: '#10B981', textDecorationThickness: '4px', textUnderlineOffset: '6px' }}>
              Trebuie să automatizezi.
            </span>
          </h2>

          <p className="reveal reveal-delay-1 mb-10"
            style={{ fontSize: '1.125rem', color: 'rgba(0,0,0,0.55)', lineHeight: '1.6' }}>
            Îți arătăm exact cum ar arăta la tine — gratuit, fără angajament.
          </p>

          <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-3 justify-center mb-6 md:mb-8">
            <a href="mailto:hello@nextflow.ai"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 text-white text-base font-black rounded-xl transition-all duration-200"
              style={{ background: '#0B0B0B', boxShadow: '0 4px 20px rgba(0,0,0,0.18)', letterSpacing: '-0.02em' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = '#10B981'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 8px 30px rgba(16,185,129,0.4)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = '#0B0B0B'
                el.style.transform = ''
                el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)'
              }}>
              Vreau demo gratuit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="mailto:hello@nextflow.ai" className="btn-ghost-dark text-base px-7 py-3.5 sm:px-9 sm:py-4">
              Scrie-ne acum
            </a>
          </div>

          <p className="reveal reveal-delay-3 text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>
            Fără angajament · Call gratuit 30 min · Rezultate în săptămâni
          </p>

        </div>
      </div>
    </section>
  )
}
