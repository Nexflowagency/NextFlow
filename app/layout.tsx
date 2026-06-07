import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'NextFlow — Agenție Automatizare AI România | Agenți Vocali, CRM, Chatboți',
  description:
    'NextFlow este agenția de automatizare AI din România. Construim agenți vocali AI, chatboți inteligenți și automatizări CRM care funcționează 24/7. Consultație gratuită.',
  keywords: 'automatizare AI Romania, agentie AI Romania, agent vocal AI, chatbot website, CRM automatizat, automatizare afaceri Romania, inteligenta artificiala Romania',
  alternates: {
    canonical: 'https://nextflow.ro',
  },
  openGraph: {
    title: 'NextFlow — Agenție Automatizare AI România',
    description:
      'Construim agenți vocali AI, chatboți inteligenți și automatizări CRM pentru afaceri din România. Funcționare 24/7.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://nextflow.ro',
    siteName: 'NextFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextFlow — Agenție Automatizare AI România',
    description:
      'Construim agenți vocali AI, chatboți inteligenți și automatizări CRM pentru afaceri din România.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://nextflow.ro/#organization',
      name: 'NextFlow',
      url: 'https://nextflow.ro',
      logo: 'https://nextflow.ro/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+40-767-422-497',
        contactType: 'customer service',
        availableLanguage: 'Romanian',
      },
      sameAs: [
        'https://www.instagram.com/nextflow_agency.ai/',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://nextflow.ro/#business',
      name: 'NextFlow — Agenție Automatizare AI',
      description: 'Agenție de automatizare AI din România. Construim agenți vocali AI, chatboți, și automatizări CRM.',
      url: 'https://nextflow.ro',
      telephone: '+40-767-422-497',
      email: 'hello@nextflow.ro',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'RO',
      },
      priceRange: '$$',
      openingHours: 'Mo-Fr 09:00-18:00',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicii Automatizare AI',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agent Vocal AI' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chatbot Website' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Automatizat' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media AI' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email & WhatsApp Marketing' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://nextflow.ro/#website',
      url: 'https://nextflow.ro',
      name: 'NextFlow',
      publisher: { '@id': 'https://nextflow.ro/#organization' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
