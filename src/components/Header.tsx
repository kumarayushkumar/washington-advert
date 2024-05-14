import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import { navLinks } from '@/lib/navbar-link'

export default function Header() {
  const location = useLocation()
  const bgColor = navLinks.find(
    link => link.href.split('/')[1] === location.pathname.split('/')[1]
  )?.bgColor
  return (
    <header
      className={`pb-4 ${bgColor} flex text-white justify-between pt-8 px-16`}>
      <h1 className={`font-main font-bold text-5xl`}>Washington Advert</h1>
      <Navbar />
    </header>
  )
}
