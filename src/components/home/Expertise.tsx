import services1 from '/assets/images/services/services-1.webp'
import services2 from '/assets/images/services/services-2.webp'
import services3 from '/assets/images/services/services-3.webp'
import services4 from '/assets/images/services/services-4.webp'
import services5 from '/assets/images/services/services-5.webp'
import services6 from '/assets/images/services/services-6.webp'
import ServiceCard from '../card/ServiceCard'

const services = [
  {
    title: 'Web Designing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services1,
    buttonText: 'Know More'
  },
  {
    title: 'Pay Per Click',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services2,
    buttonText: 'Know More'
  },
  {
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services4,
    buttonText: 'Know More'
  },
  {
    title: 'Social Media Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services3,
    buttonText: 'Know More'
  },
  {
    title: 'Local SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services5,
    buttonText: 'Know More'
  },
  {
    title: 'Google My Business',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services6,
    buttonText: 'Know More'
  }
]

export default function Expertise() {
  return (
    <section id="services" className="px-10 text-whiteout py-16 ">
      <div className="relative z-10 container">
        <div className="text-center text-5xl font-semibold text-whiteout">
          Our Expertise
        </div>
        <div className="pt-12 pb-8 md:pt-16 md:pb-14">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              className="shadow-md p-5 bg-white"
              index={index}
              title={service.title}
              description={service.description}
              image={service.image}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  )
}