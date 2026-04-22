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
  title: 'Nextflow.ai — Automatizează-ți afacerea. Crește fără haos.',
  description:
    'Construim sisteme AI care gestionează lead-urile, follow-up-urile și operațiunile tale automat. Oprește-te din a pierde clienți din cauza proceselor manuale.',
  keywords: 'automatizare AI, automatizare lead-uri, optimizare CRM, automatizare afaceri, follow-up automat',
  openGraph: {
    title: 'Nextflow.ai — Automatizează-ți afacerea. Crește fără haos.',
    description:
      'Construim sisteme AI care gestionează lead-urile, follow-up-urile și operațiunile tale automat.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextflow.ai — Automatizează-ți afacerea. Crește fără haos.',
    description:
      'Construim sisteme AI care gestionează lead-urile, follow-up-urile și operațiunile tale automat.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
