import { TiTick, TiTimes } from 'react-icons/ti'
import { Link } from 'react-router-dom'

import bestSeller from '/assets/images/best-seller.webp'
import { Button } from '../ui/button'
import PackagesSectionWrapper from '../PackagesSectionWrapper'

export default function SeoPackages() {
  const seoPackages = [
    {
      type: 'Basic',
      price: '$550/Month',
      description: {
        'No. of Keywords': 30,
        'Landing Pages': 5,
        'Backlinks(per month)': 120
      },
      points: {
        'First Hand SEO Analysis': {
          'Pre-Optmization Website analysis': true,
          "Competitor's Analysis": true,
          'Keyword Research and Analysis': true,
          'Baseline Ranking Check': true,
          'Duplicate Content Check': true,
          'Google Penalty Check': true,
          'Back Link Analysis': false
        },
        'On Page Optimization Activities': {
          'Website Cononical Check': true,
          'Title tag Optimization': true,
          'Meta Tags Optimization': true,
          'Heading Tags Optimization': false,
          'Image Alt Tags Optimization': true,
          'Content Optimization': true,
          'SEO Friendly URL Setup': true,
          'Site navigation Analysis': false,
          '404 Page Implementation': true,
          'Broken Link Check': false,
          'Website speed check': true,
          'Google Indexed page check': true,
          'Robots.txt Creation': true,
          'Google XML sitemap': true,
          'PHP Sitemap Setup': false,
          'Google Webmaster Tools Setup': true,
          'Google Analystics setup': true,
          'Structured Data setup': false,
          'On site blog Section Creation': true,
          'On site Blog posting(Draft Copy)- Applicable from 3rd Month': 1
        },
        'Off-page Optimization Activities': {
          'Search Engine Submission': 10,
          'Article Writing': 1,
          'Article Posting': 1,
          'Article Bookmarking': 10,
          'Classified Submissions': 10,
          'Business Listing': 5,
          'Blog Writing': 1,
          'Blog Posting': 1,
          'Blog Bookmarking': 10,
          'On-page Blog': 1,
          'On-Page Blog Bookmarking': 5,
          'Image Sharing': 5,
          'PPT Submissions': 1,
          'PPT Bookmarking': 10,
          'Social Bookmarking': 30,
          'PDF Sharing': 1,
          'PDF Bookmarking': 5,
          'Profile Creation': 5,
          'Quora Answering': 1,
          'Info Graphic Creation': 1,
          'Info Graphic Bookmarking': 5,
          'Video Marketing (if Client provides)': true,
          'Press Release (If Client Provides News)': true
        },
        'SMO Activities': {
          Facebook: {
            'Facebook Profile Creation': false,
            'Facebook Fan Page Creation': false,
            'Facebook Posting & Sharing': false
          },
          Instagram: {
            'Instagram Business Profile Creation': false,
            'Creation of Interactive Branded Hashtag': false,
            'Instagram Posting': false
          },
          Twitter: {
            'Twitter Profile Creation': false,
            'Twitter Post': false
          },
          Pinterest: {
            'Account Creation/Management': false,
            'Pinterest Followers': false,
            'Updating of pin boards': false,
            'Pins (If Client Provides Images)': false
          }
        },
        Reports: {
          'Monthly Website Analytics Report': true,
          'Monthly Keywords Ranking Report': true,
          'Monthly Off Page Submission Report': true
        },
        'Customer Support': {
          Email: true,
          Phone: true,
          Chat: true
        }
      }
    },
    {
      type: 'Standard',
      price: '$800/Month',
      description: {
        'No. of Keywords': 40,
        'Landing Pages': 10,
        'Backlinks(per month)': 210
      },
      points: {
        'First Hand SEO Analysis': {
          'Pre-Optimization Website Analysis': true,
          'Competitor Analysis': true,
          'Keyword Research & Analysis': true,
          'Baseline Ranking Check': true,
          'Duplicate Content Check': true,
          'Google Penalty Check': true,
          'Back Link Analysis (If required)': false
        },
        'On-page Optimization Activities': {
          'Website Canonical Check': true,
          'Title Tag Optimization': true,
          'META Tags Optimization': true,
          'Heading Tags Optimization': false,
          'Image Alt Tags Optimization': true,
          'Content Optimization': true,
          'SEO Friendly URL Setup': true,
          'Site Navigation Analysis': false,
          '404 Page Implementation': true,
          'Broken Links Check': false,
          'Website Speed Check': true,
          'Google Indexed Pages Check': true,
          'Robots.txt Creation': true,
          'Google XML Sitemap': true,
          'php Sitemap Setup': false,
          'Google Webmasters Tool Setup': true,
          'Google Analytics Setup': true,
          'Structured Data Setup': false,
          'On Site Blog Section Creation': true,
          'On Site Blog Posting (Draft Copy)– Applicable from 3rd month': 1
        },
        'Off-page Optimization Activities': {
          'Search Engine Submission': 20,
          'Article Writing': 2,
          'Article Posting': 2,
          'Article Bookmarking': 20,
          'Classified Submissions': 20,
          'Business Listing': 6,
          'Blog Writing': 2,
          'Blog Posting': 2,
          'Blog Bookmarking': 20,
          'On page Blog': 2,
          'On Page Blog Bookmarking': 10,
          'Image sharing': 10,
          'PPT Submissions': 2,
          'PPT Bookmarking': 20,
          'Social Bookmarking': 40,
          'PDF Sharing': 2,
          'PDF Bookmarking': 10,
          'Profile Creation': 6,
          'Quora Answering': 2,
          'Info Graphic Creation': 2,
          'Info Graphic Bookmarking': 10,
          'Video Marketing (if Client provides)': true,
          'Press Release (If Client Provides News)': true
        },
        'SMO Activities': {
          Facebook: {
            'Facebook Profile Creation': true,
            'Facebook Fan Page Creation': true,
            'Facebook Posting & Sharing': 4
          },
          Instagram: {
            'Instagram Business Profile Creation': true,
            'Creation of Interactive Branded Hashtag': true,
            'Instagram Posting': 4
          },
          Twitter: {
            'Twitter Profile Creation': true,
            'Twitter Post': 4
          },
          Pinterest: {
            'Account Creation/Management': false,
            'Pinterest Followers': false,
            'Updating of pin boards': false,
            'Pins (If Client Provides Images)': false
          }
        },
        Reports: {
          'Monthly Website Analytics Report': true,
          'Monthly Keywords Ranking Report': true,
          'Monthly Off Page Submission Report': true
        },
        'Customer Support': {
          Email: true,
          Phone: true,
          Chat: true
        }
      }
    },
    {
      type: 'Professional',
      price: '$1100/Month',
      description: {
        'No. of Keywords': 50,
        'Landing Pages': 15,
        'Backlinks(per month)': 300
      },
      points: {
        'First Hand SEO Analysis': {
          'Pre-Optimization Website Analysis': true,
          'Competitor Analysis': true,
          'Keyword Research & Analysis': true,
          'Baseline Ranking Check': true,
          'Duplicate Content Check': true,
          'Google Penalty Check': true,
          'Back Link Analysis (If required)': true
        },
        'On-page Optimization Activities': {
          'Website Canonical Check': true,
          'Title Tag Optimization': true,
          'META Tags Optimization': true,
          'Heading Tags Optimization': true,
          'Image Alt Tags Optimization': true,
          'Content Optimization': true,
          'SEO Friendly URL Setup': true,
          'Site Navigation Analysis': true,
          '404 Page Implementation': true,
          'Broken Links Check': true,
          'Website Speed Check': true,
          'Google Indexed Pages Check': true,
          'Robots.txt Creation': true,
          'Google XML Sitemap': true,
          'php Sitemap Setup': false,
          'Google Webmasters Tool Setup': true,
          'Google Analytics Setup': true,
          'Structured Data Setup': false,
          'On Site Blog Section Creation': true,
          'On Site Blog Posting (Draft Copy) – Applicable from 3rd month': 2
        },
        'Off-page Optimization Activities': {
          'Search Engine Submission': 30,
          'Article Writing': 3,
          'Article Posting': 3,
          'Article Bookmarking': 30,
          'Classified Submissions': 30,
          'Business Listing': 7,
          'Blog Writing': 3,
          'Blog Posting': 3,
          'Blog Bookmarking': 30,
          'On page Blog': 3,
          'On Page Blog Bookmarking': 15,
          'Image sharing': 15,
          'PPT Submissions': 3,
          'PPT Bookmarking': 30,
          'Social Bookmarking': 50,
          'PDF Sharing': 3,
          'PDF Bookmarking': 15,
          'Profile Creation': 7,
          'Quora Answering': 3,
          'Info Graphic Creation': 3,
          'Info Graphic Bookmarking': 15,
          'Video Marketing (if Client provides)': true,
          'Press Release (If Client Provides News)': true
        },
        'SMO Activities': {
          Facebook: {
            'Facebook Profile Creation': true,
            'Facebook Fan Page Creation': true,
            'Facebook Posting & Sharing': 8
          },
          Instagram: {
            'Instagram Business Profile Creation': true,
            'Creation of Interactive Branded Hashtag': true,
            'Instagram Posting': 8
          },
          Twitter: {
            'Twitter Profile Creation': true,
            'Twitter Post': 8
          },
          Pinterest: {
            'Account Creation/Management': true,
            'Pinterest Followers': true,
            'Updating of pin boards': 4,
            'Pins (If Client Provides Images)': true
          }
        },
        Reports: {
          'Monthly Website Analytics Report': true,
          'Monthly Keywords Ranking Report': true,
          'Monthly Off Page Submission Report': true
        },
        'Customer Support': {
          Email: true,
          Phone: true,
          Chat: true
        }
      }
    },
    {
      type: 'Enterprise',
      price: '$1800/Month',
      description: {
        'No. of Keywords': 100,
        'Landing Pages': 20,
        'Backlinks(per month)': 600
      },
      points: {
        'First Hand SEO Analysis': {
          'Pre-Optimization Website Analysis': true,
          'Competitor Analysis': true,
          'Keyword Research & Analysis': true,
          'Baseline Ranking Check': true,
          'Duplicate Content Check': true,
          'Google Penalty Check': true,
          'Back Link Analysis (If required)': true
        },
        'On-page Optimization Activities': {
          'Website Canonical Check': true,
          'Title Tag Optimization': true,
          'META Tags Optimization': true,
          'Heading Tags Optimization': true,
          'Image Alt Tags Optimization': true,
          'Content Optimization': true,
          'SEO Friendly URL Setup': true,
          'Site Navigation Analysis': true,
          '404 Page Implementation': true,
          'Broken Links Check': true,
          'Website Speed Check': true,
          'Google Indexed Pages Check': true,
          'Robots.txt Creation': true,
          'Google XML Sitemap': true,
          'php Sitemap Setup': true,
          'Google Webmasters Tool Setup': true,
          'Google Analytics Setup': true,
          'Structured Data Setup': false,
          'On Site Blog Section Creation': true,
          'On Site Blog Posting (Draft Copy) – Applicable from 3rd month': 3
        },
        'Off-page Optimization Activities': {
          'Search Engine Submission': 40,
          'Article Writing': 6,
          'Article Posting': 6,
          'Article Bookmarking': 40,
          'Classified Submissions': 80,
          'Business Listing': 10,
          'Blog Writing': 6,
          'Blog Posting': 6,
          'Blog Bookmarking': 80,
          'On page Blog': 6,
          'On Page Blog Bookmarking': 80,
          'Image sharing': 40,
          'PPT Submissions': 8,
          'PPT Bookmarking': 40,
          'Social Bookmarking': 80,
          'PDF Sharing': 6,
          'PDF Bookmarking': 40,
          'Profile Creation': 10,
          'Quora Answering': 10,
          'Info Graphic Creation': 6,
          'Info Graphic Bookmarking': 50,
          'Video Marketing (if Client provides)': true,
          'Press Release (If Client Provides News)': true
        },
        'SMO Activities': {
          Facebook: {
            'Facebook Profile Creation': true,
            'Facebook Fan Page Creation': true,
            'Facebook Posting & Sharing': 16
          },
          Instagram: {
            'Instagram Business Profile Creation': true,
            'Creation of Interactive Branded Hashtag': true,
            'Instagram Posting': 8
          },
          Twitter: {
            'Twitter Profile Creation': true,
            'Twitter Post': 16
          },
          Pinterest: {
            'Account Creation/Management': true,
            'Pinterest Followers': true,
            'Updating of pin boards': 8,
            'Pins (If Client Provides Images)': true
          }
        },
        Reports: {
          'Monthly Website Analytics Report': true,
          'Monthly Keywords Ranking Report': true,
          'Monthly Off Page Submission Report': true
        },
        'Customer Support': {
          Email: true,
          Phone: true,
          Chat: true
        }
      }
    }
  ]

  return (
    <PackagesSectionWrapper title="SEO Packages">
      <div className="grid md:grid-cols-4 gap-6 mt-4 lg:mt-6 xl:mt-8 relative">
        {seoPackages.map((seoPackage, index) => (
          <div
            key={index}
            className={`flex-1 bg-white p-6 border border-secondary/60 relative`}>
            {index === 1 && (
              <div className="best-sller absolute w-20 top-0 right-0 translate-x-[30%] -translate-y-[40%]">
                <img src={bestSeller} alt="best seller" />
              </div>
            )}
            <div className="text-2xl font-medium md:font-semibold">
              {seoPackage.type}
            </div>
            <div className="text-xl mt-2 font-medium md:font-semibold">
              {seoPackage.price}
            </div>
            <Link to="/contact-us" className="block my-5">
              <Button
                className="w-full font-highlight text-base border-2 border-accent bg-white text-accent hover:text-white hover:border-primary"
                size={'lg'}>
                Get started
              </Button>
            </Link>
            <div className="mt-4">
              <div className="mt-2 leading-7">
                {Object.entries(seoPackage.description).map(
                  ([key, value], index) => (
                    <div key={index} className="flex justify-between">
                      <div className="font-medium">{key}</div>
                      <div className="font-medium md:font-semibold text-lg tracking-wider font-main">
                        {value}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="mt-4">
              {Object.entries(seoPackage.points).map(([key, value], index) => (
                <div key={index}>
                  <div className="text-lg mt-6 font-medium md:font-semibold">
                    {key}
                  </div>
                  <div className="mt-2">
                    {Object.entries(value).map(([key, value], index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center leading-7">
                        <div className="font-medium">{key}</div>
                        <div>
                          {typeof value === 'number' ? (
                            <p className="font-medium md:font-semibold text-lg tracking-wider font-main">
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
