import Header from '../Header'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <div className="hero-wrapper ">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="hero text-whiteout mt-16 lg:pt-24 container">
        <div className="md:px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="text-4xl xl:text-7xl font-bold ">
            <p className="">Digital Marketing</p>
            <p className="mt-3">That Drives Your Business</p>
          </div>
          <p className="mt-8 md:mt-12 text-xl font-highlight">
            Get Started Today, Supercharge Your Digital Presence.
          </p>
          <div className="mt-6 md:mt-8 flex gap-6">
            <Button variant={'outline'}>Get Started</Button>
            <Button variant={'primary'}>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
