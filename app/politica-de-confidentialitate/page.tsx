import type { Metadata } from 'next'
import LegalPage, { LegalSection } from '@/components/LegalPage'
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_PLAIN } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Politică de Confidențialitate — Nextflow',
  description:
    'Politica de confidențialitate Nextflow. Cum colectăm, utilizăm și protejăm datele dumneavoastră personale, conform GDPR.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://nextflow.ro/politica-de-confidentialitate' },
}

const legalBases = [
  {
    temei: 'Executarea contractului',
    scop: 'Furnizarea serviciilor solicitate, comunicări legate de proiect, facturare.',
  },
  {
    temei: 'Consimțământ',
    scop: 'Trimiterea de comunicări comerciale (newsletter, oferte). Puteți retrage consimțământul oricând.',
  },
  {
    temei: 'Interes legitim',
    scop: 'Îmbunătățirea serviciilor, prevenirea fraudei, analiza traficului pe site.',
  },
  {
    temei: 'Obligație legală',
    scop: 'Respectarea cerințelor fiscale, contabile sau de altă natură impuse de legislația română.',
  },
]

const rights = [
  { drept: 'Acces', desc: 'Să solicitați o copie a datelor pe care le deținem despre dumneavoastră.' },
  { drept: 'Rectificare', desc: 'Să corectați datele inexacte sau incomplete.' },
  {
    drept: 'Ștergere',
    desc: 'Să solicitați ștergerea datelor („dreptul de a fi uitat”), în condițiile legii.',
  },
  { drept: 'Restricționare', desc: 'Să limitați prelucrarea datelor în anumite circumstanțe.' },
  {
    drept: 'Portabilitate',
    desc: 'Să primiți datele furnizate într-un format structurat, lizibil electronic.',
  },
  {
    drept: 'Opoziție',
    desc: 'Să vă opuneți prelucrării bazate pe interes legitim sau marketing direct.',
  },
  {
    drept: 'Retragerea consimțământului',
    desc: 'Oricând, fără a afecta legalitatea prelucrării anterioare.',
  },
]

