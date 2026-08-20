'use client'

import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FinalCTA from './FinalCTA'
import SmoothScroll from './SmoothScroll'
import Cursor from './Cursor'
import Magnetic from './Magnetic'
import { pages } from '@/lib/nav'
import { useGlobalScrollReveal } from '@/hooks/useScrollReveal'

type Props = {
  /** Adresa paginii curente — scoate pagina din linkurile „mai departe” */
  href: string
  eyebrow: string
  titleTop: string
  titleAccent: string
  lede: string
  /** Perechea cheie–valoare din dreapta antetului (opțional) */
  facts?: { k: string; v: string }[]
  children: ReactNode
  /** Blocul verde de final. Pe pagina de contact ar fi de prisos. */
  cta?: boolean
}

/**
 * Cadrul comun al paginilor interioare.
 *
 * Antetul poartă titlul paginii (h1), ca fiecare adresă să aibă un singur
 * titlu propriu; secțiunea de dedesubt vine cu hideHeader și intră direct
 * în conținut. Jos, linkuri către celelalte pagini — cine a citit una are
 * unde merge mai departe fără să se întoarcă la meniu.
 */
export default function PageShell({
  href,
  eyebrow,
  titleTop,
  titleAccent,
  lede,
  facts,
  children,
  cta = true,
}: Props) {
  useGlobalScrollReveal()

  const current = pages.find((p) => p.href === href)
  const others = pages.filter((p) => p.href !== href)

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasă', item: 'https://nextflow.ro' },
      {
        '@type': 'ListItem',
        position: 2,
        name: current?.label ?? titleAccent,
        item: `https://nextflow.ro${href}`,
      },
    ],
  }

  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Magnetic />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main style={{ background: 'var(--ink)' }}>
        <Navbar />

        {/* ── Antetul paginii ── */}
        <header className="relative overflow-hidden border-b" style={{ borderColor: 'var(--line)' }}>
          <div className="blueprint" aria-hidden="true" />
          <div className="mesh" style={{ opacity: 0.75 }} aria-hidden="true" />

          <div className="shell relative pb-16 pt-28 md:pb-24 md:pt-36">
            {/* Firimituri — și pentru om, și pentru Google */}
            <nav
              className="mono-sm mb-8 flex items-center gap-2.5"
              style={{ color: 'var(--bone-30)' }}
              aria-label="Firimituri"
            >
              <a href="/" className="underline-draw tap" style={{ color: 'var(--bone-46)' }}>
                Acasă
              </a>
              <span aria-hidden="true">/</span>
              <span style={{ color: 'var(--bone-72)' }}>{current?.label ?? titleAccent}</span>
            </nav>

            <div className="g12 items-end gap-y-10">
              <div className="col-span-12 lg:col-span-8">
                <p className="mono eyebrow mb-7">{eyebrow}</p>
                <h1 className="display d-lg">
                  {titleTop}
                  <br />
                  <span style={{ color: 'var(--green)' }}>{titleAccent}</span>
                </h1>
                <p className="lede mt-8 max-w-[46ch]">{lede}</p>
              </div>

              {facts && facts.length > 0 && (
                <div className="col-span-12 lg:col-span-3 lg:col-start-10">
                  <dl className="border-t" style={{ borderColor: 'var(--line-mid)' }}>
                    {facts.map((f) => (
                      <div
                        key={f.k}
                        className="flex items-center justify-between gap-4 border-b py-3.5"
                        style={{ borderColor: 'var(--line)' }}
                      >
                        <dt className="mono-sm" style={{ color: 'var(--bone-30)' }}>
                          {f.k}
                        </dt>
                        <dd
                          className="num text-[0.8125rem] font-medium"
                          style={{ color: 'var(--bone-72)' }}
                        >
                          {f.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>
          </div>
        </header>

        {children}

        {/* ── Mai departe ── */}
        <section className="section-sm relative" style={{ background: 'var(--ink-1)' }}>
          <div className="shell">
            <p className="mono eyebrow mb-8">Mai departe</p>
            <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="group flex flex-col justify-between gap-6 border-t py-7 pr-6 transition-all duration-500 sm:pr-10"
                  style={{ borderColor: 'var(--line-mid)' }}
                >
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="mono-sm" style={{ color: 'var(--bone-16)' }}>
                        {p.index}
                      </span>
                      <span
                        className="display d-sm transition-colors duration-500 group-hover:text-green"
                        style={{ color: 'var(--bone)' }}
                      >
                        {p.label}
                      </span>
                    </div>
                    <p className="text-[0.9375rem] leading-relaxed" style={{ color: 'var(--bone-46)' }}>
                      {p.blurb}
                    </p>
                  </div>
                  <span
                    className="mono-sm inline-flex items-center gap-2"
                    style={{ color: 'var(--green)' }}
                  >
                    Deschide
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="transition-transform duration-500 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 9h11M10 5l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              ))}

              {/* Celulă goală: fără ea, linia de deasupra ultimului rând se
                  oprește la jumătate și blocul pare tăiat. */}
              <div
                className="hidden border-t sm:block"
                style={{ borderColor: 'var(--line-mid)' }}
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {cta && <FinalCTA />}
        <Footer />
      </main>
    </>
  )
}
