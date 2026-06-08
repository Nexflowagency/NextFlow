import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nextflow.ro'),
  title: 'NextFlow Agency — Automatizare AI pentru Afaceri | România',
  description:
    'Transformăm afacerile românești prin agenți vocali AI, automatizări CRM și chatboți inteligenți. 20+ clienți, 30+ automatizări livrate.',
  keywords: [
    'automatizare AI România',
    'agent vocal AI',
    'CRM automatizat',
    'chatbot website',
    'automatizare afaceri',
    'nextflow agency',
    'automatizare vanzari Romania',
    'calendar smart',
    'email marketing automatizat',
    'social media AI',
  ],
  authors: [{ name: 'NextFlow Agency' }],
  creator: 'NextFlow Agency',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://nextflow.ro',
  },
  openGraph: {
    title: 'NextFlow Agency — Automatizare AI pentru Afaceri | România',
    description:
      'Transformăm afacerile românești prin agenți vocali AI, automatizări CRM și chatboți inteligenți.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://nextflow.ro',
    siteName: 'NextFlow Agency',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'NextFlow Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextFlow Agency — Automatizare AI pentru Afaceri | România',
    description:
      'Transformăm afacerile românești prin agenți vocali AI, automatizări CRM și chatboți inteligenți.',
    images: ['/opengraph-image'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'NextFlow Agency',
  description:
    'Agenție de automatizare AI pentru afaceri din România. Agenți vocali, CRM automatizat, chatboți inteligenți.',
  url: 'https://nextflow.ro',
  sameAs: [
    'https://www.instagram.com/nextflow_agency.ai/',
    'https://wa.me/40767422497',
  ],
  telephone: '+40767422497',
  email: 'hello@nextflow.ro',
  areaServed: 'RO',
  inLanguage: 'ro',
  serviceType: 'Automatizare AI, Agent Vocal, CRM, Chatbot, Social Media AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
