import { ChangeEventHandler, FC, useState } from 'react'

import ChartOverview from '@/screens/dashboard/middle/overview/chart-bar/ChartOverview'
import {
	timeRangeData,
	timeRangeOptions
} from '@/screens/dashboard/middle/overview/overview.data'
import { timeLapsType } from '@/screens/dashboard/middle/overview/overview.interface'

const initialTimeRangeData = timeRangeData('week')

const Overview: FC = () => {
	const [timeLaps, setTimeLaps] = useState<timeLapsType>('week')

	const [data, setData] = useState(initialTimeRangeData)

	const changeData: ChangeEventHandler<HTMLSelectElement> = e => {
		e.preventDefault()
		const newTimeLaps = e.target.value as timeLapsType

		if (timeRangeOptions.includes(newTimeLaps)) {
			setTimeLaps(newTimeLaps)
			setData(timeRangeData(newTimeLaps))
		}
	}

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
