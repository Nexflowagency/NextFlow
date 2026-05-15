'use client'

import { useEffect, useState } from 'react'

// ACTUALIZEAZĂ cu linkul tău real de Instagram:
const INSTAGRAM_URL = 'https://www.instagram.com/nextflowai'

const navLinks = [
  { label: 'Cum Funcționează', href: '#how-it-works' },
  { label: 'Rezultate', href: '#results' },
  { label: 'Testimoniale', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'navbar-scrolled' : 'bg-transparent'}`}>
        <div className="container-main">
          <nav className="flex items-center justify-between h-16 md:h-[72px]">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group" aria-label="Nextflow.ai">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300"
                style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 9L6.5 4.5L11 9L15.5 4.5" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 13.5L6.5 9L11 13.5L15.5 9" stroke="#F5C518" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                </svg>
              </span>
              <span className="font-black text-white text-xl tracking-tight" style={{ letterSpacing: '-0.03em' }}>
                Nextflow<span style={{ color: '#10B981' }}>.ai</span>
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-sm font-medium transition-colors duration-150"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#10B981')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:hello@nextflow.ai"
                className="text-sm font-medium transition-colors"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
                Contact
              </a>
              <a href="#cta" className="btn-primary text-sm px-5 py-2.5">
                Programează un Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label="Meniu">
              <span className={`block h-0.5 w-6 bg-white transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
              <span className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'w-0 opacity-0' : 'w-5 opacity-100'}`}/>
              <span className={`block h-0.5 w-6 bg-white transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: '#0B0B0B', paddingTop: '64px' }}>
        <div className="container-main py-8 flex flex-col gap-1">
          {[...navLinks, { label: 'Contact', href: 'mailto:hello@nextflow.ai' }].map((link, i) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-white py-4 border-b transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.06)', transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#10B981')}
              onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>
              {link.label}
            </a>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-bold text-white py-4 border-b flex items-center gap-3 transition-colors"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E1306C')}
            onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Instagram
          </a>
          <div className="mt-8">
            <a href="#cta" onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center text-base">
              Programează un Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
