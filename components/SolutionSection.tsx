'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const solutions = [
  {
    number: '01',
    title: 'Captare și Răspuns Automat',
    description: 'Fiecare lead este captat, calificat și primit cu un răspuns instant — 24/7, fără intervenție umană. Nu mai pierde niciun prospect.',
    highlight: 'Răspuns instant. De fiecare dată.',
  },
  {
    number: '02',
    title: 'Follow-up-uri Automatizate',
    description: 'Secvențe inteligente de follow-up se declanșează automat în funcție de comportamentul clientului. Mesajul potrivit, la momentul potrivit.',
    highlight: 'Mai multe contracte. Zero efort manual.',
  },
  {
    number: '03',
    title: 'Optimizare CRM',
    description: 'CRM-ul tău încetează să fie un cimitir de contacte uitate. Fiecare lead este urmărit, punctat și mutat automat prin pipeline-ul tău.',
    highlight: 'Vizibilitate completă asupra pipeline-ului.',
  },
  {
    number: '04',
    title: 'Automatizarea Operațiunilor',
    description: 'Elimini sarcinile repetitive: introducere de date, programări, rapoarte, notificări. Echipa ta se concentrează pe munca ce aduce venit.',
    highlight: 'Ore economisite în fiecare săptămână.',
  },
]

export default function SolutionSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py" style={{ background: '#FFFFFF' }} id="solution">
      <div className="container-main" ref={ref}>
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4 reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            Soluția
          </p>
          <h2 className="reveal reveal-delay-1 font-bold text-[#0B0B0B]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            Construim sisteme care<br />lucrează cât tu dormi.
          </h2>
          <p className="reveal reveal-delay-2 text-[#6B7280] mt-4 text-lg leading-relaxed">
            Automatizare AI personalizată pentru afacerea ta — nu șabloane generice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutions.map((item, i) => (
            <div key={i} className={`card-light reveal reveal-delay-${(i % 4) + 1} group`}>
              <div className="mb-5">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-xs font-black tracking-wider"
                  style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10B981' }}>
                  {item.number}
                </span>
              </div>
              <h3 className="font-bold text-[#0B0B0B] mb-3" style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                {item.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{item.description}</p>
              <div className="flex items-center gap-2 pt-5 border-t border-[#F3F4F6]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M3 7.5L6 10.5L12 4.5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
