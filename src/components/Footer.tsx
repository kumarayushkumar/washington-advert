import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-accent text-white pt-12 pb-8">
      <p className=" px-20 font-main text-3xl">WASHINGTON ADVERT</p>
      <div className="social-media bg-secondary my-10 flex justify-center gap-10 py-4 text-whiteout">
        <a
          href="https://www.instagram.com/wearegrowigh/"
          target="_blank"
          rel="noopener noreferrrer">
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/wearegrowigh/"
          target="_blank"
          rel="noopener noreferrrer">
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/company/growigh"
          target="_blank"
          rel="noopener noreferrrer">
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/WeareGrowigh"
          target="_blank"
          rel="noopener noreferrrer">
          <FaTwitter />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=916263424118&text&app_absent=0"
          target="_blank"
          rel="noopener noreferrrer">
          <FaWhatsapp />
        </a>
      </div>
      <p className="text-sm font-medium text-center">
        © 2024 Washington Advert. All Rights Reserved.
      </p>
    </footer>
  )
}
