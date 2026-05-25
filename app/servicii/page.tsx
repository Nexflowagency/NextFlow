'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/hooks/useReveal'

const WHATSAPP_URL = 'https://wa.me/40767422497'

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
        <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
        <line x1="12" y1="18" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/>
      </svg>
    ),
    title: 'Agent Vocal AI',
    desc: 'Preia apeluri automat, programează întâlniri, răspunde FAQ-uri 24/7. Nu mai pierzi niciun apel.',
    features: ['Răspunde automat la apeluri 24/7', 'Programează întâlniri în calendar', 'Răspunde la întrebările frecvente', 'Transfer inteligent către om'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#D4AF37" stroke="none"/>
      </svg>
    ),
    title: 'Social Media AI',
    desc: 'Creează conținut, publică automat pe toate platformele, răspunde la comentarii.',
    features: ['Generare automată de conținut', 'Publicare pe toate platformele', 'Răspuns automat la comentarii', 'Planificare editorială inteligentă'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'CRM Automatizat',
    desc: 'Urmărire lead-uri, follow-up-uri inteligente, pipeline vizual în timp real.',
    features: ['Pipeline vizual în timp real', 'Follow-up-uri automate personalizate', 'Scoring și calificare lead-uri', 'Integrare cu email și WhatsApp'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'Chatbot Website',
    desc: 'Calificare lead-uri instant, răspunsuri 24/7, transfer către om când e necesar.',
    features: ['Disponibil 24/7 pe site-ul tău', 'Califică lead-urile automat', 'Răspunde la întrebări frecvente', 'Integrare cu CRM-ul tău'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Calendar Smart',
    desc: 'Programare self-service pentru clienți, reminder-e automate, sincronizare calendare.',
    features: ['Programare self-service pentru clienți', 'Reminder-e automate SMS/email', 'Sincronizare cu Google Calendar', 'Reducere no-show cu până la 60%'],
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Email & WhatsApp Marketing',
    desc: 'Campanii automate personalizate, A/B testing, rapoarte detaliate.',
    features: ['Campanii email automate personalizate', 'Secvențe WhatsApp automate', 'A/B testing pentru optimizare', 'Rapoarte detaliate de performanță'],
  },
]

export default function ServiciiPage() {
  useReveal()

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        label="Serviciile noastre"
        title="Soluții AI complete pentru"
        titleHighlight="afacerea ta"
        subtitle="De la agenți vocali la automatizări CRM — construim sisteme complete care lucrează în locul tău, zi și noapte."
      />

      {/* ── SERVICES CARDS ── */}
      <section className="section-py" style={{ background: '#111111' }}>
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className={`card reveal delay-${(i % 3) + 1}`}>
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--gold-dim)', border: '1px solid var(--gold-border)' }}>
                    {s.icon}
                  </div>
                  <div>
                    <h2 className="font-serif text-white mb-1" style={{ fontSize: '1.6rem', fontWeight: 600 }}>{s.title}</h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
                        <circle cx="7.5" cy="7.5" r="6.5" fill="#D4AF37" fillOpacity="0.12" />
                        <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="section-py" style={{ background: 'linear-gradient(135deg, #D4AF37, #F0D060)' }}>
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto">
            <p className="reveal text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{ color: 'rgba(0,0,0,0.5)' }}>
              ✦ Hai să începem ✦
            </p>
            <h2 className="reveal delay-1 font-serif mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: '1.08', fontWeight: 600, color: '#0A0A0A' }}>
              Alege serviciile potrivite pentru tine
            </h2>
            <p className="reveal delay-2 text-base font-medium mb-8" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Programează o consultație gratuită și creăm împreună pachetul ideal pentru afacerea ta.
            </p>
            <div className="reveal delay-3 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-ghost-dark text-base w-full sm:w-auto">
                Consultație Gratuită
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
