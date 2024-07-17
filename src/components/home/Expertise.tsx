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
    <section id="services" className="md:px-10 text-whiteout py-10 md:py-14 ">
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
            />
          ))}
        </div>
      </div>
    </section>
  )
}
