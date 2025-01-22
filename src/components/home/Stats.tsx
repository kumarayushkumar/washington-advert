import { Megaphone, Presentation, Smile, UserRound } from 'lucide-react'

import StatsCard from '../card/StatsCard'

export default function Stats() {
  const stats = [
    {
      icon: <Megaphone size={40} />,
      value: '330+',
      title: 'Market Collateral'
    },
    {
      icon: <UserRound size={40} />,
      value: '85+',
      title: 'Team Advisor'
    },
    {
      icon: <Presentation size={40} />,
      value: '850+',
      title: 'Projects Done'
    },
    {
      icon: <Smile size={40} />,
      value: '15+',
      title: 'Glorious Years'
    }
  ]
  return (
    <section id="stats" className=" bg-white py-12 md:py-20 ">
      <div className="md:flex justify-around grid grid-cols-2 gap-4 px-5">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            title={stat.title}
          />
        ))}
      </div>
    </section>
  )
}
