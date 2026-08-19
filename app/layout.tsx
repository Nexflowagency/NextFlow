import type { Metadata, Viewport } from 'next'
import { Fraunces, Schibsted_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Fraunces({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-display',
  axes: ['SOFT', 'WONK', 'opsz'],
})

const sans = Schibsted_Grotesk({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans',
})

const mono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nextflow.ro'),
  title: 'Nextflow.ai — Site-uri și roboți care îți aduc clienți',
  description:
    'Îți fac site-ul și pun roboți să răspundă clienților, să-i programeze și să țină evidența. Non-stop, pentru saloane, clinici și afaceri locale din România.',
  keywords:
    'creare site salon, automatizare AI Romania, chatbot programari, agent vocal AI, CRM automat, site cabinet estetic, web design Romania',
  alternates: {
    canonical: 'https://nextflow.ro',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Nextflow.ai — Site-uri și roboți care îți aduc clienți',
    description:
      'Îți fac site-ul și pun roboți să răspundă clienților, să-i programeze și să țină evidența. Non-stop.',
    url: 'https://nextflow.ro',
    siteName: 'Nextflow.ai',
    type: 'website',
    locale: 'ro_RO',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Nextflow.ai — site-uri și roboți care îți aduc clienți',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextflow.ai — Site-uri și roboți care îți aduc clienți',
    description:
      'Îți fac site-ul și pun roboți să răspundă clienților, să-i programeze și să țină evidența. Non-stop.',
    images: ['/og.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0908',
}

/* Date structurate. Deliberat fără aggregateRating: nu avem recenzii
   marcate ca atare, iar o notă inventată e exact genul de lucru pentru
   care Google penalizează. */
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://nextflow.ro/#organizatie',
      name: 'Nextflow.ai',
      url: 'https://nextflow.ro',
      image: 'https://nextflow.ro/og.jpg',
      logo: 'https://nextflow.ro/icon.svg',
      description:
        'Site-uri și automatizări AI care răspund clienților, îi programează și țin evidența, non-stop. Pentru saloane, clinici și afaceri locale din România.',
      telephone: '+40767422497',
      areaServed: { '@type': 'Country', name: 'România' },
      address: { '@type': 'PostalAddress', addressCountry: 'RO' },
      knowsLanguage: 'ro',
      sameAs: ['https://www.instagram.com/nextflow_agency.ai'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicii',
        itemListElement: [
          'Creare site de prezentare',
          'Chatbot pentru website',
          'Agent vocal care preia apelurile',
          'Programări automate în calendar',
          'CRM automatizat cu follow-up',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nextflow.ro/#site',
      url: 'https://nextflow.ro',
      name: 'Nextflow.ai',
      inLanguage: 'ro-RO',
      publisher: { '@id': 'https://nextflow.ro/#organizatie' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ro"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        {/* Fără JavaScript nu are cine revela titlurile și nu are cine
            derula lin — <noscript> readuce totul la comportamentul nativ,
            fără să atingă <html>, care e randat de React. */}
        <noscript>
          <style>{`
            .word > span { transform: none !important; }
            html { scroll-behavior: smooth; }
            .marquee-track-js { animation: slide 42s linear infinite; }
          `}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {children}
        {/* Peliculă de grain peste tot documentul */}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  )
}
