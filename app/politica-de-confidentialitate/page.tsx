import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politică de Confidențialitate — NextFlow',
  description: 'Politica de confidențialitate NextFlow. Aflați cum colectăm, utilizăm și protejăm datele dumneavoastră personale.',
  robots: { index: true, follow: true },
}

export default function PoliticaDeConfidentialitate() {
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
          Politică de <span style={{ color: '#D4AF37' }}>Confidențialitate</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem', marginBottom: '3rem' }}>
          Ultima actualizare: iunie 2026
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>1. Cine suntem</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              NextFlow (&quot;noi&quot;, &quot;ne&quot;, &quot;nostru&quot;) este o agenție de automatizare AI cu sediul în România.
              Ne puteți contacta la{' '}
              <a href="mailto:hello@nextflow.ro" style={{ color: '#D4AF37' }}>hello@nextflow.ro</a> sau
              la numărul <a href="tel:+40767422497" style={{ color: '#D4AF37' }}>+40 767 422 497</a>.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>2. Ce date colectăm</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
              Colectăm date pe care ni le furnizați direct, cum ar fi:
            </p>
            <ul style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <li>Nume și prenume</li>
              <li>Adresă de email</li>
              <li>Număr de telefon</li>
              <li>Informații despre afacerea dumneavoastră</li>
              <li>Mesajele trimise prin formularul de contact sau WhatsApp</li>
            </ul>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginTop: '0.75rem' }}>
              De asemenea, colectăm automat date tehnice (adresă IP, tip browser, pagini vizitate) prin cookies și instrumente de analiză.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>3. Cum utilizăm datele</h2>
            <ul style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <li>Pentru a răspunde solicitărilor și a programa consultații</li>
              <li>Pentru a livra serviciile contractate</li>
              <li>Pentru a trimite comunicări comerciale (doar cu acordul dumneavoastră)</li>
              <li>Pentru a îmbunătăți site-ul și serviciile noastre</li>
              <li>Pentru a respecta obligațiile legale</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>4. Baza legală a prelucrării</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '0.75rem' }}>Prelucrăm datele dumneavoastră în baza:</p>
            <ul style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <li><span style={{ color: '#D4AF37' }}>Consimțământului</span> — pentru comunicări de marketing</li>
              <li><span style={{ color: '#D4AF37' }}>Executării unui contract</span> — pentru livrarea serviciilor</li>
              <li><span style={{ color: '#D4AF37' }}>Interesului legitim</span> — pentru îmbunătățirea serviciilor</li>
              <li><span style={{ color: '#D4AF37' }}>Obligației legale</span> — unde legislația impune</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>5. Cât timp păstrăm datele</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              Păstrăm datele personale atâta timp cât este necesar pentru scopurile descrise mai sus,
              sau cât impune legislația aplicabilă. Datele clienților activi sunt păstrate pe durata
              contractului și 3 ani după încheierea acestuia.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>6. Drepturile dumneavoastră (GDPR)</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
              Conform Regulamentului GDPR, aveți dreptul la:
            </p>
            <ul style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <li><span style={{ color: '#D4AF37' }}>Acces</span> — să solicitați o copie a datelor pe care le deținem</li>
              <li><span style={{ color: '#D4AF37' }}>Rectificare</span> — să corectați date inexacte</li>
              <li><span style={{ color: '#D4AF37' }}>Ștergere</span> — &quot;dreptul de a fi uitat&quot;</li>
              <li><span style={{ color: '#D4AF37' }}>Restricționare</span> — să limitați prelucrarea</li>
              <li><span style={{ color: '#D4AF37' }}>Portabilitate</span> — să primiți datele într-un format structurat</li>
              <li><span style={{ color: '#D4AF37' }}>Opoziție</span> — să vă opuneți prelucrării</li>
            </ul>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginTop: '0.75rem' }}>
              Pentru exercitarea acestor drepturi, contactați-ne la{' '}
              <a href="mailto:hello@nextflow.ro" style={{ color: '#D4AF37' }}>hello@nextflow.ro</a>.
              Aveți și dreptul de a depune o plângere la ANSPDCP (Autoritatea Națională de Supraveghere).
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>7. Cookies</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              Site-ul nostru folosește cookies tehnice necesare funcționării și cookies analitice
              (Google Analytics) pentru a înțelege cum este utilizat site-ul. Puteți dezactiva cookies
              din setările browserului, însă unele funcționalități pot fi afectate.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>8. Securitatea datelor</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele personale
              împotriva accesului neautorizat, pierderii sau divulgării.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>9. Modificări ale politicii</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
              Putem actualiza această politică periodic. Vom notifica modificările semnificative
              prin email sau printr-un anunț vizibil pe site. Data ultimei actualizări este afișată
              în partea de sus a acestei pagini.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#D4AF37', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>10. Contact</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '0.5rem' }}>
              Pentru orice întrebări legate de această politică de confidențialitate:
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
