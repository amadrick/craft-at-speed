import { ReactNode } from 'react'
import Avatar from './Avatar'

interface OverviewMetric {
  label: string
  value: string
  iconBg: string
  icon: ReactNode
}

interface ActivityItem {
  name: string
  initials: string
  avatarColor: string
  desc: string
  time: string
}

const overviewMetrics: OverviewMetric[] = [
  {
    label: 'Active Users',
    value: '2,847',
    iconBg: 'bg-blue-0',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1074d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: 'Avg. Session',
    value: '12m 34s',
    iconBg: 'bg-[#ffedd4]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffa238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: 'Conversion',
    value: '4.2%',
    iconBg: 'bg-[#dcfce7]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#49bf4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: 'Revenue/User',
    value: '$89.42',
    iconBg: 'bg-[#ffedd4]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffa238" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
]

const activity: ActivityItem[] = [
  { name: 'Sarah Johnson', initials: 'SJ', avatarColor: 'bg-blue-9',    desc: 'Upgraded to Pro', time: '2m ago' },
  { name: 'Mike Chen',     initials: 'MC', avatarColor: 'bg-green',      desc: 'New signup',       time: '15m ago' },
  { name: 'Emma Wilson',   initials: 'EW', avatarColor: 'bg-[#8200db]', desc: 'Payment received', time: '1h ago' },
  { name: 'Alex Brown',    initials: 'AB', avatarColor: 'bg-orange',     desc: 'Support ticket',   time: '2h ago' },
]

export default function RightPanel() {
  return (
    <aside className="w-[270px] min-w-[270px] bg-z-0 border-l border-z-3 flex flex-col h-screen">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto min-h-0">

      {/* Overview */}
      <div className="px-6 pt-6 pb-4">
        <h3 className="text-title leading-title tracking-title font-semibold text-z-7">Overview</h3>
        <p className="text-footnote leading-footnote tracking-footnote text-z-5 mt-0.5 mb-4">Real-time metrics</p>

        <div className="flex flex-col">
          {overviewMetrics.map((m, i) => (
            <div
              key={m.label}
              className={`flex items-center gap-3 py-3.5 ${i < overviewMetrics.length - 1 ? 'border-b border-z-3' : ''}`}
            >
              <div className={`w-8 h-8 rounded-sm ${m.iconBg} flex items-center justify-center shrink-0`}>
                {m.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-footnote leading-footnote tracking-footnote text-z-6">{m.label}</span>
                <span className="text-title leading-title tracking-title font-bold text-z-7">{m.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-z-3 mx-6" />

      {/* Recent Activity */}
      <div className="px-6 py-6">
        <h3 className="text-title leading-title tracking-title font-semibold text-z-7 mb-4">Recent Activity</h3>
        <div className="flex flex-col gap-4">
          {activity.map((a) => (
            <div key={a.name} className="flex items-start gap-2.5">
              <Avatar initials={a.initials} colorClass={a.avatarColor} />
              <div className="flex flex-col gap-0.5">
                <span className="text-body leading-body tracking-body font-semibold text-z-7">{a.name}</span>
                <span className="text-footnote leading-footnote tracking-footnote text-z-6">{a.desc}</span>
                <span className="text-footnote leading-footnote tracking-footnote text-z-5">{a.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>{/* end scrollable content */}

      {/* Upgrade CTA — anchored to bottom */}
      <div className="px-4 py-4 border-t border-z-3">
        <div className="bg-gradient-to-br from-blue-9 to-[#7c3aed] rounded-lg p-5">
          <h3 className="text-title font-bold text-white mb-2">Upgrade to Enterprise</h3>
          <p className="text-body leading-body tracking-body text-white/80 mb-4">
            Get advanced analytics and priority support
          </p>
          <button className="block w-full bg-z-0 text-blue-9 rounded-sm py-2.5 text-body leading-body tracking-body font-semibold hover:bg-z-0/90 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </aside>
  )
}
