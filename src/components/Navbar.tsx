import { Link } from 'react-router-dom'

export default function Navbar() {
  const navLinks = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Services',
      href: '/services'
    },
    {
      title: 'Packages',
      href: '/packages'
    },
    {
      title: 'Testimonials',
      href: '/testimonials'
    },
    {
      title: 'Industries',
      href: '/industries'
    },
    {
      title: 'Contact Us',
      href: '/contact-us'
    },
    {
      title: 'About Us',
      href: '/about-us'
    }
  ]

  return (
    <nav className="flex font-sub text-center items-center text-lg font-medium">
      <ul className="flex justify-between gap-6 items-center">
        {navLinks.map((nav, index) => {
          return (
            <Link key={index} to={nav.href} onClick={() => {}}>
              <div className="">{nav.title}</div>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}
