import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import ImpactSection from '@/components/ImpactSection'
import ProblemSection from '@/components/ProblemSection'

export const metadata: Metadata = {
  title: 'Cât câștigi — calculator de timp și bani | Nextflow',
  description:
    'Mută două cursoare și vezi câte ore pe lună și cât ban stau blocate în mesaje, apeluri și programări făcute manual. Estimare orientativă, cu ipotezele la vedere.',
  alternates: { canonical: 'https://nextflow.ro/cat-castigi' },
  openGraph: {
    title: 'Cât câștigi — calculator de timp și bani',
    description:
      'Cursorul din stânga e volumul tău de mesaje, cel din dreapta cât îți lasă un client. Restul îl calculează pagina.',
    url: 'https://nextflow.ro/cat-castigi',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function CatCastigiPage() {
  return (
    <PageShell
      href="/cat-castigi"
      eyebrow="Cât te costă, de fapt"
      titleTop="Mută cursoarele."
      titleAccent="Vezi ce pierzi."
      lede="Cursorul din stânga e volumul tău de mesaje. Cel din dreapta, cât îți lasă un client. Restul îl calculează pagina."
      facts={[
        { k: 'Întrebări', v: '2' },
        { k: 'Durează', v: '10 secunde' },
        { k: 'Tip cifre', v: 'Estimare' },
      ]}
    >
      <ImpactSection hideHeader />
      <ProblemSection />
    </PageShell>
  )
}
