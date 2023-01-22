import { FC } from 'react'
import { Line } from 'react-chartjs-2'

import { ILineChart, useLineChart } from '@/hooks/dashboard/top/useLineChart'

const LineChart: FC<ILineChart> = ({ statisticsAll, color = 'purple' }) => {
	const { chartData, chartRef, options } = useLineChart({
		statisticsAll,
		color
	})

	return (
		<div className='-mx-[5px]'>
			<Line ref={chartRef} options={options} data={chartData} />
		</div>
	)
}

export default LineChart
