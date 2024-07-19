export default function HomeOverview() {
  return (
    <section
      id="home-overview"
      className="px-10 md:px-16 py-10 md:py-20 grid md:grid-cols-3 bg-whiteout container">
      <div className="hidden md:block text-accent col-span-1 text-center uppercase text-lg font-medium mt-8">
        Digital Agency
      </div>
      <div className="col-span-2">
        <div className="text-4xl md:text-6xl font-highlight">
          <p>A Brand-first</p>
          <p>Digital Agency</p>
        </div>
        <p className="pt-8 md:pt-12 text-slate-600">
          We are a passionate team of strategists, creatives, and storytellers
          who weave compelling narratives across all digital channels. From
          cutting-edge website design to data-driven social media campaigns, we
          push boundaries to deliver results that not only resonate but ignite
          brand growth. We don't just follow trends, we set them, ensuring your
          brand stays ahead of the curve in this ever-evolving digital world.
        </p>
      </div>
    </section>
  )
}
