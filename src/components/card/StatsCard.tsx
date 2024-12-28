export default function StatsCard({
  icon,
  value,
  title
}: {
  icon: React.ReactNode
  value: string
  title: string
}) {
  // gradient in tailwindcss
  return (
    <div className="bg-white p-3 md:p-8 rounded-lg border-2 border-gray-200 hover:border-2 hover:border-accent/30 hover:shadow-lg transition duration-[400ms] ease-in-out">
      <div className="flex justify-between">
        <div className="text-center text-primary-500 text-accent">{icon}</div>
        <p className="text-2xl md:text-3xl lg:text-5xl text-secondary font-highlight ">
          {value}
        </p>
      </div>
      <p className="text-gray-700 mt-5 font-medium md:font-semibold font-highlight text-sm md:text-base lg:text-lg">
        {title}
      </p>
    </div>
  )
}
