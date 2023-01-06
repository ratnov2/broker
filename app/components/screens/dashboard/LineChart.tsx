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
import { FC } from 'react'
import { Line } from 'react-chartjs-2'

import { IStatisticsAll } from './card-statistic/card-statistics.interface'

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

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

type LineChartProps = { chartData: any; statisticsAll?: IStatisticsAll }
const LineChart: FC<LineChartProps> = ({ chartData, statisticsAll }) => {
	const chartDatasetData: number[] = []

	labels.forEach((day, index) => {
		const serverDay = statisticsAll?.byDay.filter(data =>
			data.day.includes(day)
		)
		if (serverDay?.length) {
			chartDatasetData[index] = serverDay[0].amount
		} else {
			chartDatasetData[index] = 0
		}
	})

	const data = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: chartDatasetData,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)'
			}
		]
	}
	return <Line options={options} data={data} />
}

export default LineChart
