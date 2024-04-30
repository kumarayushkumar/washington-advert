import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <header
      className={`pb-4 ${isHome ? '' : 'bg-secondary'} flex text-white justify-between pt-8 px-16`}>
      <h1 className="font-main font-bold text-5xl">Washington Advert</h1>
      <Navbar />
    </header>
  )
}
