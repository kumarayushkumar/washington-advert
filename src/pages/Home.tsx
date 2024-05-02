import Footer from '@/components/Footer'
import Client from '@/components/home/Client'
import Hero from '@/components/home/Hero'
import HomeOverview from '@/components/home/HomeOverview'
import LetsTalk from '@/components/home/LetsTalk'
import Expertise from '@/components/home/Expertise'
import Testimonial from '@/components/home/Testimonial'
import Stats from '@/components/home/Stats'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeOverview />
      <Stats />
      <Client />
      <Expertise />
      <Testimonial />
      <LetsTalk />
      <Footer />
    </>
  )
}
