// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
//   FaWhatsapp
// } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

import { navLinks, services } from '@/lib/navbar-link'
import { CONSTANTS } from '@/utils/constants'
import { FaRegAddressCard } from 'react-icons/fa6'

export default function Footer() {
  // const socialMedia = [
  //   {
  //     name: 'Instagram',
  //     url: 'https://www.instagram.com/wearegrowigh/',
  //     icon: <FaInstagram size={32} />
  //   },
  //   {
  //     name: 'Facebook',
  //     url: 'https://www.facebook.com/wearegrowigh/',
  //     icon: <FaFacebook size={32} />
  //   },
  //   {
  //     name: 'LinkedIn',
  //     url: 'https://www.linkedin.com/company/growigh',
  //     icon: <FaLinkedin size={32} />
  //   },
  //   {
  //     name: 'Twitter',
  //     url: 'https://twitter.com/WeareGrowigh',
  //     icon: <FaTwitter size={32} />
  //   },
  //   {
  //     name: 'WhatsApp',
  //     url: 'https://api.whatsapp.com/send/?phone=916263424118&text&app_absent=0',
  //     icon: <FaWhatsapp size={32} />
  //   }
  // ]
  return (
    <footer className="bg-[#100c08] text-white pt-6 sm:pt-[5rem] pb-4">
      <div className="container sm:grid sm:grid-cols-2 lg:grid-cols-6 sm:gap-16 px-12 md:px-16 font-sub">
        <div className="sm:col-span-2">
          <p className="font-logo text-3xl lg:text-4xl">WASHINGTON ADVERT</p>
          <p className="font-highlight mt-4">
            Get Started Today, Supercharge Your Digital Presence.
          </p>
        </div>
        <div className="mt-6  sm:mt-0 flex flex-col gap-1 font-sub text-lg font-medium">
          <p className="underline text-base mb-1">Links</p>
          {navLinks?.map((nav, index) => {
            return (
              <div key={index}>
                {!Object.prototype.hasOwnProperty.call(
                  nav,
                  nav.title.toLowerCase()
                ) ? (
                  <Link
                    key={index}
                    to={nav.href}
                    className="hover:text-secondary text-sm md:text-base font-normal hover:scale-105 transition-all duration-300">
                    {nav.title}
                  </Link>
                ) : null}
              </div>
            )
          })}
        </div>
        <div className="mt-6 sm:mt-0 flex flex-col gap-1 font-sub text-lg font-medium">
          <p className="underline text-base mb-1">Services</p>
          {services.map((nav, index) => {
            return (
              <Link
                key={index}
                to={nav.href}
                className="hover:text-secondary text-sm md:text-base font-normal hover:scale-105 transition-all duration-300">
                {nav.title}
              </Link>
            )
          })}
        </div>
        <div className="mt-6 sm:mt-0 sm:col-span-2 font-medium flex flex-col">
          <p className="underline text-base mb-3">Contact Us</p>
          {CONSTANTS.EMAIL && (
            <div className="flex gap-3 items-center w-full hover:scale-105 transition duration-300">
              <Mail size={24} className="" />
              <a
                className="text-base sm:text-lg"
                aria-label={`Send us an email on ${CONSTANTS.EMAIL}`}
                href={`mailto:${CONSTANTS.EMAIL}`}>
                {CONSTANTS.EMAIL}
              </a>
            </div>
          )}
          {CONSTANTS.PHONE && (
            <div className="mt-2 flex gap-3 items-center w-full hover:scale-105 transition duration-300">
              <Phone size={24} className="" />
              <a
                className="text-base sm:text-lg"
                aria-label={`Call us on ${CONSTANTS.PHONE}`}
                href={`tel:${CONSTANTS.PHONE}`}>
                {CONSTANTS.PHONE}
              </a>
            </div>
          )}
          {CONSTANTS.ADDRESS && (
            <div className="mt-2 flex gap-3 items-center w-full hover:scale-105 transition duration-300">
              <FaRegAddressCard size={24} className="" />
              <a
                className="text-base sm:text-lg leading-5"
                aria-label={`Our address is ${CONSTANTS.ADDRESS.TEXT}`}
                target="_blank"
                rel="noreferrer"
                href={CONSTANTS.ADDRESS.URL}>
                {CONSTANTS.ADDRESS.TEXT}
              </a>
            </div>
          )}
          <div className="mt-4">
            <iframe
              title="Washington Advert Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49648.9159627401!2d-77.1392585550314!3d38.94552052406329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c9727e5e5119%3A0x7e7d95a3d3611731!2sWashington%20Advert!5e0!3m2!1sen!2sin!4v1723027712217!5m2!1sen!2sin"
              width=""
              height=""
              className="border-0 rounded-sm w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      {/* <div className="social-media bg-[#16161d] mb-6 mt-8 md:mb-12 md:mt-14 flex justify-center gap-10 sm:gap-12 md:gap-14 lg:gap-16 py-6 text-whiteout">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            aria-label={`Visit our ${social.name} page`}
            rel="noreferrer"
            className="hover:text-amber-300 hover:scale-105 text-amber-100 text-4xl">
            {social.icon}
          </a>
        ))}
      </div> */}

      <div className="mt-6 mb-4 big-name uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-extrabold text-center font-logo text-accent">
        Washington Advert
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 justify-center font-medium font-sub text-xs md:text-base text-center mb-4 md:mb-6">
        <a
          href="/privacy-policy"
          target="_blank"
          aria-label={`Visit our privacy policy page`}
          rel="noreferrer"
          className="hover:scale-[1.05] transition-all duration-300">
          Privacy Policy
        </a>
        <a
          href="/terms-and-condition"
          target="_blank"
          aria-label={`Visit our terms and condition page`}
          rel="noreferrer"
          className="hover:scale-[1.05] transition-all duration-300">
          Terms & Conditions
        </a>
        <a
          href="/refund-policy"
          target="_blank"
          aria-label={`Visite our refund policy page`}
          rel="noreferrer"
          className="hover:scale-[1.1] transition-all duration-300 text-center mt-1 md:mt-0 col-span-2 md:col-span-1">
          Refund Policy
        </a>
      </div>
      <p className="text-sm font-medium font-sub text-center py-2">
        © 2024 Washington Advert. All Rights Reserved.
      </p>
    </footer>
  )
}
