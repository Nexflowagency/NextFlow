'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    n: '01',
    title: 'Analizăm',
    duration: '30 min',
    description:
      'Un call scurt. Îți mapăm fluxul actual, găsim exact unde pierzi bani și îți arătăm soluția înainte să plătești ceva.',
  },
  {
    n: '02',
    title: 'Construim',
    duration: '2–4 săptămâni',
    description:
      'Facem totul noi. Captare lead-uri, follow-up, CRM, integrări cu uneltele tale — livrate testate și funcționale.',
  },
  {
    n: '03',
    title: 'Tu scalezi',
    duration: 'Continuu',
    description:
      'Sistemul rulează singur, cu monitorizare din partea noastră. Tu te concentrezi pe ce contează: să crești.',
  },
]

export default function HowItWorks() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="proces"
      className="section relative overflow-hidden"
      style={{ background: 'var(--paper-2)', color: 'var(--on-paper)' }}
    >
      <div className="shell relative" ref={ref}>
        {/* ── Antet ── */}
        <div className="g12 mb-16 items-end gap-y-8 lg:mb-24">
          <div className="col-span-12 lg:col-span-8">
            <p className="mono eyebrow eyebrow-paper reveal mb-7">Cum funcționează</p>
            {/* Dimensiune proprie: „Fără bătăi de cap." trebuie să încapă pe un rând */}
            <h2
              className="display reveal d1"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}
            >
              Trei pași.
              <br />
              <span style={{ color: 'var(--on-paper-40)' }}>Fără bătăi de cap.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10">
            <p
              className="reveal d2 border-t pt-6 text-[0.9375rem] leading-relaxed"
              style={{ color: 'var(--on-paper-64)', borderColor: 'var(--line-paper)' }}
            >
              Nu ai nevoie de cunoștințe tehnice și nu trebuie să schimbi nimic
              din ce folosești deja.
            </p>
          </div>
        </div>

        {/* ── Linia de proces, se umple la scroll ── */}
        <div className="fill-line reveal mb-12 hidden h-px md:block" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <div key={step.n} className={`reveal d${i + 1}`}>
              <div className="mb-7 flex items-baseline justify-between gap-4">
                <span
                  className="display leading-none"
                  style={{ fontSize: 'clamp(3.5rem, 7vw, 5rem)', letterSpacing: '-0.05em' }}
                >
                  {step.n}
                </span>
                <span
                  className="mono-sm rounded-[3px] border px-2.5 py-1.5"
                  style={{
                    color: 'var(--clay)',
                    borderColor: 'rgba(217,85,46,0.3)',
                    background: 'rgba(217,85,46,0.07)',
                  }}
                >
                  {step.duration}
                </span>
              </div>

              <h3 className="display d-sm mb-3">{step.title}</h3>
              <p
                className="text-[0.9375rem] leading-relaxed"
                style={{ color: 'var(--on-paper-64)' }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA de mijloc ── */}
        <div
          className="reveal d4 mt-16 flex flex-wrap items-center justify-between gap-6 border-t pt-10"
          style={{ borderColor: 'var(--line-paper)' }}
        >
          <p className="display d-sm max-w-[24ch]">
            Vrei să vezi exact cum ar arăta la tine în afacere?
          </p>
          <a href="#cta" className="btn btn-ink px-8 py-[1.15rem]">
            Programează analiza gratuită
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8H13M9 4L13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
