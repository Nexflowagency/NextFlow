'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useReveal } from '@/hooks/useReveal'
import { useCountUp } from '@/hooks/useCountUp'

const WHATSAPP_URL = 'https://wa.me/40767422497'

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
        <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
        <line x1="12" y1="18" x2="12" y2="22"/>
        <line x1="8" y1="22" x2="16" y2="22"/>
      </svg>
    ),
    title: 'Agent Vocal AI',
    desc: 'Preia apeluri automat, programează întâlniri, răspunde FAQ-uri 24/7. Nu mai pierzi niciun apel.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#D4AF37" stroke="none"/>
      </svg>
    ),
    title: 'Social Media AI',
    desc: 'Creează conținut, publică automat pe toate platformele, răspunde la comentarii.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'CRM Automatizat',
    desc: 'Urmărire lead-uri, follow-up-uri inteligente, pipeline vizual în timp real.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'Chatbot Website',
    desc: 'Calificare lead-uri instant, răspunsuri 24/7, transfer către om când e necesar.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Calendar Smart',
    desc: 'Programare self-service pentru clienți, reminder-e automate, sincronizare calendare.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Email & WhatsApp Marketing',
    desc: 'Campanii automate personalizate, A/B testing, rapoarte detaliate.',
  },
]

const steps = [
  { num: '01', title: 'Consultație gratuită', desc: 'Înțelegem afacerea ta și identificăm oportunitățile de automatizare.' },
  { num: '02', title: 'Plan personalizat', desc: 'Creăm o strategie customizată cu soluțiile potrivite pentru tine.' },
  { num: '03', title: 'Implementare rapidă', desc: 'Construim și integrăm sistemele în 2-4 săptămâni.' },
  { num: '04', title: 'Rezultate măsurabile', desc: 'Urmărim KPI-urile și optimizăm continuu pentru ROI maxim.' },
]

const faqs = [
  { q: 'Cât costă o automatizare AI?', a: 'Prețul variază în funcție de complexitate. Discutăm în consultația gratuită și îți oferim o ofertă clară, fără costuri ascunse. ROI-ul mediu al clienților noștri depășește investiția în primele 3 luni.' },
  { q: 'Cât durează implementarea?', a: 'De obicei 2-4 săptămâni. Un chatbot simplu poate fi live în câteva zile, un sistem CRM complet cu agent vocal durează 3-4 săptămâni. Tu primești update-uri săptămânale.' },
  { q: 'Trebuie să am cunoștințe tehnice?', a: 'Deloc. Ne ocupăm de tot din punct de vedere tehnic: configurare, integrare, testare, lansare. Tu explici procesele de business, noi facem restul.' },
  { q: 'Se poate integra cu ce folosesc deja?', a: 'Da, în marea majoritate a cazurilor. Integrăm cu HubSpot, Salesforce, Google Workspace, platforme de e-commerce și multe altele. Verificăm compatibilitatea în consultația gratuită.' },
  { q: 'Ce se întâmplă după implementare?', a: 'Monitorizăm activ sistemele, intervenim rapid la orice problemă și optimizăm continuu. Primești rapoarte lunare cu toate metricile. Suportul nostru este disponibil 24/7.' },
  { q: 'Pot testa înainte să mă angajez?', a: 'Da! Consultația de 30 de minute este complet gratuită și fără obligații. Îți prezentăm exact ce sistem ar funcționa pentru tine și care sunt rezultatele estimate. Fără presiune.' },
]

const rotatingServices = [
  'Agent Vocal AI',
  'Social Media AI',
  'CRM Automatizat',
  'Chatbot Website',
  'Calendar Smart',
]

function StatCounter({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCountUp(target, 1800)
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="hr flex flex-col items-center gap-1" style={{ transitionDelay: `${delay}ms` }}>
      <span className="font-serif" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>
        {count}{suffix}
      </span>
      <span className="text-xs font-medium text-center" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {label}
      </span>
    </div>
  )
}

