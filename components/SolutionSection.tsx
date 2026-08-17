'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const solutions = [
  {
    n: '01',
    title: 'Răspuns instant la orice lead',
    outcome: 'Zero lead-uri pierdute',
    description:
      'Fiecare mesaj primit primește răspuns automat și calificare automată, 24/7 — pe WhatsApp, Instagram, formular sau telefon.',
  },
  {
    n: '02',
    title: 'Follow-up fără efort',
    outcome: 'Mai multe contracte',
    description:
      'Sistemul urmărește fiecare prospect automat, cu mesaje care par scrise de tine, până devine client sau spune clar „nu".',
  },
  {
    n: '03',
    title: 'CRM care lucrează singur',
    outcome: 'Control complet',
    description:
      'Pipeline actualizat în timp real, scoruri pe lead-uri, notificări când ceva are nevoie de tine. Nimic introdus manual.',
  },
  {
    n: '04',
    title: 'Operațiuni fără tine',
    outcome: 'Timp liber real',
    description:
      'Programări, facturi, rapoarte, notificări interne — scoase complet din rutina ta zilnică și din capul tău.',
  },
]

export default function SolutionSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="sistem"
      className="section relative overflow-hidden"
      style={{ background: 'var(--paper)', color: 'var(--on-paper)' }}
    >
      <div
        className="blueprint blueprint-paper"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 0%, #000 10%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 55% at 50% 0%, #000 10%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="shell relative" ref={ref}>
        {/* ── Antet asimetric ── */}
        <div className="g12 mb-16 items-end gap-y-8 lg:mb-24">
          <div className="col-span-12 lg:col-span-7">
            <p className="mono eyebrow eyebrow-paper reveal mb-7">Ce construim</p>
            <h2 className="display d-lg reveal d1">
              Noi facem tot.
              <br />
              <span style={{ color: 'var(--on-paper-40)' }}>Tu controlezi.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p
              className="reveal d2 border-t pt-6 text-[0.9375rem] leading-relaxed"
              style={{ color: 'var(--on-paper-64)', borderColor: 'var(--line-paper)' }}
            >
              Patru sisteme care se leagă între ele. Le construim, le conectăm la
              uneltele pe care le folosești deja și ți le predăm funcționale.
            </p>
          </div>
        </div>

        {/* ── Grilă decalată pe verticală ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-6">
          {solutions.map((item, i) => (
            <article
              key={item.n}
              className={`panel-paper reveal d${(i % 4) + 1} flex flex-col p-8 sm:p-10 ${
                i % 2 === 1 ? 'md:mt-14' : ''
              }`}
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <span
                  className="display leading-none"
                  style={{ fontSize: '2.75rem', color: 'rgba(19,17,16,0.14)' }}
                >
                  {item.n}
                </span>
                {/* Marcaj tip textmarker — singurul loc unde acidul apare pe hârtie */}
                <span
                  className="mono-sm rounded-[3px] px-2.5 py-1.5"
                  style={{ background: 'var(--acid)', color: 'var(--ink)' }}
                >
                  {item.outcome}
                </span>
              </div>

              <h3 className="display d-sm mb-4">{item.title}</h3>
              <p
                className="text-[0.9375rem] leading-relaxed"
                style={{ color: 'var(--on-paper-64)' }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
