import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cum Funcționează — NextFlow | Automatizare AI România',
  description: 'Trei pași simpli de la primul apel la un sistem complet automatizat. Fără complicații tehnice.',
}

export default function CumFunctioneazaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HowItWorks />
      </div>
      <Footer />
    </main>
  )
}
