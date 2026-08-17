'use client'

import { useEffect, useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

/* ──────────────────────────────────────────────────────────────
   TESTIMONIALE VIDEO (reel-uri Instagram)
   `id` este codul din URL: instagram.com/reel/<id>/
   ────────────────────────────────────────────────────────────── */
const reels = [
  {
    id: 'DakcErKtLo-',
    name: 'Diana',
    business: 'Dermiq · Salon facial',
  },
  {
    id: 'DasNmxQN5AB',
    name: 'Doina',
    business: 'Esthea · Salon facial',
  },
]

/* Mesaje primite de la cliente pe WhatsApp */
const quotes = [
  {
    quote:
      'Sunt foarte încântată și mulțumită de Maftei Iustin — e un băiat serios, isteț și de încredere. Vi-l recomand cu drag.',
    name: 'Larisa',
    initials: 'L',
  },
  {
    quote: 'Mulțumesc pentru site și automatizări! Eficiență maximă!',
    name: 'Elena',
    initials: 'E',
  },
  {
    quote: 'Sunteți cei mai buni! Site-ul arată perfect și funcționează impecabil.',
    name: 'Maria',
    initials: 'M',
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
              Fără promisiuni vagi. Mesaje și filmări primite de la cliente
              reale, exact așa cum au venit.
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
                  {reel.business} →
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

              {/* Sursa mesajului — mesajele sunt reale, primite pe WhatsApp */}
              <span className="mono-sm mb-5 flex items-center gap-2" style={{ color: 'var(--bone-30)' }}>
                <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0a8 8 0 0 0-6.9 12l-1.1 4 4.1-1.1A8 8 0 1 0 8 0Zm0 14.6a6.6 6.6 0 0 1-3.4-.9l-.2-.2-2.4.6.7-2.4-.2-.3A6.6 6.6 0 1 1 8 14.6Zm3.6-4.9c-.2-.1-1.2-.6-1.3-.6-.2-.1-.3-.1-.4.1l-.6.7c-.1.1-.2.2-.4 0a5.4 5.4 0 0 1-2.6-2.3c-.2-.3.2-.3.5-1 0-.1 0-.3-.1-.4l-.5-1.3c-.2-.3-.3-.3-.4-.3h-.4a.8.8 0 0 0-.6.3 2.4 2.4 0 0 0-.7 1.8 4.2 4.2 0 0 0 .9 2.2 9.5 9.5 0 0 0 3.6 3.2c1.3.5 1.8.6 2.5.5a2.1 2.1 0 0 0 1.4-1 1.7 1.7 0 0 0 .1-1c0-.1-.2-.1-.4-.2Z" />
                </svg>
                Mesaj WhatsApp
              </span>

              <blockquote
                className="mb-8 flex-1 text-[1.0625rem] leading-relaxed"
                style={{ color: 'var(--bone-72)' }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption
                className="flex items-center gap-3 border-t pt-6"
                style={{ borderColor: 'var(--line)' }}
              >
                <span
                  className="num flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.6875rem] font-semibold"
                  style={{ background: 'var(--ink-3)', color: 'var(--bone-72)' }}
                >
                  {t.initials}
                </span>
                <span className="text-[0.9375rem] font-semibold" style={{ color: 'var(--bone)' }}>
                  {t.name}
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
