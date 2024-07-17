import { Link } from 'react-router-dom'

import seo from '/assets/images/services/seo.webp'
import PageHero from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import GetStartedCard from '@/components/card/GetStartedCard'

export function SEO() {
  const seoServices = [
    {
      title: 'Website SEO services',
      description:
        'We offer a wide range of website SEO services to help you improve your search engine rankings and drive more organic traffic to your website.'
    },
    {
      title: 'Organic and Best seo services',
      description:
        'Our organic and best SEO services are designed to help you improve your search engine rankings and drive more organic traffic to your website.'
    },
    {
      title: 'SEO Audit Services',
      description:
        'Our SEO audit services are designed to help you identify and fix any issues that may be affecting your search engine rankings.'
    },
    {
      title: 'E-commerce Marketing SEO services',
      description:
        'Our e-commerce marketing SEO services are designed to help you improve your search engine rankings and drive more organic traffic to your website.'
    },
    {
      title: 'Local SEO service',
      description:
        'Our local SEO services are designed to help you improve your search engine rankings and drive more organic traffic to your website.'
    },
    {
      title: 'SEO Consulting Services',
      description:
        'Our SEO consulting services are designed to help you improve your search engine rankings and drive more organic traffic to your website.'
    },
    {
      title: 'Global SEO Services',
      description:
        'Our global SEO services are designed to help you improve your search engine rankings and drive more organic traffic to your website.'
    },
    {
      title: 'Custom SEO Services',
      description:
        'Our custom SEO services are designed to help you improve your search engine rankings and drive more organic traffic to your website.'
    },
    {
      title: 'Video SEO Services',
      description:
        'Our video SEO services are designed to help you improve your search engine rankings and drive more organic traffic to your website.'
    },
    {
      title: 'Off-Page SEO Services',
      description:
        'Our off-page SEO services are designed to help you improve your search engine rankings and drive more organic traffic to your website.'
    },
    {
      title: 'On-Page SEO Services',
      description:
        'Our on-page SEO services are designed to help you improve your search engine rankings and drive more organic traffic to your website.'
    },
    {
      title: 'Mobile SEO Services',
      description:
        'Our mobile SEO services are designed to help you improve your search engine rankings and drive more organic traffic to your website.'
    }
  ]
  return (
    <section id="industries" className="">
      <div className="text-center text-whiteout bg-whiteout">
        <PageHero heading="SEO" />
      </div>
      <div className="container px-10 md:px-20 my-10 sm:my-12 md:my-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold font-highlight">
                Search Engine Optimization
              </h1>
              <p className="mt-8 leading-8 text-lg font-medium">
                As a premier Internet Marketing Service provider, we prioritize
                what is most important for our clients. We specialize in
                creating Search Engine Optimization (SEO) friendly websites that
                naturally boost your online marketing campaigns. As a
                professional Google SEO service provider, we are committed to
                delivering quality work every time.
              </p>
            </div>
            <Link to="/contact-us">
              <Button
                className="text-base font-highlight bg-white text-accent border-2 border-accent hover:bg-secondary hover:border-secondary hover:text-white font-semibold"
                size="lg">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="">
            <img src={seo} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-6 lg:mt-14">
          {seoServices.map((seoService, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border py-3 px-3 border-accent/60">
              {/* <div className="object-cover overflow-hidden">
                <img src={seoService.image} alt="" className="rounded-sm" />
              </div> */}
              <div className="px-2 py-2">
                <h3 className="text-xl font-semibold font-highlight">
                  {seoService.title}
                </h3>
                <p className="text-base mt-2">{seoService.description}</p>
              </div>
            </div>
          ))}
        </div>
        <GetStartedCard
          content="Ready to take your business to
          the next level? Our tailored digital marketing strategies are designed
          to boost your online presence and drive growth. Schedule a
          complimentary consultation now!"
        />
      </div>
    </section>
  )
}
