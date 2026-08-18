'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ProblemSection from '@/components/ProblemSection'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import ImpactSection from '@/components/ImpactSection'
import Testimonials from '@/components/Testimonials'
import Portfolio from '@/components/Portfolio'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import Cursor from '@/components/Cursor'
import Magnetic from '@/components/Magnetic'
import Intro from '@/components/Intro'
import { useGlobalScrollReveal } from '@/hooks/useScrollReveal'

export default function Home() {
  useGlobalScrollReveal()

  return (
    <>
      {/* Stratul de mișcare — nu randează nimic vizibil în afară de cursor */}
      <SmoothScroll />
      <Cursor />
      <Magnetic />
      <Intro />

      <main>
        <Navbar />
        <Hero />
        <Marquee />

        {/* Problema → ce facem → cum → cât câștigi → dovezi → decizie */}
        <ProblemSection />
        <Services />
        <HowItWorks />
        <ImpactSection />
        <Testimonials />
        <Portfolio />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
