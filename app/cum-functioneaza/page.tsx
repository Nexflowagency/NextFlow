import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import HowItWorks from '@/components/HowItWorks'

export const metadata: Metadata = {
  title: 'Cum funcționează — trei pași, fără bătăi de cap | Nextflow',
  description:
    'Discutăm o jumătate de oră și îți arăt unde pierzi timp. Construiesc eu tot, în 2–6 săptămâni. Apoi sistemul merge singur, iar eu stau cu ochii pe el.',
  alternates: { canonical: 'https://nextflow.ro/cum-functioneaza' },
  openGraph: {
    title: 'Cum funcționează — trei pași, fără bătăi de cap',
    description:
      'De la prima discuție gratuită până la sistemul care merge singur. Nu-ți trebuie cunoștințe tehnice.',
    url: 'https://nextflow.ro/cum-functioneaza',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function CumFunctioneazaPage() {
  return (
    <PageShell
      href="/cum-functioneaza"
      eyebrow="Cum funcționează"
      titleTop="Trei pași."
      titleAccent="Fără bătăi de cap."
      lede="Nu-ți trebuie cunoștințe tehnice și nu schimbi nimic din ce folosești deja. Îmi dai acces la ce ai, iar restul îl fac eu."
      facts={[
        { k: 'Prima discuție', v: '30 min, gratuit' },
        { k: 'Implementare', v: '2–6 săptămâni' },
        { k: 'Garanție', v: '30 de zile' },
      ]}
    >
      <HowItWorks hideHeader />
    </PageShell>
  )
}
