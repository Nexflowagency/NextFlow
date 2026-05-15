'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import MetricsSection from '@/components/MetricsSection'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import FinalCTA from '@/components/FinalCTA'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import CalendlyButton from '@/components/CalendlyButton'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )

    const revealEls = document.querySelectorAll<HTMLElement>('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <MetricsSection />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <ContactSection />
      <Footer />
      {/* Calendly popup widget — injectat global */}
      <CalendlyButton />
    </main>
  )
}
