import { Link } from 'react-router-dom'

import PageHero from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import localSeo from '/assets/images/services/local-seo.webp'

export function LocalSEO() {
  const localSEOStrategies = [
    {
      title: 'Google My Business (GMB) Optimization',
      steps: [
        'Claim and verify your Google My Business listing.',
        'Ensure your business name, address, and phone number (NAP) are accurate and consistent across all platforms.',
        'Optimize your GMB profile with relevant categories, business hours, website URL, and business description.',
        'Encourage customers to leave reviews on your GMB listing.'
      ]
    },
    {
      title: 'Local Keyword Research',
      steps: [
        'Identify local keywords relevant to your business and target location.',
        'Use keyword research tools to discover local search terms with high search volume and low competition.',
        'Incorporate local keywords naturally into website content, meta tags, and GMB profile.'
      ]
    },
    {
      title: 'On-Page SEO',
      steps: [
        'Optimize website content, including titles, meta descriptions, headings, and body copy, with local keywords.',
        "Include the business's name, address, and phone number (NAP) on every page, preferably in the footer.",
        'Create location-specific landing pages if your business serves multiple areas.'
      ]
    },
    {
      title: 'Local Link Building',
      steps: [
        'Acquire backlinks from local directories, industry associations, chambers of commerce, and local news websites.',
        'Participate in community events, sponsor local organizations, and host local events to earn local backlinks.',
        'Collaborate with local businesses for cross-promotion and link exchanges.'
      ]
    },
    {
      title: 'Citation Building and Management',
      steps: [
        'Ensure consistent NAP information across online directories, citations, and business listings.',
        'Submit your business to reputable local directories, such as Yelp, Yellow Pages, and local chamber of commerce websites.',
        'Regularly audit and update citations to maintain accuracy.'
      ]
    },
    {
      title: 'Localized Content Marketing',
      steps: [
        'Create blog posts, articles, or videos that focus on topics relevant to your local audience.',
        'Showcase local events, news, and stories related to your industry.',
        'Optimize content with local keywords and geo-specific tags.'
      ]
    },
    {
      title: 'Mobile Optimization',
      steps: [
        'Ensure your website is mobile-friendly and loads quickly on mobile devices.',
        'Optimize for local mobile searches by including click-to-call buttons and clear directions to your business location.'
      ]
    },
    {
      title: 'Schema Markup',
      steps: [
        'Implement schema markup on your website to provide search engines with structured data about your business, including name, address, phone number, business hours, and reviews.'
      ]
    },
    {
      title: 'Monitoring and Analytics',
      steps: [
        'Monitor local search rankings, traffic, and leads using tools like Google Analytics, Google Search Console, and local SEO tracking software.',
        'Analyze user behavior, conversions, and engagement to refine local SEO strategies over time.'
      ]
    }
  ]

  return (
    <section>
      <div className="text-center text-whiteout bg-whiteout">
        <PageHero heading="Local SEO" />
      </div>
      <div className="container px-20 my-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-semibold font-highlight">
                Local SEO (Search Engine Optimization)
              </h1>
              <p className="mt-8 leading-8 text-lg font-medium">
                Focus on optimizing a website or online presence to improve
                visibility in local search results. These activities are crucial
                for businesses targeting customers within a specific geographic
                area. Here are some key local SEO activities:
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
            <img src={localSeo} alt="" />
          </div>
        </div>
        <div className="pl-4 mt-16">
          {localSEOStrategies.map((strategy, index) => (
            <div key={index} className="my-8">
              <h2 className="text-xl font-bold font-highlight">
                {strategy.title}
              </h2>
              <ul className="list-disc list-inside mt-2">
                {strategy.steps.map((step, index) => (
                  <li key={index} className="text-lg font-medium">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="my-8 bg-amber-400 px-10 py-8  rounded-lg text-zinc-800 leading-7 text-xl font-sub">
          By focusing on these local SEO activities, businesses can improve
          their visibility in local search results, attract more local
          customers, and ultimately grow their revenue within their target
          geographic area.
        </div>
      </div>
    </section>
  )
}
