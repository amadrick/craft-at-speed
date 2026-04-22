import { useState } from 'react'
import { ReactNode } from 'react'
import Avatar from './Avatar'
import RevenueChart from './RevenueChart'

type Plan = 'Pro' | 'Enterprise' | 'Starter'
type Status = 'Active' | 'Inactive'

interface Customer {
  id: number
  name: string
  initials: string
  avatarColor: string
  plan: Plan
  status: Status
  revenue: string
  change: string
  positive: boolean
}

interface Metric {
  label: string
  value: string
  change: string
  positive: boolean
  icon: ReactNode
}

const PLAN_STYLES: Record<Plan, string> = {
  Pro:        'bg-blue-1 text-blue-9',
  Enterprise: 'bg-[#faf5ff] text-[#8200db]',
  Starter:    'bg-[#ffedd4] text-orange',
}

const STATUS_STYLES: Record<Status, string> = {
  Active:   'bg-[#dcfce7] text-green',
  Inactive: 'bg-z-2 text-z-6',
}

const AVATAR_COLORS = [
  'bg-blue-9',
  'bg-green',
  'bg-[#8200db]',
  'bg-orange',
  'bg-blue-8',
] as const

const COLUMNS = ['CUSTOMER', 'PLAN', 'STATUS', 'REVENUE', 'CHANGE'] as const

function getInitials(name: string): string {
  return name.trim().split(' ').slice(0, 2).map(w => w[0].toUpperCase()).join('')
}

