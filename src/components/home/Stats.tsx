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
    <section id="stats" className=" bg-white py-10 ">
      <div className="flex justify-around">
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
