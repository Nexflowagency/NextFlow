import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimoniale Clienți — NextFlow Agency România',
  description: 'Citește poveștile de succes ale clienților NextFlow. Restaurante, clinici, agenții imobiliare care au automatizat cu AI și au crescut vânzările.',
  alternates: { canonical: 'https://nextflow.ro/testimoniale' },
  openGraph: {
    title: 'Testimoniale Clienți — NextFlow Agency',
    description: 'Poveștile de succes ale afacerilor românești care au automatizat cu AI.',
    url: 'https://nextflow.ro/testimoniale',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
