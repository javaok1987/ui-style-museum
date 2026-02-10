import type { StyleData } from '../types/style'

interface StatCardsProps {
  style: StyleData
}

const stats = [
  { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', sub: 'from last month', icon: '📊' },
  { label: 'Active Users', value: '+2350', change: '+180.1%', sub: 'from last month', icon: '👥' },
  { label: 'Sales', value: '+12,234', change: '+19%', sub: 'from last month', icon: '📈' },
]

export default function StatCards({ style }: StatCardsProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className={`${style.card} p-4 style-transition`}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium opacity-60">{s.label}</p>
            <span className="text-base">{s.icon}</span>
          </div>
          <p className="text-2xl font-bold tracking-tight">{s.value}</p>
          <p className={`text-xs mt-1 ${style.highlight} opacity-80`}>
            {s.change} <span className="opacity-50">{s.sub}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
