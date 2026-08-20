import { ReactNode } from 'react'
import Logo from './Logo'
import Footer from './Footer'
import SmoothScroll from './SmoothScroll'
import Cursor from './Cursor'

export type LegalSection = {
  id: string
  title: string
  content: ReactNode
}

type Props = {
  eyebrow: string
  titleTop: string
  titleAccent: string
  updated: string
  standard: string
  sections: LegalSection[]
  footerNote: ReactNode
}

/**
 * Cadrul comun al paginilor legale.
 *
 * Nu folosește navbarul principal: acolo toate linkurile sunt ancore către
 * secțiunile paginii de start, iar pe un document separat n-ar duce nicăieri.
 * Un antet minimal, cu marca și drumul înapoi, e și mai potrivit pentru un
 * text pe care omul vine să-l citească, nu să-l navigheze.
 */
export default function LegalPage({
  eyebrow,
  titleTop,
  titleAccent,
  updated,
  standard,
  sections,
  footerNote,
}: Props) {
  return (
    <main style={{ background: 'var(--ink)' }}>
      {/* Același strat de mișcare ca pe pagina de start: altfel cursorul
          propriu ar dispărea la navigare și ar părea defect. Intro-ul nu
          are ce căuta aici — nu e o pagină de prezentare. */}
      <SmoothScroll />
      <Cursor />

      {/* ── Antet minimal ── */}
      <header
        className="sticky top-0 z-50"
        style={{
          background: 'rgba(10, 9, 8, 0.82)',
          backdropFilter: 'blur(18px) saturate(140%)',
          WebkitBackdropFilter: 'blur(18px) saturate(140%)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="shell flex h-16 items-center justify-between md:h-[76px]">
          <a href="/" aria-label="Nextflow.ai — acasă">
            <Logo uid="nf-legal" size={34} />
          </a>
          <a
            href="/"
            className="mono underline-draw flex items-center gap-2.5 transition-colors duration-300"
            style={{ color: 'var(--bone-46)' }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M13 8H3M7 4L3 8L7 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Înapoi la site
          </a>
        </div>
      </header>

      {/* ── Titlu ── */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: 'var(--line)' }}>
        <div className="blueprint" aria-hidden="true" />
        <div className="mesh" style={{ opacity: 0.75 }} aria-hidden="true" />
        <div className="shell relative pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="legal-measure">
            <p className="mono eyebrow mb-7">{eyebrow}</p>
            <h1 className="display d-lg mb-6">
              {titleTop}
              <br />
              <span style={{ color: 'var(--green)' }}>{titleAccent}</span>
            </h1>
            <p className="mono-sm" style={{ color: 'var(--bone-30)' }}>
              Ultima actualizare: <span style={{ color: 'var(--bone-72)' }}>{updated}</span>
              <span className="mx-3">·</span>
              {standard}
            </p>
          </div>
        </div>
      </div>

      {/* ── Cuprins ── */}
      <div className="shell pt-14">
        <div className="legal-measure">
          <p className="mono-sm mb-5" style={{ color: 'var(--bone-30)' }}>
            Cuprins
          </p>
          <ol className="legal-toc mb-16 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id} className="flex items-baseline gap-3">
                <span className="num shrink-0 text-[0.6875rem]" style={{ color: 'var(--bone-16)' }}>
                  {section.id.padStart(2, '0')}
                </span>
                <a
                  href={`#s${section.id}`}
                  className="underline-draw text-[0.9375rem] transition-colors duration-300"
                  style={{ color: 'var(--bone-72)' }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ── Secțiuni ── */}
      <div className="shell pb-20">
        <div className="legal-measure border-t" style={{ borderColor: 'var(--line-mid)' }}>
          {sections.map((section) => (
            <section key={section.id} id={`s${section.id}`} className="legal-section border-b py-10" style={{ borderColor: 'var(--line)' }}>
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="num shrink-0 text-[0.75rem] font-medium" style={{ color: 'var(--green)' }}>
                  {section.id.padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="display d-sm mb-5" style={{ color: 'var(--bone)' }}>
                    {section.title}
                  </h2>
                  <div className="legal-prose">{section.content}</div>
                </div>
              </div>
            </section>
          ))}

          {/* ── Notă de final ── */}
          <div className="panel mt-12 p-8 sm:p-10">
            <span className="tick tick-tl" aria-hidden="true" />
            <span className="tick tick-br" aria-hidden="true" />
            {footerNote}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
