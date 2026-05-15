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
  metadataBase: new URL('https://nextflow-agency.netlify.app'),
  title: 'Nextflow.ai — Automatizare AI pentru afaceri din România',
  description:
    'Construim sisteme AI care gestionează lead-urile, follow-up-ul și operațiunile tale — automat. Câștigă timp, clienți și control. Consultație gratuită.',
  keywords: [
    'automatizare AI România',
    'sisteme AI afaceri',
    'automatizare lead-uri',
    'CRM automat',
    'follow-up automat',
    'agentie automatizare',
    'nextflow ai',
    'automatizare vanzari',
    'software automatizare Romania',
  ],
  authors: [{ name: 'Nextflow.ai' }],
  creator: 'Nextflow.ai',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://nextflow-agency.netlify.app',
  },
  openGraph: {
    title: 'Nextflow.ai — Automatizare AI pentru afaceri din România',
    description:
      'Sisteme AI care lucrează în locul tău: lead-uri, follow-up, CRM — automat. Consultație gratuită.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://nextflow-agency.netlify.app',
    siteName: 'Nextflow.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextflow.ai — Automatizare AI pentru afaceri din România',
    description:
      'Sisteme AI care lucrează în locul tău: lead-uri, follow-up, CRM — automat.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0B0B',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nextflow.ai',
  description: 'Agenție de automatizare AI pentru afaceri din România.',
  url: 'https://nextflow-agency.netlify.app',
  sameAs: ['https://www.instagram.com/nextflow_agency.ai/'],
  areaServed: 'RO',
  inLanguage: 'ro',
  serviceType: 'Automatizare AI, CRM, Lead Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={inter.variable}>
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
