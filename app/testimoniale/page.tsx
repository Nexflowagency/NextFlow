import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Testimoniale — NextFlow | Automatizare AI România',
  description: 'Afacerile care au ales să lucreze mai inteligent cu NextFlow. Rezultate reale de la clienți reali.',
}

export default function TestimonialeePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Testimonials />
      </div>
      <Footer />
    </main>
  )
}
