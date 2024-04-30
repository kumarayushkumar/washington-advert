import IndustriesCard from '@/components/card/IndustriesCard'
import {
  FaBalanceScale,
  FaBook,
  FaBuilding,
  FaHospital,
  FaMoneyBillWave,
  FaShoppingBasket,
  FaTools
} from 'react-icons/fa'
import { RiGovernmentFill } from 'react-icons/ri'
import { GiLipstick } from 'react-icons/gi'
import { FaComputer } from 'react-icons/fa6'

export function Industries() {
  const industries = [
    {
      title: 'Retail and E-Commerce',
      icon: <FaShoppingBasket />,
      description:
        'We understand what makes an e-commerce strategy truly effective.'
    },
    {
      title: 'Healthcare',
      icon: <FaHospital />,
      description:
        'The medical industry has a lot of nuances surrounding privacy and confidentiality. US Website Designers has experience successfully navigating these.'
    },
    {
      title: 'Legal',
      icon: <FaBalanceScale />,
      description:
        'The care and ethics you take with your business should flow into your online strategy. Our team understand both.'
    },
    {
      title: 'Government',
      icon: <RiGovernmentFill />,
      description:
        'We create proposals and respond to tenders in a way that enables government departments to understand their return on investment.'
    },
    {
      title: 'Utilities',
      icon: <FaTools />,
      description:
        'Working with brands, such as Water Corporation, means we understand the digital marketing needs of large-scale utilities.'
    },
    {
      title: 'Real Estate',
      icon: <FaBuilding />,
      description:
        'Real estate isn’t the only industry all about location, location, location. Be found when it matters most.'
    },
    {
      title: 'Technology',
      icon: <FaComputer />,
      description:
        'Being an innovative technology company means your needs are constantly changing. Our team are experienced in creating strategies that adapt and evolve with you.'
    },
    {
      title: 'Finance',
      icon: <FaMoneyBillWave />,
      description:
        'We know you like numbers. We do too. In a heavily contested digital marketplace, US Website Designers can create truly optimised campaigns that deliver on the business metrics that matter.'
    },
    {
      title: 'Beauty',
      icon: <GiLipstick />,
      description:
        'Beauty is no longer confined to magazines or in-stores. Understanding where your customers are spending their time and money online is vital.'
    },
    {
      title: 'Education',
      icon: <FaBook />,
      description:
        'We specialise in putting education providers front and centre so they attract the right pupils and parents.'
    }
  ]
  return (
    <section className="">
      <div className="text-center text-whiteout bg-whiteout">
        <div className="bg-accent">
          <h1 className="text-5xl pt-6 md:pt-24 font-sub  font-semibold">
            Industries We Serve
          </h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 120">
          <path
            fill="#0A3D91"
            fill-opacity="1"
            d="M0,128L120,144C240,160,480,192,720,192C960,192,1200,160,1320,144L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-14 py-8 px-6 md:py-14 md:px-16 ">
          {industries.map((industry, index) => (
            <IndustriesCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
