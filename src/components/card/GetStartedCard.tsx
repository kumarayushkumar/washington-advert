import { cn } from '@/lib/utils'

export default function GetStartedCard({
  className,
  content
}: {
  className?: string
  content: string
}) {
  return (
    <div
      className={cn(
        'bg-secondary my-12 rounded-lg md:px-6 md:py-4 lg:px-8 lg:py-6 font-sub text-xl text-white hover:scale-[1.01] transition-all duration-300',
        className
      )}>
      {content}
    </div>
  )
}
