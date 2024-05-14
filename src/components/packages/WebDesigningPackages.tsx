import { TiTick, TiTimes } from 'react-icons/ti'
import { Link } from 'react-router-dom'

import PackagesSectionWrapper from '../PackagesSectionWrapper'
import bestSeller from '/assets/images/best-seller.webp'
import { Button } from '../ui/button'

export default function WebDesigningPackages() {
  const webDesigningPackages = [
    {
      type: 'Web Essential',
      price: '$999 per year',
      points: {
        'Dynamic website': true,
        'Website Pages- Upto 10': true,
        'New domain(optional)': true,
        'New Logo Desgin': false,
        'AI chat feature': false,
        'Web hosting': true,
        'Search Engine(SEO) Friendly': true,
        'Website pages content': true,
        'SEO keywords Research': true,
        'Competitor Analysis Report': false,
        'Explainer Video': false,
        'Customized Contact Form(Leads)': false,
        'Stock Images': true,
        'Premium Support(SSL)': true,
        'Advanced Site Security': false,
        '5 Hosted Domain Emails': true,
        'Daily Backup': false,
        'Unlimited Bandwidth': true,
        'Unlimited Databases': true,
        'Dedicated Resources': true,
        'Dedicated IP': true,
        '99.9% uptime guarantee': true,
        'User Friendly Admin Panel': true,
        'Web Maintenance - 50 hours/year': true,
        'Responsive Site(Desktop, Tablet, Mobile)': true,
        '5 Business Profile Creation': true,
        'Social Media profile Creation': false,
        'Social Media Profile Linking': false,
        'Google analytics tracking': true,
        'Google Search console tracking': true,
        'Google ecommerce tracking': false,
        'Payment Gateway Integration': false,
        'Email/Chat Support': true,
        'Dedicated Account Manager': false,
        'Quarterly Website progress report': false
      }
    },
    {
      type: 'Web Advanced',
      price: '$1999 per year',
      points: {
        'Ultra Dynamic website': true,
        'Website Pages - Upto 15': true,
        'New domain(optional)': true,
        'New Logo Desgin': true,
        'AI chat feature': true,
        'Web hosting': true,
        'Search Engine(SEO) Friendly': true,
        'Website pages content': true,
        'SEO keywords Research': true,
        'Competitor Analysis Report': false,
        'Explainer Video': false,
        'Customized Contact Form(Leads)': false,
        'Stock Images': true,
        'Premium Support(SSL)': true,
        'Advanced Site Security': false,
        '5 Hosted Domain Emails': true,
        'Daily Backup': true,
        'Unlimited Bandwidth': true,
        'Unlimited Databases': true,
        'Dedicated Resources': true,
        'Dedicated IP': true,
        '99.9% uptime guarantee': true,
        'User Friendly Admin Panel': true,
        'Web Maintenance - 100 hours/year': true,
        'Responsive Site(Desktop, Tablet, Mobile)': false,
        '5 Business Profile Creation': true,
        'Social Media profile Creation': true,
        'Social Media Profile Linking': true,
        'Google analytics tracking': true,
        'Google Search console tracking': true,
        'Google ecommerce tracking': false,
        'Payment Gateway Integration': false,
        'Email/Chat Support': true,
        'Dedicated Account Manager': false,
        'Quarterly Website progress report': false
      }
    },
    {
      type: 'Web Professional',
      price: '$2999 per year',
      points: {
        'Custom website': true,
        'Website Pages - Upto 20': true,
        'New domain(optional)': true,
        'New Logo Desgin': true,
        'AI chat feature': true,
        'Web hosting': true,
        'Search Engine(SEO) Friendly': true,
        'Website pages content': true,
        'SEO keywords Research': true,
        'Competitor Analysis Report': true,
        'Explainer Video': true,
        'Customized Contact Form(Leads)': true,
        'Stock Images': true,
        'Premium Support(SSL)': true,
        'Advanced Site Security': true,
        '5 Hosted Domain Emails': true,
        'Daily Backup': true,
        'Unlimited Bandwidth': true,
        'Unlimited Databases': true,
        'Dedicated Resources': true,
        'Dedicated IP': true,
        '99.9% uptime guarantee': true,
        'User Friendly Admin Panel': true,
        'Web Maintenance - 150 hours/year': true,
        'Responsive Site(Desktop, Tablet, Mobile)': false,
        '5 Business Profile Creation': true,
        'Social Media profile Creation': true,
        'Social Media Profile Linking': true,
        'Google analytics tracking': true,
        'Google Search console tracking': true,
        'Google ecommerce tracking': true,
        'Payment Gateway Integration': true,
        'Email/Chat Support': true,
        'Dedicated Account Manager': true,
        'Quarterly Website progress report': true
      }
    },
    {
      type: 'Web Enterprise',
      price: '$3999 per year',
      points: {
        'Ultra Custom website': true,
        'Website Pages - Upto 25': true,
        'New domain(optional)': true,
        'New Logo Desgin': true,
        'AI chat feature': true,
        'Web hosting': true,
        'Search Engine(SEO) Friendly': true,
        'Website pages content': true,
        'SEO keywords Research': true,
        'Competitor Analysis Report': true,
        'Explainer Video': true,
        'Customized Contact Form(Leads)': true,
        'Stock Images': true,
        'Premium Support(SSL)': true,
        'Advanced Site Security': true,
        '5 Hosted Domain Emails': true,
        'Daily Backup': true,
        'Unlimited Bandwidth': true,
        'Unlimited Databases': true,
        'Dedicated Resources': true,
        'Dedicated IP': true,
        '99.9% uptime guarantee': true,
        'User Friendly Admin Panel': true,
        'Web Maintenance - 200 hours/year': true,
        'Responsive Site(Desktop, Tablet, Mobile)': true,
        '5 Business Profile Creation': true,
        'Social Media profile Creation': true,
        'Social Media Profile Linking': true,
        'Google analytics tracking': true,
        'Google Search console tracking': true,
        'Google ecommerce tracking': true,
        'Payment Gateway Integration': true,
        'Email/Chat Support': true,
        'Dedicated Account Manager': true,
        'Quarterly Website progress report': true
      }
    }
  ]
  return (
    <PackagesSectionWrapper title="Web Designing Packages">
      <div className="flex gap-6 mt-4 lg:mt-6 xl:mt-8">
        {webDesigningPackages.map((webDesigningPackage, index) => (
          <div
            key={index}
            className="flex-1 bg-white p-6 border border-secondary/60 relative">
            {index === 1 && (
              <div className="best-sller absolute w-20 top-0 right-0 translate-x-[40%] -translate-y-[40%]">
                <img src={bestSeller} alt="best seller" />
              </div>
            )}
            <div className="text-2xl font-semibold">
              {webDesigningPackage.type}
            </div>
            <div className="text-xl mt-2 font-semibold">
              {webDesigningPackage.price}
            </div>
            <Link to="/contact-us" className="block my-5">
              <Button
                className="w-full font-highlight text-base border-2 border-accent bg-white text-accent hover:text-white hover:border-primary"
                size={'lg'}>
                Get started
              </Button>
            </Link>
            <div className="mt-4">
              {Object.entries(webDesigningPackage.points).map(
                ([key, value], index) => (
                  <div key={index}>
                    <div className="mt-2">
                      <div
                        key={index}
                        className="flex justify-between items-center leading-7">
                        <div className="font-medium ">{key}</div>
                        <div>
                          {typeof value === 'string' ? (
                            <p className="font-semibold leading-4 text-base tracking-tight">
                              {value}
                            </p>
                          ) : (
                            <>
                              {value ? (
                                <TiTick className="text-green-500" />
                              ) : (
                                <TiTimes className="text-red-500" />
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </PackagesSectionWrapper>
  )
}
