import { Link } from 'react-router-dom'
import { TiTick, TiTimes } from 'react-icons/ti'

import bestSeller from '../../../public/assets/images/best-seller.webp'
import { Button } from '../ui/button'
import PackagesSectionWrapper from '../PackagesSectionWrapper'

export default function SmoPackages() {
  const smoPackages = [
    {
      type: 'SMO Essential',
      price: '$200/Per channel',
      period: 'No. Hour per channel - 15',
      points: {
        'Organic Promation': {
          'Competitor Analysis': true,
          'Strategy Formation': true,
          'Hastag creation and promotion': true,
          'Monthly creative creation - 5': true,
          'Monthly Postings - 5': true,
          'Analytics Tracking': true,
          'Account Management': true,
          'Engagement with active communities': true,
          'Monthly Reporting': true,
          'Network build-up': true,
          'Engagement with third-party posts': true,
          'Content Optimization': true
        },
        'Paid Promotion': {
          'Budget Estimate': false,
          'Setting up campaigns': false,
          'Ad creative creation': false,
          'Daily account optimization': false,
          'Setting up sales funnel for conversion objective': false,
          'Conversion tracking assisted by Google Analytics': false
        },
        Remarketing: {
          'Creating of audience list': false,
          'Setting up campaigns': false,
          'Ad creative creation': false,
          'Daily account optimization': false,
          'Setting up sales funnel for conversion objective': false,
          'Conversion tracking assisted by Google Analytics': false
        },
        'SMO activities': {
          'Monthly report generation with insights': false,
          "Next month's line of action": false
        },
        'Customer Support': {
          'Email Support': false,
          'Phone Support': false,
          'Chat Support': false
        }
      }
    },
    {
      type: 'SMO Advanced',
      price: '$300/Per channel',
      period: 'No. Hour per channel - 40',
      points: {
        'Organic Promation': {
          'Competitor Analysis': true,
          'Strategy Formation': true,
          'Hastag creation and promotion': true,
          'Monthly creative creation - 10': true,
          'Monthly Postings - 10': true,
          'Analytics Tracking': true,
          'Account Management': true,
          'Engagement with active communities': true,
          'Monthly Reporting': true,
          'Network build-up': true,
          'Engagement with third-party posts': true,
          'Content Optimization': true
        },
        'Paid Promotion': {
          'Budget Estimate': true,
          'Setting up campaigns': true,
          'Ad creative creation': true,
          'Daily account optimization': true,
          'Setting up sales funnel for conversion objective': true,
          'Conversion tracking assisted by Google Analytics': true
        },
        Remarketing: {
          'Creating of audience list': false,
          'Setting up campaigns': false,
          'Ad creative creation': false,
          'Daily account optimization': false,
          'Setting up sales funnel for conversion objective': false,
          'Conversion tracking assisted by Google Analytics': false
        },
        'SMO activities': {
          'Monthly report generation with insights': true,
          "Next month's line of action": true
        },
        'Customer Support': {
          'Email Support': true,
          'Phone Support': true,
          'Chat Support': true
        }
      }
    },
    {
      type: 'SMO Premium',
      price: '$400/Per channel',
      period: 'No. Hour per channel - 60',
      points: {
        'Organic Promation': {
          'Competitor Analysis': true,
          'Strategy Formation': true,
          'Hastag creation and promotion': true,
          'Monthly creative creation - 15': true,
          'Monthly Postings - 15': true,
          'Analytics Tracking': true,
          'Account Management': true,
          'Engagement with active communities': true,
          'Monthly Reporting': true,
          'Network build-up': true,
          'Engagement with third-party posts': true,
          'Content Optimization': true
        },
        'Paid Promotion': {
          'Budget Estimate': true,
          'Setting up campaigns': true,
          'Ad creative creation': true,
          'Daily account optimization': true,
          'Setting up sales funnel for conversion objective': true,
          'Conversion tracking assisted by Google Analytics': true
        },
        Remarketing: {
          'Creating of audience list': true,
          'Setting up campaigns': true,
          'Ad creative creation': true,
          'Daily account optimization': true,
          'Setting up sales funnel for conversion objective': true,
          'Conversion tracking assisted by Google Analytics': true
        },
        'SMO activities': {
          'Monthly report generation with insights': true,
          "Next month's line of action": true
        },
        'Customer Support': {
          'Email Support': true,
          'Phone Support': true,
          'Chat Support': true
        }
      }
    }
  ]

  return (
    <PackagesSectionWrapper title="SMO Packages">
      <div className="flex gap-6 mt-4 lg:mt-6 xl:mt-8">
        {smoPackages.map((smoPackage, index) => (
          <div
            key={index}
            className="flex-1 bg-white p-6 border border-secondary/60 relative">
            {index === 1 && (
              <div className="best-sller absolute w-20 top-0 right-0 translate-x-[40%] -translate-y-[40%]">
                <img src={bestSeller} alt="best seller" />
              </div>
            )}
            <div className="text-2xl font-semibold">{smoPackage.type}</div>
            <div className="text-xl mt-2 font-semibold">{smoPackage.price}</div>
            <Link to="/contact-us" className="block my-5">
              <Button
                className="w-full font-highlight text-base border-2 border-accent bg-white text-accent hover:text-white hover:border-primary"
                size={'lg'}>
                Get started
              </Button>
            </Link>
            <div className="mt-4">
              {Object.entries(smoPackage.points).map(([key, value], index) => (
                <div key={index}>
                  <div className="text-lg mt-6 font-semibold">{key}</div>
                  <div className="mt-2">
                    {Object.entries(value).map(([key, value], index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center leading-7">
                        <div className="font-medium">{key}</div>
                        <div>
                          {typeof value === 'number' ? (
                            <p className="font-semibold text-lg tracking-wider font-main">
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
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PackagesSectionWrapper>
  )
}
