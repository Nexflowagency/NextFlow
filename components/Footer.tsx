import Logo from './Logo'
import {
  WHATSAPP_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  INSTAGRAM_URL,
  ANPC_SAL_URL,
  EU_SOL_URL,
} from '@/lib/contact'

/* Platformele de soluționare a litigiilor, obligatoriu accesibile din site */
const disputeResolution = [
  {
    tag: 'ANPC · SAL',
    name: 'Soluționarea Alternativă a Litigiilor',
    href: ANPC_SAL_URL,
  },
  {
    tag: 'UE · SOL',
    name: 'Soluționarea Online a Litigiilor',
    href: EU_SOL_URL,
  },
]

const columns = [
  {
    title: 'Navigare',
    links: [
      { label: 'Ce facem', href: '#servicii' },
      { label: 'Proces', href: '#proces' },
      { label: 'Cât câștigi', href: '#impact' },
      { label: 'Păreri', href: '#pareri' },
      { label: 'Proiecte', href: '#proiecte' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'WhatsApp', href: WHATSAPP_URL },
      { label: PHONE_DISPLAY, href: `tel:${PHONE_E164}` },
      { label: 'Instagram', href: INSTAGRAM_URL },
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
              <Logo uid="nf-foot" />
            </a>
            <p
              className="mt-6 max-w-[34ch] text-[0.9375rem] leading-relaxed"
              style={{ color: 'var(--bone-46)' }}
            >
              Construim site-uri și roboți care răspund clienților, îi
              programează și țin totul organizat — non-stop, pentru afaceri
              locale din România.
            </p>
            <div className="mono-sm mt-7 flex items-center gap-2.5" style={{ color: 'var(--bone-30)' }}>
              <span className="live" aria-hidden="true" />
              Accept proiecte noi
            </div>
          </div>

          {/* ── Coloane de linkuri ── */}
          {columns.map((col) => (
            <nav key={col.title} className="col-span-6 lg:col-span-2">
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
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green w-full"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.42 1.3-1.96 1.35-.5.05-.98.23-3.35-.7-2.82-1.11-4.6-3.99-4.74-4.18-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.97-2.31.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.47-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.28.14.45.12.61-.07.17-.19.7-.82.89-1.1.19-.28.38-.23.63-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.33.07.11.07.65-.17 1.33Z" />
              </svg>
              Scrie-mi pe WhatsApp
            </a>
          </div>
        </div>

        {/* ── Soluționarea litigiilor ── */}
        <div className="border-t py-7" style={{ borderColor: 'var(--line)' }}>
          <p className="mono-sm mb-4" style={{ color: 'var(--bone-30)' }}>
            Soluționarea litigiilor
          </p>
          <div className="flex flex-wrap gap-3">
            {disputeResolution.map((item) => (
              <a
                key={item.tag}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="legal-chip group"
              >
                <span
                  className="mono-sm whitespace-nowrap"
                  style={{ color: 'var(--green)' }}
                >
                  {item.tag}
                </span>
                <span
                  className="text-[0.8125rem] leading-snug"
                  style={{ color: 'var(--bone-72)' }}
                >
                  {item.name}
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="shrink-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: 'var(--bone-30)' }}
                  aria-hidden="true"
                >
                  <path
                    d="M5 13L13 5M13 5H6M13 5V12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ── Bara legală ── */}
        <div
          className="flex flex-col-reverse items-start justify-between gap-4 border-t py-7 sm:flex-row sm:items-center"
          style={{ borderColor: 'var(--line)' }}
        >
          <p className="mono-sm" style={{ color: 'var(--bone-16)' }}>
            © {year} Nextflow Agency — Toate drepturile rezervate
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
          data-speed="0.055"
          style={{
            fontSize: 'clamp(3.5rem, 15.5vw, 14rem)',
            letterSpacing: '-0.035em',
            color: 'var(--bone)',
            opacity: 0.055,
            marginBottom: '-0.14em',
          }}
        >
          Nextflow.ai
        </div>
      </div>
    </footer>
  )
}
