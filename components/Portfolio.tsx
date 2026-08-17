'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

/* ──────────────────────────────────────────────────────────────
   Proiecte livrate.
   Completează `url` cu adresa fiecărui site — rândurile fără `url`
   se randează ca text simplu, nu ca link.
   ────────────────────────────────────────────────────────────── */
const projects = [
  { n: '01', name: 'Esthea', tag: 'Salon facial', url: '' },
  { n: '02', name: 'Dermiq', tag: 'Salon facial', url: '' },
  { n: '03', name: 'Couture Salon', tag: 'Salon', url: '' },
  { n: '04', name: 'Prestige', tag: 'Site web', url: '' },
]

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
      aria-hidden="true"
    >
      <path
        d="M5 13L13 5M13 5H6M13 5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Portfolio() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="proiecte"
      className="section relative overflow-hidden"
      style={{ background: 'var(--ink)' }}
    >
      <div className="shell relative" ref={ref}>
        {/* ── Antet ── */}
        <div className="g12 mb-14 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="mono eyebrow reveal mb-7">Proiecte livrate</p>
            <h2 className="display d-lg reveal d1">
              Site-uri pe care
              <br />
              <span style={{ color: 'var(--bone-30)' }}>le-am construit.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p
              className="reveal d2 border-t pt-6 text-[0.9375rem] leading-relaxed"
              style={{ color: 'var(--bone-46)', borderColor: 'var(--line-mid)' }}
            >
              Fiecare site e construit împreună cu sistemul care îl face să
              producă — nu doar o vitrină frumoasă.
            </p>
          </div>
        </div>

        {/* ── Index de proiecte ── */}
        <div className="border-t" style={{ borderColor: 'var(--line-mid)' }}>
          {projects.map((p, i) => {
            const content = (
              <>
                <span className="num shrink-0 text-[0.75rem] font-medium text-bone-16 transition-colors duration-500 group-hover:text-acid">
                  {p.n}
                </span>

                <div className="flex flex-1 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span
                    className="display"
                    style={{
                      fontSize: 'clamp(1.6rem, 3.4vw, 2.6rem)',
                      color: 'var(--bone)',
                    }}
                  >
                    {p.name}
                  </span>
                  <span className="mono-sm shrink-0" style={{ color: 'var(--bone-30)' }}>
                    {p.tag}
                  </span>
                </div>

                {p.url ? <Arrow /> : null}
              </>
            )

            const className = `reveal d${i + 1} group flex items-center gap-5 border-b py-8 transition-all duration-500 sm:gap-7`
            const style = { borderColor: 'var(--line)', color: 'var(--acid)' }

            const hover = {
              onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.paddingLeft = '0.75rem'
                e.currentTarget.style.borderColor = 'var(--acid-24)'
              },
              onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.paddingLeft = '0'
                e.currentTarget.style.borderColor = 'var(--line)'
              },
            }

            return p.url ? (
              <a
                key={p.n}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                style={style}
                {...hover}
              >
                {content}
              </a>
            ) : (
              <div key={p.n} className={className} style={style} {...hover}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
