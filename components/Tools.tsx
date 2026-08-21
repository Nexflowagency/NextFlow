'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Words from './Words'
import type { SectionProps } from '@/lib/nav'

/* ──────────────────────────────────────────────────────────────
   Iconițele sunt desenate aici, ca trasee SVG monocrome, nu luate
   de pe site-urile producătorilor. Două motive:

   1. Legal și tehnic — n-avem dreptul să redistribuim logourile
      altora, iar un export static nu are de unde să le încarce.
   2. Vizual — zece logouri colorate într-un site alb-negru-verde
      arată ca un panou de abțibilduri. Un set monocrom, desenat pe
      aceeași grosime de linie, arată ca o decizie de design.

   Sunt stilizări recognoscibile, nu reproduceri exacte.
   ────────────────────────────────────────────────────────────── */

const s = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** n8n — noduri legate între ele, exact ce face unealta */
const N8n = () => (
  <svg viewBox="0 0 24 24" {...s}>
    <path d="M5.6 12h3.2M13.84 10.32 17.2 7.8M13.84 13.68 17.2 16.2" />
    <circle cx="3.6" cy="12" r="2" />
    <circle cx="11.6" cy="12" r="2.8" />
    <circle cx="18.8" cy="6.6" r="2" />
    <circle cx="18.8" cy="17.4" r="2" />
  </svg>
)

/** Claude — raze care pornesc din centru, inegale */
const Claude = () => (
  <svg viewBox="0 0 24 24" {...s} strokeWidth={2.1}>
    <path d="M13.6 12H20M12 10.4V4M10.4 12H4M12 13.6V20" />
    <path d="m13.13 10.87 3.11-3.11M10.87 10.87 7.76 7.76M10.87 13.13l-3.11 3.11M13.13 13.13l3.11 3.11" />
  </svg>
)

