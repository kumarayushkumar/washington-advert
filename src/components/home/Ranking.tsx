import img from '/assets/images/home/google-ranking.webp'

export default function Ranking() {
  return (
    <section id="ranking" className="grid lg:grid-cols-2 bg-whiteout">
      <div className="hidden lg:block">
        <img
          src={img}
          alt="Googel ranking"
          className="w-full h-full object-fit object-center mx-auto "
        />
      </div>
      <div className="py-12 md:py-16 px-10 sm:px-12 md:px-20 ranking-wrapper text-white">
        <p className="text-2xl font-highlight font-semibold">
          GROW TRAFFIC & INCREASE REVENUE
        </p>
        <p className="text-3xl font-sub mt-2 py-4 font-medium">
          Get Found on the 1st Page!
        </p>
        <p className="text-lg font-medium">
          We offer professional SEO services that help websites increase their
          organic search score drastically in order to compete for the highest
          rankings - even when it comes to highly competitive keywords.
        </p>
      </div>
    </section>
  )
}
