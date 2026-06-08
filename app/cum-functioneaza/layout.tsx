import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cum Funcționează — NextFlow Agency România',
  description: 'Descoperă cum implementăm automatizări AI în 4 pași: consultanță, configurare, integrare și optimizare continuă pentru afacerea ta.',
  alternates: { canonical: 'https://nextflow.ro/cum-functioneaza' },
  openGraph: {
    title: 'Cum Funcționează — NextFlow Agency',
    description: 'Implementăm automatizări AI în 4 pași simpli pentru afacerea ta din România.',
    url: 'https://nextflow.ro/cum-functioneaza',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
