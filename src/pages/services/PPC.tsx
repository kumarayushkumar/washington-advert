import { Link } from 'react-router-dom'

import ppc from '/assets/images/services/ppc.webp'
import PageHero from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import GetStartedCard from '@/components/card/GetStartedCard'

export function PPC() {
  const ppcTypes = [
    {
      title: 'Search Advertising',
      description:
        'We create and manage Google Ads campaigns that are designed to drive traffic to your website.'
    },
    {
      title: 'Display Advertising',
      description:
        'We create and manage Google Display Network campaigns that are designed to drive traffic to your website.'
    },
    {
      title: 'Social Media Advertising',
      description:
        'We create and manage social media advertising campaigns that are designed to drive traffic to your website.'
    },
    {
      title: 'Remarketing',
      description:
        'We create and manage remarketing campaigns that are designed to drive traffic to your website.'
    },
    {
      title: 'Sequential Remarketing',
      description:
        'We create and manage sequential remarketing campaigns that are designed to drive traffic to your website.'
    },
    {
      title: 'Google Shopping',
      description:
        'We create and manage Google Shopping campaigns that are designed to drive traffic to your website.'
    }
  ]
  return (
    <section>
      <div className="text-center text-whiteout bg-whiteout">
        <PageHero heading="PPC" />
      </div>
      <div className="container px-20 my-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-semibold font-highlight">
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
            <img src={ppc} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-6 lg:mt-14">
          {ppcTypes.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border py-3 px-3 border-accent/60">
              {/* <div className="object-cover overflow-hidden">
                <img src={item.image} alt="" className="rounded-sm" />
              </div> */}
              <div className="px-2 py-2">
                <h3 className="text-xl font-semibold font-highlight">
                  {item.title}
                </h3>
                <p className="text-base mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <GetStartedCard
          className="bg-amber-400 text-slate-800 "
          content="Ready to take your business to
          the next level? Our tailored digital marketing strategies are designed
          to boost your online presence and drive growth. Schedule a
          complimentary consultation now!"
        />
      </div>
    </section>
  )
}
