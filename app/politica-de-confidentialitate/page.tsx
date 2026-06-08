import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politică de Confidențialitate — NextFlow',
  description: 'Politica de confidențialitate NextFlow. Aflați cum colectăm, utilizăm și protejăm datele dumneavoastră personale conform GDPR.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://nextflow.ro/politica-de-confidentialitate' },
}

const sections = [
  {
    id: '1',
    title: 'Cine suntem',
    content: (
      <>
        <p>
          <strong style={{ color: '#fff' }}>NextFlow</strong> (&ldquo;noi&rdquo;, &ldquo;ne&rdquo;, &ldquo;nostru&rdquo;) este o agenție de automatizare AI cu sediul în România,
          care operează site-ul <strong style={{ color: '#D4AF37' }}>nextflow.ro</strong>.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Date de contact:<br />
          Email: <a href="mailto:hello@nextflow.ro" style={{ color: '#D4AF37', textDecoration: 'none' }}>hello@nextflow.ro</a><br />
          Telefon: <a href="tel:+40767422497" style={{ color: '#D4AF37', textDecoration: 'none' }}>+40 767 422 497</a>
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Această politică se aplică tuturor vizitatorilor și clienților care interacționează cu site-ul
          sau serviciile noastre.
        </p>
      </>
    ),
  },
  {
    id: '2',
    title: 'Ce date cu caracter personal colectăm',
    content: (
      <>
        <p style={{ marginBottom: '0.75rem' }}>Colectăm date pe care ni le furnizați în mod direct:</p>
        <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column' as const, gap: '0.4rem' }}>
          <li>Nume și prenume</li>
          <li>Adresă de email</li>
          <li>Număr de telefon</li>
          <li>Denumirea și domeniul afacerii dumneavoastră</li>
          <li>Mesajele transmise prin formularul de contact, WhatsApp sau email</li>
        </ul>
        <p style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>Colectăm automat prin cookies și instrumente de analiză:</p>
        <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column' as const, gap: '0.4rem' }}>
          <li>Adresa IP și locația geografică aproximativă</li>
          <li>Tipul de browser și sistemul de operare</li>
          <li>Paginile vizitate și durata sesiunii</li>
          <li>Sursa de trafic (cum ați ajuns pe site)</li>
        </ul>
      </>
    ),
  },
  {
    id: '3',
    title: 'Scopul și temeiul juridic al prelucrării',
    content: (
      <>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
          {[
            { temei: 'Executarea contractului', scop: 'Furnizarea serviciilor solicitate, comunicări legate de proiect, facturare.' },
            { temei: 'Consimțământ', scop: 'Trimiterea de comunicări comerciale (newsletter, oferte). Puteți retrage consimțământul oricând.' },
            { temei: 'Interes legitim', scop: 'Îmbunătățirea serviciilor, prevenirea fraudei, analiza traficului pe site.' },
            { temei: 'Obligație legală', scop: 'Respectarea cerințelor fiscale, contabile sau de altă natură impuse de legislația română.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '0.875rem 1rem', borderRadius: '10px', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.12)' }}>
              <span style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.85rem' }}>{item.temei}: </span>
              <span>{item.scop}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: '4',
    title: 'Cât timp păstrăm datele',
    content: (
      <p>
        Datele personale sunt păstrate atâta timp cât este necesar pentru scopul colectării lor:
        <br /><br />
        — Date de contact (clienți activi): pe durata contractului și <strong style={{ color: '#fff' }}>3 ani</strong> după finalizare.<br />
        — Date de contact (prospecți fără contract): maximum <strong style={{ color: '#fff' }}>12 luni</strong> de la ultimul contact.<br />
        — Date de facturare: <strong style={{ color: '#fff' }}>10 ani</strong> conform legislației fiscale române.<br />
        — Date analitice (cookies): conform politicii furnizorului (Google Analytics — max. 26 luni).
      </p>
    ),
  },
  {
    id: '5',
    title: 'Cu cine partajăm datele',
    content: (
      <>
        <p style={{ marginBottom: '0.75rem' }}>
          Nu vindem datele dumneavoastră. Le putem partaja exclusiv cu:
        </p>
        <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column' as const, gap: '0.4rem' }}>
          <li><strong style={{ color: '#fff' }}>Furnizori de servicii tehnice</strong> (ex: Calendly, Make/Zapier, platforme CRM) — strict în scopul furnizării serviciilor</li>
          <li><strong style={{ color: '#fff' }}>Google LLC</strong> — prin Google Analytics, în condiții de anonimizare IP</li>
          <li><strong style={{ color: '#fff' }}>Autorități publice</strong> — exclusiv când legea o impune</li>
        </ul>
        <p style={{ marginTop: '0.75rem' }}>
          Toți partenerii noștri sunt obligați contractual să respecte confidențialitatea și securitatea datelor.
        </p>
      </>
    ),
  },
  {
    id: '6',
    title: 'Drepturile dumneavoastră (GDPR)',
    content: (
      <>
        <p style={{ marginBottom: '0.75rem' }}>Conform Regulamentului (UE) 2016/679 (GDPR), aveți dreptul la:</p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' }}>
          {[
            { drept: 'Acces', desc: 'Să solicitați o copie a datelor pe care le deținem despre dumneavoastră.' },
            { drept: 'Rectificare', desc: 'Să corectați datele inexacte sau incomplete.' },
            { drept: 'Ștergere', desc: 'Să solicitați ștergerea datelor („dreptul de a fi uitat"), în condițiile legii.' },
            { drept: 'Restricționare', desc: 'Să limitați prelucrarea datelor în anumite circumstanțe.' },
            { drept: 'Portabilitate', desc: 'Să primiți datele furnizate într-un format structurat, lisibil electronic.' },
            { drept: 'Opoziție', desc: 'Să vă opuneți prelucrării bazate pe interes legitim sau marketing direct.' },
            { drept: 'Retragerea consimțământului', desc: 'Oricând, fără a afecta legalitatea prelucrării anterioare.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4AF37', marginTop: '0.5rem', flexShrink: 0 }} />
              <p><strong style={{ color: '#D4AF37' }}>{item.drept}:</strong> {item.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '1rem' }}>
          Exercitați-vă drepturile scriind la{' '}
          <a href="mailto:hello@nextflow.ro" style={{ color: '#D4AF37', textDecoration: 'none' }}>hello@nextflow.ro</a>.
          Răspundem în maximum <strong style={{ color: '#fff' }}>30 de zile</strong>.
          Aveți de asemenea dreptul de a depune o plângere la{' '}
          <strong style={{ color: '#fff' }}>ANSPDCP</strong> (anspdcp.eu).
        </p>
      </>
    ),
  },
  {
    id: '7',
    title: 'Cookie-uri',
    content: (
      <>
        <p style={{ marginBottom: '0.75rem' }}>Folosim două categorii de cookie-uri:</p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.6rem' }}>
          <div style={{ padding: '0.75rem 1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <strong style={{ color: '#fff' }}>Cookie-uri strict necesare</strong>
            <p style={{ marginTop: '0.25rem', fontSize: '0.875rem' }}>Necesare funcționării site-ului (sesiune, securitate). Nu necesită consimțământ.</p>
          </div>
          <div style={{ padding: '0.75rem 1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <strong style={{ color: '#fff' }}>Cookie-uri analitice (Google Analytics)</strong>
            <p style={{ marginTop: '0.25rem', fontSize: '0.875rem' }}>Colectăm date anonime despre trafic pentru a îmbunătăți site-ul. Activate doar cu consimțământul dumneavoastră.</p>
          </div>
        </div>
        <p style={{ marginTop: '0.75rem' }}>
          Puteți gestiona preferințele cookie din setările browserului sau prin bannerul de consimțământ.
        </p>
      </>
    ),
  },
  {
    id: '8',
    title: 'Securitatea datelor',
    content: (
      <p>
        Implementăm măsuri tehnice și organizatorice adecvate: conexiuni HTTPS, acces restricționat la date,
        autentificare în doi pași pentru sistemele interne și backup regulat.
        În cazul unui incident de securitate cu impact asupra drepturilor dumneavoastră, vă vom notifica
        în conformitate cu cerințele GDPR.
      </p>
    ),
  },
  {
    id: '9',
    title: 'Transferuri internaționale',
    content: (
      <p>
        Unele instrumente utilizate (ex: Google Analytics, Calendly) pot transfera date în afara UE/SEE.
        Aceste transferuri se realizează în baza mecanismelor legale aprobate de Comisia Europeană
        (Clauze Contractuale Standard sau certificare Privacy Framework).
      </p>
    ),
  },
  {
    id: '10',
    title: 'Modificări ale politicii',
    content: (
      <p>
        Putem actualiza această politică pentru a reflecta modificări legislative sau schimbări în
        practicile noastre. Vom afișa data actualizării în partea de sus. Pentru modificări
        semnificative, vă vom notifica prin email dacă avem adresa dumneavoastră.
      </p>
    ),
  },
]

export default function PoliticaDeConfidentialitate() {
  return (
    <main style={{ background: '#070D1A', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero section */}
      <div style={{ background: 'linear-gradient(180deg, #0D1525 0%, #070D1A 100%)', borderBottom: '1px solid rgba(212,175,55,0.1)', paddingTop: '96px', paddingBottom: '48px' }}>
        <div className="container-main" style={{ maxWidth: '780px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(212,175,55,0.6)', fontSize: '0.875rem', textDecoration: 'none', marginBottom: '2rem' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Înapoi la pagina principală
          </Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.875rem', borderRadius: '999px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: '#D4AF37', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#D4AF37', display: 'inline-block' }} />
            Document Legal
          </div>
          <h1 style={{ fontSize: 'clamp(1.875rem, 5vw, 2.75rem)', color: '#FFFFFF', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            Politică de <span style={{ color: '#D4AF37' }}>Confidențialitate</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>
            Ultima actualizare: <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Iunie 2026</strong>
            &ensp;·&ensp; Conform Regulamentului (UE) 2016/679 (GDPR)
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-main" style={{ maxWidth: '780px', paddingTop: '3.5rem', paddingBottom: '5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {sections.map((section, i) => (
            <div key={section.id} style={{ padding: '2rem 0', borderBottom: i < sections.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#D4AF37', background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '6px', padding: '0.2rem 0.5rem', letterSpacing: '0.05em', flexShrink: 0, marginTop: '0.2rem' }}>
                  {section.id.padStart(2, '0')}
                </span>
                <div style={{ flex: 1 }}>
                  <h2 style={{ color: '#FFFFFF', fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.875rem', letterSpacing: '-0.01em' }}>
                    {section.title}
                  </h2>
                  <div style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontSize: '0.9375rem' }}>
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: '16px', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.2)', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Aveți întrebări despre datele dumneavoastră?</h3>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            Răspundem în maximum 30 de zile la orice solicitare legată de datele personale.
          </p>
          <a href="mailto:hello@nextflow.ro"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #D4AF37, #F0D060)', color: '#000', fontWeight: 700, borderRadius: '999px', padding: '0.75rem 1.75rem', fontSize: '0.9rem', textDecoration: 'none' }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <rect x="1" y="3" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M1 5.5L7.5 9L14 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            hello@nextflow.ro
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
