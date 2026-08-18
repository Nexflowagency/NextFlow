/**
 * Magistrală minimală pentru starea scroll-ului.
 * SmoothScroll publică, componentele care au nevoie de viteză se abonează.
 * Evită un context React, care ar re-randa arborele la fiecare cadru.
 */

type Listener = (velocity: number) => void

const listeners = new Set<Listener>()
let velocity = 0

export function publishVelocity(v: number) {
  velocity = v
  listeners.forEach((fn) => fn(v))
}

export function subscribeVelocity(fn: Listener) {
  listeners.add(fn)
  fn(velocity)
  return () => listeners.delete(fn)
}

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** Ecran cu touch, fără mouse — cursorul propriu și efectele magnetice nu au sens. */
export function isTouchOnly() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: none), (pointer: coarse)').matches
  )
}
