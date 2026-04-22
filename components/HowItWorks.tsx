'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    step: '01',
    title: 'Analizăm',
    description: 'Call de 30 min. Îți mapăm tot fluxul, găsim unde pierzi bani și proiectăm soluția.',
    accent: '#10B981',
  },
  {
    step: '02',
    title: 'Construim',
    description: 'Facem totul noi. Captare lead-uri, follow-up, CRM, integrări — livrate în câteva săptămâni.',
    accent: '#F5C518',
  },
  {
    step: '03',
    title: 'Tu scalezi',
    description: 'Sistemul rulează singur. Tu te concentrezi pe ceea ce contează: să crești.',
    accent: '#10B981',
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py" style={{ background: '#FFFFFF' }} id="how-it-works">
      <div className="container-main" ref={ref}>

        <div className="text-center mb-16">
          <p className="section-label mb-5 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            Cum funcționează
          </p>
          <h2 className="reveal reveal-delay-1 font-black text-[#0B0B0B]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: '1.05', letterSpacing: '-0.035em' }}>
            3 pași.
            <br />
            <span style={{ color: '#10B981' }}>Fără bătăi de cap.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector */}
          <div className="hidden md:block absolute"
            style={{ top: '28px', left: 'calc(16.67% + 28px)', right: 'calc(16.67% + 28px)', height: '1px',
              background: 'linear-gradient(90deg, rgba(16,185,129,0.3) 0%, rgba(245,197,24,0.5) 50%, rgba(16,185,129,0.3) 100%)' }}/>

          {steps.map((step, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} flex flex-col items-center md:items-start text-center md:text-left`}>
              <div className="relative mb-7">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl"
                  style={{ background: `${step.accent}12`, border: `1px solid ${step.accent}28`, color: step.accent, letterSpacing: '-0.03em' }}>
                  {i + 1}
                </div>
              </div>
              <div className="text-xs font-black tracking-widest uppercase mb-3" style={{ color: step.accent }}>
                Pasul {step.step}
              </div>
              <h3 className="font-black text-[#0B0B0B] mb-3"
                style={{ fontSize: '1.5rem', letterSpacing: '-0.03em' }}>
                {step.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <a href="#cta" className="btn-primary text-base px-9 py-4">
            Vreau să văd cum arată la mine
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
