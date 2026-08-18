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
    'Îți construim site-ul și punem roboți să răspundă clienților, să-i programeze și să-ți țină totul organizat, non-stop. Pentru saloane, clinici și afaceri locale din România.',
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
      'Îți construim site-ul și punem roboți să răspundă clienților, să-i programeze și să-ți țină totul organizat, non-stop.',
    url: 'https://nextflow.ro',
    siteName: 'Nextflow.ai',
    type: 'website',
    locale: 'ro_RO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextflow.ai — Site-uri și roboți care îți aduc clienți',
    description:
      'Îți construim site-ul și punem roboți să răspundă clienților, să-i programeze și să-ți țină totul organizat, non-stop.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0908',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nextflow.ai',
  url: 'https://nextflow.ro',
  description:
    'Site-uri premium și automatizări AI pentru saloane, clinici și afaceri locale din România.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+40-767-422-497',
    contactType: 'customer service',
    areaServed: 'RO',
    availableLanguage: 'Romanian',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RO',
  },
  sameAs: ['https://www.instagram.com/nextflow_agency.ai'],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
