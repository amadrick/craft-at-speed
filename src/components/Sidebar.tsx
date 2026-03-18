import { ReactNode } from 'react'
import Avatar from './Avatar'

interface NavItem {
  label: string
  icon: ReactNode
}

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
  collapsed: boolean
  onToggleCollapse: () => void
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    label: 'Analytics',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    label: 'Revenue',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: 'Customers',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: 'Reports',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    label: 'Notifications',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    label: 'Settings',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
]

export default function Sidebar({ activePage, setActivePage, collapsed, onToggleCollapse }: SidebarProps) {
  return (
    <aside className={`${collapsed ? 'w-16 min-w-16' : 'w-64 min-w-64'} bg-[#f9fafb] flex flex-col h-screen overflow-hidden transition-all duration-200`}>
      {/* Brand */}
      <div className={`flex items-center gap-3 ${collapsed ? 'px-3 justify-center' : 'px-5'} py-6 border-b border-[#e5e7eb]`}>
        <div className="w-10 h-10 bg-[#4b7cf3] rounded-[10px] flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </div>
        {!collapsed && (
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[14px] font-semibold text-[#101828] leading-none whitespace-nowrap">
              SaaS Dashboard
            </span>
            <span className="text-[12px] font-medium text-[#8b5cf6] bg-[#f3f0fa] rounded-full px-2 py-0.5 leading-none whitespace-nowrap inline-block w-fit">
              Enterprise Plan
            </span>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5 overflow-y-auto">
        {navItems.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setActivePage(label)}
            title={collapsed ? label : undefined}
            className={`flex items-center gap-3 ${collapsed ? 'justify-center px-0' : 'px-3'} py-2.5 rounded-[10px] text-[14px] font-medium w-full text-left transition-colors ${
              activePage === label
                ? 'bg-[#e5e7eb] text-[#101828]'
                : 'text-[#6a7282] hover:bg-[#e5e7eb] hover:text-[#101828]'
            }`}
          >
            <span className="shrink-0">{icon}</span>
            {!collapsed && label}
          </button>
        ))}
      </nav>

      {/* Collapse toggle */}
      <div className={`px-3 pb-2 ${collapsed ? 'flex justify-center' : ''}`}>
        <button
          onClick={onToggleCollapse}
          className="flex items-center justify-center w-full py-2 rounded-[10px] text-[#6a7282] hover:bg-[#e5e7eb] hover:text-[#101828] transition-colors"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {collapsed ? (
              <polyline points="9 18 15 12 9 6" />
            ) : (
              <polyline points="15 18 9 12 15 6" />
            )}
          </svg>
        </button>
      </div>

      {/* User */}
      <div className={`flex items-center gap-3 ${collapsed ? 'px-3 justify-center' : 'px-5'} py-4 border-t border-[#e5e7eb]`}>
        <Avatar initials="JD" colorClass="bg-gradient-to-br from-[#4b7cf3] to-[#8b5cf6]" size="lg" />
        {!collapsed && (
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[14px] font-semibold text-[#101828] whitespace-nowrap">John Doe</span>
            <span className="text-[12px] text-[#6a7282] whitespace-nowrap overflow-hidden text-ellipsis">
              john@company.com
            </span>
          </div>
        )}
      </div>
    </aside>
  )
}
