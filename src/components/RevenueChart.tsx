import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Z = {
  z2: '#f5f5f5',
  z3: '#ebebeb',
  z5: '#a3a3a3',
  z6: '#666666',
  z7: '#292929',
  blue9: '#1074d9',
} as const

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
    gridLineColor: Z.z2,
    gridLineWidth: 1,
    lineColor: 'transparent',
    tickLength: 0,
    labels: { style: { color: Z.z5, fontSize: '12px' } },
  },
  yAxis: {
    title: { text: undefined },
    min: 0,
    max: 80000,
    tickInterval: 20000,
    gridLineColor: Z.z2,
    labels: {
      style: { color: Z.z5, fontSize: '12px' },
      formatter() {
        return `$${(this.value as number) / 1000}k`
      },
    },
  },
  tooltip: {
    backgroundColor: 'white',
    borderColor: Z.z3,
    borderWidth: 1,
    shadow: false,
    style: { color: Z.z6 },
    headerFormat: `<span style="color:${Z.z7};font-weight:600">{point.key}</span><br/>`,
    pointFormatter() {
      return `$${this.y!.toLocaleString()}`
    },
  },
  plotOptions: {
    areaspline: {
      fillColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, 'rgba(16, 116, 217, 0.18)'],
          [1, 'rgba(16, 116, 217, 0.0)'],
        ],
      },
      lineColor: Z.blue9,
      lineWidth: 2,
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5,
            fillColor: Z.blue9,
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
        <h2 className="text-[18px] font-semibold text-z-7">Revenue Overview</h2>
        <p className="text-body leading-body tracking-body text-z-6 mt-1">Monthly recurring revenue trend</p>
      </div>
      <div className="px-6 pt-5 pb-6">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}
