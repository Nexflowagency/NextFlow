'use client'

import { useEffect, useRef, RefObject } from 'react'

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px', ...options }
    )

    const revealEls = element.querySelectorAll<HTMLElement>('.reveal')
    if (revealEls.length > 0) {
      revealEls.forEach((el) => observer.observe(el))
    } else {
      element.classList.add('reveal')
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}

export function useGlobalScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const revealEls = document.querySelectorAll<HTMLElement>('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
