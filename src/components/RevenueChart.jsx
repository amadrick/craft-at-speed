import { useRef, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip)

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
const values = [42000, 44000, 45000, 48000, 55000, 62000, 72000, 80000]

function createGradient(ctx, area) {
  const gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom)
  gradient.addColorStop(0, 'rgba(21, 93, 252, 0.18)')
  gradient.addColorStop(1, 'rgba(21, 93, 252, 0.0)')
  return gradient
}

export default function RevenueChart() {
  const chartRef = useRef(null)

  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderColor: '#155dfc',
        backgroundColor: (context) => {
          const chart = context.chart
          const { ctx, chartArea } = chart
          if (!chartArea) return 'rgba(21, 93, 252, 0.1)'
          return createGradient(ctx, chartArea)
        },
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#155dfc',
        pointHoverBorderColor: 'white',
        pointHoverBorderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'white',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        titleColor: '#101828',
        bodyColor: '#6a7282',
        padding: 10,
        callbacks: {
          label: (ctx) => `$${ctx.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: '#f3f4f6' },
        border: { display: false },
        ticks: {
          font: { family: 'Inter', size: 12 },
          color: '#99a1af',
          padding: 8,
        },
      },
      y: {
        grid: { color: '#f3f4f6' },
        border: { display: false },
        ticks: {
          font: { family: 'Inter', size: 12 },
          color: '#99a1af',
          callback: (val) => `$${val / 1000}k`,
          stepSize: 20000,
          padding: 8,
        },
        min: 0,
        max: 80000,
      },
    },
  }

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]">
      <div className="px-6 pt-6 pb-0">
        <h2 className="text-[18px] font-semibold text-[#101828]">Revenue Overview</h2>
        <p className="text-[14px] text-[#6a7282] mt-1">Monthly recurring revenue trend</p>
      </div>
      <div className="px-6 pt-5 pb-6 h-[280px]">
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  )
}
