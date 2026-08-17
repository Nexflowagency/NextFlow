'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const included = [
  'Harta fluxului tău actual',
  'Unde pierzi bani, cu cifre',
  'Planul de automatizare',
  'Estimare de cost și timp',
]

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="cta"
      className="section relative overflow-hidden"
      style={{ background: 'var(--acid)', color: 'var(--ink)' }}
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
              Îți arătăm exact cum ar arăta sistemul la tine în afacere. Gratuit,
              fără angajament, fără prezentare de vânzare.
            </p>

            <div className="reveal d3 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@nextflow.ai?subject=Vreau%20o%20analiz%C4%83%20gratuit%C4%83"
                className="btn btn-ink px-8 py-[1.15rem]"
              >
                Vreau demo gratuit
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
              <a href="mailto:hello@nextflow.ai" className="btn btn-ink-line px-8 py-[1.15rem]">
                Scrie-ne pe email
              </a>
            </div>

            <p
              className="mono-sm reveal d4 mt-8"
              style={{ color: 'rgba(10,9,8,0.45)' }}
            >
              Fără angajament · 30 de minute · Rezultate în săptămâni
            </p>
          </div>

          {/* ── Ce primești: oglindă a coloanei tehnice din hero ── */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p
              className="mono-sm reveal d2 mb-4"
              style={{ color: 'rgba(10,9,8,0.5)' }}
            >
              Ce primești în call
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
