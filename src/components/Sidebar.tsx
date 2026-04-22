import { ReactNode } from 'react'

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
      {
        label: 'Dashboard',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
        ),
      },
      {
        label: 'Analytics',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
      },
      {
        label: 'Revenue',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Resources',
    items: [
      {
        label: 'Customers',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87" />
            <path d="M16 3.13a4 4 0 010 7.75" />
          </svg>
        ),
        badge: '5',
      },
      {
        label: 'Reports',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ),
      },
    ],
  },
  {
    label: 'Other',
    items: [
      {
        label: 'Notifications',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        ),
        badge: '3',
      },
      {
        label: 'Settings',
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        ),
      },
    ],
  },
]

export default function Sidebar({ activePage, setActivePage }: SidebarProps) {
  return (
    <aside className="w-[250px] min-w-[250px] bg-z-2 border-r border-[rgba(0,0,0,0.12)] flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 h-11 shrink-0">
        <div className="flex items-center gap-1.5 px-[5px] py-0.5 rounded-[6px]">
          <div className="w-[18px] h-[18px] rounded-full bg-blue-9 flex items-center justify-center overflow-hidden shrink-0">
            <span className="text-[8px] font-bold text-white leading-none">JD</span>
          </div>
          <span className="text-body leading-body tracking-body font-[450] text-t-11 whitespace-nowrap">
            John D.
          </span>
        </div>
        <button className="w-6 h-6 flex items-center justify-center rounded-[6px] hover:bg-t-1 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-t-8">
            <polyline points="11 17 6 12 11 7" />
            <polyline points="18 17 13 12 18 7" />
          </svg>
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col gap-3 pt-[9px] px-3 overflow-y-auto min-h-0">
        {/* Search */}
        <div className="bg-t-0 border-[0.5px] border-z-3 rounded-[6px] flex items-center justify-between pl-1.5 pr-2 h-[29px] shrink-0">
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-t-8 shrink-0 w-3.5 h-3.5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
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
                    ? 'bg-t-3 text-t-11'
                    : 'text-t-11 hover:bg-t-1 hover:text-t-9'
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
