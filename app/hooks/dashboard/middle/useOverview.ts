import { useState } from 'react'

import {
	ISelectOnChange,
	ISelectSingleValue
} from '@/ui/select/select.interface'

import { timeRangeData } from '@/screens/dashboard/middle/overview/overview.data'
import { timeLapsType } from '@/screens/dashboard/middle/overview/overview.interface'

const initialTimeRangeData = timeRangeData('week')

export const useOverview = () => {
	const [timeLaps, setTimeLaps] = useState<timeLapsType>('week')

	const [data, setData] = useState(initialTimeRangeData)

	const changeData: ISelectOnChange = newValue => {
		const value = newValue as ISelectSingleValue

		if (value) {
			const newTimeLaps = value.label as timeLapsType
			setTimeLaps(newTimeLaps)
			setData(timeRangeData(newTimeLaps))
		}
	}

	return { timeLaps, data, changeData }
}
