'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Words from './Words'
import { WHATSAPP_URL } from '@/lib/contact'
import type { SectionProps } from '@/lib/nav'

const steps = [
  {
    n: '01',
    title: 'Analizez',
    duration: '30 min',
    description:
      'Vorbim o jumătate de oră. Îmi spui cum lucrezi acum, îți arăt unde pierzi timp și bani. Până aici nu plătești nimic.',
  },
  {
    n: '02',
    title: 'Construiesc',
    duration: '2–6 săptămâni',
    description:
      'Fac eu tot. Îmi dai acces la ce folosești deja și primești totul gata pus la punct, nu o grămadă de setări de dus la capăt.',
  },
  {
    n: '03',
    title: 'Tu scalezi',
    duration: 'Continuu',
    description:
      'De aici merge singur. Eu stau cu ochii pe el, tu te vezi de treaba ta.',
  },
]

export default function HowItWorks({ hideHeader = false }: SectionProps) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="proces"
      className={`section relative overflow-hidden ${hideHeader ? 'section-head-off' : ''}`}
      style={{ background: 'var(--paper-2)', color: 'var(--on-paper)' }}
    >
      <div className="shell relative" ref={ref}>
        {/* ── Antet ── */}
        {!hideHeader && (
          <div className="g12 mb-16 items-end gap-y-8 lg:mb-24">
            <div className="col-span-12 lg:col-span-8">
              <p className="mono eyebrow eyebrow-paper reveal mb-7">Cum funcționează</p>
              <h2 className="display d-lg">
                <Words>Trei pași.</Words>
                <Words delay={110} style={{ color: 'var(--on-paper-40)' }}>
                  Fără bătăi de cap.
                </Words>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-10">
              <p
                className="reveal d2 border-t pt-6 text-[0.9375rem] leading-relaxed"
                style={{ color: 'var(--on-paper-64)', borderColor: 'var(--line-paper)' }}
              >
                Nu-ți trebuie cunoștințe tehnice și nu schimbi nimic din ce
                folosești deja.
              </p>
            </div>
          </div>
        )}

        {/* ── Linia de proces, se umple la scroll ── */}
        <div className="fill-line reveal mb-12 hidden h-px lg:block" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
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
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink px-8 py-[1.15rem]"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.42 1.3-1.96 1.35-.5.05-.98.23-3.35-.7-2.82-1.11-4.6-3.99-4.74-4.18-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.97-2.31.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.47-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.28.14.45.12.61-.07.17-.19.7-.82.89-1.1.19-.28.38-.23.63-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.33.07.11.07.65-.17 1.33Z" />
            </svg>
            Scrie-mi pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
