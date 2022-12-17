import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
	Tooltip
} from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'
import { FC } from 'react'
import { Bar } from 'react-chartjs-2'

import DashboardChartWrapper from '@/screens/dashboard/middle/chart/DashboardChartWrapper'
import DashboardChartLegend from '@/screens/dashboard/middle/chart/legend/DashboardChartLegend'
import { IChartOverview } from '@/screens/dashboard/middle/overview/overview.interface'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const options: ChartOptions<'bar'> = {
	responsive: true,
	plugins: {
		legend: {
			display: false
		}
	},
	scales: {
		x: {
			grid: {
				display: false
			}
		}
	}
}

const datasetCommonOptions = {
	borderRadius: 9999,
	categoryPercentage: 0.6,
	barPercentage: 0.8
}

const ChartOverview: FC<IChartOverview> = ({
	title,
	timeLaps,
	changeData,
	timeRangeData
}) => {
	const chartData: ChartData<'bar'> = {
		// x-axis naming
		labels: timeRangeData.map(item => item.name),
		// chart bars
		datasets: [
			// left chart bar ( lastData income )
			{
				label: `Last ${timeLaps}`,
				data: timeRangeData.map(item => item.lastData.income),
				backgroundColor: '#03DAF2',
				...datasetCommonOptions
			},
			{
				// right chart bar ( thisData income )
				label: `This ${timeLaps}`,
				data: timeRangeData.map(item => item.thisData.income),
				backgroundColor: '#6160DC',
				...datasetCommonOptions
			}
		]
	}

	return (
		<DashboardChartWrapper>
			<DashboardChartLegend
				title={title}
				timeLaps={timeLaps}
				changeData={changeData}
			/>
			<Bar options={options} data={chartData} />
		</DashboardChartWrapper>
	)
}

export default ChartOverview
