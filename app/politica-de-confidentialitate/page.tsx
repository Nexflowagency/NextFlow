import type { Metadata } from 'next'
import LegalPage, { LegalSection } from '@/components/LegalPage'
import { EMAIL, PHONE_DISPLAY, PHONE_E164 } from '@/lib/contact'

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
          Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <br />
          Telefon: <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
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
          Exercitați-vă drepturile scriind la <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Răspundem în
          maximum <strong>30 de zile</strong>. Aveți de asemenea dreptul de a depune o plângere la{' '}
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
          <a href={`mailto:${EMAIL}`} className="btn btn-green">
            {EMAIL}
          </a>
        </>
      }
    />
  )
}
