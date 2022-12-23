import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip
} from 'chart.js'
import { useEffect, useState } from 'react'

import { tailwindColors, tailwindColorsRGBA } from '@/utils/tailwind-colors.type'

import { PropsBalanceSummaryTopSection } from './balance-summary-top-section.interface'
import { labelsMonth } from './month-labels.data'
import { balanceSummaryGeneralData } from '../balance-summary.data'

export const useBalanceSummaryTopChart = ({
	refChartLine
}: PropsBalanceSummaryTopSection) => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Filler,
	)

	const [gradientStyle, setGradientStyle] = useState<{
		gradient1: CanvasGradient | undefined
		gradient2: CanvasGradient | undefined
	}>({
		gradient1: undefined,
		gradient2: undefined
	})

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display:false
			},
		},
		layout: {
			padding: 20
		},
		elements: {
			line: {
				cubicInterpolationMode: 'monotone',
				tension: 10,
				borderWidth: 3
			},
			point: {
				borderColor: '#027DC4',
				backgroundColor: '#fff',
				hoverBackgroundColor: '#fff',
				borderWidth: 3,
				radius: 1,
				hoverRadius: 7,
				hoverBorderWidth: 3
			}
		},
    scales: {
      y: {
        min: 0,
        max: 100,
      }
    }
	}
	const data = {
		labels: labelsMonth,
		datasets: [
			{
				fill: true,
				//label: 'thisMonth',
				data: balanceSummaryGeneralData.expiresToYear,
				backgroundColor: gradientStyle.gradient1,
				borderColor: tailwindColors['light-blue']
			},
			{
				fill: true,
				//label: 'lastMonth',
				data: balanceSummaryGeneralData.incomeToYear,
				backgroundColor: gradientStyle.gradient2,
				borderColor: tailwindColors.purple
			}
		]
	}

	useEffect(() => {
		if (refChartLine.current) {
			console.log(refChartLine.current.canvas)
			const ctx = refChartLine.current.canvas.getContext('2d')
			const gradient1 = ctx?.createLinearGradient(0, 100, 0, 1000)
			const gradient2 = ctx?.createLinearGradient(100, 100, 0, 1000)
			gradient1?.addColorStop(0, tailwindColorsRGBA['light-blue']('0.3'))
			gradient1?.addColorStop(0.6, 'rgba(255,255,255,0)')
			gradient2?.addColorStop(0, tailwindColorsRGBA.purple('0.3'))
			gradient2?.addColorStop(0.6, tailwindColorsRGBA.purple('0'))
			setGradientStyle(prev => ({ ...prev, gradient1, gradient2 }))
		}
	}, [refChartLine])

	return { options, data }
}
