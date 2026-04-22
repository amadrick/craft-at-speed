import { ReactNode } from 'react'
import {
  EngagementAnalyticsAltIcon,
  ArrowTopRightIcon,
  PeopleIcon,
  DocumentIcon,
  NotificationIcon,
  GearIcon,
  ChevronLeftDoubleIcon,
  SearchIcon,
} from './icons'

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
}

interface NavSection {
  label: string
  items: NavItem[]
}

interface NavItem {
  label: string
  icon: ReactNode
  badge?: string
}

const sections: NavSection[] = [
  {
    label: 'Workspace',
    items: [
      { label: 'Dashboard', icon: <EngagementAnalyticsAltIcon size={18} /> },
      { label: 'Analytics', icon: <EngagementAnalyticsAltIcon size={18} /> },
      { label: 'Revenue', icon: <ArrowTopRightIcon size={18} /> },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Customers', icon: <PeopleIcon size={18} />, badge: '5' },
      { label: 'Reports', icon: <DocumentIcon size={18} /> },
    ],
  },
  {
    label: 'Other',
    items: [
      { label: 'Notifications', icon: <NotificationIcon size={18} />, badge: '3' },
      { label: 'Settings', icon: <GearIcon size={18} /> },
    ],
  },
]

export default function Sidebar({ activePage, setActivePage }: SidebarProps) {
  return (
    <aside className="w-[250px] min-w-[250px] bg-z-2 border-r border-[rgba(0,0,0,0.12)] flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 h-11 shrink-0">
        <div className="flex items-center gap-1.5 px-[5px] py-0.5 rounded-[6px]">
          <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-blue-9 to-[#8200db] flex items-center justify-center overflow-hidden shrink-0">
            <span className="text-[8px] font-bold text-white leading-none">JD</span>
          </div>
          <span className="text-body leading-body tracking-body font-[450] text-t-12 whitespace-nowrap">
            John D.
          </span>
        </div>
        <button className="w-6 h-6 flex items-center justify-center rounded-[6px] hover:bg-t-1 transition-colors">
          <ChevronLeftDoubleIcon size={18} className="text-t-8" />
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col gap-3 pt-[9px] px-3 overflow-y-auto min-h-0">
        {/* Search */}
        <div className="bg-t-0 border-[0.5px] border-z-3 rounded-[6px] flex items-center justify-between pl-1.5 pr-2 h-[29px] shrink-0">
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            <SearchIcon size={14} className="text-t-8 shrink-0" />
            <span className="text-body leading-body tracking-body font-[450] text-t-8">Search</span>
          </div>
          <span className="text-caption leading-caption tracking-caption font-medium text-t-8">⌘K</span>
        </div>

        {/* Nav Sections */}
        {sections.map((section) => (
          <div key={section.label} className="flex flex-col gap-0.5">
            <div className="flex items-center h-[26px] px-[5px]">
              <span className="text-footnote leading-footnote tracking-footnote font-medium text-t-8">
                {section.label}
              </span>
            </div>
            {section.items.map((item) => (
              <button
                key={item.label}
                onClick={() => setActivePage(item.label)}
                className={`flex items-center gap-1.5 h-8 overflow-hidden px-[7px] py-1 rounded-[6px] w-full text-left transition-colors ${
                  activePage === item.label
                    ? 'bg-t-3 text-t-12'
                    : 'text-t-12 hover:bg-t-1 hover:text-t-11'
                }`}
              >
                <div className="w-4 h-4 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="text-body leading-body tracking-body font-[450] truncate flex-1 min-w-0">
                  {item.label}
                </span>
                {item.badge && (
                  <span className="bg-t-1 rounded-[5px] px-[4.5px] py-[3px] text-caption leading-caption tracking-caption font-medium text-t-10 min-w-[18px] text-center">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
    </aside>
  )
}
