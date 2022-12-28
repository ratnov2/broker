import { FC } from 'react'

import { useOverview } from '@/hooks/dashboard/middle/useOverview'

import ChartOverview from '@/screens/dashboard/middle/overview/chart-bar/ChartOverview'

const Overview: FC = () => {
	const { timeLaps, data, changeData } = useOverview()

	return (
		<ChartOverview
			title='Overview'
			timeLaps={timeLaps}
			changeData={changeData}
			timeRangeData={data}
		/>
	)
}

export default Overview
