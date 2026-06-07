'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results', href: '#results' },
  { label: 'Testimonials', href: '#testimonials' },
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
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="container-main">
          <nav className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              aria-label="Nextflow.ai home"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B0B0B] group-hover:bg-[#10B981] transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8L6 4L10 8L14 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L6 8L10 12L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                </svg>
              </span>
              <span className="text-[#0B0B0B] font-bold text-lg tracking-tight">
                Nextflow<span className="text-[#10B981]">.ai</span>
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-[#6B7280] hover:text-[#0B0B0B] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="text-sm font-medium text-[#6B7280] hover:text-[#0B0B0B] transition-colors">
                Contact
              </a>
              <a href="#cta" className="btn-primary text-sm px-5 py-2.5">
                Book a Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-[#0B0B0B] transition-all duration-200 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-[#0B0B0B] transition-all duration-200 ${
                  menuOpen ? 'w-0 opacity-0' : 'w-5 opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-[#0B0B0B] transition-all duration-200 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '64px' }}
      >
        <div className="container-main py-8 flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-semibold text-[#0B0B0B] py-4 border-b border-[#F3F4F6] hover:text-[#10B981] transition-colors"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-semibold text-[#0B0B0B] py-4 border-b border-[#F3F4F6] hover:text-[#10B981] transition-colors"
          >
            Contact
          </a>
          <div className="mt-6">
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center text-base"
            >
              Book a Call
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
