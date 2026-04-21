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
  title: 'Nextflow.ai — Automate your business. Scale without chaos.',
  description:
    'We build AI automation systems that handle your leads, follow-ups, and operations automatically. Stop losing clients to manual processes.',
  keywords: 'AI automation, lead automation, CRM optimization, business automation, follow-up automation',
  openGraph: {
    title: 'Nextflow.ai — Automate your business. Scale without chaos.',
    description:
      'We build AI systems that handle your leads, follow-ups, and operations automatically.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextflow.ai — Automate your business. Scale without chaos.',
    description:
      'We build AI systems that handle your leads, follow-ups, and operations automatically.',
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
