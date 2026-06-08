import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact — NextFlow | Automatizare AI România',
  description: 'Programează un apel strategic gratuit de 30 de minute. Îți vom arăta exact cum poți automatiza afacerea ta.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <FinalCTA />
      </div>
      <Footer />
    </main>
  )
}
