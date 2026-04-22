'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const problems = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M11 7V11.5L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    headline: 'You respond too slowly.',
    body: 'Every lead that waits more than 5 minutes is 10× less likely to convert. Your competitors respond in minutes.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 11L8 6L13 11L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 5H19V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 17H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/></svg>,
    headline: 'Leads slip through the cracks.',
    body: 'You capture interest but lose deals because no one follows up at the right time, with the right message.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="5" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9H19" stroke="currentColor" strokeWidth="1.5"/><path d="M7 3V5M15 3V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 13H10M12 13H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/></svg>,
    headline: 'No follow-up system.',
    body: "70% of deals require 5+ follow-ups. Most businesses stop at one. You're leaving money on the table every day.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M12 3H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 3l4 4-8 8H7v-4l8-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    headline: 'Stuck in manual tasks.',
    body: 'Your team spends hours on data entry, scheduling, and copy-paste work that a machine could do in seconds.',
  },
]

export default function ProblemSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#111111' }}>
      {/* Yellow top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(245,197,24,0.07) 0%, transparent 70%)' }}/>

      <div className="container-main relative z-10" ref={ref}>
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4 reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
            The Problem
          </p>
          <h2 className="reveal reveal-delay-1 font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.025em' }}>
            You&apos;re losing revenue<br />every single day.
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.4)' }}>
            Most businesses have the leads. They just can&apos;t keep up with them manually.
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
                const el = e.currentTarget
                el.style.background = 'rgba(245,197,24,0.04)'
                el.style.borderColor = 'rgba(245,197,24,0.18)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = 'rgba(255,255,255,0.02)'
                el.style.borderColor = 'rgba(255,255,255,0.07)'
              }}>

              {/* Red dot */}
              <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-red-500 opacity-50"/>

              <div className="mb-5 transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.25)' }}>
                {item.icon}
              </div>
              <h3 className="text-white font-semibold mb-3"
                style={{ fontSize: '1.0625rem', letterSpacing: '-0.015em' }}>
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
