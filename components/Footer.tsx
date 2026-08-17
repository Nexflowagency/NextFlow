import Logo from './Logo'

const columns = [
  {
    title: 'Navigare',
    links: [
      { label: 'Problema', href: '#problema' },
      { label: 'Sistemul', href: '#sistem' },
      { label: 'Proces', href: '#proces' },
      { label: 'Rezultate', href: '#rezultate' },
      { label: 'Proiecte', href: '#proiecte' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@nextflow.ai', href: 'mailto:hello@nextflow.ai' },
      { label: 'Instagram', href: 'https://www.instagram.com/nextflow_agency.ai' },
      { label: 'Programează un call', href: '#cta' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t"
      style={{ background: 'var(--ink)', borderColor: 'var(--line)' }}
    >
      <div className="shell relative pt-20">
        <div className="g12 gap-y-12 pb-16">
          {/* ── Brand ── */}
          <div className="col-span-12 lg:col-span-5">
            <a href="#" aria-label="Nextflow.ai — acasă" className="inline-block">
              <Logo />
            </a>
            <p
              className="mt-6 max-w-[32ch] text-[0.9375rem] leading-relaxed"
              style={{ color: 'var(--bone-46)' }}
            >
              Sisteme AI de automatizare pentru afaceri care vor să crească fără
              să angajeze mai mult personal.
            </p>
            <div className="mono-sm mt-7 flex items-center gap-2.5" style={{ color: 'var(--bone-30)' }}>
              <span className="live" aria-hidden="true" />
              Acceptăm proiecte noi
            </div>
          </div>

          {/* ── Coloane de linkuri ── */}
          {columns.map((col) => (
            <nav key={col.title} className="col-span-6 lg:col-span-2 lg:col-start-auto">
              <p className="mono-sm mb-5" style={{ color: 'var(--bone-30)' }}>
                {col.title}
              </p>
              <ul className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="underline-draw text-[0.9375rem] transition-colors duration-300"
                      style={{ color: 'var(--bone-72)' }}
                      {...(link.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* ── CTA ── */}
          <div className="col-span-12 lg:col-span-3">
            <p className="mono-sm mb-5" style={{ color: 'var(--bone-30)' }}>
              Începe
            </p>
            <a href="#cta" className="btn btn-acid w-full">
              Programează un call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Bara legală ── */}
        <div
          className="flex flex-col-reverse items-start justify-between gap-4 border-t py-7 sm:flex-row sm:items-center"
          style={{ borderColor: 'var(--line)' }}
        >
          <p className="mono-sm" style={{ color: 'var(--bone-16)' }}>
            © {year} Nextflow.ai — Toate drepturile rezervate
          </p>
          <div className="mono-sm flex flex-wrap gap-6" style={{ color: 'var(--bone-16)' }}>
            <a href="#" className="underline-draw">
              Confidențialitate
            </a>
            <a href="#" className="underline-draw">
              Termeni
            </a>
          </div>
        </div>
      </div>

      {/* ── Wordmark uriaș, tăiat de marginea de jos ── */}
      <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div
          className="display shell whitespace-nowrap leading-[0.75]"
          style={{
            fontSize: 'clamp(3.5rem, 15.5vw, 14rem)',
            letterSpacing: '-0.055em',
            color: 'var(--bone)',
            opacity: 0.055,
            marginBottom: '-0.16em',
          }}
        >
          Nextflow.ai
        </div>
      </div>
    </footer>
  )
}
