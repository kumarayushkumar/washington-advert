import { Link } from 'react-router-dom'

import PageHero from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import socialMediaMarketing from '/assets/images/services/smm/social-media-marketing.webp'
import platform1 from '/assets/images/services/smm/platform-1.webp'
import platform2 from '/assets/images/services/smm/platform-2.webp'
import platform3 from '/assets/images/services/smm/platform-3.webp'
import platform4 from '/assets/images/services/smm/platform-4.webp'
import platform5 from '/assets/images/services/smm/platform-5.webp'
import platform6 from '/assets/images/services/smm/platform-6.webp'

export function SocialMediaMarketing() {
  const topPlatform = [
    {
      title: 'Facebook',
      description:
        'With over 2.8 billion monthly active users, Facebook is the largest social media platform in the world. It offers a wide range of advertising options, including boosted posts, carousel ads, and lead generation ads.',
      image: platform3
    },
    {
      title: 'Instagram',
      description:
        'Instagram is a visual platform that is perfect for showcasing products and services. It offers a variety of ad formats, including photo ads, video ads, carousel ads, and stories ads.',
      image: platform5
    },
    {
      title: 'LinkedIn',
      description:
        'LinkedIn is the go-to platform for B2B marketing. It offers a variety of advertising options, including sponsored content, sponsored InMail, and text ads.',
      image: platform4
    },
    {
      title: 'Twitter',
      description:
        'Twitter is a fast-paced platform that is perfect for real-time marketing. It offers a variety of ad formats, including promoted tweets, promoted accounts, and promoted trends.',
      image: platform6
    },
    {
      title: 'Pinterest',
      description:
        'Pinterest is a visual platform that is perfect for showcasing products and services. It offers a variety of ad formats, including promoted pins, promoted carousels, and promoted videos.',
      image: platform1
    },
    {
      title: 'Youtube',
      description:
        'YouTube is the second largest search engine in the world. It offers a variety of ad formats, including skippable ads, non-skippable ads, and bumper ads.',
      image: platform2
    }
  ]
  return (
    <section>
      <div className="text-center text-whiteout bg-whiteout">
        <PageHero heading="Social Media Marketing" />
      </div>
      <div className="container px-10 md:px-20 my-10 sm:my-12 md:my-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold font-highlight">
                Social Media Marketing
              </h1>
              <p className="mt-8 leading-8 text-lg font-medium">
                Stop worrying about social media and focus on what you do best!
                Our team of experienced social media consultants will craft a
                unique and effective strategy to manage your online presence.
                We'll handle everything from content creation to engagement, so
                you can see real results without the hassle.
              </p>
              <div className="font-medium mt-3 mb-5 flex flex-col gap-1">
                <p>
                  <strong>Boost brand awareness:</strong> Get your name in front
                  of the right audience and build a loyal following.
                </p>
                <p>
                  <strong>Increase website traffic:</strong> Funnel targeted
                  visitors to your website for more leads and sales.
                </p>
              </div>
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
            <img src={socialMediaMarketing} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-6 lg:mt-14">
          {topPlatform.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 border py-3 px-3 border-accent/60">
              <div className="object-cover overflow-hidden">
                <img src={platform.image} alt="" className="rounded-sm" />
              </div>
              <div className="px-2 py-2">
                <h3 className="text-xl font-semibold font-highlight">
                  {platform.title}
                </h3>
                <p className="text-base mt-2">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
