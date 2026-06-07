import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Termeni și Condiții — NextFlow',
  description: 'Termenii și condițiile de utilizare a serviciilor NextFlow — agenție automatizare AI România.',
  robots: { index: true, follow: true },
}

export default function TermeniSiConditii() {
  return (
    <main style={{ background: '#070D1A', minHeight: '100vh' }}>
      <Navbar />

      <div className="container-main" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '780px' }}>

        <Link href="/" className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: 'rgba(212,175,55,0.7)' }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = '#D4AF37')}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = 'rgba(212,175,55,0.7)')}>
          ← Înapoi la pagina principală
        </Link>

        <h1 className="font-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.15 }}>
          Termeni și <span style={{ color: '#D4AF37' }}>Condiții</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Ultima actualizare: iunie 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>1. Părțile contractante</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              Acești Termeni și Condiții guvernează relația dintre NextFlow (&quot;Prestator&quot;) și
              orice persoană fizică sau juridică (&quot;Client&quot;) care utilizează site-ul nextflow.ro
              sau serviciile oferite de NextFlow.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>2. Serviciile oferite</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
              NextFlow oferă servicii de automatizare AI, inclusiv dar fără a se limita la:
            </p>
            <ul style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <li>Implementare agenți vocali AI</li>
              <li>Dezvoltare chatboți pentru website</li>
              <li>Automatizare CRM și pipeline de vânzări</li>
              <li>Automatizare Social Media</li>
              <li>Campanii Email și WhatsApp Marketing</li>
              <li>Calendar și programare automată</li>
            </ul>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginTop: '0.75rem' }}>
              Detaliile specifice ale serviciilor, livrabilele și termenele sunt stabilite în oferta
              comercială și contractul semnat cu fiecare client.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>3. Prețuri și plată</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
              Prețurile sunt stabilite individual în funcție de complexitatea proiectului.
              Consultația inițială este gratuită. Plata se efectuează conform condițiilor stipulate
              în contractul individual, de regulă parțial în avans și parțial la livrare.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              NextFlow își rezervă dreptul de a modifica prețurile pentru servicii noi. Contractele
              în derulare nu sunt afectate de modificările de preț.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>4. Drepturi de proprietate intelectuală</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              La finalizarea plății integrale, clientul dobândește dreptul de utilizare a sistemelor
              livrate. NextFlow păstrează dreptul de a folosi tehnologiile și metodologiile generice
              dezvoltate în cadrul proiectelor în activitatea sa viitoare.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>5. Confidențialitate și NDA</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              Ambele părți se obligă să păstreze confidențialitatea informațiilor comerciale și
              tehnice ale celeilalte părți. La cerere, NextFlow poate semna un acord de
              nedivulgare (NDA) înainte de consultație.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>6. Termene de implementare</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              Termenele orientative de implementare sunt de 2–4 săptămâni, în funcție de complexitatea
              proiectului și disponibilitatea informațiilor din partea clientului. Termenele exacte
              sunt stabilite în contractul individual.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>7. Suport post-implementare</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              NextFlow oferă suport tehnic după livrare conform condițiilor stipulate în contract.
              Modificările semnificative ale sistemelor livrate pot face obiectul unor costuri suplimentare.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>8. Limitarea răspunderii</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              NextFlow nu poate fi responsabilă pentru pierderi indirecte, accidentale sau
              consecvente rezultate din utilizarea sau imposibilitatea utilizării serviciilor.
              Răspunderea totală a NextFlow nu poate depăși valoarea contractului aferent.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>9. Forța majoră</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              Niciuna dintre părți nu este răspunzătoare pentru întârzieri sau neexecutarea
              obligațiilor cauzate de evenimente de forță majoră (calamități naturale, pandemii,
              perturbări ale infrastructurii internet etc.).
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>10. Legislație aplicabilă</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              Acești termeni sunt guvernați de legislația română. Orice litigiu va fi soluționat
              pe cale amiabilă sau, în caz contrar, de instanțele competente din România.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>11. Contact</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '0.5rem' }}>
              Pentru orice întrebări legate de acești termeni:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href="mailto:hello@nextflow.ro" style={{ color: '#D4AF37', fontSize: '0.95rem' }}>hello@nextflow.ro</a>
              <a href="tel:+40767422497" style={{ color: '#D4AF37', fontSize: '0.95rem' }}>+40 767 422 497</a>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  )
}
