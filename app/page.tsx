'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import HowItWorks from '@/components/HowItWorks'
import MetricsSection from '@/components/MetricsSection'
import Testimonials from '@/components/Testimonials'
import Portfolio from '@/components/Portfolio'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import { useGlobalScrollReveal } from '@/hooks/useScrollReveal'

export default function Home() {
  useGlobalScrollReveal()

  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />

      {/* Problemă → soluție → proces → dovezi → proiecte → decizie */}
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <MetricsSection />
      <Testimonials />
      <Portfolio />
      <FinalCTA />
      <Footer />
    </main>
  )
}
