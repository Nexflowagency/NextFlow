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
      'Două întrebări despre afacerea ta și vezi pe loc ce pierzi în munca pe care o poate face un robot.',
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
      lede="Două întrebări despre afacerea ta. Vezi pe loc cât timp și cât ban stau blocate în muncă pe care o poate face un robot."
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
