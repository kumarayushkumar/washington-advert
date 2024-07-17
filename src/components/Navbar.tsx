import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { navLinks } from '@/lib/navbar-link'
import { MenuIcon, XIcon } from 'lucide-react'

export default function Navbar({ toggleZIndex }: { toggleZIndex: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    toggleZIndex()
  }

  return (
    <nav className="flex font-sub text-center items-center text-md font-medium">
      <div className="lg:hidden flex items-center">
        <button
          aria-label="toggle navbar"
          onClick={toggleMenu}
          className="focus:outline-none">
          {isOpen ? (
            <XIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          ) : (
            <MenuIcon className="h-7 w-7 sm:h-8 sm:w-8" />
          )}
        </button>
      </div>
      <ul className="lg:flex lg:justify-between gap-6 items-center hidden">
        {navLinks.map((nav, index) => {
          return (
            <li key={index} className="mt-2 lg:mt-0">
              <Link to={nav.href}>
                {Object.prototype.hasOwnProperty.call(
                  nav,
                  nav.title.toLowerCase()
                ) ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger>{nav.title}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {(
                        nav[nav.title.toLowerCase() as keyof typeof nav] as {
                          title: string
                          href: string
                        }[]
                      ).map((item, index) => {
                        return (
                          <Link key={index} to={item.href}>
                            <DropdownMenuItem>{item.title}</DropdownMenuItem>
                          </Link>
                        )
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div>{nav.title}</div>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
      <div
        className={`full-screen-menu text-black text-xl ${isOpen ? 'open' : ''}`}>
        <button onClick={toggleMenu} className="close-btn">
          <XIcon className="h-7 w-7 sm:h-8 sm:w-8" />
        </button>
        <ul>
          {navLinks.map((nav, index) => (
            <li key={index} className="mt-4">
              <Link to={nav.href} onClick={toggleMenu}>
                {Object.prototype.hasOwnProperty.call(
                  nav,
                  nav.title.toLowerCase()
                ) ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger>{nav.title}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {(
                        nav[nav.title.toLowerCase() as keyof typeof nav] as {
                          title: string
                          href: string
                        }[]
                      ).map((item, index) => {
                        return (
                          <Link key={index} to={item.href} onClick={toggleMenu}>
                            <DropdownMenuItem>{item.title}</DropdownMenuItem>
                          </Link>
                        )
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div>{nav.title}</div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
