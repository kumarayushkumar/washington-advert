import PageHero from '@/components/PageHero'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Quote } from 'lucide-react'

export function Review() {
  const reviews = [
    {
      name: 'Sarah Miller',
      stars: 5,
      address: 'Seattle, WA',
      review:
        'Washington Advert is a game-changer! Their social media management is top-notch. They grew my engagement and follower count like crazy. Plus, their ad designs are eye-catching and effective. I highly recommend them to any US business looking to expand their online presence.'
    },
    {
      name: 'John Rodriguez',
      stars: 5,
      address: 'Austin, TX',
      review:
        'These guys are the real deal! They took my small business from crickets on social media to a constant stream of leads. Their understanding of the US market is spot-on, and their designs are perfect for grabbing attention. Highly recommend!'
    },
    {
      name: 'Alice Chen',
      stars: 4,
      address: 'Chicago, IL',
      review:
        "Washington Advert did a great job designing my latest ad campaign. The visuals were stunning, and the copy resonated with my target audience. Communication could be a little more streamlined at times, but overall, I'm happy with the results."
    },
    {
      name: 'David Young',
      stars: 5,
      address: 'Miami, FL',
      review:
        "Washington Advert took the stress out of managing my social media. They handle everything from content creation to scheduling, freeing me up to focus on running my business. And the best part? They're laser-focused on the US market, so I know my message is reaching the right people."
    },
    {
      name: 'Emily Garcia',
      stars: 4,
      address: 'Los Angeles, CA',
      review:
        "Washington Advert has a lot of potential. They're creative and clearly understand the US market. I'd like to see them offer a wider range of social media management packages to cater to businesses of all sizes."
    },
    {
      name: 'Michael Thompson',
      stars: 5,
      address: 'New York City, NY',
      review:
        "I've been blown away by the results from Washington Advert! Their team is incredibly talented and dedicated to helping businesses succeed. The impact on my ROI has been significant since partnering with them. Highly recommend their services!"
    },
    {
      name: 'Jennifer Patel',
      stars: 4,
      address: 'San Francisco, CA',
      review:
        "Washington Advert has been instrumental in elevating my brand's online presence. Their attention to detail and strategic approach set them apart. While there's always room for improvement, I'm overall satisfied with their services."
    },
    {
      name: 'Christopher Nguyen',
      stars: 5,
      address: 'Houston, TX',
      review:
        "Top-notch service from Washington Advert! Their team goes above and beyond to ensure client satisfaction. They're quick to respond to inquiries and are always willing to tweak strategies for optimal results. A definite asset to any business!"
    },
    {
      name: 'Ava Johnson',
      stars: 4,
      address: 'Atlanta, GA',
      review:
        "Washington Advert has been a reliable partner in my business journey. Their expertise in social media marketing is evident, and they've helped me reach a wider audience. While there have been occasional hiccups, their professionalism shines through."
    },
    {
      name: 'Ethan Wilson',
      stars: 5,
      address: 'Dallas, TX',
      review:
        "I can't speak highly enough of Washington Advert! Their innovative strategies have significantly boosted my brand's visibility and engagement. The team is friendly, responsive, and truly cares about their clients' success. Worth every penny!"
    },
    {
      name: 'Sophia Lee',
      stars: 4,
      address: 'Boston, MA',
      review:
        "Overall, I've had a positive experience with Washington Advert. Their tailored approach to social media management has yielded promising results for my business. With a few refinements in communication, they could excel even further."
    },
    {
      name: 'Daniel Martinez',
      stars: 5,
      address: 'Phoenix, AZ',
      review:
        'Washington Advert exceeded my expectations in every way! Their strategic marketing initiatives have propelled my business to new heights. From content creation to analytics, they handle it all with finesse. Highly recommend their services!'
    },
    {
      name: 'Olivia Clark',
      stars: 4,
      address: 'Philadelphia, PA',
      review:
        "Working with Washington Advert has been a fruitful experience. They've helped me navigate the complexities of social media marketing with ease. While there's always room for improvement, I appreciate their dedication to client satisfaction."
    },
    {
      name: 'William Lewis',
      stars: 5,
      address: 'San Diego, CA',
      review:
        "Washington Advert is the real deal! Their expertise in digital marketing is unmatched, and they've delivered exceptional results for my business. From ad campaigns to brand management, they handle it all seamlessly. Highly recommend!"
    },
    {
      name: 'Isabella White',
      stars: 4,
      address: 'Denver, CO',
      review:
        "I've had a positive experience with Washington Advert thus far. Their team is proactive, creative, and always striving for excellence. While there have been minor setbacks, their commitment to client success shines through."
    },
    {
      name: 'Benjamin Taylor',
      stars: 5,
      address: 'Orlando, FL',
      review:
        'Washington Advert has been a game-changer for my business! Their marketing strategies are innovative and effective, resulting in a significant boost in leads and conversions. The team is responsive, professional, and truly invested in my success.'
    },
    {
      name: 'Natalie Adams',
      stars: 4,
      address: 'Charlotte, NC',
      review:
        "Overall, I'm satisfied with the services provided by Washington Advert. They've helped me establish a strong online presence and increase brand awareness. While there have been minor issues along the way, their dedication to improvement is commendable."
    },
    {
      name: 'Liam Brown',
      stars: 5,
      address: 'San Antonio, TX',
      review:
        "Washington Advert is a class act! Their expertise in digital marketing has transformed my business for the better. From social media management to targeted ad campaigns, they've exceeded my expectations every step of the way. Highly recommend!"
    },
    {
      name: 'Madison Wilson',
      stars: 4,
      address: 'Las Vegas, NV',
      review:
        "Working with Washington Advert has been a positive experience overall. Their team is knowledgeable, responsive, and dedicated to achieving results. While there have been occasional communication hiccups, I'm impressed with their commitment to client satisfaction."
    },
    {
      name: 'Lucas Martinez',
      stars: 5,
      address: 'Minneapolis, MN',
      review:
        "I'm extremely impressed with Washington Advert's services! Their strategic approach to digital marketing has significantly boosted my business's online presence. From content creation to campaign optimization, they excel in every aspect. Highly recommend!"
    },
    {
      name: 'Grace Thompson',
      stars: 4,
      address: 'Portland, OR',
      review:
        "Overall, I've had a positive experience with Washington Advert. Their team is knowledgeable, responsive, and dedicated to helping businesses succeed. While there have been minor hiccups along the way, their commitment to improvement is evident."
    },
    {
      name: 'Jacob Clark',
      stars: 5,
      address: 'Detroit, MI',
      review:
        'Washington Advert has been instrumental in growing my business! Their expertise in digital marketing has helped me reach a wider audience and increase brand visibility. The team is professional, proactive, and always willing to go the extra mile.'
    },
    {
      name: 'Victoria Nguyen',
      stars: 4,
      address: 'San Jose, CA',
      review:
        "I've had a positive experience with Washington Advert thus far. Their team is knowledgeable, responsive, and committed to client success. While there's always room for improvement, I appreciate their dedication to delivering results."
    },
    {
      name: 'Ryan Patel',
      stars: 5,
      address: 'Salt Lake City, UT',
      review:
        "Washington Advert is the real deal! Their strategic approach to digital marketing has yielded exceptional results for my business. From social media management to targeted ad campaigns, they've exceeded my expectations every step of the way."
    },
    {
      name: 'Avery Lopez',
      stars: 4,
      address: 'Nashville, TN',
      review:
        "Overall, I've had a positive experience with Washington Advert. Their team is knowledgeable, responsive, and dedicated to helping businesses succeed. While there have been minor hiccups along the way, their commitment to improvement is evident."
    },
    {
      name: 'Elijah Wilson',
      stars: 5,
      address: 'Indianapolis, IN',
      review:
        "I'm extremely impressed with Washington Advert's services! Their expertise in digital marketing has helped my business thrive in a competitive market. The team is proactive, professional, and truly cares about their clients' success. Highly recommend!"
    },
    {
      name: 'Chloe Garcia',
      stars: 4,
      address: 'Washington, DC',
      review:
        "I've had a positive experience with Washington Advert thus far. Their team is knowledgeable, responsive, and committed to delivering results. While there's always room for improvement, I appreciate their dedication to client satisfaction."
    },
    {
      name: 'Xavier Hernandez',
      stars: 5,
      address: 'Raleigh, NC',
      review:
        "Washington Advert is a class act! Their strategic marketing initiatives have significantly boosted my business's online presence. From social media management to targeted ad campaigns, they've exceeded my expectations every step of the way. Highly recommend!"
    },
    {
      name: 'Samantha Smith',
      stars: 4,
      address: 'Tampa, FL',
      review:
        "Working with Washington Advert has been a positive experience overall. Their team is knowledgeable, responsive, and dedicated to achieving results. While there have been occasional communication hiccups, I'm impressed with their commitment to client satisfaction."
    },
    {
      name: 'Nathan Lee',
      stars: 5,
      address: 'Kansas City, MO',
      review:
        'Washington Advert has been instrumental in growing my business! Their expertise in digital marketing has helped me reach a wider audience and increase brand visibility. The team is professional, proactive, and always willing to go the extra mile.'
    },
    {
      name: 'Hailey Brown',
      stars: 4,
      address: 'Columbus, OH',
      review:
        "Overall, I've had a positive experience with Washington Advert. Their team is knowledgeable, responsive, and committed to helping businesses succeed. While there have been minor hiccups along the way, their commitment to improvement is evident."
    },
    {
      name: 'Evan Wilson',
      stars: 5,
      address: 'Milwaukee, WI',
      review:
        "I'm extremely impressed with Washington Advert's services! Their expertise in digital marketing has helped my business thrive in a competitive market. The team is proactive, professional, and truly cares about their clients' success. Highly recommend!"
    },
    {
      name: 'Lily Martinez',
      stars: 4,
      address: 'Oklahoma City, OK',
      review:
        "I've had a positive experience with Washington Advert thus far. Their team is knowledgeable, responsive, and committed to delivering results. While there's always room for improvement, I appreciate their dedication to client satisfaction."
    }
  ]

  return (
    <section id="packages" className="">
      <div className="text-center text-whiteout bg-whiteout">
        <PageHero heading="Hear from Happy Customers" />
      </div>
      <div className="flex justify-center py-12">
        <Carousel className="w-full max-w-[16rem] sm:max-w-sm md:max-w-xl lg:max-w-4xl xl:max-w-6xl">
          <CarouselContent className="">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col justify-between px-2 sm:px-4 md:px-6">
                  <div>
                    <Quote className="text-accent" size={40} />
                    <p className="mt-4 md:mt-6 text-lg font-light leading-7">
                      {review.review}
                    </p>
                  </div>
                  <div className="mt-6 md:mt-14 flex justify-between px-2">
                    <div></div>
                    <div className=" font-light">
                      <p className="text-xl">{review.name}</p>
                      <p className="text-xs">{review.address}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
