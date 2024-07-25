import React from 'react'

import services1 from '/assets/images/services/home/services-1.webp'
import services2 from '/assets/images/services/home/services-2.webp'
import services3 from '/assets/images/services/home/services-3.webp'
import services4 from '/assets/images/services/home/services-4.webp'
import services5 from '/assets/images/services/home/services-5.webp'
import services6 from '/assets/images/services/home/services-6.webp'
import ServiceCard from '../card/ServiceCard'

const services = [
  {
    title: 'Web Designing',
    description:
      'Craft stunning, user-friendly websites that captivate and convert.',
    image: services1,
    buttonText: 'Know More',
    link: '/services/web-designing'
  },
  {
    title: 'Pay Per Click',
    description:
      'Maximize your ROI with expertly managed pay-per-click campaigns that deliver results.',
    image: services2,
    buttonText: 'Know More',
    link: '/services/ppc'
  },
  {
    title: 'SEO',
    description:
      'Enhance your online presence with comprehensive SEO strategies that improve search rankings.',
    image: services4,
    buttonText: 'Know More',
    link: '/services/seo'
  },
  {
    title: 'Social Media Marketing',
    description:
      'Elevate your brand with tailored social media strategies that drive engagement and growth.',
    image: services3,
    buttonText: 'Know More',
    link: '/services/social-media-marketing'
  },
  {
    title: 'Local SEO',
    description:
      'Boost your local visibility with targeted SEO techniques that drive local traffic.',
    image: services5,
    buttonText: 'Know More',
    link: '/services/local-seo'
  },
  {
    title: 'Google My Business',
    description:
      'Optimize your Google My Business profile to attract and convert local customers effectively.',
    image: services6,
    buttonText: 'Know More',
    link: '/services/gmb'
  }
]

export default function Expertise({
  expertiseRef
}: {
  expertiseRef: React.RefObject<HTMLElement>
}) {
  return (
    <section
      id="services"
      ref={expertiseRef}
      className="md:px-10 text-whiteout py-10 md:py-14 ">
      <div className="relative z-10 container">
        <div className="text-center text-3xl sm:text-4xl md:text-5xl font-medium sm:font-semibold text-whiteout">
          Our Expertise
        </div>
        <div className="pb-8 md:pt-10 md:pb-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              className="shadow-md bg-white"
              index={index}
              title={service.title}
              description={service.description}
              image={service.image}
              buttonText={service.buttonText}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
