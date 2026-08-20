import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import Portfolio from '@/components/Portfolio'

export const metadata: Metadata = {
  title: 'Proiecte — site-uri livrate pentru saloane și cabinete | Nextflow',
  description:
    'Dermiq Bacău, Esthea, Prestige Beauty Salon Suceava și Contour Collective Cluj. Capturi cu pagina principală și link către varianta live a fiecăruia.',
  alternates: { canonical: 'https://nextflow.ro/proiecte' },
  openGraph: {
    title: 'Proiecte — site-uri livrate pentru saloane și cabinete',
    description:
      'Site-urile pe care le-am construit. Apasă pe oricare și îl vezi live, așa cum îl vede clientul tău.',
    url: 'https://nextflow.ro/proiecte',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function ProiectePage() {
  return (
    <PageShell
      href="/proiecte"
      eyebrow="Proiecte livrate"
      titleTop="Site-uri pe care"
      titleAccent="le-am construit."
      lede="Apasă pe oricare și îl vezi live, așa cum îl vede clientul tău. Nu capturi trucate, ci site-urile care rulează acum."
      facts={[
        { k: 'Site-uri live', v: '4' },
        { k: 'Domeniu', v: 'Beauty & estetică' },
        { k: 'Orașe', v: 'Bacău, Suceava, Cluj' },
      ]}
    >
      <Portfolio hideHeader />
    </PageShell>
  )
}
