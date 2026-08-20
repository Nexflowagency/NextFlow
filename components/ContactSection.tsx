'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import {
  WHATSAPP_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  TYPEFORM_URL,
  INSTAGRAM_URL,
} from '@/lib/contact'

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.42 1.3-1.96 1.35-.5.05-.98.23-3.35-.7-2.82-1.11-4.6-3.99-4.74-4.18-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.97-2.31.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.47-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.28.14.45.12.61-.07.17-.19.7-.82.89-1.1.19-.28.38-.23.63-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.33.07.11.07.65-.17 1.33Z" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 6.2 2 2 0 0 1 6 4V3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const FormIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 3h14v18H5V3Zm3.5 5h7m-7 4h7m-7 4h4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const channels = [
  {
    tag: 'Cel mai rapid',
    title: 'Scrie-mi pe WhatsApp',
    detail: 'Scrii două rânduri despre afacerea ta și continuăm acolo. Fără formalități.',
    action: 'Deschide WhatsApp',
    href: WHATSAPP_URL,
    icon: <WhatsAppIcon />,
    accent: true,
  },
  {
    tag: 'Direct la telefon',
    title: PHONE_DISPLAY,
    detail: 'Dacă preferi să vorbim, sună. Dacă nu răspund, sunt cu un client — revin.',
    action: 'Sună acum',
    href: `tel:${PHONE_E164}`,
    icon: <PhoneIcon />,
  },
  {
    tag: 'Ai timp să scrii',
    title: 'Completează formularul',
    detail: 'Câteva întrebări despre ce faci și unde te doare. Vin la discuție pregătit.',
    action: 'Deschide formularul',
    href: TYPEFORM_URL,
    icon: <FormIcon />,
  },
]

const next = [
  {
    n: '01',
    title: 'Îți răspund personal',
    text: 'Nu ajungi la un call center. Îți răspund eu, nu un robot — pe ăia îi construiesc, nu îi pun între noi.',
  },
  {
    n: '02',
    title: 'Vorbim o jumătate de oră',
    text: 'Îmi spui cum lucrezi acum, îți arăt unde pierzi timp și bani. Discuția e gratuită și nu te obligă la nimic.',
  },
  {
    n: '03',
    title: 'Primești o ofertă în scris',
    text: 'Cu ce intră în ea, cât costă și cât durează. Decizi tu, în ritmul tău. Fără insistențe.',
  },
]

export default function ContactSection() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section id="contact-canale" className="section section-head-off relative overflow-hidden" style={{ background: 'var(--ink)' }}>
      <div className="shell relative" ref={ref}>
        {/* ── Canalele ── */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {channels.map((c, i) => (
            <a
              key={c.title}
              href={c.href}
              className={`panel reveal d${i + 1} group flex flex-col p-8`}
              {...(c.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <span className="tick tick-tl" aria-hidden="true" />
              <span className="tick tick-br" aria-hidden="true" />

              <div className="mb-7 flex items-center justify-between gap-4">
                <span style={{ color: c.accent ? 'var(--green)' : 'var(--bone-46)' }}>
                  {c.icon}
                </span>
                <span
                  className="mono-sm rounded-[3px] px-2.5 py-1.5"
                  style={
                    c.accent
                      ? { background: 'var(--green)', color: 'var(--ink)' }
                      : { border: '1px solid var(--line-mid)', color: 'var(--bone-30)' }
                  }
                >
                  {c.tag}
                </span>
              </div>

              <h2 className="display d-sm mb-3" style={{ color: 'var(--bone)' }}>
                {c.title}
              </h2>
              <p
                className="mb-7 flex-1 text-[0.9375rem] leading-relaxed"
                style={{ color: 'var(--bone-46)' }}
              >
                {c.detail}
              </p>

              <span
                className="mono-sm inline-flex items-center gap-2"
                style={{ color: 'var(--green)' }}
              >
                {c.action}
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
        </div>

        {/* ── Ce se întâmplă mai departe ── */}
        <div className="g12 mt-20 items-start gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="mono eyebrow reveal mb-7">După ce scrii</p>
            <h2 className="display d-md reveal d1" style={{ color: 'var(--bone)' }}>
              Ce se întâmplă
              <br />
              <span style={{ color: 'var(--bone-30)' }}>mai departe.</span>
            </h2>
            <p
              className="reveal d2 mt-7 max-w-[34ch] text-[0.9375rem] leading-relaxed"
              style={{ color: 'var(--bone-46)' }}
            >
              Fără pași ascunși și fără să te sun de cinci ori. Uite exact cum
              decurge.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div className="border-t" style={{ borderColor: 'var(--line-mid)' }}>
              {next.map((s, i) => (
                <div
                  key={s.n}
                  className={`reveal d${i + 1} flex items-baseline gap-5 border-b py-7 sm:gap-7`}
                  style={{ borderColor: 'var(--line)' }}
                >
                  <span className="num shrink-0 text-[0.75rem] font-medium" style={{ color: 'var(--green)' }}>
                    {s.n}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="display d-sm mb-2.5" style={{ color: 'var(--bone)' }}>
                      {s.title}
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed" style={{ color: 'var(--bone-46)' }}>
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="reveal d4 mono-sm mt-7 flex flex-wrap items-center gap-x-3 gap-y-2" style={{ color: 'var(--bone-30)' }}>
              <span className="live" aria-hidden="true" />
              Mă găsești și pe
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-draw tap"
                style={{ color: 'var(--bone-72)' }}
              >
                Instagram
              </a>
            </p>
          </div>
        </div>

        {/* ── Formularul, direct în pagină ── */}
        <div className="reveal mt-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mono eyebrow mb-4">Formular</p>
              <h2 className="display d-sm" style={{ color: 'var(--bone)' }}>
                Sau spune-mi aici despre afacerea ta
              </h2>
            </div>
            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-sm underline-draw tap"
              style={{ color: 'var(--bone-46)' }}
            >
              Deschide într-o filă nouă
            </a>
          </div>

          <div className="panel overflow-hidden">
            <span className="tick tick-tl" aria-hidden="true" />
            <span className="tick tick-br" aria-hidden="true" />
            <iframe
              src={TYPEFORM_URL}
              title="Formular de contact Nextflow"
              loading="lazy"
              className="block w-full border-0"
              style={{ height: 'clamp(520px, 68vh, 720px)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
