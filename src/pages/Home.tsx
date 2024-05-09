import Footer from '@/components/Footer'
import Hero from '@/components/home/Hero'
import HomeOverview from '@/components/home/HomeOverview'
import LetsTalk from '@/components/home/LetsTalk'
import Expertise from '@/components/home/Expertise'
import Stats from '@/components/home/Stats'
import SeoAudit from '@/components/home/SeoAudit'
import WhyChooseUs from '@/components/home/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeOverview />
      <Stats />
      {/* <Client /> */}
      <WhyChooseUs />
      <Expertise />
      <SeoAudit />
      <LetsTalk />
      <Footer />
    </>
  )
}
