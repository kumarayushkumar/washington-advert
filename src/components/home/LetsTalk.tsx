import img from '/assets/images/home/lets-talk.webp'
import { Link } from 'react-router-dom'

export default function LetsTalk() {
  return (
    <section id="lets-talk" className="grid grid-cols-7 bg-whiteout">
      <div className="col-span-2"></div>

      <div className="col-span-5 lets-talk-action-wrapper relative py-40 ">
        <div className="lets-talk-action ml-72">
          <div className="text-white font-bold font-sub text-7xl mb-16">
            <p>What are you</p>
            <p className="">waiting for?</p>
          </div>
          <Link
            className="text-white ml-2 text-xl py-2 px-6 border-2 border-whiteout hover:bg-accent hover:border-accent"
            to={'/contact-us'}>
            Let's talk
          </Link>
        </div>
        <div className="absolute z-10 top-1/2 -translate-y-1/2 -left-[18rem]">
          <img src={img} alt="Image" className="h-[28rem]" />
        </div>
      </div>
    </section>
  )
}
