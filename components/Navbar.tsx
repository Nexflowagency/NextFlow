'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'

import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_E164 } from '@/lib/contact'
import { menuPages as navLinks } from '@/lib/nav'

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
            {/* Doar marca, fără wordmark */}
            <a href="/" aria-label="Nextflow.ai — acasă" className="relative z-10">
              <Logo showWordmark={false} size={36} uid="nf-nav" />
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
                href="/contact"
                className="mono underline-draw transition-colors duration-300"
                style={{ color: 'var(--bone-46)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--bone)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--bone-46)')}
              >
                Contact
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green px-5 py-3 text-[0.875rem]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.42 1.3-1.96 1.35-.5.05-.98.23-3.35-.7-2.82-1.11-4.6-3.99-4.74-4.18-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.97-2.31.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.47-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.28.14.45.12.61-.07.17-.19.7-.82.89-1.1.19-.28.38-.23.63-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.33.07.11.07.65-.17 1.33Z" />
                </svg>
                Scrie-mi pe WhatsApp
              </a>
            </div>

            {/* Buton meniu mobil */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="relative z-10 -mr-1 flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
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
              <span className="mono-sm" style={{ color: 'var(--green)' }}>
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
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn btn-green w-full"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.42 1.3-1.96 1.35-.5.05-.98.23-3.35-.7-2.82-1.11-4.6-3.99-4.74-4.18-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.97-2.31.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.47-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.28.14.45.12.61-.07.17-.19.7-.82.89-1.1.19-.28.38-.23.63-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.33.07.11.07.65-.17 1.33Z" />
              </svg>
              Scrie-mi pe WhatsApp
            </a>
            <a
              href={`tel:${PHONE_E164}`}
              onClick={() => setMenuOpen(false)}
              className="mono py-4 text-center"
              style={{ color: 'var(--bone-46)' }}
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
