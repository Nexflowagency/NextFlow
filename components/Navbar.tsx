'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'

const navLinks = [
  { index: '01', label: 'Problema', href: '#problema' },
  { index: '02', label: 'Sistemul', href: '#sistem' },
  { index: '03', label: 'Proces', href: '#proces' },
  { index: '04', label: 'Rezultate', href: '#rezultate' },
  { index: '05', label: 'Proiecte', href: '#proiecte' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-solid' : 'bg-transparent'
        }`}
      >
        <div className="shell">
          <nav className="flex h-16 items-center justify-between md:h-[76px]">
            <a href="#" aria-label="Nextflow.ai — acasă" className="relative z-10">
              <Logo />
            </a>

            {/* Navigație desktop — etichete mono cu index */}
            <ul className="hidden items-center gap-6 lg:flex xl:gap-9">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-baseline gap-2 transition-colors duration-300"
                    style={{ color: 'var(--bone-46)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--bone)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--bone-46)')}
                  >
                    <span
                      className="mono-sm transition-colors duration-300"
                      style={{ color: 'var(--bone-16)' }}
                    >
                      {link.index}
                    </span>
                    <span className="mono underline-draw">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-6 lg:flex">
              <a
                href="mailto:hello@nextflow.ai"
                className="mono underline-draw transition-colors duration-300"
                style={{ color: 'var(--bone-46)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--bone)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--bone-46)')}
              >
                Contact
              </a>
              <a href="#cta" className="btn btn-acid px-5 py-3 text-[0.875rem]">
                Programează un call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Buton meniu mobil */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
              aria-label={menuOpen ? 'Închide meniul' : 'Deschide meniul'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-px w-6 transition-all duration-300 ${
                  menuOpen ? 'translate-y-[6px] rotate-45' : ''
                }`}
                style={{ background: 'var(--bone)' }}
              />
              <span
                className={`block h-px transition-all duration-300 ${
                  menuOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'
                }`}
                style={{ background: 'var(--bone)' }}
              />
              <span
                className={`block h-px w-6 transition-all duration-300 ${
                  menuOpen ? '-translate-y-[6px] -rotate-45' : ''
                }`}
                style={{ background: 'var(--bone)' }}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Meniu mobil — tipografie mare, index mono */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        style={{ background: 'var(--ink)' }}
      >
        <div className="blueprint" />
        <div className="shell relative flex h-full flex-col justify-center pb-16 pt-20">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline gap-4 border-b py-5 transition-all duration-500"
              style={{
                borderColor: 'var(--line)',
                transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                opacity: menuOpen ? 1 : 0,
                transitionDelay: menuOpen ? `${120 + i * 70}ms` : '0ms',
              }}
            >
              <span className="mono-sm" style={{ color: 'var(--acid)' }}>
                {link.index}
              </span>
              <span className="display d-sm" style={{ color: 'var(--bone)' }}>
                {link.label}
              </span>
            </a>
          ))}

          <div
            className="mt-10 flex flex-col gap-3 transition-all duration-500"
            style={{
              opacity: menuOpen ? 1 : 0,
              transitionDelay: menuOpen ? '440ms' : '0ms',
            }}
          >
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="btn btn-acid w-full"
            >
              Programează un call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M9 4L13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="mailto:hello@nextflow.ai"
              onClick={() => setMenuOpen(false)}
              className="mono py-3 text-center"
              style={{ color: 'var(--bone-46)' }}
            >
              hello@nextflow.ai
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
