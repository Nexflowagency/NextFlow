'use client'

import { useEffect, useRef, useState } from 'react'

type Metric = {
  n: string
  /** Valoarea numerică pentru numărătoare; null = text static */
  to: number | null
  prefix?: string
  suffix?: string
  static?: string
  label: string
  accent?: boolean
}

const metrics: Metric[] = [
  { n: '01', to: 3, suffix: '×', label: 'Mai multe venituri', accent: true },
  { n: '02', to: 90, suffix: '%', label: 'Din timp eliberat' },
  { n: '03', to: 0, label: 'Lead-uri pierdute', accent: true },
  { n: '04', to: null, static: '24/7', label: 'Sistemul lucrează' },
]

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, seen }
}

function Counter({ metric }: { metric: Metric }) {
  const { ref, seen } = useInView<HTMLDivElement>()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!seen || metric.to === null) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(metric.to)
      return
    }

    const target = metric.to
    const duration = 1500
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, metric.to])

  const shown = metric.to === null ? metric.static : `${metric.prefix ?? ''}${value}${metric.suffix ?? ''}`

  return (
    <div
      ref={ref}
      className="flex flex-col justify-between gap-10 px-6 py-12 sm:px-8 lg:py-16"
    >
      <span className="mono-sm" style={{ color: 'var(--bone-16)' }}>
        {metric.n}
      </span>

      <div>
        <div
          className="display num mb-3 leading-none"
          style={{
            fontSize: 'clamp(3rem, 6.5vw, 5rem)',
            letterSpacing: '-0.05em',
            color: metric.accent ? 'var(--acid)' : 'var(--bone)',
          }}
        >
          {shown}
        </div>
        <div className="mono-sm" style={{ color: 'var(--bone-46)' }}>
          {metric.label}
        </div>
      </div>
    </div>
  )
}

export default function MetricsSection() {
  return (
    <section
      id="rezultate"
      className="relative overflow-hidden"
      style={{ background: 'var(--ink)' }}
    >
      <div className="mesh" style={{ opacity: 0.6 }} aria-hidden="true" />

      <div className="shell relative">
        <div
          className="flex items-baseline justify-between gap-4 border-b py-6"
          style={{ borderColor: 'var(--line)' }}
        >
          <p className="mono" style={{ color: 'var(--bone-46)' }}>
            Rezultate medii
          </p>
          <p className="mono-sm" style={{ color: 'var(--bone-30)' }}>
            Primele 90 de zile
          </p>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{
            // Liniile de separare sunt desenate cu un fundal de 1px sub grilă
            gap: '1px',
            background: 'var(--line)',
          }}
        >
          {metrics.map((m) => (
            <div key={m.n} style={{ background: 'var(--ink)' }}>
              <Counter metric={m} />
            </div>
          ))}
        </div>

        <div className="border-t" style={{ borderColor: 'var(--line)' }} />
      </div>
    </section>
  )
}
