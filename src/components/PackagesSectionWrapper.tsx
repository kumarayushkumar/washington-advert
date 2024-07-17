export default function PackagesSectionWrapper({
  children,
  title
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <section id={title.toLowerCase().split(' ').join('-')}>
      <div className="px-6 md:px-12 lg:px-20 xl:px-20 container">
        <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium md:font-semibold">
          {title}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-4">{children}</div>
         */}
        {children}
      </div>
    </section>
  )
}
