import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import SolutionSection from '@/components/SolutionSection'
import MetricsSection from '@/components/MetricsSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Servicii — NextFlow | Automatizare AI România',
  description: 'Agenți vocali AI, chatboți inteligenți, automatizare CRM și sisteme de follow-up pentru afacerile românești.',
}

export default function ServiciiPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <SolutionSection />
        <MetricsSection />
      </div>
      <Footer />
    </main>
  )
}
