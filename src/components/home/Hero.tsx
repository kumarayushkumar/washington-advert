import { useState } from 'react'
import Header from '../Header'
import { Button } from '../ui/button'

export default function Hero() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleZIndex = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <div className="hero-wrapper ">
      <div className={`header-wrapper ${!isNavOpen ? 'z-20' : ''}`}>
        <Header toggleZIndex={toggleZIndex} />
      </div>
      <div
        className={`hero text-whiteout mt-16 lg:pt-24 container ${!isNavOpen ? 'z-20' : ''}`}>
        <div className="md:px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="text-3xl sm:text-4xl xl:text-7xl font-medium sm:font-semibold md:font-bold ">
            <p className="">Digital Marketing</p>
            <p className="mt-2 sm:mt-3">That Drives Your Business</p>
          </div>
          <p className="mt-6 sm:mt-10 md:mt-12 sm:text-xl font-highlight">
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
