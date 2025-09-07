import React from 'react'
import AboutHero from '@/components/aboutpage/AboutHero'
import Parallax from '@/components/aboutpage/Parallax'
import Logos from '@/components/aboutpage/Logos'
import AboutContent from '@/components/aboutpage/AboutContent'
import AwardsSection from '@/components/aboutpage/Awards'
import CTA from '@/components/homepage/CTA'

export default function page() {
  return (
    <>
      <AboutHero />
      <Parallax />
      <Logos />
      <AboutContent />
      <AwardsSection />
      <CTA />
    </>
  )
}
