import Hero from '@/components/homepage/Hero'
import About from '@/components/homepage/About'
import Projects from '@/components/homepage/Project'
import Services from '@/components/homepage/Services'
import Logos from '@/components/homepage/Logos'
import { Video } from '@/components/homepage/Video'
import CTA from '@/components/homepage/CTA'

export default function page() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Logos />
      <Video />
      <CTA />
    </>
  )
}
