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
    gridLineWidth: 0,
    lineColor: 'transparent',
    tickLength: 0,
    labels: { style: { color: '#99a1af', fontSize: '12px' } },
  },
  yAxis: {
    title: { text: undefined },
    min: 0,
    max: 80000,
    tickInterval: 20000,
    gridLineWidth: 0,
    labels: { enabled: false },
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
          [0, 'rgba(75, 124, 243, 0.18)'],
          [1, 'rgba(75, 124, 243, 0.0)'],
        ],
      },
      lineColor: '#4b7cf3',
      lineWidth: 2,
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true,
            radius: 5,
            fillColor: '#4b7cf3',
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
    <div>
      <div className="mb-3">
        <h2 className="text-[16px] font-semibold text-[#101828]">Revenue Overview</h2>
        <p className="text-[13px] text-[#6a7282] mt-0.5">Monthly recurring revenue trend</p>
      </div>
      <div className="-mx-8">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}
