'use client'

import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Words from './Words'
import type { SectionProps } from '@/lib/nav'

/* ──────────────────────────────────────────────────────────────
   Recenzii video — fișierele sunt găzduite la noi, nu încărcate
   de la Instagram. Merg și dacă reel-ul devine privat, și nu
   încarcă nimic până când cineva nu apasă play.
   ────────────────────────────────────────────────────────────── */
const reels = [
  {
    id: 'diana',
    name: 'Diana',
    business: 'Dermiq · Cosmetică, Bacău',
    video: '/testimoniale/diana.mp4',
    poster: '/testimoniale/diana.jpg',
    instagram: 'https://www.instagram.com/reel/DakcErKtLo-/',
  },
  {
    id: 'doina',
    name: 'Doina',
    business: 'Esthea · Cabinet estetic',
    video: '/testimoniale/doina.mp4',
    poster: '/testimoniale/doina.jpg',
    instagram: 'https://www.instagram.com/reel/DasNmxQN5AB/',
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

type Reel = (typeof reels)[number]

function PlayIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.13} viewBox="0 0 15 17" fill="currentColor" aria-hidden="true">
      <path d="M14 7.27a1 1 0 0 1 0 1.73L1.5 16.23A1 1 0 0 1 0 15.37V.9A1 1 0 0 1 1.5.04L14 7.27Z" />
    </svg>
  )
}