const metrics: Metric[] = [
  {
    label: 'Total Revenue',
    value: '$79,324',
    change: '+12.5% vs last month',
    positive: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1074d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    label: 'Active Customers',
    value: '2,847',
    change: '+8.2% vs last month',
    positive: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1074d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: 'Growth Rate',
    value: '23.1%',
    change: '+4.3% vs last month',
    positive: true,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1074d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

const initialCustomers: Customer[] = [
  { id: 1, name: 'Sarah Johnson', initials: 'SJ', avatarColor: AVATAR_COLORS[0], plan: 'Pro',        status: 'Active',   revenue: '$2,340', change: '+12.5%', positive: true  },
  { id: 2, name: 'Mike Chen',     initials: 'MC', avatarColor: AVATAR_COLORS[1], plan: 'Enterprise', status: 'Active',   revenue: '$5,890', change: '+8.2%',  positive: true  },
  { id: 3, name: 'Emma Wilson',   initials: 'EW', avatarColor: AVATAR_COLORS[2], plan: 'Starter',    status: 'Inactive', revenue: '$890',   change: '-3.1%',  positive: false },
  { id: 4, name: 'Alex Brown',    initials: 'AB', avatarColor: AVATAR_COLORS[3], plan: 'Pro',        status: 'Active',   revenue: '$3,120', change: '+15.7%', positive: true  },
  { id: 5, name: 'Jordan Lee',    initials: 'JL', avatarColor: AVATAR_COLORS[4], plan: 'Enterprise', status: 'Active',   revenue: '$7,450', change: '+22.3%', positive: true  },
]

interface FormState {
  name: string
  plan: Plan
  status: Status
  revenue: string
}

const defaultForm: FormState = { name: '', plan: 'Pro', status: 'Active', revenue: '' }

export default function Dashboard() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState<FormState>(defaultForm)

  function handleAddCustomer(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.revenue.trim()) return

    setCustomers([...customers, {
      id: Date.now(),
      name: form.name.trim(),
      initials: getInitials(form.name),
      avatarColor: AVATAR_COLORS[customers.length % AVATAR_COLORS.length],
      plan: form.plan,
      status: form.status,
      revenue: form.revenue.startsWith('$') ? form.revenue : `$${form.revenue}`,
      change: '+0.0%',
      positive: true,
    }])
    setForm(defaultForm)
    setShowModal(false)
  }

  return (
    <main className="flex-1 flex flex-col gap-6 px-8 py-8 overflow-y-auto min-w-0 overflow-x-hidden">
      {/* Header */}
      <div className="min-w-0">
        <h1 className="text-title leading-title tracking-title font-bold text-z-7 truncate">Dashboard</h1>
        <p className="text-body leading-body tracking-body text-z-6 mt-1">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="card p-6 flex flex-col gap-1.5 items-center text-center min-w-0">
            <div className="w-12 h-12 bg-blue-0 rounded-md flex items-center justify-center mb-2 shrink-0">
              {m.icon}
            </div>
            <span className="text-body leading-body tracking-body text-z-6 truncate w-full">{m.label}</span>
            <span className="text-title leading-title tracking-title font-bold text-z-7 truncate w-full">{m.value}</span>
            <span className={`text-body leading-body tracking-body font-medium truncate w-full ${m.positive ? 'text-green' : 'text-red'}`}>
              {m.change}
            </span>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <RevenueChart />

      {/* Customers Table */}
      <div className="card min-w-0">
        <div className="flex items-start justify-between px-6 pt-6 pb-0 gap-4">
          <div className="min-w-0">
            <h2 className="text-title leading-title tracking-title font-semibold text-z-7 truncate">Customers</h2>
            <p className="text-body leading-body tracking-body text-z-6 mt-1 truncate">Manage your customer accounts and subscriptions</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-9 text-white rounded-md px-5 py-2.5 text-body leading-body tracking-body font-semibold shrink-0 hover:bg-blue-10 transition-colors mt-1 shadow-button"
          >
            Add Customer
          </button>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr>
                {COLUMNS.map((col) => (
                  <th key={col} className="text-left px-6 py-2.5 text-footnote leading-footnote tracking-footnote font-semibold text-z-6 border-b border-z-3 bg-z-1 whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-z-3">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-z-1 transition-colors">
                  <td className="px-6 py-3.5 text-body leading-body tracking-body text-z-7 max-w-[200px]">
                    <div className="flex items-center gap-2.5 font-medium min-w-0">
                      <Avatar initials={c.initials} colorClass={c.avatarColor} />
                      <span className="truncate">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-body leading-body tracking-body whitespace-nowrap">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-footnote leading-footnote tracking-footnote font-medium ${PLAN_STYLES[c.plan]}`}>
                      {c.plan}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-body leading-body tracking-body whitespace-nowrap">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-footnote leading-footnote tracking-footnote font-medium ${STATUS_STYLES[c.status]}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-body leading-body tracking-body text-z-7 whitespace-nowrap">{c.revenue}</td>
                  <td className={`px-6 py-3.5 text-body leading-body tracking-body font-medium whitespace-nowrap ${c.positive ? 'text-green' : 'text-red'}`}>
                    {c.change}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Customer Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-z-0 rounded-lg p-6 w-full max-w-[420px] shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-title leading-title tracking-title font-semibold text-z-7 mb-5">Add Customer</h2>
            <form onSubmit={handleAddCustomer} className="flex flex-col gap-4">
              <div>
                <label className="block text-body leading-body tracking-body font-medium text-z-6 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Jane Smith"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-z-3 rounded-sm px-3 py-2 text-body leading-body tracking-body text-z-7 outline-none focus:border-blue-9 focus:ring-2 focus:ring-blue-9/20"
                  required
                />
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-body leading-body tracking-body font-medium text-z-6 mb-1">Plan</label>
                  <select
                    value={form.plan}
                    onChange={e => setForm({ ...form, plan: e.target.value as Plan })}
                    className="w-full border border-z-3 rounded-sm px-3 py-2 text-body leading-body tracking-body text-z-7 outline-none focus:border-blue-9 focus:ring-2 focus:ring-blue-9/20 bg-z-0"
                  >
                    {(Object.keys(PLAN_STYLES) as Plan[]).map(plan => <option key={plan}>{plan}</option>)}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-body leading-body tracking-body font-medium text-z-6 mb-1">Status</label>
                  <select
                    value={form.status}
                    onChange={e => setForm({ ...form, status: e.target.value as Status })}
                    className="w-full border border-z-3 rounded-sm px-3 py-2 text-body leading-body tracking-body text-z-7 outline-none focus:border-blue-9 focus:ring-2 focus:ring-blue-9/20 bg-z-0"
                  >
                    {(Object.keys(STATUS_STYLES) as Status[]).map(status => <option key={status}>{status}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-body leading-body tracking-body font-medium text-z-6 mb-1">Revenue</label>
                <input
                  type="text"
                  placeholder="e.g. $1,200"
                  value={form.revenue}
                  onChange={e => setForm({ ...form, revenue: e.target.value })}
                  className="w-full border border-z-3 rounded-sm px-3 py-2 text-body leading-body tracking-body text-z-7 outline-none focus:border-blue-9 focus:ring-2 focus:ring-blue-9/20"
                  required
                />
              </div>
              <div className="flex gap-3 mt-1">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-z-3 text-z-6 rounded-sm py-2.5 text-body leading-body tracking-body font-medium hover:bg-z-1 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-9 text-white rounded-sm py-2.5 text-body leading-body tracking-body font-semibold hover:bg-blue-10 transition-colors shadow-button"
                >
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
