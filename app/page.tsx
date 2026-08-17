'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import HowItWorks from '@/components/HowItWorks'
import MetricsSection from '@/components/MetricsSection'
import Testimonials from '@/components/Testimonials'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import CalendlyButton from '@/components/CalendlyButton'
import { useGlobalScrollReveal } from '@/hooks/useScrollReveal'

export default function Home() {
  useGlobalScrollReveal()

  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />

      {/* Problemă → soluție → proces (bloc deschis) → dovezi → decizie */}
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <MetricsSection />
      <Testimonials />
      <FinalCTA />
      <Footer />

      {/* Widget Calendly, injectat global */}
      <CalendlyButton />
    </main>
  )
}
