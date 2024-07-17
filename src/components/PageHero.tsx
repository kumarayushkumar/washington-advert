export default function PageHero({ heading }: { heading: string }) {
  return (
    <>
      <div className="bg-accent">
        <h1 className="text-3xl sm:text-4xl md:text-5xl py-6 md:pt-24 font-sub font-medium md:font-semibold">
          {heading}
        </h1>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 120">
        <path
          fill="#0A3D91"
          fillOpacity="1"
          d="M0,128L120,144C240,160,480,192,720,192C960,192,1200,160,1320,144L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg>
    </>
  )
}
