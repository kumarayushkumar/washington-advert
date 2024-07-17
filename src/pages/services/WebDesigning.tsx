import { Link } from 'react-router-dom'

import webDesigning from '/assets/images/services/web-designing.webp'
import PageHero from '@/components/PageHero'
import { Button } from '@/components/ui/button'

export function WebDesigning() {
  const webDesignServices = [
    {
      title: 'Responsive Web Design',
      description:
        'We create websites that are optimized for all devices, ensuring a seamless user experience across desktops, tablets, and smartphones.'
    },
    {
      title: 'Custom and Affordable Web Design',
      description:
        'Our web design services are tailored to your unique needs and budget, offering custom solutions that align with your brand identity.'
    },
    {
      title: 'E-Commerce Web Design',
      description:
        'We specialize in designing e-commerce websites that drive sales and conversions, with user-friendly interfaces and secure payment gateways.'
    },
    {
      title: 'Magento Web Design',
      description:
        'Our team of experts can design and develop custom Magento websites that are scalable, flexible, and optimized for performance.'
    },
    {
      title: 'Shopify Web Design',
      description:
        'We offer Shopify web design services to help you create a professional online store that attracts customers and boosts sales.'
    },
    {
      title: 'Dynamic Web Design',
      description:
        'We build dynamic websites with interactive features, engaging animations, and personalized content to enhance user engagement.'
    },
    {
      title: 'SEO Friendly Web Design',
      description:
        'Our SEO-friendly web design services ensure that your website is optimized for search engines, helping you rank higher in search results.'
    },
    {
      title: 'WordPress Web Design',
      description:
        'We specialize in WordPress web design, creating custom themes and templates that are easy to manage and update.'
    },
    {
      title: 'PHP Web Design',
      description:
        'Our PHP web design services include custom development, integration, and maintenance to create powerful and scalable websites.'
    }
  ]
  return (
    <section>
      <div className="text-center text-whiteout bg-whiteout">
        <PageHero heading="Web Designing" />
      </div>
      <div className="container px-10 md:px-20 my-10 sm:my-12 md:my-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold font-highlight">
                Website Design Services
              </h1>
              <div className="mt-8 leading-8 text-lg font-medium">
                <p className="">
                  We specialize in crafting user-friendly websites designed to
                  rapidly enhance audience engagement and increase conversion
                  rates. AdsRole offers high-quality, affordable website design
                  services in your city to boost your digital marketing efforts
                  effectively.
                </p>
                <p className="mt-2">
                  Whether you are a business owner, a new blogger, or an
                  aspiring entrepreneur, you understand the critical role of a
                  website. However, did you know that different types of
                  websites require specific attention?
                </p>
              </div>
            </div>
            <Link to="/contact-us">
              <Button
                className="mt-6 lg:mt-0 text-base font-highlight bg-white text-accent border-2 border-accent hover:bg-secondary hover:border-secondary hover:text-white font-semibold"
                size="lg">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="">
            <img src={webDesigning} alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-6 lg:mt-14">
          {webDesignServices.map((webDesignService, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border py-3 px-3 border-accent/60">
              {/* <div className="object-cover overflow-hidden">
                <img src={webDesignService.image} alt="" className="rounded-sm" />
              </div> */}
              <div className="px-2 py-2">
                <h3 className="text-xl font-semibold font-highlight">
                  {webDesignService.title}
                </h3>
                <p className="text-base mt-2">{webDesignService.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
