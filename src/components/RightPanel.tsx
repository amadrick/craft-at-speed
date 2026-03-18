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
    iconBg: 'bg-[#edf2fb]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b7cf3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: 'Avg. Session',
    value: '12m 34s',
    iconBg: 'bg-[#f5ebe0]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c4784a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: 'Conversion',
    value: '4.2%',
    iconBg: 'bg-[#e6f4ea]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e9e5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: 'Revenue/User',
    value: '$89.42',
    iconBg: 'bg-[#f5ebe0]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c4784a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
]

const activity: ActivityItem[] = [
  { name: 'Sarah Johnson', initials: 'SJ', avatarColor: 'bg-[#4b7cf3]', desc: 'Upgraded to Pro', time: '2m ago' },
  { name: 'Mike Chen',     initials: 'MC', avatarColor: 'bg-[#2e9e5e]', desc: 'New signup',       time: '15m ago' },
  { name: 'Emma Wilson',   initials: 'EW', avatarColor: 'bg-[#8b5cf6]', desc: 'Payment received', time: '1h ago' },
  { name: 'Alex Brown',    initials: 'AB', avatarColor: 'bg-[#c4784a]', desc: 'Support ticket',   time: '2h ago' },
]

export default function RightPanel() {
  return (
    <aside className="w-[270px] min-w-[270px] bg-white border-l border-[#e5e7eb] flex flex-col h-screen">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto min-h-0">

      {/* Overview */}
      <div className="px-6 pt-6 pb-4">
        <h3 className="text-[14px] font-semibold text-[#101828]">Overview</h3>
        <p className="text-[12px] text-[#99a1af] mt-0.5 mb-4">Real-time metrics</p>

        <div className="flex flex-col">
          {overviewMetrics.map((m, i) => (
            <div
              key={m.label}
              className={`flex items-center gap-3 py-3.5 ${i < overviewMetrics.length - 1 ? 'border-b border-[#e5e7eb]' : ''}`}
            >
              <div className={`w-8 h-8 rounded-[8px] ${m.iconBg} flex items-center justify-center shrink-0`}>
                {m.icon}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[12px] text-[#6a7282]">{m.label}</span>
                <span className="text-[14px] font-semibold text-[#101828] leading-tight">{m.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#e5e7eb] mx-6" />

      {/* Recent Activity */}
      <div className="px-6 py-6">
        <h3 className="text-[14px] font-semibold text-[#101828] mb-4">Recent Activity</h3>
        <div className="flex flex-col gap-4">
          {activity.map((a) => (
            <div key={a.name} className="flex items-start gap-2.5">
              <Avatar initials={a.initials} colorClass={a.avatarColor} />
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[12px] font-semibold text-[#101828] leading-5 truncate">{a.name}</span>
                <span className="text-[12px] text-[#6a7282]">{a.desc}</span>
                <span className="text-[12px] text-[#99a1af]">{a.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      </div>{/* end scrollable content */}
    </aside>
  )
}
