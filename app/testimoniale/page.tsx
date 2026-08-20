import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Păreri de la cliente — filmări și mesaje reale | Nextflow',
  description:
    'Diana de la Dermiq și Doina de la Esthea povestesc cum le-a schimbat treaba. Plus mesajele primite pe WhatsApp de la Larisa, Elena și Maria, exact așa cum au venit.',
  alternates: { canonical: 'https://nextflow.ro/testimoniale' },
  openGraph: {
    title: 'Păreri de la cliente — filmări și mesaje reale',
    description:
      'Filmări și mesaje de la cliente, exact așa cum le-am primit. Apasă play și le auzi direct.',
    url: 'https://nextflow.ro/testimoniale',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function TestimonialePage() {
  return (
    <PageShell
      href="/testimoniale"
      eyebrow="Păreri de la cliente"
      titleTop="Nu mă crede pe cuvânt."
      titleAccent="Ascultă-le pe ele."
      lede="Filmări și mesaje de la cliente, exact așa cum le-am primit. Apasă play și le auzi direct, cu vorbele lor."
    >
      <Testimonials hideHeader />
    </PageShell>
  )
}
