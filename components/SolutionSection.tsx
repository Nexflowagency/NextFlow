'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const solutions = [
  {
    number: '01',
    title: 'Răspuns instant la orice lead',
    outcome: 'Zero lead-uri pierdute',
    description: 'Fiecare mesaj primit — răspuns automat, calificare automată, 24/7.',
  },
  {
    number: '02',
    title: 'Follow-up fără efort',
    outcome: 'Mai multe contracte',
    description: 'Sistemul urmărește fiecare prospect automat până devine client.',
  },
  {
    number: '03',
    title: 'CRM care lucrează singur',
    outcome: 'Control complet',
    description: 'Pipeline actualizat, scoruri, notificări — totul automat.',
  },
  {
    number: '04',
    title: 'Operațiuni fără tine',
    outcome: 'Timp liber real',
    description: 'Programări, rapoarte, notificări — eliminate din rutina ta.',
  },
]

export default function SolutionSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py" style={{ background: '#FFFFFF' }} id="solution">
      <div className="container-main" ref={ref}>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-5 reveal justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            Ce construim
          </p>
          <h2 className="reveal reveal-delay-1 font-black text-[#0B0B0B]"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: '1.05', letterSpacing: '-0.035em' }}>
            Noi facem tot.
            <br />
            <span style={{ color: '#10B981' }}>Tu controlezi.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map((item, i) => (
            <div key={i} className={`card-light reveal reveal-delay-${(i % 4) + 1} group`}>

              {/* Number + outcome */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black tracking-widest uppercase px-3 py-1.5 rounded-lg"
                  style={{ background: 'rgba(16,185,129,0.08)', color: '#10B981', border: '1px solid rgba(16,185,129,0.15)' }}>
                  {item.number}
                </span>
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg"
                  style={{ background: 'rgba(245,197,24,0.1)', color: '#D4A800', border: '1px solid rgba(245,197,24,0.2)' }}>
                  ✓ {item.outcome}
                </span>
              </div>

              <h3 className="font-black text-[#0B0B0B] mb-3"
                style={{ fontSize: '1.3rem', letterSpacing: '-0.025em', lineHeight: '1.2' }}>
                {item.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
