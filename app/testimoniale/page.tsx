'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import { useReveal } from '@/hooks/useReveal'
import { useCountUp } from '@/hooks/useCountUp'

const WHATSAPP_URL = 'https://wa.me/40767422497'

const stats = [
  { target: 50, suffix: '+', label: 'Clienți activi' },
  { target: 200, suffix: '+', label: 'Automatizări livrate' },
  { target: 40, suffix: 'h', label: 'Economisite/săpt.' },
  { target: 98, suffix: '%', label: 'Clienți mulțumiți' },
]

const testimonials = [
  {
    quote: 'Am economisit echivalentul a 3 angajați full-time. Rata no-show a scăzut cu 60% după implementarea agentului vocal.',
    name: 'Alexandru M.', role: 'Clinică medicală', avatar: 'AM', rating: 5, highlight: '60% reducere no-show',
  },
  {
    quote: 'CRM-ul automatizat ne-a dublat rata de conversie. Niciun lead nu mai cade prin crăpături.',
    name: 'Maria P.', role: 'Agenție imobiliară', avatar: 'MP', rating: 5, highlight: '2x rata de conversie',
  },
  {
    quote: 'Chatbot-ul răspunde la 90% din întrebările clienților. Echipa mea se ocupă acum de ce contează cu adevărat.',
    name: 'Dan I.', role: 'E-commerce', avatar: 'DI', rating: 5, highlight: '90% întrebări automatizate',
  },
  {
    quote: 'Pierdeam 40% din lead-uri. Acum răspund în 2 minute automat. +60% venituri în 3 luni.',
    name: 'Marco R.', role: 'Agenție imobiliară', avatar: 'MR', rating: 5, highlight: '+60% venituri',
  },
  {
    quote: 'Am scăpat de 3 ore de admin zilnic. CRM-ul se actualizează singur. Nu mi-aș fi imaginat că e posibil.',
    name: 'Dr. Sara K.', role: 'Clinică estetică', avatar: 'SK', rating: 5, highlight: '3h economisite/zi',
  },
  {
    quote: 'De la 3 clienți pe lună la 9 — cu aceeași echipă. Sistemul face munca în locul nostru.',
    name: 'James H.', role: 'Agenție digitală', avatar: 'JH', rating: 5, highlight: '3x mai mulți clienți',
  },
]

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(target, 1800)
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal text-center">
      <div className="font-serif mb-1" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 3.6rem)', fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  )
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(n)].map((_, j) => (
        <svg key={j} width="15" height="15" viewBox="0 0 14 14" fill="#D4AF37">
          <path d="M7 1L8.545 5.11H13L9.545 7.61L10.9 12L7 9.35L3.1 12L4.455 7.61L1 5.11H5.455L7 1Z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialePage() {
  useReveal()

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        label="Testimoniale"
        title="Clienții noștri"
        titleHighlight="vorbesc"
        subtitle="Peste 50 de afaceri din România au ales NextFlow pentru a automatiza și scala. Iată ce spun ei."
      />

      {/* ── STATS ── */}
      <section className="py-16" style={{ background: '#111111' }}>
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StatCounter key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <div className="container-main"><div className="divider-gold" /></div>

      {/* ── TESTIMONIALS ── */}
      <section className="section-py" style={{ background: '#0A0A0A' }}>
        <div className="container-main">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-5 reveal">✦ Povești de succes ✦</p>
            <h2 className="reveal delay-1 font-serif text-white" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: '1.08', fontWeight: 600 }}>
              Ce spun <span className="text-gold-gradient">clienții noștri</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className={`card relative flex flex-col gap-5 reveal-scale delay-${(i % 3) + 1}`}>
                {/* Large gold quote mark */}
                <span className="font-serif absolute top-4 right-6 select-none pointer-events-none"
                  style={{ fontSize: '5rem', lineHeight: 1, color: 'rgba(212,175,55,0.18)' }}>&rdquo;</span>

                <Stars n={t.rating} />

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold w-fit"
                  style={{ background: 'var(--gold-dim)', border: '1px solid var(--gold-border)', color: '#D4AF37' }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <path d="M5 1L6.18 3.63L9 4.07L6.94 6.08L7.56 9L5 7.63L2.44 9L3.06 6.08L1 4.07L3.82 3.63L5 1Z" />
                  </svg>
                  {t.highlight}
                </div>

                <p className="text-white leading-relaxed flex-1 relative z-10" style={{ fontSize: '1rem' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shrink-0 font-serif"
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #F0D060)', color: '#0A0A0A' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.role}</div>
                  </div>
                </div>
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
              Vrei și tu rezultate ca ale lor?
            </h2>
            <p className="reveal delay-1 text-base font-medium mb-8" style={{ color: 'rgba(0,0,0,0.65)' }}>
              Fii următoarea poveste de succes. Programează o consultație gratuită astăzi.
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
