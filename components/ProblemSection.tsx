'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const problems = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M11 7V11.5L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    headline: 'Răspunzi prea lent.',
    body: 'Fiecare lead care așteaptă mai mult de 5 minute are șanse de 10× mai mici să se transforme în client. Concurenții tăi răspund în minute.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 11L8 6L13 11L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 5H19V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 17H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/></svg>,
    headline: 'Lead-urile se pierd.',
    body: 'Captezi interesul, dar pierzi clienți pentru că nimeni nu face follow-up la momentul potrivit, cu mesajul potrivit.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="5" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9H19" stroke="currentColor" strokeWidth="1.5"/><path d="M7 3V5M15 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 13H10M12 13H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/></svg>,
    headline: 'Nu ai sistem de follow-up.',
    body: '70% din vânzări necesită 5+ follow-up-uri. Majoritatea afacerilor se opresc la unul singur. Lași bani pe masă în fiecare zi.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M12 3H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 3l4 4-8 8H7v-4l8-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    headline: 'Blocat în sarcini manuale.',
    body: 'Echipa ta pierde ore întregi cu introducere de date, programări și copy-paste — muncă pe care o mașină ar face-o în secunde.',
  },
]

export default function ProblemSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#111111' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(16,185,129,0.06) 0%, transparent 70%)' }}/>

      <div className="container-main relative z-10" ref={ref}>
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4 reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            Problema
          </p>
          <h2 className="reveal reveal-delay-1 font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            Pierzi venituri în fiecare<br />zi care trece.
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.4)' }}>
            Majoritatea afacerilor au lead-uri. Problema e că nu pot ține pasul cu ele manual.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((item, i) => (
            <div key={i}
              className={`reveal reveal-delay-${(i % 4) + 1} group relative rounded-2xl p-8 overflow-hidden cursor-default`}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                transition: 'background 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(16,185,129,0.04)'
                e.currentTarget.style.borderColor = 'rgba(16,185,129,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              }}>
              <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-red-500 opacity-50"/>
              <div className="mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>{item.icon}</div>
              <h3 className="text-white font-semibold mb-3" style={{ fontSize: '1.0625rem', letterSpacing: '-0.015em' }}>
                {item.headline}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
