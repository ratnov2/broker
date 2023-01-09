import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import {
	ISelectOnChange,
	ISelectSingleValue
} from '@/ui/select/select.interface'

import { getKeys } from '@/utils/object'

import {
	defaultChartBarData,
	timeRangeData
} from '@/screens/dashboard/middle/overview/overview.data'
import { timeLapsType } from '@/screens/dashboard/middle/overview/overview.interface'
import { StatisticsService } from '@/services/statistics/statistics.service'

const chartBarData = defaultChartBarData

export const useOverview = () => {
	const [timeLaps, setTimeLaps] = useState<timeLapsType>('week')

	const timeRange = timeRangeData(timeLaps)

	useQuery(
		['middle-dashboard-section-overview', timeLaps],
		StatisticsService.getIncomeByDynamic.bind(null, timeLaps),
		{
			onSuccess(queryData) {
				timeRange.forEach((period, index) => {
					const filteredQueryData = queryData
						.filter(item => item.date.includes(period.localeShortDate))
						.at(-1)

					chartBarData.labels[index] = period.localeShortDate
					chartBarData.rightBar[index] = filteredQueryData?.amount || 0
					chartBarData.leftBar[index] = filteredQueryData?.previous_amount || 0
				})

				getKeys(chartBarData).forEach(key => chartBarData[key].reverse())
			}
		}
	)

	const changeData: ISelectOnChange = newValue => {
		const value = newValue as ISelectSingleValue

		if (value) {
			const newTimeLaps = value.label as timeLapsType
			setTimeLaps(newTimeLaps)
		}
	}

	return { timeLaps, changeData, chartBarData }
}
