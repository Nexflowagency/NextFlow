// ─────────────────────────────────────────────────────────────
// Conținutul paginilor de prezentare pentru postările de Instagram.
//
// Ca să adaugi o postare nouă: copiază un obiect din listă,
// schimbă `slug` (apare în URL: nextflow.ro/reels/<slug>/) și textele.
// Pagina se generează automat, nu trebuie atinsă altă parte din cod.
// ─────────────────────────────────────────────────────────────

export type ReelPoint = {
  title: string
  body: string
}

export type Reel = {
  /** Ultima parte din URL: /reels/<slug>/ */
  slug: string
  /** Link-ul postării de pe Instagram */
  url: string
  /** Data postării, ISO — folosită pentru sortare și Schema.org */
  date: string
  /** Data afișată pe pagină */
  dateLabel: string
  /** Eticheta mică de deasupra titlului */
  eyebrow: string
  /** Titlul mare — ideea centrală din clip */
  title: string
  /** Partea din titlu colorată cu verde */
  titleAccent: string
  /** Paragraful de introducere */
  lead: string
  /** Ideile din clip, una câte una */
  points: ReelPoint[]
  /** Caption-ul original de pe Instagram */
  caption: string
  /** Întrebarea / provocarea lăsată la final */
  question: string
  ctaTitle: string
  ctaBody: string
  /** Cuvântul-cheie de trimis în DM, dacă postarea are unul */
  keyword?: string
  metaTitle: string
  metaDescription: string
}

export const reels: Reel[] = [
  {
    slug: 'consultatie-gratuita-ai',
    url: 'https://www.instagram.com/reel/DbYMC37tJUH/',
    date: '2026-07-29',
    dateLabel: '29 iulie 2026',
    eyebrow: 'Consultație gratuită',
    title: 'Scrie NXT și afli exact unde te ajută ',
    titleAccent: 'AI-ul în afacerea ta.',
    lead: 'În 30 de minute mapăm procesele care îți mănâncă timpul și îți arătăm concret ce se poate automatiza. Fără prezentare de vânzare, fără jargon tehnic.',
    points: [
      {
        title: 'Ne uităm la fluxul tău real',
        body: 'Cum intră lead-urile, cine răspunde, în cât timp și unde se pierd. Nu teorie de pe internet — procesele tale, așa cum funcționează azi.',
      },
      {
        title: 'Stabilim ce se automatizează primul',
        body: 'Nu tot deodată. Doar ce îți aduce timp și bani înapoi cel mai repede: follow-up-ul, confirmările, preluarea apelurilor, calificarea lead-urilor.',
      },
      {
        title: 'Pleci cu un plan, nu cu o ofertă',
        body: 'Primești pașii concreți, ordinea lor și estimarea de timp. Îl implementezi cu noi sau pe cont propriu — planul rămâne al tău.',
      },
    ],
    caption:
      'Scrie ,,NXT,, în comentarii și îți oferim o consultație gratuită pentru a vedea cum te poate ajuta AI-ul în afacerea ta ✅',
    question: 'Care e procesul care îți mănâncă cel mai mult timp săptămâna asta?',
    ctaTitle: 'Vrei consultația?',
    ctaBody:
      'Scrie NXT în comentarii la reel sau direct în DM. Dacă preferi să sari peste pași, programează direct un call de 30 de minute.',
    keyword: 'NXT',
    metaTitle: 'Consultație gratuită AI — Scrie NXT | Nextflow.ai',
    metaDescription:
      'În 30 de minute mapăm procesele care îți consumă timpul și îți arătăm concret ce poți automatiza în afacerea ta. Consultație gratuită, fără obligații.',
  },
  {
    slug: 'ai-nu-e-un-moft',
    url: 'https://www.instagram.com/reel/DbSsgNwNzC9/',
    date: '2026-07-27',
    dateLabel: '27 iulie 2026',
    eyebrow: 'Adopția AI în business',
    title: 'AI-ul nu e un moft. ',
    titleAccent: 'E infrastructură.',
    lead: 'Companiile care l-au adoptat nu au devenit mai „tech”. Au devenit mai rapide. Iar viteza de răspuns e, de cele mai multe ori, singurul lucru care decide cine ia clientul.',
    points: [
      {
        title: 'Lead-ul se răcește în minute, nu în zile',
        body: 'Un om care întreabă la 22:30 și primește răspuns a doua zi la 10:00 e deja clientul altcuiva. Un sistem AI răspunde în secunda doi, la orice oră.',
      },
      {
        title: 'Nu înlocuiește oameni. Le ia munca moartă.',
        body: 'Confirmări, remindere, calificare, introducerea datelor în CRM. Echipa ta rămâne pe ce contează cu adevărat: vânzarea și relația cu clientul.',
      },
      {
        title: 'Costul nu e implementarea. E întârzierea.',
        body: 'Fiecare lună fără sistem înseamnă un număr de lead-uri pierdute care nu apare în niciun raport. Nu le vezi tocmai pentru că nu au ajuns niciodată la tine.',
      },
    ],
    caption:
      'AI-ul nu este un moft! Din ce în ce mai multe companii îl adoptă pentru a lucra alături pentru ele. 📌 Scrie în comentarii câte lead-uri crezi că vei pierde în următorii 2 ani dacă nu implementezi AI-ul în afacerea ta.',
    question:
      'Câte lead-uri crezi că pierzi în următorii 2 ani dacă nu implementezi AI-ul în afacerea ta?',
    ctaTitle: 'Vrei să afli numărul exact?',
    ctaBody:
      'Îl calculăm împreună, pe cifrele tale, într-un call de 30 de minute. Fără presiune și fără prezentare de vânzare.',
    metaTitle: 'AI-ul nu e un moft, e infrastructură | Nextflow.ai',
    metaDescription:
      'De ce companiile care adoptă AI nu devin mai „tech”, ci mai rapide — și cât te costă, în lead-uri, fiecare lună de întârziere.',
  },
]

export const reelsByDate = [...reels].sort((a, b) => b.date.localeCompare(a.date))

export function getReel(slug: string): Reel | undefined {
  return reels.find((reel) => reel.slug === slug)
}
