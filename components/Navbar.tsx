'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const WHATSAPP_URL = 'https://wa.me/40767422497'
const INSTAGRAM_URL = 'https://www.instagram.com/nextflow_agency.ai/'

const navLinks = [
  { label: 'Servicii', href: '/servicii' },
  { label: 'Cum Funcționează', href: '/cum-functioneaza' },
  { label: 'Testimoniale', href: '/testimoniale' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'navbar-scrolled' : 'bg-transparent'}`}>
        <div className="container-main">
          <nav className="flex items-center justify-between h-16 md:h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="NextFlow Agency">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 9L6.5 4.5L11 9L15.5 4.5" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 13.5L6.5 9L11 13.5L15.5 9" stroke="#F0D060" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"/>
                </svg>
              </span>
              <span className="font-bold text-white text-xl tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                NextFlow<span style={{ color: '#D4AF37' }}>.ro</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="text-sm font-medium transition-colors duration-150"
                      style={{ color: isActive ? '#D4AF37' : 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#D4AF37' }}
                      onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}>
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+40767422497"
                className="text-sm font-medium transition-colors hidden lg:block"
                style={{ color: 'rgba(255,255,255,0.45)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#D4AF37')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                +40 767 422 497
              </a>
              <a href="https://calendly.com/mafteiustin" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm" style={{ padding: '0.6rem 1.4rem' }}>
                Programează Acum
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
        style={{ background: '#070D1A', paddingTop: '64px' }}>
        <div className="container-main py-8 flex flex-col gap-1">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link key={link.label} href={link.href}
                className="font-serif text-3xl py-4 border-b transition-colors"
                style={{
                  color: isActive ? '#D4AF37' : '#FFFFFF',
                  borderColor: 'rgba(212,175,55,0.1)',
                  transitionDelay: menuOpen ? `${i * 50}ms` : '0ms'
                }}>
                {link.label}
              </Link>
            )
          })}

          {/* WhatsApp in mobile menu */}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="font-serif text-3xl text-white py-4 border-b flex items-center gap-3 transition-colors"
            style={{ borderColor: 'rgba(212,175,55,0.1)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#16C47F')}
            onMouseLeave={e => (e.currentTarget.style.color = '#FFFFFF')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>

          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="font-serif text-3xl text-white py-4 border-b flex items-center gap-3 transition-colors"
            style={{ borderColor: 'rgba(212,175,55,0.1)' }}
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
            <a href="https://calendly.com/mafteiustin" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-base">
              Programează Acum
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
