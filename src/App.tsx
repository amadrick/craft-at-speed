import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import RightPanel from './components/RightPanel'

export default function App() {
  const [activePage, setActivePage] = useState('Dashboard')

  return (
    <div className="flex h-screen overflow-hidden bg-[#f9fafb]">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <Dashboard />
      <RightPanel />
    </div>
  )
}
