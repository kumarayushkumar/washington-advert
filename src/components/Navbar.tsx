import { Link } from 'react-router-dom'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function Navbar() {
  const navLinks = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Services',
      href: '/services',
      services: [
        {
          title: 'Web Designing',
          href: '/services/web-designing'
        },
        {
          title: 'SEO',
          href: '/services/seo'
        },
        {
          title: 'PPC',
          href: '/services/ppc'
        },
        {
          title: 'Social Media Marketing',
          href: '/services/social-media-marketing'
        },
        {
          title: 'Local SEO',
          href: '/services/local-seo'
        },
        {
          title: 'GMB',
          href: '/services/gmb'
        }
      ]
    },
    {
      title: 'Packages',
      href: '/packages'
    },
    {
      title: 'Reviews',
      href: '/review'
    },
    {
      title: 'Industries',
      href: '/industries'
    },
    {
      title: 'Combo Package',
      href: '/combo-package'
    },
    {
      title: 'Contact Us',
      href: '/contact-us'
    }
  ]

  return (
    <nav className="flex font-sub text-center items-center text-md font-medium">
      <ul className="flex justify-between gap-6 items-center">
        {navLinks.map((nav, index) => {
          return (
            <Link key={index} to={nav.href} onClick={() => {}}>
              {Object.prototype.hasOwnProperty.call(
                nav,
                nav.title.toLowerCase()
              ) ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>Services</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {(
                      nav[nav.title.toLowerCase() as keyof typeof nav] as {
                        title: string
                        href: string
                      }[]
                    ).map((item, index) => {
                      return (
                        <DropdownMenuItem key={index}>
                          <Link to={item.href}>{item.title}</Link>
                        </DropdownMenuItem>
                      )
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="">{nav.title}</div>
              )}
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}
