import { useRef } from 'react'
import { Line } from 'react-chartjs-2'
import type { ChartJSOrUndefined } from 'react-chartjs-2/dist/types'

import { useBalanceSummaryTopChart } from './useBalanceSummaryTopChart'

const BalanceSummaryTopSection = () => {
	const refChartLine = useRef<
		ChartJSOrUndefined<'line', number[], string> | undefined
	>()
	const { options, data } = useBalanceSummaryTopChart({ refChartLine })

	return (
		<div className='bg-white mt-10 rounded-lg h-[400px] w-full'>
			<h1>Balance Analytics</h1>
			<div></div>
			{/* @ts-ignore */}
			<Line ref={refChartLine} options={options} data={data} />
		</div>
	)
}

export default BalanceSummaryTopSection
