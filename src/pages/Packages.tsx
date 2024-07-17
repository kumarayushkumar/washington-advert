import PpcPackages from '@/components/packages/PpcPackages'
import SeoPackages from '@/components/packages/SeoPackages'
import SmoPackages from '@/components/packages/SmoPackages'
import WebDesigningPackages from '@/components/packages/WebDesigningPackages'
import PageHero from '@/components/PageHero'

export function Packages() {
  return (
    <section id="packages" className="">
      <div className="text-center text-whiteout bg-whiteout">
        <PageHero heading="Our Packages" />
      </div>
      <div className="py-6 md:py-10 flex flex-col gap-8 sm:gap-8 md:gap-12 lg:gap-14 xl:gap-16">
        <SeoPackages />
        <SmoPackages />
        <PpcPackages />
        <WebDesigningPackages />
      </div>
    </section>
  )
}
