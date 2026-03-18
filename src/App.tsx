import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import RightPanel from './components/RightPanel'

export default function App() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <Dashboard />
      <RightPanel />
    </div>
  )
}
