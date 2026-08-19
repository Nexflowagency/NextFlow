'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_E164, TYPEFORM_URL } from '@/lib/contact'

const included = [
  'Îți spun ce pierzi acum, cu cifre',
  'Îți arăt cum ar arăta la tine',
  'Îți zic cât costă și cât durează',
  'Decizi tu. Fără insistențe.',
]

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="cta"
      className="section relative overflow-hidden"
      style={{ background: 'var(--green)', color: 'var(--ink)' }}
    >
      {/* Grilă în cerneală peste acid — sparge planeitatea blocului de culoare */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(10,9,8,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,9,8,0.07) 1px, transparent 1px)',
          backgroundSize: 'clamp(72px, 9vw, 116px) clamp(72px, 9vw, 116px)',
        }}
        aria-hidden="true"
      />

      <div className="shell relative" ref={ref}>
        <div className="g12 items-end gap-y-14">
          {/* ── Mesajul ── */}
          <div className="col-span-12 lg:col-span-7">
            <p
              className="mono eyebrow reveal mb-8"
              style={{ color: 'rgba(10,9,8,0.55)' }}
            >
              Pasul următor
            </p>

            <h2
              className="display reveal d1 mb-8"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.2rem)' }}
            >
              Nu trebuie să
              <br />
              muncești mai mult.
              <br />
              <span
                style={{
                  textDecoration: 'underline',
                  textDecorationThickness: '5px',
                  textUnderlineOffset: '10px',
                  textDecorationColor: 'var(--ink)',
                }}
              >
                Trebuie să automatizezi.
              </span>
            </h2>

            <p
              className="reveal d2 mb-10 max-w-[42ch] text-[1.0625rem] leading-relaxed"
              style={{ color: 'rgba(10,9,8,0.62)' }}
            >
              Scrie-mi pe WhatsApp ce afacere ai, sau completează formularul
              dacă preferi să-mi lași totul în scris. Îți răspund personal și
              îți spun sincer dacă te pot ajuta sau nu.
            </p>

            <div className="reveal d3 flex flex-col gap-3 sm:flex-row">
              <span data-magnetic className="inline-flex">
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
              </span>
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ink-line px-8 py-[1.15rem]"
              >
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3 4.5h12M3 9h12M3 13.5h7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                Completează formularul
              </a>
            </div>

            <p
              className="mono-sm reveal d4 mt-8"
              style={{ color: 'rgba(10,9,8,0.45)' }}
            >
              Răspund personal · Fără angajament ·{' '}
              <a href={`tel:${PHONE_E164}`} className="underline-draw tap">
                sau sună la {PHONE_DISPLAY}
              </a>
            </p>
          </div>

          {/* ── Ce primești: oglindă a coloanei tehnice din hero ── */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p
              className="mono-sm reveal d2 mb-4"
              style={{ color: 'rgba(10,9,8,0.5)' }}
            >
              Ce se întâmplă mai departe
            </p>
            <ul
              className="reveal d3 border-t"
              style={{ borderColor: 'rgba(10,9,8,0.22)' }}
            >
              {included.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-b py-4"
                  style={{ borderColor: 'rgba(10,9,8,0.13)' }}
                >
                  <span className="num text-[0.6875rem]" style={{ color: 'rgba(10,9,8,0.4)' }}>
                    0{i + 1}
                  </span>
                  <span className="text-[0.9375rem] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