const sections: LegalSection[] = [
  {
    id: '1',
    title: 'Cine suntem',
    content: (
      <>
        <p>
          <strong>Nextflow</strong> („noi”, „ne”, „nostru”) este o agenție de automatizare AI cu sediul
          în România, care operează site-ul <strong>nextflow.ro</strong>.
        </p>
        <p>
          Date de contact:
          <br />
          Telefon: <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
          <br />
          WhatsApp:{' '}
          <a href={WHATSAPP_PLAIN} target="_blank" rel="noopener noreferrer">
            {PHONE_DISPLAY}
          </a>
        </p>
        <p>
          Această politică se aplică tuturor vizitatorilor și clienților care interacționează cu
          site-ul sau serviciile noastre.
        </p>
      </>
    ),
  },
  {
    id: '2',
    title: 'Ce date cu caracter personal colectăm',
    content: (
      <>
        <p>Colectăm date pe care ni le furnizați în mod direct:</p>
        <ul>
          <li>Nume și prenume</li>
          <li>Adresă de email</li>
          <li>Număr de telefon</li>
          <li>Denumirea și domeniul afacerii dumneavoastră</li>
          <li>Mesajele transmise prin formularul de contact, WhatsApp sau email</li>
        </ul>
        <p>Colectăm automat prin cookies și instrumente de analiză:</p>
        <ul>
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
      <div className="legal-grid">
        {legalBases.map((item) => (
          <div key={item.temei} className="legal-box legal-box-accent">
            <strong style={{ color: 'var(--green)' }}>{item.temei}:</strong> {item.scop}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: '4',
    title: 'Cât timp păstrăm datele',
    content: (
      <>
        <p>Datele personale sunt păstrate atâta timp cât este necesar pentru scopul colectării lor:</p>
        <ul>
          <li>
            Date de contact (clienți activi): pe durata contractului și <strong>3 ani</strong> după
            finalizare.
          </li>
          <li>
            Date de contact (prospecți fără contract): maximum <strong>12 luni</strong> de la ultimul
            contact.
          </li>
          <li>
            Date de facturare: <strong>10 ani</strong>, conform legislației fiscale române.
          </li>
          <li>
            Date analitice (cookies): conform politicii furnizorului (Google Analytics — maximum 26 de
            luni).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: '5',
    title: 'Cu cine partajăm datele',
    content: (
      <>
        <p>Nu vindem datele dumneavoastră. Le putem partaja exclusiv cu:</p>
        <ul>
          <li>
            <strong>Furnizori de servicii tehnice</strong> (de exemplu Calendly, Make/Zapier, platforme
            CRM) — strict în scopul furnizării serviciilor
          </li>
          <li>
            <strong>Google LLC</strong> — prin Google Analytics, în condiții de anonimizare IP
          </li>
          <li>
            <strong>Autorități publice</strong> — exclusiv când legea o impune
          </li>
        </ul>
        <p>
          Toți partenerii noștri sunt obligați contractual să respecte confidențialitatea și
          securitatea datelor.
        </p>
      </>
    ),
  },
  {
    id: '6',
    title: 'Drepturile dumneavoastră (GDPR)',
    content: (
      <>
        <p>Conform Regulamentului (UE) 2016/679 (GDPR), aveți dreptul la:</p>
        <ul>
          {rights.map((item) => (
            <li key={item.drept}>
              <strong style={{ color: 'var(--green)' }}>{item.drept}:</strong> {item.desc}
            </li>
          ))}
        </ul>
        <p>
          Exercitați-vă drepturile scriindu-ne pe{' '}
          <a href={WHATSAPP_PLAIN} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{' '}
          sau sunând la <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>. Răspundem în maximum{' '}
          <strong>30 de zile</strong>. Aveți de asemenea dreptul de a depune o plângere la{' '}
          <strong>ANSPDCP</strong> (
          <a href="https://www.dataprotection.ro/" target="_blank" rel="noopener noreferrer">
            dataprotection.ro
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    id: '7',
    title: 'Cookie-uri',
    content: (
      <>
        <p>Folosim două categorii de cookie-uri:</p>
        <div className="legal-grid">
          <div className="legal-box">
            <strong>Cookie-uri strict necesare</strong>
            <p style={{ marginTop: '0.35rem' }}>
              Necesare funcționării site-ului (sesiune, securitate). Nu necesită consimțământ.
            </p>
          </div>
          <div className="legal-box">
            <strong>Cookie-uri analitice (Google Analytics)</strong>
            <p style={{ marginTop: '0.35rem' }}>
              Colectăm date anonime despre trafic pentru a îmbunătăți site-ul. Activate doar cu
              consimțământul dumneavoastră.
            </p>
          </div>
        </div>
        <p>
          Puteți gestiona preferințele cookie din setările browserului sau prin bannerul de
          consimțământ.
        </p>
      </>
    ),
  },
  {
    id: '8',
    title: 'Securitatea datelor',
    content: (
      <p>
        Implementăm măsuri tehnice și organizatorice adecvate: conexiuni HTTPS, acces restricționat la
        date, autentificare în doi pași pentru sistemele interne și backup regulat. În cazul unui
        incident de securitate cu impact asupra drepturilor dumneavoastră, vă vom notifica în
        conformitate cu cerințele GDPR.
      </p>
    ),
  },
  {
    id: '9',
    title: 'Transferuri internaționale',
    content: (
      <p>
        Unele instrumente utilizate (de exemplu Google Analytics, Calendly) pot transfera date în afara
        UE/SEE. Aceste transferuri se realizează în baza mecanismelor legale aprobate de Comisia
        Europeană (Clauze Contractuale Standard sau certificare Privacy Framework).
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
    <LegalPage
      eyebrow="Document legal"
      titleTop="Politică de"
      titleAccent="confidențialitate"
      updated="Iunie 2026"
      standard="Conform Regulamentului (UE) 2016/679 (GDPR)"
      sections={sections}
      footerNote={
        <>
          <h2 className="display d-sm mb-3" style={{ color: 'var(--bone)' }}>
            Aveți întrebări despre datele dumneavoastră?
          </h2>
          <p className="mb-7 text-[0.9375rem] leading-relaxed" style={{ color: 'var(--bone-46)' }}>
            Răspundem în maximum 30 de zile la orice solicitare legată de datele personale.
          </p>
          <a
            href={WHATSAPP_PLAIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-green"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.1c-.24.68-1.42 1.3-1.96 1.35-.5.05-.98.23-3.35-.7-2.82-1.11-4.6-3.99-4.74-4.18-.14-.19-1.13-1.5-1.13-2.87 0-1.36.72-2.03.97-2.31.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.24.58.8 2 .87 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.47-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.28.14.45.12.61-.07.17-.19.7-.82.89-1.1.19-.28.38-.23.63-.14.25.09 1.6.76 1.87.9.28.14.46.21.53.33.07.11.07.65-.17 1.33Z" />
            </svg>
            Scrie-mi pe WhatsApp
          </a>
        </>
      }
    />
  )
}
