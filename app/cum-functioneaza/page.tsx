'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/hooks/useReveal'

const WHATSAPP_URL = 'https://wa.me/40767422497'

const steps = [
  {
    num: '01',
    title: 'Consultație gratuită',
    desc: 'Înțelegem afacerea ta și identificăm oportunitățile de automatizare.',
    detail: 'Începem cu un apel de 30-45 minute în care mapăm complet procesele tale actuale. Identificăm unde pierzi timp și bani, ce poate fi automatizat și care este potențialul de creștere. Fără costuri pentru această etapă.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    highlights: ['Apel de 30-45 minute complet gratuit', 'Analiză completă a proceselor actuale', 'Identificare oportunități de automatizare', 'Estimare ROI și economii potențiale'],
  },
  {
    num: '02',
    title: 'Plan personalizat',
    desc: 'Creăm o strategie customizată cu soluțiile potrivite pentru tine.',
    detail: 'Pe baza consultației, construim un plan detaliat specific afacerii tale. Alegem exact ce sisteme AI se potrivesc cel mai bine, stabilim prioritățile și definim metricile de succes. Primești o propunere clară cu costuri și termene.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    highlights: ['Strategie customizată pentru afacerea ta', 'Selecție soluții AI potrivite', 'Plan clar cu costuri și termene', 'KPI-uri și metrici de succes definite'],
  },
  {
    num: '03',
    title: 'Implementare rapidă',
    desc: 'Construim și integrăm sistemele în 2-4 săptămâni.',
    detail: 'Echipa noastră se ocupă de tot: configurare, integrare cu sistemele existente, testare și lansare. Primești update-uri săptămânale despre progres. Implementăm rapid fără să perturbăm activitatea curentă a afacerii tale.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    highlights: ['Implementare completă în 2-4 săptămâni', 'Integrare cu sistemele existente', 'Update-uri săptămânale de progres', 'Lansare fără perturbarea activității'],
  },
  {
    num: '04',
    title: 'Rezultate măsurabile',
    desc: 'Urmărim KPI-urile și optimizăm continuu pentru ROI maxim.',
    detail: 'Monitorizăm constant performanța sistemelor și facem ajustări pentru a maximiza rezultatele. Primești rapoarte lunare detaliate cu toate metricile importante. Suportul nostru este disponibil oricând ai nevoie.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    highlights: ['Monitorizare continuă a performanței', 'Optimizare pentru ROI maxim', 'Rapoarte lunare detaliate', 'Suport tehnic disponibil 24/7'],
  },
]

const faqs = [
  { q: 'Cât durează implementarea unui sistem AI?', a: 'De obicei între 2 și 4 săptămâni, în funcție de complexitatea proiectului. Un chatbot simplu poate fi live în câteva zile, în timp ce un sistem CRM complet cu agent vocal poate dura 3-4 săptămâni.' },
  { q: 'Trebuie să am cunoștințe tehnice?', a: 'Nu. Ne ocupăm de tot din punct de vedere tehnic. Tu trebuie doar să ne explici procesele de business și noi construim, integrăm și configurăm totul. Primești un sistem gata de utilizat.' },
  { q: 'Ce se întâmplă dacă sistemul nu funcționează cum trebuie?', a: 'Oferim garanție de funcționare și suport continuu. Monitorizăm activ sistemele și intervenim rapid la orice problemă. Optimizăm continuu pentru a atinge și depăși KPI-urile stabilite.' },
  { q: 'Se poate integra cu sistemele pe care le folosesc deja?', a: 'Da, în marea majoritate a cazurilor. Integrăm cu CRM-uri populare (HubSpot, Salesforce, etc.), Google Workspace, diverse platforme de e-commerce și multe altele. Discutăm în detaliu în consultația gratuită.' },
]

export default function CumFunctioneazaPage() {
  useReveal()

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        label="Cum funcționează"
        title="De la idee la sistem în"
        titleHighlight="4 pași simpli"
        subtitle="Nu e complicat. Noi gestionăm toată complexitatea tehnică — tu te concentrezi pe afacerea ta."
      />

      {/* ── STEPS ── */}
      <section className="section-py" style={{ background: '#111111' }}>
        <div className="container-main">
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical connector line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.3) 12%, rgba(212,175,55,0.3) 88%, transparent)' }} />

            <div className="flex flex-col gap-10 md:gap-16">
              {steps.map((step, i) => {
                const isEven = i % 2 === 1
                return (
                  <div key={step.num} className={`card relative ${isEven ? 'reveal-right md:ml-auto' : 'reveal-left md:mr-auto'} md:w-[calc(50%-2rem)]`}>
                    {/* Node dot on the line */}
                    <span className="hidden md:block absolute top-10 w-3.5 h-3.5 rounded-full animate-pulse-gold"
                      style={{ background: '#D4AF37', [isEven ? 'left' : 'right']: '-2.5rem' } as React.CSSProperties} />

                    <div className="flex items-start gap-5 mb-4">
                      <span className="font-serif shrink-0" style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 0.9, color: '#D4AF37', opacity: 0.85 }}>
                        {step.num}
                      </span>
                      <div className="pt-2">
                        <div className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
                          style={{ background: 'var(--gold-dim)', border: '1px solid var(--gold-border)', color: '#D4AF37' }}>
                          {step.icon}
                        </div>
                        <h2 className="font-serif text-white" style={{ fontSize: '1.7rem', fontWeight: 600, lineHeight: 1.1 }}>{step.title}</h2>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>{step.detail}</p>

                    <ul className="grid grid-cols-1 gap-2.5">
                      {step.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
                            <circle cx="7.5" cy="7.5" r="6.5" fill="#D4AF37" fillOpacity="0.12" />
                            <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="container-main"><div className="divider-gold" /></div>

      {/* ── FAQ ── */}
      <section className="section-py" style={{ background: '#0A0A0A' }}>
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-5 reveal">✦ Întrebări frecvente ✦</p>
            <h2 className="reveal delay-1 font-serif text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: '1.08', fontWeight: 600 }}>
              Ai întrebări? Noi avem <span className="text-gold-gradient">răspunsuri</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`card reveal delay-${(i % 4) + 1}`}>
                <h3 className="font-serif text-white mb-2" style={{ fontSize: '1.35rem', fontWeight: 600 }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-py" style={{ background: 'linear-gradient(135deg, #D4AF37, #F0D060)' }}>
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="reveal font-serif mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: '1.08', fontWeight: 600, color: '#0A0A0A' }}>
              Începe cu o consultație gratuită
            </h2>
            <p className="reveal delay-1 text-base font-medium mb-8" style={{ color: 'rgba(0,0,0,0.65)' }}>
              30 de minute care îți pot transforma afacerea. Fără obligații, fără costuri ascunse.
            </p>
            <div className="reveal delay-2 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-ghost-dark text-base w-full sm:w-auto">
                Programează Acum
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base w-full sm:w-auto">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
