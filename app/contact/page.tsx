'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ─────────────────────────────────────────────────────────────────
// Urmează pașii din google-apps-script-contact.js → lipești URL-ul
// web app-ului Google Apps Script aici:
const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'
// ─────────────────────────────────────────────────────────────────

const WHATSAPP_URL = 'https://wa.me/40767422497'
const INSTAGRAM_URL = 'https://www.instagram.com/nextflow_agency.ai/'

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
}
const inputFocusStyle: React.CSSProperties = {
  background: 'rgba(16,185,129,0.06)',
  border: '1px solid rgba(16,185,129,0.4)',
  color: '#fff',
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.querySelectorAll<HTMLElement>('.hr').forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = '1'
        item.style.transform = 'translateY(0)'
      }, 60 + i * 120)
    })
  }, [])

  useEffect(() => {
    const container = bodyRef.current
    if (!container) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    )
    const els = container.querySelectorAll<HTMLElement>('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (GOOGLE_SHEETS_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
      setStatus('error')
      return
    }
    setStatus('sending')
    const form = e.currentTarget
    const params = new URLSearchParams({
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    })
    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      })
      setStatus('success')
      formRef.current?.reset()
    } catch {
      setStatus('error')
    }
  }

  const anim = { opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-16" style={{ background: '#0B0B0B' }}>
        <div className="absolute inset-0 dot-grid-bg pointer-events-none opacity-50" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(16,185,129,0.1) 0%, transparent 60%)' }}/>

        <div className="container-main relative z-10" ref={heroRef}>
          <div className="text-center max-w-2xl mx-auto">
            <div className="hr mb-6" style={anim}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10B981' }}>
                <span className="green-dot" />
                Hai să vorbim
              </span>
            </div>
            <h1 className="hr font-black text-white mb-4"
              style={{ ...anim, fontSize: 'clamp(1.875rem, 6vw, 4rem)', lineHeight: '1.05', letterSpacing: '-0.04em' }}>
              Programează o
              <br />
              <span className="text-gradient-green">consultație gratuită</span>
            </h1>
            <p className="hr"
              style={{ ...anim, fontSize: '1.0625rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.5)' }}>
              30 de minute în care descoperim cum putem automatiza afacerea ta. Fără obligații.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="section-py" style={{ background: '#111111' }}>
        <div className="container-main" ref={bodyRef}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

            {/* ── FORM ── */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="reveal font-black text-white text-2xl mb-2" style={{ letterSpacing: '-0.03em' }}>
                  Trimite-ne un mesaj
                </h2>
                <p className="reveal reveal-delay-1 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Sau scrie direct la{' '}
                  <a href="mailto:hello@nextflow.ro" className="text-[#10B981] hover:underline">
                    hello@nextflow.ro
                  </a>
                </p>
              </div>

              {status === 'success' ? (
                <div className="reveal text-center py-16 px-8 rounded-2xl"
                  style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12L10 17L19 8" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-black text-white text-xl mb-2">Mesaj trimis!</h3>
                  <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Te contactăm în cel mai scurt timp, de obicei în 24 de ore.
                  </p>
                  <button onClick={() => setStatus('idle')}
                    className="text-sm font-semibold"
                    style={{ color: '#10B981' }}
                    onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="reveal reveal-delay-2 flex flex-col gap-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: 'rgba(255,255,255,0.35)' }}>
                        Nume *
                      </label>
                      <input type="text" name="name" required placeholder="Numele tău"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
                        style={inputStyle}
                        onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}/>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: 'rgba(255,255,255,0.35)' }}>
                        Email *
                      </label>
                      <input type="email" name="email" required placeholder="email@tău.ro"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
                        style={inputStyle}
                        onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}/>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: 'rgba(255,255,255,0.35)' }}>
                      Telefon (opțional)
                    </label>
                    <input type="tel" name="phone" placeholder="+40 7XX XXX XXX"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
                      style={inputStyle}
                      onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                      onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}/>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: 'rgba(255,255,255,0.35)' }}>
                      Mesaj *
                    </label>
                    <textarea name="message" required rows={5}
                      placeholder="Spune-ne despre business-ul tău și cu ce te putem ajuta..."
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none outline-none transition-all duration-150"
                      style={inputStyle}
                      onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                      onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}/>
                  </div>

                  {status === 'error' && (
                    <p className="text-sm px-4 py-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.1)', color: '#FCA5A5' }}>
                      {GOOGLE_SHEETS_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL'
                        ? 'Formularul nu e conectat la Google Sheets. Urmează pașii din google-apps-script-contact.js'
                        : 'Ceva n-a mers. Încearcă din nou sau scrie la hello@nextflow.ro'}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                    <button type="submit" disabled={status === 'sending'}
                      className="btn-primary text-base px-8 py-4 w-full sm:w-auto"
                      style={{ opacity: status === 'sending' ? 0.7 : 1 }}>
                      {status === 'sending' ? (
                        <>
                          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity=".25"/>
                            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                          </svg>
                          Se trimite...
                        </>
                      ) : (
                        <>
                          Trimite mesajul
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                      Fără spam · Răspundem în 24h
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* ── CONTACT INFO ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="reveal">
                <h2 className="font-black text-white text-xl mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Date de contact
                </h2>

                {/* Phone */}
                <a href="tel:+40767422497"
                  className="flex items-start gap-4 p-5 rounded-2xl mb-3 transition-all duration-200 group"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Telefon
                    </p>
                    <p className="font-bold text-white text-base">+40 767 422 497</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Disponibil L-V, 9:00–18:00</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:hello@nextflow.ro"
                  className="flex items-start gap-4 p-5 rounded-2xl mb-3 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Email
                    </p>
                    <p className="font-bold text-white text-base">hello@nextflow.ro</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Răspundem în 24h</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl mb-3 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(37,211,102,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.2)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      WhatsApp
                    </p>
                    <p className="font-bold text-white text-base">+40 767 422 497</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Răspuns rapid</p>
                  </div>
                </a>

                {/* Instagram */}
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(225,48,108,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(225,48,108,0.1)', border: '1px solid rgba(225,48,108,0.2)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4.5"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="#E1306C" stroke="none"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      Instagram
                    </p>
                    <p className="font-bold text-white text-base">@nextflow_agency.ai</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Urmărește-ne</p>
                  </div>
                </a>
              </div>

              {/* WhatsApp CTA button */}
              <div className="reveal reveal-delay-1">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl font-bold text-base transition-all duration-200"
                  style={{ background: '#25D366', color: '#fff' }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#20bd5a')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Scrie pe WhatsApp acum
                </a>
              </div>

              {/* Trust note */}
              <div className="reveal reveal-delay-2 p-5 rounded-2xl"
                style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z" fill="#F5C518"/>
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#10B981' }}>
                    Promisiunea noastră
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Consultația este 100% gratuită, fără obligații. Dacă nu putem ajuta, îți spunem sincer.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
