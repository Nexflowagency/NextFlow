import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import Services from '@/components/Services'
import Marquee from '@/components/Marquee'

export const metadata: Metadata = {
  title: 'Ce facem — site-uri și roboți pentru afaceri locale | Nextflow',
  description:
    'Site care aduce clienți, robot care răspunde pe chat, agent vocal la telefon, calendar care se completează singur și o listă cu toți clienții tăi. Explicat pe înțelesul tuturor.',
  alternates: { canonical: 'https://nextflow.ro/servicii' },
  openGraph: {
    title: 'Ce facem — site-uri și roboți pentru afaceri locale',
    description:
      'Cele cinci lucruri pe care le pun să lucreze în locul tău: site, chat, telefon, calendar și evidența clienților.',
    url: 'https://nextflow.ro/servicii',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function ServiciiPage() {
  return (
    <PageShell
      href="/servicii"
      eyebrow="Ce facem, pe scurt"
      titleTop="Pun roboți să facă"
      titleAccent="munca plictisitoare."
      lede="Tu faci ce știi tu să faci. Mesajele, telefoanele, programările și aducerile aminte le ia sistemul."
      facts={[
        { k: 'Servicii', v: '5' },
        { k: 'Prima discuție', v: 'Gratuită' },
        { k: 'Implementare', v: '2–6 săptămâni' },
      ]}
    >
      <Services hideHeader />
      <Marquee />
    </PageShell>
  )
}
