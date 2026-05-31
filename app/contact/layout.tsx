import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — NextFlow Agency | +40 767 422 497',
  description: 'Contactează NextFlow Agency pentru o consultanță gratuită. Telefon: +40 767 422 497. Răspundem în maxim 24 ore.',
  alternates: { canonical: 'https://nextflow.ro/contact' },
  openGraph: {
    title: 'Contact NextFlow Agency — Consultanță Gratuită',
    description: 'Programează o consultanță gratuită. Tel: +40 767 422 497.',
    url: 'https://nextflow.ro/contact',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
