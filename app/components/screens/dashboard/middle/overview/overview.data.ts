import { getKeys } from '@/utils/object'

import {
	chartBarDataType,
	timeLapsType
} from '@/screens/dashboard/middle/overview/overview.interface'
import { EnumIncomeByDynamicQueryParam } from '@/services/statistics/statistics.interface'

export const timeRangeOptions = getKeys(EnumIncomeByDynamicQueryParam)

export const defaultChartBarData: chartBarDataType = {
	labels: [],
	leftBar: [],
	rightBar: []
}

type timeRangeType = {
	localeShortDate: string
}

type generateRangeType = (
	timeLaps?: timeLapsType,
	prevDates?: number
) => timeRangeType[]

enum EnumLocaleShortDate {
	'week' = 'weekday',
	'year' = 'month'
}

export const timeRangeData: generateRangeType = (
	timeLaps = 'week',
	prevDates = 7
) => {
	const date = new Date()
	const dates: timeRangeType[] = []

	const generateDate = (prevDate: number, last = false) => {
		const isYear = timeLaps === 'year'

		return new Date(
			date.getFullYear() - (isYear ? (last ? 1 : 0) : 0),
			date.getMonth() - (isYear ? prevDate : 0),
			date.getDate() - (timeLaps === 'week' ? prevDate - (last ? 7 : 0) : 0)
		)
	}

	for (let prevDate = 0; prevDate < prevDates; prevDate++) {
		dates[prevDate] = {
			localeShortDate: generateDate(prevDate).toLocaleDateString('en', {
				[EnumLocaleShortDate[timeLaps]]: 'short'
			})
			// thisDates: {
			// 	date: generateDate(prevDate),
			// 	income: randomNumber(0, 100)
			// },
			// lastDates: {
			// 	date: generateDate(prevDate, true),
			// 	income: randomNumber(0, 100)
			// }
		}
	}

	return dates
}
