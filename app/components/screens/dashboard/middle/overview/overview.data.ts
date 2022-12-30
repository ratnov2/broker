import { getKeys } from '@/utils/object'

import {
	chartBarDataType,
	timeLapsType
} from '@/screens/dashboard/middle/overview/overview.interface'
import { IIncomeByDynamicQueryParam } from '@/services/statistics/statistics.interface'

type timeRangeType = {
	localeShortDate: string
}

const generateDaysRange = (numberOfDays = 7) => {
	const date = new Date()
	const days: timeRangeType[] = []
	const day = (index: number, lastWeek = false) =>
		new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate() - index - (lastWeek ? 7 : 0)
		)
	for (let index = 0; index < numberOfDays; index++) {
		days[index] = {
			localeShortDate: day(index).toLocaleDateString('en', {
				weekday: 'short'
			})
			// thisData: {
			// 	date: day(index),
			// 	income: randomNumber(0, 100)
			// },
			// lastData: {
			// 	date: day(index, true),
			// 	income: randomNumber(0, 100)
			// }
		}
	}
	return days
}

const generateMonthsRange = (numberOfMonths = 7) => {
	const date = new Date()
	const months: timeRangeType[] = []
	const month = (index: number, lastYear = false) =>
		new Date(date.getFullYear() - (lastYear ? 1 : 0), date.getMonth() - index)
	for (let index = 0; index < numberOfMonths; index++) {
		months[index] = {
			localeShortDate: month(index).toLocaleDateString('en', {
				month: 'short'
			})
			// thisData: {
			// 	date: month(index),
			// 	income: randomNumber(0, 100)
			// },
			// lastData: {
			// 	date: month(index, true),
			// 	income: randomNumber(0, 100)
			// }
		}
	}
	return months
}

export const timeRangeOptions = getKeys(IIncomeByDynamicQueryParam)

export const timeRangeData = (timeLaps: timeLapsType): timeRangeType[] => {
	if (timeLaps === 'week') return generateDaysRange()
	return generateMonthsRange()
}

export const defaultChartBarData: chartBarDataType = {
	labels: [],
	leftBar: [],
	rightBar: []
}
