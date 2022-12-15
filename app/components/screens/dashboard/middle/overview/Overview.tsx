import type { ChartData, ChartOptions } from 'chart.js'
import { ChangeEventHandler, FC, useState } from 'react'

import randomNumber from '@/utils/randomNumber'

import Chart from '@/screens/dashboard/middle/overview/bar/Chart'

// import Chart from '@/ui/charts/bar/Chart'

// import OverviewHead from '@/screens/dashboard/middle/head/OverviewHead'

const periods = {
	week: ['Mon', 'Tue', 'Wed', 'Thu', 'Fry', 'Sat', 'Sun'],
	year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
}

export const periodOptions: periodsType[] = ['week', 'year']

export type periodsType = keyof typeof periods

const options: ChartOptions<'bar'> = {
	responsive: true,
	// plugins: {
	// 	legend: {
	// 		position: 'top' as const,
	// 		// position: 'chartArea',
	// 		display: false,
	// 		fullSize: false,
	// 		align: 'center',
	// 		labels: {
	// 			usePointStyle: true,
	// 			textAlign: 'center',
	// 			font: {
	// 				size: 10
	// 			}
	// 		}
	// 	},
	// 	title: {
	// 		align: 'start',
	// 		display: false,
	// 		text: title,
	// 		color: '#22242C',
	// 		font: {
	// 			size: 24
	// 		}
	// 	}
	// },
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

const Overview: FC = () => {
	const [labels, setLabels] = useState(periods['week'])
	const [timeLaps, setTimeLaps] = useState<periodsType>('week')

	const data: ChartData<'bar'> = {
		labels,
		datasets: [
			{
				label: `This ${timeLaps}`,
				data: labels.map(() => randomNumber(0, 100)),
				backgroundColor: '#03DAF2',
				borderRadius: 9999,
				categoryPercentage: 0.6,
				barPercentage: 0.8
			},
			{
				label: `Last ${timeLaps}`,
				data: labels.map(() => randomNumber(0, 100)),
				backgroundColor: '#6160DC',
				borderRadius: 9999,
				categoryPercentage: 0.6,
				barPercentage: 0.8
			}
		]
	}

	const ChangeData: ChangeEventHandler<HTMLSelectElement> = e => {
		e.preventDefault()
		const value = e.target.value
		console.log(value)

		if (['week', 'year'].includes(value)) {
			const labels = periods[value]
			setTimeLaps(value)
			setLabels(labels)
		}
	}

	return (
		<div>
			{/* <OverviewHead title='Overview' timeLaps='Week' /> */}
			<Chart
				title='Overview'
				timeLaps={timeLaps}
				data={data}
				options={options}
				ChangeData={ChangeData}
			/>
		</div>
	)
}

export default Overview
