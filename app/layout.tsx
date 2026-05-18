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
          metadataBase: new URL('https://nextflow.ro'),
            title: 'Nextflow.ai — Automatizează-ți afacerea. Crește fără haos.',
              description:
                  'Construim sisteme AI care gestionează lead-urile, follow-up-urile și operațiunile tale automat. Oprește-te din a pierde clienți din cauza proceselor manuale.',
                    keywords: 'automatizare AI, automatizare afaceri, automatizare lead-uri, CRM automat, follow-up automat, agenti AI Romania',
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
                                                                                    title: 'Nextflow.ai — Automatizează-ți afacerea. Crește fără haos.',
                                                                                        description:
                                                                                              'Construim sisteme AI care gestionează lead-urile, follow-up-urile și operațiunile tale automat.',
                                                                                                  url: 'https://nextflow.ro',
                                                                                                      siteName: 'Nextflow.ai',
                                                                                                          type: 'website',
                                                                                                              locale: 'ro_RO',
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
                                                                                                                                            themeColor: '#0B0B0B',
                                                                                                                                            }

                                                                                                                                            const organizationSchema = {
                                                                                                                                              '@context': 'https://schema.org',
                                                                                                                                                '@type': 'Organization',
                                                                                                                                                  name: 'Nextflow.ai',
                                                                                                                                                    url: 'https://nextflow.ro',
                                                                                                                                                      description: 'Construim sisteme AI care automatizează lead-urile, follow-up-urile și operațiunile afacerii tale.',
                                                                                                                                                        contactPoint: {
                                                                                                                                                            '@type': 'ContactPoint',
                                                                                                                                                                telephone: '+40-767-422-497',
                                                                                                                                                                    contactType: 'customer service',
                                                                                                                                                                        areaServed: 'RO',
                                                                                                                                                                            availableLanguage: 'Romanian',
                                                                                                                                                                                email: 'hello@nextflow.ai',
                                                                                                                                                                                  },
                                                                                                                                                                                    address: {
                                                                                                                                                                                        '@type': 'PostalAddress',
                                                                                                                                                                                            addressCountry: 'RO',
                                                                                                                                                                                              },
                                                                                                                                                                                                sameAs: [
                                                                                                                                                                                                    'https://www.instagram.com/nextflow_agency.ai',
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
                                                                                                                                                                                                                                                  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                                                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                                                </head>
                                                                                                                                                                                                                                                                      <body className="antialiased">{children}</body>
                                                                                                                                                                                                                                                                          </html>
                                                                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                                                            }