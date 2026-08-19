import type { Metadata } from 'next'
import LegalPage, { LegalSection } from '@/components/LegalPage'
import { WHATSAPP_PLAIN, ANPC_SAL_URL, EU_SOL_URL } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Termeni și Condiții — Nextflow',
  description:
    'Termenii și condițiile de colaborare cu Nextflow: servicii, comenzi, plăți, termene, garanție și soluționarea litigiilor.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://nextflow.ro/termeni-si-conditii' },
}

const services = [
  'Agenți vocali AI',
  'Chatboți pentru website',
  'Automatizare CRM',
  'Automatizare social media',
  'Email & WhatsApp marketing',
  'Programare automată (calendar AI)',
  'Sisteme de follow-up automat',
  'Integrări și automatizări custom',
]

const steps = [
  'Consultație gratuită (30 min) — fără angajament',
  'Ofertă comercială personalizată, transmisă în scris',
  'Semnarea contractului de servicii',
  'Achitarea avansului conform contractului',
  'Implementare și livrare',
]

const sections: LegalSection[] = [
  {
    id: '1',
    title: 'Definiții și părți contractante',
    content: (
      <>
        <p>Acești Termeni și Condiții („T&amp;C”) guvernează relația contractuală dintre:</p>
        <div className="legal-grid">
          <div className="legal-box legal-box-accent">
            <strong style={{ color: 'var(--green)' }}>Prestatorul:</strong> Nextflow, agenție de
            automatizare AI, România — „Nextflow”, „noi”
          </div>
          <div className="legal-box">
            <strong>Clientul:</strong> orice persoană fizică sau juridică care comandă servicii
            Nextflow sau utilizează site-ul nextflow.ro — „Client”, „dumneavoastră”
          </div>
        </div>
        <p>
          Prin accesarea site-ului sau prin comandarea serviciilor, Clientul acceptă în totalitate
          acești Termeni. Dacă nu sunteți de acord, vă rugăm să nu utilizați serviciile noastre.
        </p>
      </>
    ),
  },
  {
    id: '2',
    title: 'Serviciile oferite',
    content: (
      <>
        <p>Nextflow oferă servicii de automatizare AI pentru afaceri, inclusiv:</p>
        <ul>
          {services.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Specificațiile exacte, livrabilele și termenele sunt definite în oferta comercială și/sau
          contractul semnat individual cu fiecare client.
        </p>
      </>
    ),
  },
  {
    id: '3',
    title: 'Comenzi, oferte și contracte',
    content: (
      <>
        <p>Procesul standard de colaborare:</p>
        <ol className="legal-steps">
          {steps.map((text, i) => (
            <li key={text}>
              <span className="num legal-step-n">{i + 1}</span>
              <span>{text}</span>
            </li>
          ))}
        </ol>
        <p>
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
          Prețurile sunt stabilite individual în funcție de complexitatea proiectului și sunt
          comunicate în oferta comercială scrisă. Consultația inițială este{' '}
          <strong style={{ color: 'var(--green)' }}>gratuită</strong> și nu implică niciun angajament.
        </p>
        <p>
          <strong>Modalitate de plată:</strong> avans conform contractului (de regulă 50%) la semnare,
          diferența la livrarea finală sau conform graficului de plăți agreat.
        </p>
        <p>
          <strong>Întârziere la plată:</strong> în cazul neplății la termen, Nextflow poate suspenda
          accesul la sisteme și poate aplica penalități de întârziere de <strong>0,1% pe zi</strong>{' '}
          din suma restantă.
        </p>
        <p>Prețurile pot fi modificate pentru contracte noi. Contractele în derulare nu sunt afectate.</p>
      </>
    ),
  },
  {
    id: '5',
    title: 'Termene de implementare',
    content: (
      <>
        <p>
          Termenele orientative sunt de <strong>2–6 săptămâni</strong>, în funcție de complexitatea
          proiectului. Termenele exacte sunt stabilite în contract.
        </p>
        <p>Termenele pot fi afectate de:</p>
        <ul>
          <li>Întârzieri în furnizarea informațiilor sau acceselor necesare de către Client</li>
          <li>Modificări ale specificațiilor agreate după începerea lucrărilor</li>
          <li>Evenimente de forță majoră</li>
        </ul>
        <p>Nextflow va comunica orice modificare de termen în timp util.</p>
      </>
    ),
  },
  {
    id: '6',
    title: 'Obligațiile clientului',
    content: (
      <>
        <p>Pentru buna desfășurare a proiectului, Clientul se obligă să:</p>
        <ul>
          <li>
            Furnizeze informațiile și accesele necesare (CRM, conturi social media etc.) în timp util
          </li>
          <li>Desemneze o persoană de contact responsabilă pentru proiect</li>
          <li>
            Valideze livrabilele în termenele stabilite (tăcerea mai mult de 5 zile lucrătoare =
            acceptare)
          </li>
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
          La finalizarea plății integrale, Clientul dobândește dreptul{' '}
          <strong>nelimitat de utilizare</strong> a sistemelor și automatizărilor livrate, pentru uz
          propriu.
        </p>
        <p>
          Nextflow păstrează dreptul de a folosi metodologiile generice, know-how-ul și componentele
          reutilizabile (fără date confidențiale ale Clientului) în activitatea sa viitoare.
        </p>
        <p>
          Clientul nu poate revinde sau sublicenția sistemele livrate fără acordul scris al Nextflow.
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
          Ambele părți se obligă să păstreze confidențialitatea tuturor informațiilor comerciale,
          tehnice și strategice ale celeilalte părți, atât pe durata colaborării, cât și{' '}
          <strong>2 ani</strong> după finalizarea contractului.
        </p>
        <p>
          La solicitarea Clientului, Nextflow poate semna un{' '}
          <strong style={{ color: 'var(--green)' }}>Acord de Nedivulgare (NDA)</strong> separat,
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
          Nextflow oferă o perioadă de garanție de <strong>30 de zile</strong> de la livrarea finală,
          pe durata căreia remedierea defectelor constatate este gratuită.
        </p>
        <p>
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
          Nextflow depune toate eforturile rezonabile pentru a livra servicii de calitate. Cu toate
          acestea:
        </p>
        <ul>
          <li>Nu garantăm rezultate comerciale specifice (de exemplu număr de clienți, creșteri de venit)</li>
          <li>Nu suntem responsabili pentru întreruperi ale platformelor terțe (Meta, Google, Zapier etc.)</li>
          <li>
            Răspunderea totală a Nextflow nu poate depăși <strong>valoarea contractului</strong> aferent
          </li>
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
          Oricare dintre părți poate rezilia contractul cu un preaviz scris de <strong>15 zile</strong>,
          cu condiția achitării tuturor serviciilor prestate până la data rezilierii.
        </p>
        <p>
          Nextflow poate rezilia imediat în caz de: neplată repetată, utilizare abuzivă a sistemelor
          sau comportament contrar eticii profesionale.
        </p>
        <p>
          Avansul nu este returnat dacă rezilierea intervine din culpa Clientului după începerea
          lucrărilor.
        </p>
      </>
    ),
  },
  {
    id: '12',
    title: 'Forță majoră',
    content: (
      <p>
        Niciuna dintre părți nu este răspunzătoare pentru neexecutarea obligațiilor cauzată de
        evenimente de forță majoră (calamități naturale, pandemii, atacuri cibernetice majore,
        perturbări ale infrastructurii internet, modificări legislative imprevizibile). Partea afectată
        va notifica cealaltă parte în maximum <strong>5 zile</strong> de la apariția evenimentului.
      </p>
    ),
  },
  {
    id: '13',
    title: 'Legislație aplicabilă și litigii',
    content: (
      <>
        <p>
          Acești Termeni sunt guvernați de <strong>legislația română</strong>.
        </p>
        <p>
          Orice litigiu va fi soluționat în primul rând pe cale{' '}
          <strong style={{ color: 'var(--green)' }}>amiabilă</strong>, prin negociere directă. În lipsa
          unui acord în 30 de zile, competența aparține instanțelor judecătorești competente de la
          sediul Prestatorului.
        </p>
        <p>
          Consumatorii se pot adresa și platformelor de soluționare a litigiilor:{' '}
          <a href={ANPC_SAL_URL} target="_blank" rel="noopener noreferrer">
            ANPC — SAL
          </a>{' '}
          sau{' '}
          <a href={EU_SOL_URL} target="_blank" rel="noopener noreferrer">
            platforma europeană SOL
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: '14',
    title: 'Modificarea termenilor',
    content: (
      <p>
        Nextflow poate modifica acești Termeni cu un preaviz de <strong>15 zile</strong>, publicat pe
        site. Continuarea utilizării serviciilor după această perioadă constituie acceptarea noilor
        termeni. Data ultimei actualizări este afișată în antetul acestei pagini.
      </p>
    ),
  },
]

export default function TermeniSiConditii() {
  return (
    <LegalPage
      eyebrow="Document legal"
      titleTop="Termeni"
      titleAccent="și condiții"
      updated="Iunie 2026"
      standard="Guvernate de legislația română"
      sections={sections}
      footerNote={
        <>
          <h2 className="display d-sm mb-3" style={{ color: 'var(--bone)' }}>
            Ceva neclar înainte să semnăm?
          </h2>
          <p className="mb-7 text-[0.9375rem] leading-relaxed" style={{ color: 'var(--bone-46)' }}>
            Întreabă înainte, nu după. Răspund personal la orice nelămurire legată de termeni.
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
