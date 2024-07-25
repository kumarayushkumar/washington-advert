import { useNavigate } from 'react-router-dom'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { MdHighQuality, MdOutlineEmojiPeople } from 'react-icons/md'

import whyChooseUs from '/assets/images/home/why-choose-us.webp'
import { Button } from '../ui/button'

export default function WhyChooseUs() {
  const navigate = useNavigate()
  const whyChooseUsPoints = [
    {
      icon: <MdOutlineEmojiPeople />,
      title: 'Leader in digital marketing'
    },
    {
      icon: <MdHighQuality />,
      title: 'High-quality services'
    },
    {
      icon: <IoCheckmarkCircle />,
      title: 'Best marketing solutions'
    }
  ]
  const handleScheduleCall = () => {
    navigate('/contact-us')
  }
  return (
    <section id="why-choose-us" className="py-8 md:pt-16 md:pb-12 bg-whiteout">
      <div className="px-6 md:px-16 container">
        <div className="flex flex-col md:flex-row md:gap-14">
          <div className="flex flex-col justify-between">
            <div className="">
              <p className="text-3xl md:text-4xl font-main">
                Why should choose our agency?
              </p>
              <div className="text-lg flex flex-col gap-4 mt-6 md:mt-8">
                <div className="">
                  <p className="font-semibold md:font-bold">Proven Results: </p>
                  Experience measurable success with our proven track record of
                  driving brands to the top of search engine rankings.
                </div>
                <div>
                  <p className="font-semibold md:font-bold">
                    Strategic Approach:
                  </p>
                  We don't just follow trends; we set them. Our strategic
                  thinking ensures your brand stays ahead in the dynamic digital
                  landscape.
                </div>
                <div>
                  <p className="font-semibold md:font-bold">
                    Comprehensive Services:
                  </p>
                  From website design to SEO mastery, our services are tailored
                  to meet the unique needs of your business, creating a holistic
                  digital presence.
                </div>
              </div>
            </div>
            <div>
              <Button
                variant="primary"
                className="mt-6"
                onClick={handleScheduleCall}>
                Schedule a Call
              </Button>
            </div>
          </div>
          <div className="shadow-lg md:max-w-[40%] mt-10 md:mt-0">
            <img
              src={whyChooseUs}
              className="w-full h-full object-cover object-center mx-auto "
              alt="Why choose us"
            />
          </div>
        </div>
      </div>
      <span className="h-1 block bg-accent my-4 md:my-8"></span>
      <div className="flex justify-between px-4 md:px-20 pt-2">
        {whyChooseUsPoints.map((point, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-4">
            <span className="rounded-full border-2 border-secondary">
              <div className="text-primary m-2 text-xl md:text-2xl lg:text-3xl">
                {point.icon}
              </div>
            </span>
            <p className="font-medium text-xs md:text-lg lg:text-xl font-sub leading-none md:leading-6">
              {point.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
