import {
	ChartArea,
	ChartData,
	Chart as ChartJS,
	ChartOptions,
	Filler,
	LineElement,
	PointElement
} from 'chart.js'
import { useEffect, useRef, useState } from 'react'

import { ITailwindColors } from '@/ui/ui.interface'

import { tailwindColors } from '@/utils/tailwind-colors'

import { IStatisticsAll } from '@/screens/dashboard/top/card-statistic/card-statistics.interface'

ChartJS.register(PointElement, LineElement, Filler)

const options: ChartOptions<'line'> = {
	responsive: true,
	plugins: {
		legend: {
			display: false
		},
		title: {
			display: false
		}
	},
	scales: {
		x: {
			display: false
		},
		y: {
			display: false
		}
	}
}

function createGradient(
	ctx: CanvasRenderingContext2D,
	area: ChartArea,
	color: ITailwindColors
) {
	const colorStart = tailwindColors[color]
	const colorEnd = tailwindColors['white']

	const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)

	gradient.addColorStop(1, colorStart)
	gradient.addColorStop(0, colorEnd)

	return gradient
}

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export interface ILineChart {
	statisticsAll?: IStatisticsAll
	color?: ITailwindColors
}

export const useLineChart = ({
	statisticsAll,
	color = 'purple'
}: ILineChart) => {
	const chartDatasetData: number[] = []

	const [chartData, setChartData] = useState<ChartData<'line'>>({
		datasets: []
	})

	const chartRef = useRef<ChartJS>(null)

	useEffect(() => {
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

		const chart = chartRef.current

		if (!chart) return

		const data: ChartData<'line'> = {
			labels,
			datasets: [
				{
					data: chartDatasetData,
					borderColor: tailwindColors[color],
					backgroundColor: tailwindColors[color],
					cubicInterpolationMode: 'default',
					tension: 0.3,
					fill: {
						target: 'origin',
						above: createGradient(chart.ctx, chart.chartArea, color)
					}
				}
			]
		}

		setChartData(data)
	}, [statisticsAll])

	return { options, chartData, chartRef }
}
