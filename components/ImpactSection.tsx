'use client'

import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { WHATSAPP_URL } from '@/lib/contact'

/* ──────────────────────────────────────────────────────────────
   Ipotezele calculului. Sunt afișate lângă fiecare rezultat, ca
   cifrele să poată fi verificate — nu vindem promisiuni oarbe.
   ────────────────────────────────────────────────────────────── */
const MIN_PER_MESSAGE = 3 // minute pierdute cu un mesaj / apel tratat manual
const AUTOMATED_SHARE = 0.8 // cât preia sistemul din volumul repetitiv
const LOST_SHARE = 0.15 // cât din cereri se pierd azi (răspuns târziu / după program)
const DAYS = 30

const roFormat = new Intl.NumberFormat('ro-RO')

/** Numărul alunecă spre valoarea nouă în loc să sară brusc. */
function useSlide(target: number) {
  const [shown, setShown] = useState(target)
  const raf = useRef(0)
  const from = useRef(target)
  const start = useRef(0)

  useEffect(() => {
    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(target)
      return
    }

    from.current = shown
    start.current = performance.now()
    const delta = target - from.current
    if (delta === 0) return

    const tick = (now: number) => {
      const p = Math.min((now - start.current) / 450, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setShown(Math.round(from.current + delta * eased))
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  return shown
}

function Slider({
  label,
  suffix,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  suffix: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <label className="mono-sm" style={{ color: 'var(--bone-46)' }} htmlFor={label}>
          {label}
        </label>
        <span className="num text-[1.25rem] font-semibold" style={{ color: 'var(--green)' }}>
          {roFormat.format(value)}
          <span className="mono-sm ml-1.5" style={{ color: 'var(--bone-30)' }}>
            {suffix}
          </span>
        </span>
      </div>
      <input
        id={label}
        type="range"
        className="slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="mono-sm mt-3 flex justify-between" style={{ color: 'var(--bone-16)' }}>
        <span>{roFormat.format(min)}</span>
        <span>{roFormat.format(max)}</span>
      </div>
    </div>
  )
}

export default function ImpactSection() {
  const ref = useScrollReveal<HTMLDivElement>()
  const [perDay, setPerDay] = useState(15)
  const [clientValue, setClientValue] = useState(200)

  const monthly = perDay * DAYS
  const hours = Math.round((monthly * MIN_PER_MESSAGE * AUTOMATED_SHARE) / 60)
  const recovered = Math.round(monthly * LOST_SHARE)
  const money = recovered * clientValue

  const hoursShown = useSlide(hours)
  const recoveredShown = useSlide(recovered)
  const moneyShown = useSlide(money)

  const results = [
    {
      label: 'Ore pe care le primești înapoi',
      value: `${roFormat.format(hoursShown)} h`,
      unit: 'în fiecare lună',
      how: `${roFormat.format(monthly)} mesaje × ${MIN_PER_MESSAGE} min, din care ${Math.round(
        AUTOMATED_SHARE * 100
      )}% le preia sistemul`,
    },
    {
      label: 'Clienți pe care nu îi mai pierzi',
      value: roFormat.format(recoveredShown),
      unit: 'în fiecare lună',
      how: `${Math.round(LOST_SHARE * 100)}% din cereri se pierd azi — răspuns întârziat sau după program`,
    },
    {
      label: 'Bani în plus',
      value: `${roFormat.format(moneyShown)} lei`,
      unit: 'în fiecare lună',
      how: `${roFormat.format(recovered)} clienți × ${roFormat.format(clientValue)} lei`,
      accent: true,
    },
  ]

  return (
    <section
      id="impact"
      className="section relative overflow-hidden"
      style={{ background: 'var(--ink)' }}
    >
      <div className="mesh" style={{ opacity: 0.7 }} aria-hidden="true" />

      <div className="shell relative" ref={ref}>
        {/* ── Antet ── */}
        <div className="g12 mb-14 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <p className="mono eyebrow reveal mb-7">Cât te costă, de fapt</p>
            <h2 className="display d-lg reveal d1">
              Mută cursoarele.
              <br />
              <span style={{ color: 'var(--green)' }}>Vezi ce pierzi.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10">
            <p
              className="reveal d2 border-t pt-6 text-[0.9375rem] leading-relaxed"
              style={{ color: 'var(--bone-46)', borderColor: 'var(--line-mid)' }}
            >
              Două întrebări simple despre afacerea ta. Îți arătăm imediat cât
              timp și cât ban stau blocate în muncă pe care o poate face un robot.
            </p>
          </div>
        </div>

        <div className="g12 items-start gap-y-12">
          {/* ── Cursoarele ── */}
          <div className="reveal col-span-12 lg:col-span-5">
            <div className="panel flex flex-col gap-10 p-8 sm:p-10">
              <Slider
                label="Mesaje și apeluri pe zi"
                suffix="pe zi"
                value={perDay}
                min={5}
                max={60}
                step={1}
                onChange={setPerDay}
              />
              <Slider
                label="Cât îți lasă un client"
                suffix="lei"
                value={clientValue}
                min={50}
                max={1500}
                step={10}
                onChange={setClientValue}
              />
            </div>
          </div>

          {/* ── Rezultatele ── */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <div className="border-t" style={{ borderColor: 'var(--line-mid)' }}>
              {results.map((r, i) => (
                <div
                  key={r.label}
                  className={`reveal d${i + 1} border-b py-7`}
                  style={{ borderColor: 'var(--line)' }}
                >
                  <div className="mono-sm mb-3" style={{ color: 'var(--bone-46)' }}>
                    {r.label}
                  </div>

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span
                      className="num leading-none"
                      style={{
                        fontSize: 'clamp(2.1rem, 4.4vw, 3.2rem)',
                        fontWeight: 600,
                        letterSpacing: '-0.03em',
                        color: r.accent ? 'var(--green)' : 'var(--bone)',
                      }}
                    >
                      {r.value}
                    </span>
                    <span className="mono-sm" style={{ color: 'var(--bone-30)' }}>
                      {r.unit}
                    </span>
                  </div>

                  <p
                    className="mt-3 text-[0.8125rem] leading-relaxed"
                    style={{ color: 'var(--bone-46)' }}
                  >
                    {r.how}
                  </p>
                </div>
              ))}
            </div>

            <div className="reveal d4 mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green px-7"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.42 1.3-1.96 1.35-.5.05-.98.23-3.35-.7-2.82-1.11-4.6-3.99-4.74-4.18-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.97-2.31.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.47-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.28.14.45.12.61-.07.17-.19.7-.82.89-1.1.19-.28.38-.23.63-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.33.07.11.07.65-.17 1.33Z" />
                </svg>
                Vreau cifrele pentru afacerea mea
              </a>
            </div>

            <p
              className="reveal d5 mt-6 text-[0.8125rem] leading-relaxed"
              style={{ color: 'var(--bone-30)' }}
            >
              Estimare orientativă, pe baza ipotezelor de mai sus. Cifrele reale
              depind de afacerea ta — le calculăm împreună, cu datele tale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