/** Higgsfield — un câmp de particule cu o excitație în mijloc */
const Higgsfield = () => (
  <svg viewBox="0 0 24 24" {...s}>
    <circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="6.2" opacity="0.45" />
    <circle cx="4.4" cy="5.6" r="1" fill="currentColor" stroke="none" />
    <circle cx="19.6" cy="5.6" r="1" fill="currentColor" stroke="none" />
    <circle cx="4.4" cy="18.4" r="1" fill="currentColor" stroke="none" />
    <circle cx="19.6" cy="18.4" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="2.9" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="12" cy="21.1" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

/** ElevenLabs — cele două bare verticale */
const ElevenLabs = () => (
  <svg viewBox="0 0 24 24" {...s} strokeWidth={2.6}>
    <path d="M9 4v16M15 4v16" />
  </svg>
)

/** Telegram — avionul de hârtie în cerc */
const Telegram = () => (
  <svg viewBox="0 0 24 24" {...s}>
    <circle cx="12" cy="12" r="9.4" />
    <path d="m6.9 12.1 10.5-4-1.9 8.5-3.1-2.2-1.6 1.9-.3-3.2z" />
    <path d="m10.5 13.1 6.9-5" />
  </svg>
)

/** WhatsApp — bula cu coadă și receptorul */
const WhatsApp = () => (
  <svg viewBox="0 0 24 24" {...s}>
    <path d="M12 3.2a8.8 8.8 0 0 0-7.5 13.4L3.2 20.8l4.4-1.2A8.8 8.8 0 1 0 12 3.2Z" />
    <path d="M9.5 8.8c.3-.5.8-.4 1 0l.5 1.1c.1.2 0 .4-.1.6l-.5.4c.4.9 1.2 1.7 2.1 2.1l.4-.5c.2-.2.4-.2.6-.1l1.1.5c.4.2.5.7.1 1-1.6 1-5.6-2.6-5.2-5.1Z" />
  </svg>
)

/** Zoom — camera video */
const Zoom = () => (
  <svg viewBox="0 0 24 24" {...s}>
    <rect x="2.4" y="6.6" width="12.4" height="10.8" rx="3" />
    <path d="M14.8 11.2 21.6 7.4v9.2l-6.8-3.8z" />
  </svg>
)

/** Google Calendar — foaia cu inele */
const Calendar = () => (
  <svg viewBox="0 0 24 24" {...s}>
    <rect x="3.2" y="5.2" width="17.6" height="15.6" rx="2.6" />
    <path d="M3.2 9.8h17.6M8.2 3.2v4M15.8 3.2v4" />
  </svg>
)

/** Notion — N-ul unghiular în pagină */
const Notion = () => (
  <svg viewBox="0 0 24 24" {...s}>
    <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="2.6" />
    <path d="M9 16.2V7.8l6 8.4V7.8" />
  </svg>
)

/** Vercel — triunghiul */
const Vercel = () => (
  <svg viewBox="0 0 24 24" {...s}>
    <path d="M12 4.4 21.2 19.6H2.8z" fill="currentColor" />
  </svg>
)

const tools = [
  { name: 'n8n', role: 'Automatizări', Icon: N8n },
  { name: 'Claude Code', role: 'Site & agenți', Icon: Claude },
  { name: 'Higgsfield', role: 'Video AI', Icon: Higgsfield },
  { name: 'ElevenLabs', role: 'Voce AI', Icon: ElevenLabs },
  { name: 'Telegram', role: 'Boți & alerte', Icon: Telegram },
  { name: 'WhatsApp', role: 'Mesaje clienți', Icon: WhatsApp },
  { name: 'Zoom', role: 'Întâlniri', Icon: Zoom },
  { name: 'Google Calendar', role: 'Programări', Icon: Calendar },
  { name: 'Notion', role: 'Evidența', Icon: Notion },
  { name: 'Vercel', role: 'Găzduire', Icon: Vercel },
]

/* Semnalul face un tur complet în 6 secunde, trecând pe rând prin
   fiecare unealtă — cât durează un tur împărțit la câte sunt. */
const CYCLE = 6

export default function Tools({ hideHeader = false }: SectionProps) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="unelte"
      className={`section relative overflow-hidden border-t ${hideHeader ? 'section-head-off' : ''}`}
      style={{ background: 'var(--ink)', borderColor: 'var(--line)' }}
    >
      <div className="shell relative" ref={ref}>
        {/* ── Antet ── */}
        {!hideHeader && (
          <div className="g12 mb-14">
            <div className="col-span-12 lg:col-span-8">
              <p className="mono eyebrow reveal mb-7">Cu ce lucrez</p>
              <h2 className="display d-lg">
                <Words>Nu inventez roata.</Words>
                <Words delay={110} style={{ color: 'var(--bone-30)' }}>
                  Le leg între ele.
                </Words>
              </h2>
            </div>
          </div>
        )}

        {/* ── Uneltele ── */}
        <div
          className="grid grid-cols-2 gap-px border sm:grid-cols-3 lg:grid-cols-5"
          style={{ background: 'var(--line)', borderColor: 'var(--line)' }}
        >
          {tools.map((t, i) => (
            <div
              key={t.name}
              className="tool reveal relative flex flex-col items-start gap-5 p-6"
              style={{
                background: 'var(--ink)',
                transitionDelay: `${60 + i * 55}ms`,
              }}
            >
              {/* Stratul care se aprinde când trece semnalul */}
              <span
                className="tool-signal"
                style={{ animationDelay: `${(i * CYCLE) / tools.length}s` }}
                aria-hidden="true"
              />

              <span className="tool-icon relative block h-6 w-6">
                <t.Icon />
              </span>

              <span className="relative">
                <span
                  className="display block text-[1.0625rem] leading-tight"
                  style={{ color: 'var(--bone)' }}
                >
                  {t.name}
                </span>
                <span className="mono-sm mt-1.5 block" style={{ color: 'var(--bone-30)' }}>
                  {t.role}
                </span>
              </span>
            </div>
          ))}
        </div>

        <p
          className="reveal mono-sm mt-8 flex items-center gap-2.5"
          style={{ color: 'var(--bone-30)' }}
        >
          <span className="live" aria-hidden="true" />
          Toate legate într-un singur sistem, nu zece aplicații deschise în paralel.
        </p>
      </div>
    </section>
  )
}
