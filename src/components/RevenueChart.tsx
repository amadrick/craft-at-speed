import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options: Highcharts.Options = {
  chart: {
    type: 'areaspline',
    height: 280,
    style: { fontFamily: 'Inter, sans-serif' },
    spacing: [10, 0, 0, 0],
  },
  title: { text: undefined },
  credits: { enabled: false },
  legend: { enabled: false },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    gridLineColor: '#f3f4f6',
    gridLineWidth: 1,
    lineColor: 'transparent',
    tickLength: 0,
    labels: { style: { color: '#99a1af', fontSize: '12px' } },
  },
  yAxis: {
    title: { text: undefined },
    min: 0,
    max: 80000,
    tickInterval: 20000,
    gridLineColor: '#f3f4f6',
    labels: {
      style: { color: '#99a1af', fontSize: '12px' },
      formatter() {
        return `$${(this.value as number) / 1000}k`
      },
    },
  },
  tooltip: {
    backgroundColor: 'white',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    shadow: false,
    style: { color: '#6a7282' },
    headerFormat: '<span style="color:#101828;font-weight:600">{point.key}</span><br/>',
    pointFormatter() {
      return `$${this.y!.toLocaleString()}`
    },
  },
  plotOptions: {
    areaspline: {
      fillColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, 'rgba(21, 93, 252, 0.18)'],
          [1, 'rgba(21, 93, 252, 0.0)'],
        ],
      },
      lineColor: '#155dfc',
      lineWidth: 2,
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5,
            fillColor: '#155dfc',
            lineColor: 'white',
            lineWidth: 2,
          },
        },
      },
    },
  },
  series: [{
    type: 'areaspline',
    data: [42000, 44000, 45000, 48000, 55000, 62000, 72000, 80000],
  }],
}

export default function RevenueChart() {
  return (
    <div className="card">
      <div className="px-6 pt-6 pb-0">
        <h2 className="text-[18px] font-semibold text-[#101828]">Revenue Overview</h2>
        <p className="text-[14px] text-[#6a7282] mt-1">Monthly recurring revenue trend</p>
      </div>
      <div className="px-6 pt-5 pb-6">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}
