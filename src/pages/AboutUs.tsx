import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function AboutUs() {
  return (
    <section className="bg-whiteout" id="about-us">
      <div className="about-us-hero">
        <div className="px-64 py-44 text-whiteout font-highlight font-bold container">
          <p className="text-xl">Who we are</p>
          <p className="text-[2.5rem] mt-4">
            Designers, thinkers & collaborators
          </p>
        </div>
      </div>
      <div className="container py-10 lg:py-16 lg:px-56 font-medium text-slate-700">
        <div className="">
          <p className="text-rose-600 font-semibold text-xl">
            At Washington Advert, we're passionate about helping businesses
            thrive in the digital landscape. With years of experience in digital
            marketing and lead generation, we've honed our skills to deliver
            results-driven strategies tailored to each client's unique needs.
          </p>
        </div>
        <div className="flex flex-col gap-10 mt-6">
          <div className="mt-4">
            <p className="font-bold text-2xl font-sub">Our Mission:</p>
            <p className="mt-2">
              Our mission is simple: to empower businesses with the tools and
              strategies they need to succeed online. We believe that every
              company has the potential for growth, and our goal is to unlock
              that potential through innovative digital marketing solutions.
            </p>
          </div>
          <div className="">
            <p className="font-bold text-2xl font-sub"> What Sets Us Apart:</p>
            <div className="flex flex-col gap-4 mt-3">
              <p className="">
                <strong>Expertise:</strong> Our team consists of seasoned
                professionals with expertise in various aspects of digital
                marketing, including SEO, PPC, social media marketing, email
                marketing, and more.
              </p>
              <p>
                <strong>Data-Driven Approach:</strong> We don't just rely on
                guesswork. Our strategies are informed by data analysis and
                market research to ensure maximum effectiveness.
              </p>
              <p>
                <strong>Customized Solutions:</strong> Weunderstand that one
                size does not fit all. That's why we take the time to understand
                each client's unique goals and challenges, crafting customized
                solutions that drive tangible results.
              </p>
              <p>
                <strong>Transparent Communication:</strong> We believe in
                transparent communication every step of the way. You'll always
                know what we're doing, why we're doing it, and how it's
                benefiting your business.
              </p>
            </div>
          </div>
          <div>
            <p className="font-bold font-sub text-2xl"> Our Services:</p>
            <div className="mt-3 flex flex-col gap-4">
              <p>
                <strong>Digital Marketing:</strong> From search engine
                optimization (SEO) to pay-per-click (PPC) advertising, we offer
                a comprehensive suite of digital marketing services designed to
                increase your online visibility and drive qualified traffic to
                your website.
              </p>
              <p>
                <strong>Lead Generation:</strong> We specialize in generating
                high-quality leads for your business through targeted strategies
                that resonate with your target audience and compel them to take
                action.
              </p>
              <p>
                <strong>Conversion Optimization:</strong> Getting traffic is
                only half the battle. We'll help you optimize your website and
                marketing funnels to convert more visitors into paying
                customers.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 bg-secondary text-whiteout rounded-2xl px-8 py-6 hover:scale-[1.01] transition-all duration-300">
          <p className="font-bold font-sub text-2xl font-accent">
            Get in Touch:
          </p>
          <p className="mt-2 text-lg ">
            Ready to take your digital marketing efforts to the next level?
            Contact us today to schedule a consultation and discover how we can
            help you achieve your business goals.
          </p>
        </div>
        <div className="flex justify-end mt-12">
          <Link to="/contact-us" className="">
            <Button
              className="font-highlight text-base border-2 border-accent bg-white text-accent hover:text-white hover:border-primary"
              size={'lg'}>
              Say hi!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
