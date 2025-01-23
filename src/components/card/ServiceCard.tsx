import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import Image from './Image'

export default function ServiceCard({
  index,
  title,
  description,
  image,
  buttonText,
  link
}: {
  className: string
  index: number
  title: string
  description: string
  image: string
  buttonText: string
  link: string
}) {
  const navigate = useNavigate()
  const handleClick = (link: string) => {
    navigate(link)
  }
  return (
    <div className="mt-10 backdrop-blur-md backdrop-filter">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Image className="lg:hidden" image={image} title={title} />
        {index % 2 === 0 ? (
          <Image
            className="item-center hidden lg:block rounded-tr-full"
            image={image}
            title={title}
          />
        ) : null}
        <div className=" flex flex-col items-start justify-center pl-8 md:pl-14 ">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
            {title}
          </p>
          <p className="text-md lg:text-lg xl:text-xl font-light mt-1 md:mt-2">
            {description}
          </p>
          <Button
            variant={'primary'}
            className="mt-6 bg-rose-600 border-primary"
            onClick={() => {
              handleClick(link)
            }}>
            {buttonText}
          </Button>
        </div>
        {index % 2 !== 0 ? (
          <Image className="hidden lg:block" image={image} title={title} />
        ) : null}
      </div>
    </div>
  )
}
