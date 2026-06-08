import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicii Automatizare AI — NextFlow Agency România',
  description: 'Agent vocal AI, CRM automatizat, chatbot website, calendar smart, email marketing și social media AI pentru afaceri românești.',
  alternates: { canonical: 'https://nextflow.ro/servicii' },
  openGraph: {
    title: 'Servicii Automatizare AI — NextFlow Agency',
    description: 'Agent vocal AI, CRM automatizat, chatbot website, calendar smart și social media AI.',
    url: 'https://nextflow.ro/servicii',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
