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
      <div className="py-10 flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <SeoPackages />
        <SmoPackages />
        <PpcPackages />
        <WebDesigningPackages />
      </div>
    </section>
  )
}
