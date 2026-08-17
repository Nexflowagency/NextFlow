'use client'

import { useEffect, useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

/* ──────────────────────────────────────────────────────────────
   TESTIMONIALE VIDEO (reel-uri Instagram)
   Completează `name` și `business` cu datele reale ale clientelor.
   `id` este codul din URL: instagram.com/reel/<id>/
   ────────────────────────────────────────────────────────────── */
const reels = [
  {
    id: 'DakcErKtLo-',
    name: 'Clientă Nextflow',
    business: 'Testimonial video',
    result: 'Vezi rezultatul',
  },
  {
    id: 'DasNmxQN5AB',
    name: 'Clientă Nextflow',
    business: 'Testimonial video',
    result: 'Vezi rezultatul',
  },
]

const quotes = [
  {
    quote:
      'Pierdeam 40% din lead-uri. Acum primesc răspuns în 2 minute, automat. Rezultatul s-a văzut în prima lună.',
    name: 'Marco R.',
    role: 'Agenție imobiliară',
    initials: 'MR',
    result: '+60% venit',
  },
  {
    quote:
      'Am scăpat de 3 ore de administrativ pe zi. CRM-ul se actualizează singur. Nu credeam că e posibil.',
    name: 'Dr. Sara K.',
    role: 'Clinică estetică',
    initials: 'SK',
    result: '−3h / zi',
  },
  {
    quote:
      'De la 3 clienți pe lună la 9 — cu exact aceeași echipă. Sistemul face munca în locul nostru.',
    name: 'James H.',
    role: 'Agenție digitală',
    initials: 'JH',
    result: '3× clienți',
  },
]

/* ── Modal cu reel-ul; Instagram se încarcă abia la deschidere ── */
function ReelModal({ id, onClose }: { id: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(10,9,8,0.88)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Testimonial video"
    >
      <button
        onClick={onClose}
        className="mono-sm absolute right-5 top-5 flex items-center gap-2 px-3 py-2"
        style={{ color: 'var(--bone-46)' }}
        aria-label="Închide"
      >
        Închide
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="overflow-hidden rounded-lg"
        style={{
          width: 'min(400px, 92vw)',
          height: 'min(720px, 84vh)',
          border: '1px solid var(--line-mid)',
          background: '#fff',
        }}
      >
        <iframe
          src={`https://www.instagram.com/reel/${id}/embed`}
          title="Testimonial video Instagram"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useScrollReveal<HTMLDivElement>()
  const [openReel, setOpenReel] = useState<string | null>(null)

  return (
    <section className="section relative overflow-hidden" style={{ background: 'var(--ink-1)' }}>
      <div className="mesh" style={{ opacity: 0.5 }} aria-hidden="true" />

      <div className="shell relative" ref={ref}>
        {/* ── Antet ── */}
        <div className="g12 mb-14 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="mono eyebrow reveal mb-7">Rezultate reale</p>
            <h2 className="display d-lg reveal d1">
              Ei au oprit
              <br />
              <span style={{ color: 'var(--acid)' }}>haosul.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p
              className="reveal d2 border-t pt-6 text-[0.9375rem] leading-relaxed"
              style={{ color: 'var(--bone-46)', borderColor: 'var(--line-mid)' }}
            >
              Fără promisiuni vagi. Oameni reali, afaceri reale, cifre pe care le
              poți verifica.
            </p>
          </div>
        </div>

        {/* ── Testimoniale video ── */}
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {reels.map((reel, i) => (
            <button
              key={reel.id}
              onClick={() => setOpenReel(reel.id)}
              className={`panel reveal d${i + 1} group flex items-center gap-6 p-6 text-left sm:p-8`}
            >
              <span className="tick tick-tl" aria-hidden="true" />
              <span className="tick tick-br" aria-hidden="true" />

              {/* Buton de redare */}
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110"
                style={{ background: 'var(--acid)', color: 'var(--ink)' }}
              >
                <svg width="15" height="17" viewBox="0 0 15 17" fill="currentColor" aria-hidden="true">
                  <path d="M14 7.27a1 1 0 0 1 0 1.73L1.5 16.23A1 1 0 0 1 0 15.37V.9A1 1 0 0 1 1.5.04L14 7.27Z" />
                </svg>
              </span>

              <span className="min-w-0 flex-1">
                <span className="mono-sm mb-2 block" style={{ color: 'var(--bone-30)' }}>
                  Reel · Instagram
                </span>
                <span className="display d-sm block" style={{ color: 'var(--bone)' }}>
                  {reel.name}
                </span>
                <span className="mono-sm mt-2 block" style={{ color: 'var(--acid)' }}>
                  {reel.result} →
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* ── Testimoniale scrise, decalate pe verticală ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {quotes.map((t, i) => (
            <figure
              key={t.name}
              className={`panel reveal d${i + 2} flex flex-col p-8 ${
                i === 1 ? 'md:mt-10' : i === 2 ? 'md:mt-20' : ''
              }`}
            >
              <span className="tick tick-tl" aria-hidden="true" />
              <span className="tick tick-br" aria-hidden="true" />

              <span
                className="display mb-2 leading-none"
                style={{ fontSize: '3rem', color: 'var(--acid)', opacity: 0.28 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote
                className="mb-8 flex-1 text-[1.0625rem] leading-relaxed"
                style={{ color: 'var(--bone-72)' }}
              >
                {t.quote}
              </blockquote>

              <figcaption
                className="flex items-center gap-3 border-t pt-6"
                style={{ borderColor: 'var(--line)' }}
              >
                <span
                  className="num flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.625rem] font-semibold"
                  style={{ background: 'var(--ink-3)', color: 'var(--bone-72)' }}
                >
                  {t.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.875rem] font-semibold" style={{ color: 'var(--bone)' }}>
                    {t.name}
                  </span>
                  <span className="mono-sm block" style={{ color: 'var(--bone-30)' }}>
                    {t.role}
                  </span>
                </span>
                <span className="mono-sm shrink-0" style={{ color: 'var(--acid)' }}>
                  {t.result}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {openReel && <ReelModal id={openReel} onClose={() => setOpenReel(null)} />}
    </section>
  )
}
