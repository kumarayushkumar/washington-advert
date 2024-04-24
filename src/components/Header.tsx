import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="flex container text-white justify-between pt-8 px-16">
      <h1 className="font-main font-bold text-5xl">Washington Advert</h1>
      <Navbar />
    </header>
  )
}
