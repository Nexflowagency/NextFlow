'use client'

import { CSSProperties, useEffect, useRef, useState } from 'react'

type Props = {
  children: string
  className?: string
  style?: CSSProperties
  /** Întârziere de pornire, în ms — pentru al doilea rând al unui titlu */
  delay?: number
  /** Distanța dintre cuvinte, în ms */
  stagger?: number
}

/**
 * Titlu care urcă din spatele unei măști, cuvânt cu cuvânt.
 *
 * Fiecare cuvânt stă într-o fereastră cu overflow ascuns, așa că pare că
 * intră în pagină de dedesubt, nu că apare din estompare. Diferența față
 * de un fade obișnuit e mică pe hârtie și mare la citire.
 *
 * Textul e mereu în DOM, deci rămâne accesibil și indexabil; ascunderea
 * se aplică doar când scriptul rulează (clasa .js pe <html>).
 */
export default function Words({
  children,
  className = '',
  style,
  delay = 0,
  stagger = 52,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }

    // Dacă titlul e deja pe ecran — sau a rămas deasupra lui, fiindcă pagina
    // s-a deschis direct pe o ancoră ori a fost reîncărcată la mijloc —
    // arată-l pe loc. Un observer nu mai are ce prinde acolo, iar textul ar
    // rămâne ascuns definitiv.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className={`words ${shown ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children.split(' ').map((word, i) => (
        <span className="word" key={`${word}-${i}`}>
          <span style={{ transitionDelay: `${delay + i * stagger}ms` }}>{word}</span>
        </span>
      ))}
    </span>
  )
}
