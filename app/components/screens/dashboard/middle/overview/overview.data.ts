import randomNumber from '@/utils/randomNumber'

import {
	timeLapsType,
	timeRangeType
} from '@/screens/dashboard/middle/overview/overview.interface'

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
		days[numberOfDays - index - 1] = {
			name: day(index).toLocaleDateString('en', {
				weekday: 'short'
			}),
			thisData: {
				date: day(index),
				income: randomNumber(0, 100)
			},
			lastData: {
				date: day(index, true),
				income: randomNumber(0, 100)
			}
		}
	}
	return days
}

const generateMonthsRange = (numberOfMonths = 7) => {
	const date = new Date()
	const months: timeRangeType[] = []
	const month = (index: number, lastYear = false) =>
		new Date(
			date.getFullYear() - (lastYear ? 1 : 0),
			date.getMonth() - index
		)
	for (let index = 0; index < numberOfMonths; index++) {
		months[numberOfMonths - index - 1] = {
			name: month(index).toLocaleDateString('en', {
				month: 'short'
			}),
			thisData: {
				date: month(index),
				income: randomNumber(0, 100)
			},
			lastData: {
				date: month(index, true),
				income: randomNumber(0, 100)
			}
		}
	}
	return months
}

export const timeRangeOptions: timeLapsType[] = ['week', 'year']

export const timeRangeData = (timeLaps: timeLapsType): timeRangeType[] => {
	if (timeLaps === 'year') return generateMonthsRange()
	return generateDaysRange()
}
