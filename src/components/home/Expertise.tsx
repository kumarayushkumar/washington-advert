import services1 from '/assets/images/services/services-1.jpg'
import services2 from '/assets/images/services/services-2.jpg'
import services3 from '/assets/images/services/services-3.jpg'
import services4 from '/assets/images/services/services-4.jpg'
import services5 from '/assets/images/services/services-5.jpg'
import services6 from '/assets/images/services/services-6.jpg'
import ServiceCard from '../card/ServiceCard'

const services = [
  {
    title: 'Web Designing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services1,
    buttonText: 'Learn More'
  },
  {
    title: 'Pay Per Click',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services2,
    buttonText: 'Learn More'
  },
  {
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services4,
    buttonText: 'Learn More'
  },
  {
    title: 'Social Media Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services3,
    buttonText: 'Learn More'
  },
  {
    title: 'Local SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services5,
    buttonText: 'Learn More'
  },
  {
    title: 'Google My Business',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: services6,
    buttonText: 'Learn More'
  }
]

export default function Expertise() {
  return (
    <section id="services" className="px-10 text-whiteout py-16 ">
      <div className="relative z-10">
        <div className="text-center text-5xl font-semibold text-whiteout">
          Our Expertise
        </div>
        <div className="my-4">
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
