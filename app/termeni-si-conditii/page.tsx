import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Termeni și Condiții — NextFlow',
  description: 'Termenii și condițiile de utilizare a serviciilor NextFlow — agenție automatizare AI România.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://nextflow.ro/termeni-si-conditii' },
}

const sections = [
  {
    id: '1',
    title: 'Definiții și părți contractante',
    content: (
      <>
        <p style={{ marginBottom: '0.75rem' }}>Acești Termeni și Condiții (&ldquo;T&amp;C&rdquo;) guvernează relația contractuală dintre:</p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div style={{ padding: '0.75rem 1rem', borderRadius: '8px', background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}>
            <strong style={{ color: '#D4AF37' }}>Prestatorul:</strong> <span> NextFlow, agenție de automatizare AI, România — &ldquo;NextFlow&rdquo;, &ldquo;noi&rdquo;</span>
          </div>
          <div style={{ padding: '0.75rem 1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <strong style={{ color: '#fff' }}>Clientul:</strong> <span style={{ color: 'rgba(255,255,255,0.55)' }}> orice persoană fizică sau juridică care comandă servicii NextFlow sau utilizează site-ul nextflow.ro — &ldquo;Client&rdquo;, &ldquo;dumneavoastră&rdquo;</span>
          </div>
        </div>
        <p>
          Prin accesarea site-ului sau prin comandarea serviciilor, Clientul acceptă în totalitate acești Termeni.
          Dacă nu sunteți de acord, vă rugăm să nu utilizați serviciile noastre.
        </p>
      </>
    ),
  },
  {
    id: '2',
    title: 'Serviciile oferite',
    content: (
      <>
        <p style={{ marginBottom: '0.75rem' }}>NextFlow oferă servicii de automatizare AI pentru afaceri, inclusiv:</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
          {[
            'Agenți Vocali AI',
            'Chatboți pentru website',
            'Automatizare CRM',
            'Automatizare Social Media',
            'Email & WhatsApp Marketing',
            'Programare automată (Calendar AI)',
            'Sisteme de follow-up automat',
            'Integrări și automatizări custom',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                <path d="M2 6L5 9L10 3" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: '0.875rem' }}>{item}</span>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '0.75rem' }}>
          Specificațiile exacte, livrabilele și termenele sunt definite în oferta comercială și/sau contractul
          semnat individual cu fiecare client.
        </p>
      </>
    ),
  },
  {
    id: '3',
    title: 'Comenzi, oferte și contracte',
    content: (
      <>
        <p style={{ marginBottom: '0.75rem' }}>
          Procesul standard de colaborare:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' }}>
          {[
            { pas: '1', text: 'Consultație gratuită (30 min) — fără angajament' },
            { pas: '2', text: 'Ofertă comercială personalizată transmisă în scris' },
            { pas: '3', text: 'Semnarea contractului de servicii' },
            { pas: '4', text: 'Achitarea avansului conform contractului' },
            { pas: '5', text: 'Implementare și livrare' },
          ].map((item) => (
            <div key={item.pas} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(212,175,55,0.15)', color: '#D4AF37', fontSize: '0.7rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.pas}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '0.75rem' }}>
          Un contract este considerat încheiat la momentul semnării documentului de către ambele părți
          și al achitării avansului stipulat.
        </p>
      </>
    ),
  },
  {
    id: '4',
    title: 'Prețuri, facturare și plată',
    content: (
      <>
        <p>
          Prețurile sunt stabilite individual în funcție de complexitatea proiectului și sunt comunicate
          în oferta comercială scrisă. Consultația inițială este <strong style={{ color: '#D4AF37' }}>gratuită</strong> și nu implică niciun angajament.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          <strong style={{ color: '#fff' }}>Modalitate de plată:</strong> avans conform contractului (de regulă 50%) la semnare,
          diferența la livrarea finală sau conform graficului de plăți agreat.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          <strong style={{ color: '#fff' }}>Întârziere la plată:</strong> în cazul neplății la termen, NextFlow poate suspenda accesul
          la sisteme și poate aplica penalități de întârziere de <strong style={{ color: '#fff' }}>0,1% pe zi</strong> din suma restantă.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Prețurile pot fi modificate pentru contracte noi. Contractele în derulare nu sunt afectate.
        </p>
      </>
    ),
  },
  {
    id: '5',
    title: 'Termene de implementare',
    content: (
      <>
        <p>
          Termenele orientative sunt de <strong style={{ color: '#fff' }}>2–6 săptămâni</strong>, în funcție de complexitatea proiectului.
          Termenele exacte sunt stabilite în contract.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Termenele pot fi afectate de:
        </p>
        <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column' as const, gap: '0.25rem' }}>
          <li>Întârzieri în furnizarea informațiilor sau acceselor necesare de către Client</li>
          <li>Modificări ale specificațiilor agreate după începerea lucrărilor</li>
          <li>Evenimente de forță majoră</li>
        </ul>
        <p style={{ marginTop: '0.75rem' }}>
          NextFlow va comunica orice modificare de termen în timp util.
        </p>
      </>
    ),
  },
  {
    id: '6',
    title: 'Obligațiile clientului',
    content: (
      <>
        <p style={{ marginBottom: '0.75rem' }}>Pentru buna desfășurare a proiectului, Clientul se obligă să:</p>
        <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column' as const, gap: '0.4rem' }}>
          <li>Furnizeze informațiile și accesele necesare (CRM, conturi social media, etc.) în timp util</li>
          <li>Desemneze o persoană de contact responsabilă pentru proiect</li>
          <li>Valideze livrabilele în termenele stabilite (tăcerea mai mult de 5 zile lucrătoare = acceptare)</li>
          <li>Achite facturile la termenele scadente</li>
          <li>Nu utilizeze sistemele livrate în scopuri ilegale sau contrare eticii</li>
        </ul>
      </>
    ),
  },
  {
    id: '7',
    title: 'Proprietate intelectuală',
    content: (
      <>
        <p>
          La finalizarea plății integrale, Clientul dobândește dreptul <strong style={{ color: '#fff' }}>nelimitat de utilizare</strong> a
          sistemelor și automatizărilor livrate, pentru uz propriu.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          NextFlow păstrează dreptul de a folosi metodologiile generice, know-how-ul și componentele
          reutilizabile (fără date confidențiale ale Clientului) în activitatea sa viitoare.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Clientul nu poate revinde sau sublicenția sistemele livrate fără acordul scris al NextFlow.
        </p>
      </>
    ),
  },
  {
    id: '8',
    title: 'Confidențialitate și NDA',
    content: (
      <>
        <p>
          Ambele părți se obligă să păstreze confidențialitatea tuturor informațiilor comerciale, tehnice
          și strategice ale celeilalte părți, atât pe durata colaborării, cât și <strong style={{ color: '#fff' }}>2 ani</strong> după
          finalizarea contractului.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          La solicitarea Clientului, NextFlow poate semna un <strong style={{ color: '#D4AF37' }}>Acord de Nedivulgare (NDA)</strong> separat,
          înainte de consultație sau de începerea lucrărilor.
        </p>
      </>
    ),
  },
  {
    id: '9',
    title: 'Garanție și suport post-implementare',
    content: (
      <>
        <p>
          NextFlow oferă o perioadă de garanție de <strong style={{ color: '#fff' }}>30 de zile</strong> de la livrarea finală,
          pe durata căreia remedierea defectelor constatate este gratuită.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Suportul tehnic continuu și modificările ulterioare fac obiectul unui contract separat de
          mentenanță sau sunt tarifate conform baremului în vigoare la momentul solicitării.
        </p>
      </>
    ),
  },
  {
    id: '10',
    title: 'Limitarea răspunderii',
    content: (
      <>
        <p>
          NextFlow depune toate eforturile rezonabile pentru a livra servicii de calitate. Cu toate acestea:
        </p>
        <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column' as const, gap: '0.4rem' }}>
          <li>Nu garantăm rezultate comerciale specifice (ex: număr de clienți, creșteri de venit)</li>
          <li>Nu suntem responsabili pentru întreruperi ale platformelor terțe (Meta, Google, Zapier etc.)</li>
          <li>Răspunderea totală a NextFlow nu poate depăși <strong style={{ color: '#fff' }}>valoarea contractului</strong> aferent</li>
          <li>Nu suntem răspunzători pentru daune indirecte, pierderi de profit sau daune consecutive</li>
        </ul>
      </>
    ),
  },
  {
    id: '11',
    title: 'Rezilierea contractului',
    content: (
      <>
        <p>
          Oricare dintre părți poate rezilia contractul cu un preaviz scris de <strong style={{ color: '#fff' }}>15 zile</strong>,
          cu condiția achitării tuturor serviciilor prestate până la data rezilierii.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          NextFlow poate rezilia imediat în caz de: neplată repetată, utilizare abuzivă a sistemelor
          sau comportament contrar eticii profesionale.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Avansul nu este returnat dacă rezilierea intervine din culpa Clientului după începerea lucrărilor.
        </p>
      </>
    ),
  },
  {
    id: '12',
    title: 'Forță majoră',
    content: (
      <p>
        Niciuna dintre părți nu este răspunzătoare pentru neexecutarea obligațiilor cauzată de evenimente
        de forță majoră (calamități naturale, pandemii, atacuri cibernetice majore, perturbări ale
        infrastructurii internet, modificări legislative imprevizibile). Partea afectată va notifica
        cealaltă parte în maximum <strong style={{ color: '#fff' }}>5 zile</strong> de la apariția evenimentului.
      </p>
    ),
  },
  {
    id: '13',
    title: 'Legislație aplicabilă și litigii',
    content: (
      <>
        <p>
          Acești Termeni sunt guvernați de <strong style={{ color: '#fff' }}>legislația română</strong>.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Orice litigiu va fi soluționat în primul rând pe cale <strong style={{ color: '#D4AF37' }}>amiabilă</strong>, prin negociere directă.
          În lipsa unui acord în 30 de zile, competența aparține instanțelor judecătorești competente
          de la sediul Prestatorului.
        </p>
      </>
    ),
  },
  {
    id: '14',
    title: 'Modificarea termenilor',
    content: (
      <p>
        NextFlow poate modifica acești Termeni cu un preaviz de <strong style={{ color: '#fff' }}>15 zile</strong>, publicat pe site.
        Continuarea utilizării serviciilor după această perioadă constituie acceptarea noilor termeni.
        Data ultimei actualizări este afișată în antetul acestei pagini.
      </p>
    ),
  },
]

export default function TermeniSiConditii() {
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
            Termeni și <span style={{ color: '#D4AF37' }}>Condiții</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>
            Ultima actualizare: <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Iunie 2026</strong>
            &ensp;·&ensp; Legislație aplicabilă: dreptul român
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
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Aveți întrebări despre acești termeni?</h3>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            Contactați-ne înainte de a comanda — clarificăm orice aspect contractual.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:hello@nextflow.ro"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #D4AF37, #F0D060)', color: '#000', fontWeight: 700, borderRadius: '999px', padding: '0.75rem 1.75rem', fontSize: '0.9rem', textDecoration: 'none' }}>
              hello@nextflow.ro
            </a>
            <a href="tel:+40767422497"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', borderRadius: '999px', padding: '0.75rem 1.75rem', fontSize: '0.9rem', textDecoration: 'none' }}>
              +40 767 422 497
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
