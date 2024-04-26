import { Button } from '../ui/button'
import Image from './Image'

export default function ServiceCard({
  index,
  title,
  description,
  image,
  buttonText
}: {
  className: string
  index: number
  title: string
  description: string
  image: string
  buttonText: string
}) {
  return (
    <div className="mt-16 backdrop-blur-md backdrop-filter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Image className="md:hidden" image={image} title={title} />
        {index % 2 === 0 ? (
          <Image
            className="item-center hidden md:block rounded-tr-full"
            image={image}
            title={title}
          />
        ) : null}
        <div className=" flex flex-col items-start justify-center pl-8 md:pl-14 ">
          <p className="text-2xl md:text-3xl lg:text-4xl font-sub font-semibold">
            {title}
          </p>
          <p className="text-md lg:text-lg xl:text-xl font-light mt-1 md:mt-2">
            {description}
          </p>
          <Button
            variant={'primary'}
            className="mt-6 bg-rose-600 border-primary">
            {buttonText}
          </Button>
        </div>
        {index % 2 !== 0 ? (
          <Image className="hidden md:block" image={image} title={title} />
        ) : null}
      </div>
    </div>
  )
}
