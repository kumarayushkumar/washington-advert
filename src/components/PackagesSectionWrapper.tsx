export default function PackagesSectionWrapper({
  children,
  title
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <section id="">
      <div className="px-16 lg:px-20 xl:px-32">
        <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold">
          {title}
        </div>
        {children}
      </div>
    </section>
  )
}
