import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import ContactSection from '@/components/ContactSection'
import { PHONE_DISPLAY } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Contact — hai să vorbim despre afacerea ta | Nextflow',
  description: `Scrie-mi pe WhatsApp, sună la ${PHONE_DISPLAY} sau completează formularul. Prima discuție durează o jumătate de oră, e gratuită și nu te obligă la nimic.`,
  alternates: { canonical: 'https://nextflow.ro/contact' },
  openGraph: {
    title: 'Contact — hai să vorbim despre afacerea ta',
    description:
      'WhatsApp, telefon sau formular. Prima discuție e gratuită și nu te obligă la nimic.',
    url: 'https://nextflow.ro/contact',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function ContactPage() {
  return (
    <PageShell
      href="/contact"
      eyebrow="Hai să vorbim"
      titleTop="Spune-mi unde"
      titleAccent="te doare."
      lede="Nu-ți vând nimic la prima discuție. Îmi spui cum lucrezi acum, îți zic ce s-ar putea automatiza și cât ar costa. De acolo decizi tu."
      facts={[
        { k: 'Prima discuție', v: 'Gratuită' },
        { k: 'Durează', v: '30 min' },
        { k: 'Te obligă la', v: 'Nimic' },
      ]}
      cta={false}
    >
      <ContactSection />
    </PageShell>
  )
}
