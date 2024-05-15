import {
  CiChat2,
  CiMonitor,
  CiPhone,
  CiSquareCheck,
  CiUser,
  CiVial
} from 'react-icons/ci'
import { Link } from 'react-router-dom'

import PageHero from '@/components/PageHero'
import gmbService from '/assets/images/services/gmb.webp'
import { Button } from '@/components/ui/button'

export function GMB() {
  const gmbExpertise = [
    {
      title: 'GMB Listing Suspension',
      description:
        'We are experts in GMB listing suspension and can help your business get the most out of the GMB listing process. We will help you with everything from preparing the application to getting the listing up and running, so that you can focus on what you do best',
      icon: <CiSquareCheck />
    },
    {
      title: 'GMB Quality Issues',
      description:
        'At GMB, we are experts in quality issues. We work with our clients to identify and resolve any potential GMB Quality Issues that may have arisen during the course of their business.',
      icon: <CiVial />
    },
    {
      title: 'GMB Ownership Issue',
      description:
        'The rise of online business has brought about a surge in identity theft, with fraudsters using fake business identities for profit. To combat this, businesses facing Google My Business (GMB) ownership issues can seek assistance from our team. We offer expert guidance and support to resolve ownership disputes by providing genuine information to Google My Business support.',
      icon: <CiPhone />
    },
    {
      title: 'GMB Listing Optimization',
      description:
        'We are GMB SEO experts and help small business, retailers, big brands alike with complete google my business management services at affordable cost. “Best google my business optimization service provider with 10+ Years of Industry Experience, Satisfaction Guaranteed!',
      icon: <CiUser />
    },
    {
      title: 'GMB Management Service',
      description:
        'Get your business verified Verify your business listings and manage your business information on Google Search and Maps. This verification process ensures that your business information is accurate and that only you, the business owner manager, has access to it.',
      icon: <CiChat2 />
    },
    {
      title: 'GMB Local Directory Submission',
      description:
        'Oversee all your call centre activities on a single dashboard. Gauge call centre performance, track agent calls and assess key KPIs on a monitoring dashboard.',
      icon: <CiMonitor />
    }
  ]
  return (
    <section id="gmb">
      <div className="text-center text-whiteout bg-whiteout">
        <PageHero heading="Google My Business" />
      </div>
      <div className="container px-20 my-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-semibold font-highlight">
                What is Google My Business?
              </h1>
              <p className="mt-8 leading-8 text-lg font-medium">
                Google My Business is a web-based management system that allows
                businesses to manage their online presence and customers. The
                system includes a web browser, email address, and password
                manager. Businesses can create an online store, website, or blog
                with the help of Google My Business. They can also manage their
                customer data, registration information, orders, and payments.
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
            <img src={gmbService} alt="" />
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-3xl">
              Google Business Profile Management Services
            </p>
            <p className="font-medium">
              Drive more web traffic from mobile, Google Maps, and local
              searches with our Google My Business Management Service. Transform
              your company’s online presence and win over local customers today!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl">Dominate Your Local Area</p>
            <p className="font-medium">
              Our Google Business Profile Management service is perfect for
              local businesses such as salons, real estate agencies, travel
              agencies, hotels, resorts, cafes, and more. Make your business
              stand out and become the top choice for customers in your area.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl">Features & Benefits</p>
            <div className="font-medium flex flex-col gap-2">
              <p className="">
                Google My Business Management: Maximize your exposure on Google
                search results and Google Maps by properly managing and updating
                your Google My Business profile.
              </p>
              <p className="">
                Local SEO Audit: Get a professional analysis of your website’s
                local search performance and implement strategies to improve
                your search rankings.
              </p>
              <p className="">
                Local Keyword Research & Keyword Optimization: Identify the most
                relevant and high-performing local keywords for your business
                and optimize your website for them.
              </p>
              <p className="">
                GMB Listing Setup & Optimization: Ensure your Google My Business
                listing is properly set up and optimized to enhance visibility
                and attract potential customers.
              </p>
              <p className="">
                GMB Call Tracking: Understand your customer calls’ sources and
                analyze performance data to optimize your profile further.
                Citation Building: Boost your website’s authority and
                trustworthiness by increasing the number of business citations
                on reputable websites.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl">
              Why Choose Our Google Business Profile Management Services?
            </p>
            <p className="font-medium">
              Our expert team of digital marketers will help you drive more
              traffic, attract new customers, and boost your online visibility.
              With a tailor-made approach, we’ll design the perfect strategy for
              your business and turn your Google My Business profile into a
              revenue-generating machine.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl">What to Expect?</p>
            <p className="font-medium">
              Expect top-quality service, excellent communication, and
              guaranteed results from our skilled specialists. We won’t stop
              working until your business climbs the search rankings and shines
              in its local market!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl">Always Here to Help</p>
            <p className="font-medium">
              Whether you’re a small start-up or a well-established local
              business, our flexible packages cater to your needs. Get access to
              responsive, ongoing support, dedicated to helping you thrive
              online.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-2xl">
              Are You Ready to Soar Above the Competition?
            </p>
            <p className="font-medium">
              Don’t let local customers pass you by! Allow us to help you
              optimize your Google Business profile, attract a massive online
              following, and conquer your local market.
            </p>
          </div>
        </div>

        <div className=" my-8 bg-amber-300 px-10 py-8  rounded-lg text-black flex flex-col gap-2">
          <p className="font-highlight text-3xl font-bold">
            Google My Business Listing Service
          </p>
          <p className="leading-7 text-lg font-sub">
            Google My Business Listing Service (GMB) is a free online service
            that allows businesses to create and manage their own business
            listings. It provides a searchable listing of all the businesses in
            your city or town, as well as detailed information about each one,
            including contact information, website addresses, and more. You can
            also add photos and videos of your business, and share news and
            updates about your business with your community.
          </p>
        </div>

        <div className='mt-16'>
          <div className='text-center text-4xl font-semibold my-8'>We have expertise in</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {gmbExpertise.map((expertise, index) => (
              <div
                key={index}
                className="border-2 border-secondary/50 px-4 py-6 rounded-lg flex flex-col gap-2 items-center text-center">
                <div className="text-4xl text-accent">{expertise.icon}</div>
                <p className="font-semibold text-lg mt-2">{expertise.title}</p>
                <p className="">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
