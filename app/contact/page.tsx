'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/hooks/useReveal'

const WHATSAPP_NUMBER = '40767422497'
const INSTAGRAM_URL = 'https://www.instagram.com/nextflow_agency.ai/'

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
}
const inputFocusStyle: React.CSSProperties = {
  background: 'rgba(22,196,127,0.06)',
  border: '1px solid rgba(22,196,127,0.5)',
  color: '#fff',
}

const WA_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export default function ContactPage() {
  useReveal()
  const [sent, setSent] = useState(false)
  const labelCls = 'text-xs font-semibold uppercase tracking-wider'
  const labelStyle = { color: '#16C47F', letterSpacing: '0.12em' } as React.CSSProperties
  const fieldCls = 'w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim()
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()
    const text = `Buna ziua, ma numesc ${name}${phone ? ', tel: ' + phone : ''}.\n\n${message}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
    form.reset()
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        label="Contact"
        title="Hai să vorbim despre"
        titleHighlight="afacerea ta"
        subtitle="Răspundem rapid pe WhatsApp sau telefon. Consultația este 100% gratuită."
      />

      {/* ── PHONE BANNER ── */}
      <section className="py-10" style={{ background: '#070D1A' }}>
        <div className="container-main">
          <div className="reveal rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(22,196,127,0.12) 0%, rgba(22,196,127,0.04) 100%)', border: '1.5px solid rgba(22,196,127,0.35)' }}>
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(22,196,127,0.12) 0%, transparent 70%)' }} />
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{ color: '#16C47F' }}>
              ✦ Sună acum ✦
            </p>
            <a href="tel:+40767422497"
              className="font-serif text-white block leading-none mb-3 transition-all duration-200 hover:opacity-80"
              style={{ fontSize: 'clamp(2.8rem, 9vw, 5.5rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>
              +40 767 422 497
            </a>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Disponibil Luni–Vineri · 9:00–18:00
            </p>
            <a href="tel:+40767422497"
              className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105"
              style={{ background: '#16C47F', color: '#fff', boxShadow: '0 4px 20px rgba(22,196,127,0.35)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Apasă să suni
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="section-py" style={{ background: '#0D1525' }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

            {/* ── WHATSAPP FORM ── */}
            <div className="lg:col-span-3 reveal-left">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ background: 'rgba(22,196,127,0.1)', border: '1px solid rgba(22,196,127,0.25)', color: '#16C47F' }}>
                  {WA_ICON}
                  Mesajul ajunge direct pe WhatsApp
                </div>
                <h2 className="font-serif text-white mb-2" style={{ fontSize: '2rem', fontWeight: 600 }}>
                  Trimite-ne un mesaj
                </h2>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Completează formularul și se deschide WhatsApp cu mesajul pregătit.
                </p>
              </div>

              {sent ? (
                <div className="text-center py-16 px-8 rounded-2xl"
                  style={{ background: 'rgba(22,196,127,0.08)', border: '1px solid rgba(22,196,127,0.25)' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(22,196,127,0.15)', border: '1px solid rgba(22,196,127,0.3)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12L10 17L19 8" stroke="#16C47F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-white mb-2" style={{ fontSize: '1.6rem', fontWeight: 600 }}>
                    WhatsApp deschis!
                  </h3>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                    Apasă Trimite în WhatsApp. Răspundem în câteva minute.
                  </p>
                  <button onClick={() => setSent(false)} className="text-sm font-semibold" style={{ color: '#16C47F' }}>
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className={labelCls} style={labelStyle}>Nume *</label>
                      <input type="text" name="name" required placeholder="Numele tău" className={fieldCls} style={inputStyle}
                        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                        onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelCls} style={labelStyle}>Telefon (opțional)</label>
                      <input type="tel" name="phone" placeholder="+40 7XX XXX XXX" className={fieldCls} style={inputStyle}
                        onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                        onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelCls} style={labelStyle}>Mesaj *</label>
                    <textarea name="message" required rows={5}
                      placeholder="Spune-ne despre business-ul tău și cu ce te putem ajuta..."
                      className={`${fieldCls} resize-none`} style={inputStyle}
                      onFocus={(e) => Object.assign(e.currentTarget.style, inputFocusStyle)}
                      onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)} />
                  </div>

                  <button type="submit"
                    className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105"
                    style={{ background: '#16C47F', color: '#fff', boxShadow: '0 4px 24px rgba(22,196,127,0.35)' }}>
                    {WA_ICON}
                    Trimite pe WhatsApp
                  </button>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    Se deschide WhatsApp cu mesajul pre-completat · Răspundem rapid
                  </p>
                </form>
              )}
            </div>

            {/* ── CONTACT INFO ── */}
            <div className="lg:col-span-2 flex flex-col gap-4 reveal-right">
              <h2 className="font-serif text-white mb-2" style={{ fontSize: '1.7rem', fontWeight: 600 }}>
                Date de contact
              </h2>

              {/* Phone — prominent */}
              <a href="tel:+40767422497"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300"
                style={{ background: 'rgba(22,196,127,0.08)', border: '1.5px solid rgba(22,196,127,0.3)' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(22,196,127,0.6)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(22,196,127,0.3)')}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(22,196,127,0.15)', border: '1px solid rgba(22,196,127,0.3)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16C47F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: '#16C47F' }}>Telefon</p>
                  <p className="font-bold text-white" style={{ fontSize: '1.2rem' }}>+40 767 422 497</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>L-V · 9:00–18:00</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300"
                style={{ background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.25)' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(37,211,102,0.5)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(37,211,102,0.25)')}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: '#25D366' }}>WhatsApp</p>
                  <p className="font-bold text-white" style={{ fontSize: '1.1rem' }}>+40 767 422 497</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Răspuns rapid</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:hello@nextflow.ro"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,175,55,0.15)' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)')}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'var(--gold-dim)', border: '1px solid var(--gold-border)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: '#D4AF37' }}>Email</p>
                  <p className="font-bold text-white" style={{ fontSize: '1rem' }}>hello@nextflow.ro</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Răspundem în 24h</p>
                </div>
              </a>

              {/* Instagram */}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,175,55,0.15)' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)')}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'var(--gold-dim)', border: '1px solid var(--gold-border)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="#D4AF37" stroke="none" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: '#D4AF37' }}>Instagram</p>
                  <p className="font-bold text-white" style={{ fontSize: '1rem' }}>@nextflow_agency.ai</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Urmărește-ne</p>
                </div>
              </a>

              {/* Trust note */}
              <div className="p-5 rounded-2xl mt-2" style={{ background: 'var(--gold-dim)', border: '1px solid var(--gold-border)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="#D4AF37">
                    <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z" />
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#D4AF37' }}>Promisiunea noastră</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
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