/* ── Player pe tot ecranul, cu fișierul local ── */
function ReelPlayer({ reel, onClose }: { reel: Reel; onClose: () => void }) {
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
      style={{ background: 'rgba(10,9,8,0.9)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Recenzia video a ${reel.name}`}
    >
      <button
        onClick={onClose}
        className="mono-sm absolute right-5 top-5 flex items-center gap-2 px-3 py-2"
        style={{ color: 'var(--bone-46)' }}
      >
        Închide
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>

      <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center gap-5">
        <video
          src={reel.video}
          poster={reel.poster}
          controls
          autoPlay
          playsInline
          className="rounded-lg"
          style={{
            width: 'min(400px, 92vw)',
            maxHeight: '78vh',
            border: '1px solid var(--line-mid)',
            background: '#000',
          }}
        />
        <div className="text-center">
          <div className="display d-sm" style={{ color: 'var(--bone)' }}>
            {reel.name}
          </div>
          <div className="mono-sm mt-1.5" style={{ color: 'var(--bone-30)' }}>
            {reel.business}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials({ hideHeader = false }: SectionProps) {
  const ref = useScrollReveal<HTMLDivElement>()
  const [open, setOpen] = useState<Reel | null>(null)

  return (
    <section
      id="pareri"
      className={`section relative overflow-hidden ${hideHeader ? 'section-head-off' : ''}`}
      style={{ background: 'var(--ink-1)' }}
    >
      <div className="mesh" style={{ opacity: 0.5 }} aria-hidden="true" />

      <div className="shell relative" ref={ref}>
        {/* ── Antet ── */}
        {!hideHeader && (
          <div className="g12 mb-14 items-end gap-y-8">
            <div className="col-span-12 lg:col-span-8">
              <p className="mono eyebrow reveal mb-7">Păreri de la cliente</p>
              <h2 className="display d-lg">
                <Words>Nu mă crede pe cuvânt.</Words>
                <Words delay={110} style={{ color: 'var(--green)' }}>
                  Ascultă-le pe ele.
                </Words>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-10">
              <p
                className="reveal d2 border-t pt-6 text-[0.9375rem] leading-relaxed"
                style={{ color: 'var(--bone-46)', borderColor: 'var(--line-mid)' }}
              >
                Filmări și mesaje de la cliente, exact așa cum le-am primit.
                Apasă play și le auzi direct.
              </p>
            </div>
          </div>
        )}

        {/* ── Recenzii video ── */}
        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reels.map((reel, i) => (
            <article
              key={reel.id}
              className={`panel reveal d${i + 1} group relative flex items-center gap-6 p-5 sm:p-6`}
            >
              <span className="tick tick-tl" aria-hidden="true" />
              <span className="tick tick-br" aria-hidden="true" />

              {/* Butonul acoperă tot cardul, ca oriunde ai apăsa să pornească */}
              <button
                onClick={() => setOpen(reel)}
                className="absolute inset-0 z-10 rounded-[6px]"
                data-cursor="Redă"
                aria-label={`Redă recenzia video a ${reel.name} — ${reel.business}`}
              />

              {/* Miniatura verticală */}
              <div
                className="relative shrink-0 overflow-hidden rounded"
                style={{ width: 'clamp(88px, 22vw, 116px)', aspectRatio: '9 / 16' }}
              >
                <img
                  src={reel.poster}
                  alt=""
                  width={480}
                  height={854}
                  loading="lazy"
                  decoding="async"
                  className="reel-thumb h-full w-full object-cover"
                />
                <span
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: 'linear-gradient(to top, rgba(10,9,8,0.55), transparent)' }}
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full pl-0.5 transition-transform duration-500 group-hover:scale-110"
                    style={{ background: 'var(--green)', color: 'var(--ink)' }}
                  >
                    <PlayIcon size={13} />
                  </span>
                </span>
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <span className="mono-sm mb-2 block" style={{ color: 'var(--bone-30)' }}>
                  Recenzie video
                </span>
                <span className="display d-sm block" style={{ color: 'var(--bone)' }}>
                  {reel.name}
                </span>
                <span className="mono-sm mt-2 block" style={{ color: 'var(--green)' }}>
                  {reel.business}
                </span>

                <a
                  href={reel.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-sm underline-draw tap relative z-20 mt-5 inline-flex items-center gap-2"
                  style={{ color: 'var(--bone-30)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5.5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.8" cy="6.2" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                  Pe Instagram
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── Mesaje WhatsApp, decalate pe verticală ── */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {quotes.map((t, i) => (
            <figure
              key={t.name}
              className={`panel quote-card reveal d${i + 2} flex flex-col p-8 ${
                i === 1 ? 'lg:mt-10' : i === 2 ? 'lg:mt-20' : ''
              }`}
            >
              <span className="tick tick-tl" aria-hidden="true" />
              <span className="tick tick-br" aria-hidden="true" />

              <span className="mono-sm mb-5 flex items-center gap-2" style={{ color: 'var(--bone-30)' }}>
                <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0a8 8 0 0 0-6.9 12l-1.1 4 4.1-1.1A8 8 0 1 0 8 0Zm0 14.6a6.6 6.6 0 0 1-3.4-.9l-.2-.2-2.4.6.7-2.4-.2-.3A6.6 6.6 0 1 1 8 14.6Zm3.6-4.9c-.2-.1-1.2-.6-1.3-.6-.2-.1-.3-.1-.4.1l-.6.7c-.1.1-.2.2-.4 0a5.4 5.4 0 0 1-2.6-2.3c-.2-.3.2-.3.5-1 0-.1 0-.3-.1-.4l-.5-1.3c-.2-.3-.3-.3-.4-.3h-.4a.8.8 0 0 0-.6.3 2.4 2.4 0 0 0-.7 1.8 4.2 4.2 0 0 0 .9 2.2 9.5 9.5 0 0 0 3.6 3.2c1.3.5 1.8.6 2.5.5a2.1 2.1 0 0 0 1.4-1 1.7 1.7 0 0 0 .1-1c0-.1-.2-.1-.4-.2Z" />
                </svg>
                Mesaj WhatsApp
              </span>

              <span
                className="quote-mark display leading-none"
                style={{ fontSize: '2.5rem', color: 'var(--green)', opacity: 0.3 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote
                className="mb-8 mt-1 flex-1 text-[1.0625rem] leading-relaxed"
                style={{ color: 'var(--bone-72)' }}
              >
                {t.quote}
              </blockquote>

              <figcaption
                className="flex items-center gap-3 border-t pt-6"
                style={{ borderColor: 'var(--line)' }}
              >
                <span
                  className="quote-avatar num flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.6875rem] font-semibold"
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

      {open && <ReelPlayer reel={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
