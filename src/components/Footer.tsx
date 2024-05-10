import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { navLinks, services } from '@/lib/navbar-link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  const socialMedia = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/wearegrowigh/',
      icon: <FaInstagram size={32} />
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/wearegrowigh/',
      icon: <FaFacebook size={32} />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/growigh',
      icon: <FaLinkedin size={32} />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/WeareGrowigh',
      icon: <FaTwitter size={32} />
    },
    {
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send/?phone=916263424118&text&app_absent=0',
      icon: <FaWhatsapp size={32} />
    }
  ]
  return (
    <footer className="bg-[#100c08] text-white pt-[5rem] pb-4">
      <div className="container grid grid-cols-6 gap-16 px-16 font-sub">
        <div className="col-span-2">
          <p className="font-main text-xl sm:text-2xl md:text-text-3xl lg:text-4xl">
            WASHINGTON ADVERT
          </p>
          <p className="font-highlight mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
            nihil.
          </p>
        </div>
        <div className="flex flex-col gap-1 font-sub text-lg font-medium">
          <p className="underline text-sm mb-1">Links</p>
          {navLinks?.map((nav, index) => {
            return (
              <>
                {!Object.prototype.hasOwnProperty.call(
                  nav,
                  nav.title.toLowerCase()
                ) ? (
                  <Link
                    key={index}
                    to={nav.href}
                    className="hover:text-secondary hover:scale-105 transition-all duration-300">
                    {nav.title}
                  </Link>
                ) : null}
              </>
            )
          })}
        </div>
        <div className="flex flex-col gap-1 font-sub text-lg font-medium">
          <p className="underline text-sm mb-1">Services</p>
          {services.map((nav, index) => {
            return (
              <Link
                key={index}
                to={nav.href}
                className="hover:text-secondary hover:scale-105 transition-all duration-300">
                {nav.title}
              </Link>
            )
          })}
        </div>
        <div className="col-span-2 text-xl font-medium flex flex-col">
          <p className="underline text-sm mb-3">Contact Us</p>
          <div className="flex gap-3 items-center w-full hover:scale-105 transition duration-300">
            <Mail size={24} className="" />
            <a href="mailto:info@washingtonadvert.com">
              info@washingtonadvert.com
            </a>
          </div>
          <div className="mt-2 flex gap-3 items-center w-full hover:scale-105 transition duration-300">
            <Phone size={24} className="" />
            <a href="tel:6263424118">6263424118</a>
          </div>
        </div>
      </div>
      <div className="social-media bg-[#16161d] mb-6 mt-8 md:mb-12 md:mt-14 flex justify-center gap-10 sm:gap-12 md:gap-14 lg:gap-16 py-6 text-whiteout">
        {socialMedia.map(social => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-300 hover:scale-105 text-amber-100 text-4xl">
            {social.icon}
          </a>
        ))}
      </div>
      <div className="big-name uppercase text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-extrabold text-center font-main text-accent">
        Washington Advert
      </div>
      <p className="text-sm font-medium font-sub text-center">
        © 2024 Washington Advert. All Rights Reserved.
      </p>
    </footer>
  )
}
