import { Link } from 'react-router-dom'

import PackagesSectionWrapper from '../PackagesSectionWrapper'
import { Button } from '../ui/button'
import { TiTick, TiTimes } from 'react-icons/ti'

export default function PpcPackages() {
  const ppcPackages = [
    {
      type: 'PPC-STARTER',
      price: '$339/Month',
      points: {
        'Setup fee': '$200',
        'Advertising budget': '$0-$2999/M',
        'Full optimization': '1/M',
        'Ad groups': 'up to 5',
        'Ads per group': 'up to 2 ads per ad Group',
        Keywords: 'Up to 50',
        'Negative keywords': true,
        'Conversion tracking': true,
        'Monthly Reporting': true,
        'No Contracts': true,
        'Ad networks': 'Google Network',
        'Mobile Ads': false,
        'Call Extension': true,
        'Sitelink Extension': true,
        Remarketing: false,
        'Monthly Conference calls': false,
        'Display/Image ads': false
      }
    },
    {
      type: 'PPC-SERIOUS',
      price: '$439/Month',
      points: {
        'Setup fee': '$350',
        'Advertising budget': '$3000-$4999/M',
        'Full optimization': '2/M',
        'Ad groups': 'up to 10',
        'Ads per group': 'up to 3 ads per ad Group',
        Keywords: 'Up to 100',
        'Negative keywords': true,
        'Conversion tracking': true,
        'Monthly Reporting': true,
        'No Contracts': true,
        'Ad networks': 'Google Network',
        'Mobile Ads': false,
        'Call Extension': true,
        'Sitelink Extension': true,
        Remarketing: true,
        'Monthly Conference calls': true,
        'Display/Image ads': false
      }
    },
    {
      type: 'PPC-STRATEGY',
      price: '$639/Month',
      points: {
        'Setup fee': '$500',
        'Advertising budget': '$5000-$7500/M',
        'Full optimization': '3/M',
        'Ad groups': 'up to 20',
        'Ads per group': 'up to 4 ads per ad Group',
        Keywords: 'Up to 200',
        'Negative keywords': true,
        'Conversion tracking': true,
        'Monthly Reporting': true,
        'No Contracts': true,
        'Ad networks': 'Google Network',
        'Mobile Ads': false,
        'Call Extension': true,
        'Sitelink Extension': true,
        Remarketing: true,
        'Monthly Conference calls': true,
        'Display/Image ads': false
      }
    },
    {
      type: 'PPC-STERIOD',
      price: '$939/Month',
      points: {
        'Setup fee': '$750',
        'Advertising budget': '$7500-10000/M',
        'Full optimization': '5/M',
        'Ad groups': 'up to 40',
        'Ads per group': 'up to 6 ads per ad Group',
        Keywords: 'Up to 750',
        'Negative keywords': true,
        'Conversion tracking': true,
        'Monthly Reporting': true,
        'No Contracts': true,
        'Ad networks': 'Google, Yahoo, Bing & FB',
        'Mobile Ads': true,
        'Call Extension': true,
        'Sitelink Extension': true,
        Remarketing: true,
        'Monthly Conference calls': true,
        'Display/Image ads': 'up to 2 ads/M '
      }
    }
  ]
  return (
    <PackagesSectionWrapper title="PPC Packages">
      <div className="flex gap-6 mt-4 lg:mt-6 xl:mt-8">
        {ppcPackages.map((ppcPackage, index) => (
          <div
            key={index}
            className="flex-1 bg-white p-6 border border-secondary/60">
            <div className="text-2xl font-semibold">{ppcPackage.type}</div>
            <div className="text-xl mt-2 font-semibold">{ppcPackage.price}</div>
            <Link to="/contact-us" className="block my-5">
              <Button
                className="w-full font-highlight text-base border-2 border-accent bg-white text-accent hover:text-white hover:border-primary"
                size={'lg'}>
                Get started
              </Button>
            </Link>
            <div className="mt-4">
              {Object.entries(ppcPackage.points).map(([key, value], index) => (
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </PackagesSectionWrapper>
  )
}
