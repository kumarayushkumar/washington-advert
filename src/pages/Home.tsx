import Footer from '@/components/Footer'
import Client from '@/components/home/Client'
import Hero from '@/components/home/Hero'
import HomeOverview from '@/components/home/HomeOverview'
import LetsTalk from '@/components/home/LetsTalk'
import Expertise from '@/components/home/Expertise'
import Review from '@/components/home/Review'
import Stats from '@/components/home/Stats'
import SeoAudit from '@/components/home/SeoAudit'
import WhyChooseUs from '@/components/home/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeOverview />
      <Stats />
      <SeoAudit />
      <Client />
      <WhyChooseUs />
      <Expertise />
      <Review />
      <LetsTalk />
      <Footer />
    </>
  )
}
