'use client'

import { useState, useRef } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

// ─────────────────────────────────────────────────────────────────
// Urmează pașii din google-apps-script-contact.js → lipești URL-ul
// web app-ului Google Apps Script aici:
const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'
// ─────────────────────────────────────────────────────────────────

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

export default function ContactSection() {
  const ref = useScrollReveal<HTMLDivElement>()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (GOOGLE_SHEETS_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
      setStatus('error')
      return
    }

    setStatus('sending')
    const form = e.currentTarget

    // URLSearchParams e compatibil cu Google Apps Script (e.parameter)
    const params = new URLSearchParams({
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    })

    try {
      // no-cors e necesar deoarece Google Apps Script face redirect intern
      // datele ajung corect în Sheet chiar dacă răspunsul e opac
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

  return (
    <section className="section-py relative overflow-hidden" style={{ background: '#111111' }} id="contact">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(16,185,129,0.07) 0%, transparent 70%)' }}/>

      <div className="container-main relative z-10" ref={ref}>
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-10">
            <p className="section-label mb-5 reveal justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block"/>
              Contact
            </p>
            <h2 className="reveal reveal-delay-1 font-black text-white"
              style={{ fontSize: 'clamp(1.625rem, 5vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              Trimite-ne un mesaj
            </h2>
            <p className="reveal reveal-delay-2 mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Sau scrie direct la{' '}
              <a href="mailto:hello@nextflow.ai" className="text-[#10B981] hover:underline">
                hello@nextflow.ai
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
                Te contactăm în cel mai scurt timp. Verifică Google Sheet-ul pentru mesajul nou.
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
                  <input
                    type="text" name="name" required placeholder="Numele tău"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
                    style={inputStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'rgba(255,255,255,0.35)' }}>
                    Email *
                  </label>
                  <input
                    type="email" name="email" required placeholder="email@tău.ro"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
                    style={inputStyle}
                    onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                    onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Telefon (opțional)
                </label>
                <input
                  type="tel" name="phone" placeholder="+40 7XX XXX XXX"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-150"
                  style={inputStyle}
                  onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                  onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Mesaj *
                </label>
                <textarea
                  name="message" required rows={5}
                  placeholder="Spune-ne despre business-ul tău și cu ce te putem ajuta..."
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none outline-none transition-all duration-150"
                  style={inputStyle}
                  onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                  onBlur={e => Object.assign(e.currentTarget.style, inputStyle)}
                />
              </div>

              {status === 'error' && (
                <p className="text-sm px-4 py-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.1)', color: '#FCA5A5' }}>
                  {GOOGLE_SHEETS_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL'
                    ? 'Formularul nu e conectat la Google Sheets. Urmează pașii din google-apps-script-contact.js'
                    : 'Ceva n-a mers. Încearcă din nou sau scrie la hello@nextflow.ai'}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
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
      </div>
    </section>
  )
}
