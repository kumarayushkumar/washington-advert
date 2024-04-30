import React from 'react'

export default function IndustriesCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col border-2 rounded-lg shadow-md hover:shadow-slate-300 hover:shadow-lg py-8 group hover:scale-[1.0175]  transition duration-300 ease-in-out">
      <div className="text-4xl mx-auto text-secondary group-hover:scale-[1.15] transition duration-[450ms] ease-in-out">
        {icon}
      </div>
      <h2 className="mt-6 text-slate-700 text-xl font-medium  group-hover:scale-105 transition duration-[450ms] ease-in-out">
        {title}
      </h2>
      <p className="text-sm md:text-md text-gray-700 pt-4 md:pt-6 px-8">
        {description}
      </p>
    </div>
  )
}
