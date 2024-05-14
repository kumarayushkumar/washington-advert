import { Link } from 'react-router-dom'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { navLinks } from '@/lib/navbar-link'

export default function Navbar() {
  return (
    <nav className="flex font-sub text-center items-center text-md font-medium">
      <ul className="flex justify-between gap-6 items-center">
        {navLinks.map((nav, index) => {
          return (
            <li>
              <Link key={index} to={nav.href}>
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
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
