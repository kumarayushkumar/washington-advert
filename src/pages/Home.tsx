import { lazy, useRef } from 'react'

const Hero = lazy(() => import('@/components/home/Hero'))
const HomeOverview = lazy(() => import('@/components/home/HomeOverview'))
const Stats = lazy(() => import('@/components/home/Stats'))
const WhyChooseUs = lazy(() => import('@/components/home/WhyChooseUs'))
const Expertise = lazy(() => import('@/components/home/Expertise'))
const SeoAudit = lazy(() => import('@/components/home/SeoAudit'))
const LetsTalk = lazy(() => import('@/components/home/LetsTalk'))
const Footer = lazy(() => import('@/components/Footer'))
const Ranking = lazy(() => import('@/components/home/Ranking'))

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