export default function Home() {
  useReveal()
  const heroRef = useRef<HTMLDivElement>(null)
  const [rotIndex, setRotIndex] = useState(0)

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
    const id = setInterval(() => setRotIndex((p) => (p + 1) % rotatingServices.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 tech-bg">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(22,196,127,0.12) 0%, transparent 60%)' }} />
        <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] pointer-events-none animate-float"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 65%)' }} />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(22,196,127,0.07) 0%, transparent 65%)', animation: 'float 7s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #070D1A)' }} />

        <div className="container-main relative z-10" ref={heroRef}>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-20">

            {/* Badge */}
            <div className="hr mb-8" style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)' }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.25)', color: '#D4AF37', fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase' }}>
                ✦ Automatizare AI Premium — România ✦
              </span>
            </div>

            {/* H1 */}
            <h1 className="hr font-serif text-white mb-6" style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)', fontSize: 'clamp(2.4rem, 7.5vw, 5.5rem)', lineHeight: '1.04', fontWeight: 600 }}>
              Afacerea ta merită
              <br />
              <span className="text-gold-gradient">tehnologie de excepție</span>
            </h1>

            {/* Rotating service names */}
            <div className="hr mb-7 h-8 flex items-center justify-center" style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
              <span className="text-base" style={{ color: 'rgba(255,255,255,0.5)' }}>Construim&nbsp;</span>
              <span key={rotIndex} className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 600, color: '#F0D060', animation: 'fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
                {rotatingServices[rotIndex]}
              </span>
            </div>

            {/* Subtitle */}
            <p className="hr mb-9 max-w-[580px]" style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.8s ease, transform 0.8s ease', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: '1.7', color: 'rgba(255,255,255,0.55)' }}>
              Transformăm companiile românești prin agenți vocali, automatizări CRM și chatboți inteligenți care lucrează zi și noapte.
            </p>

            {/* CTAs */}
            <div className="hr flex flex-col sm:flex-row gap-3 mb-14 w-full sm:w-auto" style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}>
              <a href="https://calendly.com/mafteiustin" target="_blank" rel="noopener noreferrer" className="btn-primary text-base w-full sm:w-auto">
                Programează Acum
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-base w-full sm:w-auto">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Stats with counter animation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full max-w-2xl pt-8" style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
              <StatCounter target={50} suffix="+" label="Clienți activi" delay={100} />
              <StatCounter target={200} suffix="+" label="Automatizări livrate" delay={200} />
              <StatCounter target={40} suffix="h" label="Economisite/săpt." delay={300} />
              <div className="hr flex flex-col items-center gap-1" style={{ transitionDelay: '400ms' }}>
                <span className="font-serif" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>24/7</span>
                <span className="text-xs font-medium text-center" style={{ color: 'rgba(255,255,255,0.45)' }}>Sisteme active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section-py" style={{ background: '#0D1525' }}>
        <div className="container-main">
          <div className="text-center mb-16">
            <p className="section-label justify-center mb-5 reveal">✦ Ce facem ✦</p>
            <h2 className="reveal delay-1 font-serif text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: '1.08', fontWeight: 600 }}>
              Soluții AI pentru <span className="text-gold-gradient">fiecare nevoie</span>
            </h2>
            <p className="reveal delay-2 mt-5 max-w-xl mx-auto" style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
              Soluții complete, construite special pentru afacerile românești care vor să crească fără să angajeze mai mult personal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Link href="/servicii" key={s.title} className={`card group reveal delay-${(i % 4) + 1}`}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'var(--gold-dim)', border: '1px solid var(--gold-border)' }}>
                  {s.icon}
                </div>
                <h3 className="font-serif text-white mb-2" style={{ fontSize: '1.5rem', fontWeight: 600 }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5" style={{ color: '#D4AF37' }}>
                  Află mai mult
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/servicii" className="btn-secondary text-sm">
              Vezi toate serviciile
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="container-main"><div className="divider-gold" /></div>

      {/* ── PROCESS ── */}
      <section className="section-py tech-bg">
        <div className="container-main">
          <div className="text-center mb-16">
            <p className="section-label justify-center mb-5 reveal">✦ Procesul nostru ✦</p>
            <h2 className="reveal delay-1 font-serif text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: '1.08', fontWeight: 600 }}>
              4 pași spre <span className="text-gold-gradient">automatizare</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className={`card reveal delay-${i + 1}`}>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-serif shrink-0"
                    style={{ background: 'var(--gold-dim)', border: '1px solid var(--gold-border)', color: '#D4AF37', fontSize: '1.5rem', fontWeight: 700 }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-serif text-white mb-1" style={{ fontSize: '1.4rem', fontWeight: 600 }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/cum-functioneaza" className="btn-secondary text-sm">
              Cum funcționează în detaliu
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="container-main"><div className="divider-gold" /></div>

      {/* ── FAQ ── */}
      <section className="section-py" style={{ background: '#0D1525' }}>
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-5 reveal" style={{ color: '#16C47F' }}>✦ Întrebări frecvente ✦</p>
            <h2 className="reveal delay-1 font-serif text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: '1.08', fontWeight: 600 }}>
              Ai întrebări? <span className="text-gold-gradient">Noi avem răspunsuri.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className={`card reveal delay-${(i % 3) + 1}`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(22,196,127,0.15)', border: '1px solid rgba(22,196,127,0.3)' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5L4 7.5L8 3.5" stroke="#16C47F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="font-bold text-white" style={{ fontSize: '1rem', letterSpacing: '-0.02em' }}>{faq.q}</h3>
                </div>
                <p className="text-sm leading-relaxed pl-9" style={{ color: 'var(--text-muted)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="section-py relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #D4AF37, #F0D060)' }}>
        <div className="container-main relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="reveal text-xs font-bold uppercase tracking-[0.15em] mb-5" style={{ color: 'rgba(0,0,0,0.5)' }}>
              ✦ Gata să începi? ✦
            </p>
            <h2 className="reveal delay-1 font-serif" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: '1.08', fontWeight: 600, color: '#0A0A0A' }}>
              Gata să automatizezi afacerea ta?
            </h2>
            <p className="reveal delay-2 mt-4 text-base font-medium" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Programează o consultație gratuită și descoperă cum putem transforma afacerea ta.
            </p>
            <div className="reveal delay-3 flex flex-col sm:flex-row flex-wrap gap-3 justify-center mt-9">
              <a href="https://calendly.com/mafteiustin" target="_blank" rel="noopener noreferrer" className="btn-ghost-dark text-base w-full sm:w-auto">
                Programează Acum
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="tel:+40767422497" className="btn-ghost-dark text-base w-full sm:w-auto">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                +40 767 422 497
              </a>
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
