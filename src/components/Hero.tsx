import Header from './Header'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <div className="hero-wrapper px-16">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="hero text-whiteout mt-16 pt-16 px-16 mx-10">
        <div className="text-7xl font-bold">
          <p className="">Digital Marketing</p>
          <p className="mt-3">That Drives Your Business</p>
        </div>
        <p className="mt-10 text-2xl">
          Get Started Today, Supercharge Your Digital Presence.
        </p>
        <div className="mt-6 flex gap-6">
          <Button className="border-2 text-lg border-white py-6 px-6 rounded-none bg-transparent font-semibold">
            Get Started
          </Button>
          <Button className="border-2 border-secondary text-lg text-white bg-secondary py-6 px-6 rounded-none font-semibold">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}
