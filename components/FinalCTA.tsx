'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function FinalCTA() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section-py relative overflow-hidden" id="contact"
      style={{ background: '#0D1525' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.1) 0%, transparent 70%)' }}/>
      <div className="absolute inset-0 dot-grid-bg opacity-30 pointer-events-none" />

      <div className="container-main relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-6 reveal justify-center">
            <span className="gold-dot" />
            Contactează-ne
          </p>

          <h2 className="reveal font-black text-white mb-6"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: '1.05', letterSpacing: '-0.035em' }}>
            Oprește pierderile.
            <br />
            <span className="text-gradient-yellow">Începe să scalezi.</span>
          </h2>

          <p className="reveal text-white/40 mb-10 max-w-lg mx-auto"
            style={{ fontSize: '1.125rem', lineHeight: '1.65' }}>
            Programează un apel strategic gratuit de 30 de minute. Îți vom mapa exact oportunitățile de automatizare și îți vom arăta ce este posibil.
          </p>

          <div className="reveal flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a href="https://calendly.com/mafteiustin" target="_blank" rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4">
              Programează Acum — Gratuit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://wa.me/40767422497" target="_blank" rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-4">
              WhatsApp
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>

          <div className="reveal flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs"
            style={{ color: 'rgba(255,255,255,0.3)' }}>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Fără angajament
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Apel strategic 30 minute
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Personalizat pentru afacerea ta
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
