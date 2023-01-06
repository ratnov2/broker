import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const
		},
		title: {
			display: true,
			text: 'Chart.js Line Chart'
		}
	}
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: labels.map(() => 100),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)'
		},
		{
			label: 'Dataset 2',
			data: labels.map(() => 10),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)'
		}
	]
}

type LineChartProps = { chartData: any }
function LineChart({ chartData }: LineChartProps) {
	return <Line options={options} data={data} />
}

export default LineChart
