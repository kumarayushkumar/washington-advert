export default function Image({
  className,
  image,
  title
}: {
  className: string
  image: string
  title: string
}) {
  return (
    <div className={className}>
      <img
        src={image}
        alt={title}
        className="max-h-72 lg:min-w-[34rem] object-cover object-center mx-auto"
      />
    </div>
  )
}
