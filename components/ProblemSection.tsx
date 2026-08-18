'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Words from './Words'

const pains = [
  { n: '01', line: 'Răspunzi manual la fiecare mesaj.', cost: '3h / zi pierdute' },
  { n: '02', line: 'Pierzi lead-uri în fiecare zi.', cost: '−20% venit' },
  { n: '03', line: 'Faci același lucru în fiecare zi.', cost: 'Zero scalare' },
  { n: '04', line: 'Afacerea depinde 100% de tine.', cost: 'Risc maxim' },
]

export default function ProblemSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="problema"
      className="section relative overflow-hidden"
      style={{ background: 'var(--ink)' }}
    >
      <div className="shell g12 items-start gap-y-14" ref={ref}>
        {/* ── Titlu, lipit la scroll ── */}
        <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32">
          <p className="mono eyebrow reveal mb-7">Recunoști asta?</p>
          <h2 className="display d-md">
            <Words>Ești ocupat.</Words>
            <Words delay={90} style={{ color: 'var(--bone-30)' }}>
              Dar nu productiv.
            </Words>
          </h2>
          <p
            className="reveal d2 mt-7 max-w-[34ch] text-[0.9375rem] leading-relaxed"
            style={{ color: 'var(--bone-46)' }}
          >
            Nu ai o problemă de efort. Ai o problemă de structură — și te costă
            în fiecare zi în care rămâne nerezolvată.
          </p>
        </div>

        {/* ── Lista de simptome ── */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="border-t" style={{ borderColor: 'var(--line-mid)' }}>
            {pains.map((p, i) => (
              <div
                key={p.n}
                className={`reveal d${i + 1} group flex items-baseline gap-5 border-b py-7 transition-all duration-500 sm:gap-7`}
                style={{ borderColor: 'var(--line)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = '0.75rem'
                  e.currentTarget.style.borderColor = 'var(--green-24)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.style.borderColor = 'var(--line)'
                }}
              >
                <span className="num shrink-0 text-[0.75rem] font-medium text-bone-16 transition-colors duration-500 group-hover:text-green">
                  {p.n}
                </span>

                {/* Pe mobil costul coboară sub text, ca fraza să nu se rupă în cuvinte */}
                <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <p className="display d-sm" style={{ color: 'var(--bone)', fontWeight: 700 }}>
                    {p.line}
                  </p>
                  <span
                    className="mono-sm shrink-0 sm:text-right"
                    style={{ color: 'var(--clay)' }}
                  >
                    {p.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Linia de cost — concluzia secțiunii */}
          <div
            className="reveal d5 mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-l-2 pl-6"
            style={{ borderColor: 'var(--clay)' }}
          >
            <span className="mono-sm" style={{ color: 'var(--bone-30)' }}>
              Costul real
            </span>
            <p className="display d-sm" style={{ color: 'var(--bone)' }}>
              Pierzi <span style={{ color: 'var(--clay)' }}>20–40% din clienți</span>{' '}
              fără să știi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
