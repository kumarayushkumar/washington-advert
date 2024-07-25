import { useRef } from 'react'

import Footer from '@/components/Footer'
import Hero from '@/components/home/Hero'
import HomeOverview from '@/components/home/HomeOverview'
import LetsTalk from '@/components/home/LetsTalk'
import Expertise from '@/components/home/Expertise'
import Stats from '@/components/home/Stats'
import SeoAudit from '@/components/home/SeoAudit'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Ranking from '@/components/home/Ranking'

export default function Home() {
  const expertiseRef = useRef(null)
  return (
    <>
      <Hero expertiseRef={expertiseRef} />
      <HomeOverview />
      <Stats />
      <WhyChooseUs />
      <Expertise expertiseRef={expertiseRef} />
      <Ranking />
      <SeoAudit />
      <LetsTalk />
      <Footer />
    </>
  )
}
